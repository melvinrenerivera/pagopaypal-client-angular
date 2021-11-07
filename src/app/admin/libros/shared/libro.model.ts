export interface LibroPage {
    content:          Libro[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface Libro {
    id:                 number;
    titulo:             string;
    slug:               string;
    rutaPortada:        string;
    rutaArchivo:        string;
    descripcion:        null | string;
    precio:             number;
    fechaCreacion:      Date;
    fechaActualizacion: Date | null;
    urlPortada:         string;
    urlArchivo:         string;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
