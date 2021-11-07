import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: []
})
export class FormLibroComponent implements OnInit {

  errors : any[]= [];
  loading : boolean = false;
  urlImagen?: string;
  formulario! : FormGroup;

  @Input() libro?: any;
  @Output() onSave: EventEmitter<any> = new EventEmitter();



  constructor( 
    private libroService: LibroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if(this.libro){
      this.urlImagen = this.libro.libroRuta;
    }
    this.formulario = this.formBuilder.group({
      titulo: [this.libro?.titulo,[Validators.required,Validators.minLength(3),Validators.maxLength(250)]],
      slug: [this.libro?.slug,[Validators.required,Validators.maxLength(250)]],
      descripcion: [this.libro?.descripcion,[Validators.required]],
      rutaArchivo: [this.libro?.rutaArchivo,[Validators.required]],
      rutaPortada: [this.libro?.rutaPortada,[Validators.required]],
      precio:[this.libro?.precio,[Validators.required,Validators.min(0)]]
    });
  }

  uploadFile(event: any, fieldName: string){
    const file = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append("file",file);
      this.libroService.uploadfile(formData)
      .subscribe((data: any) => {

          this.formulario.controls[fieldName].setValue(data.ruta);

        if(fieldName != 'rutaArchivo'){
          this.urlImagen = data.url;
        }
      });
    }
  }

  onChangeTitulo(){
    const slug = this.formulario.controls.titulo.value
    .toLowerCase()
    .replace(/\s/g, '');      

    this.formulario.controls.slug.setValue(slug);
  }

  save(){

    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }

    this.onSave.emit(this.formulario.value);
    
  }

}
