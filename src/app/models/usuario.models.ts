export class Usuario {
    
    constructor(
        public role: string,
        public nombre: string,
        public email: string,
        public img: string,
        public google?: boolean,
        public uid?: string
    ) {
        this.role = role;
        this.google = google;
        this.nombre = nombre;
        this.email = email;
        this.img = img;
        this.uid = uid;
    }
    
}