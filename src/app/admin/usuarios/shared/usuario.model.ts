export interface UsuarioPage {
    content:          usuarios[];
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

export interface usuarios {
    id:                 number;
    nombres:            string;
    apellidos:          string;
    nombreCompleto:     string;
    email:              string;
    fechaCreacion:      Date;
    fechaActualizacion: Date | null;
    rol:                string;
    password:           string;
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
