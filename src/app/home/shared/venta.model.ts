import { Libro, Pageable, Sort } from "src/app/admin/libros/shared/libro.model";

export interface Venta {
    id:      number;
    usuario: null;
    fecha:   Date;
    total:   number;
    estado:  string;
    items:   Item[];
}

export interface Item {
    id:                         number;
    precio:                     number;
    numeroDescargasDisponibles: number;
    libro:                      Libro;
}


export interface VentaPage {
    content:          Venta[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}


