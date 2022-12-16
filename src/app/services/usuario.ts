
export interface Usuario{
    uid: string;
    run: string;
    nombre: string;
    apellido: string;
    email: string;
    anios: number;
    imagen: string;
    asignatura: string;
    perfil: string;
}

export interface Asistencia{
    id?: string;
    nombreAlumno: string;
    apellidoAlumno: string;    
    asignatura: string;
    fecha: string;    
}