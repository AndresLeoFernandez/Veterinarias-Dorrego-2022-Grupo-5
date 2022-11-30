export default class Proveedor {
    private id : number;
    private nombre : string;
    private telefono : string;
    
    /**
     * Constructor de Proveedor
     * @param id numero de identificación unica del Proveedor.
     * @param nombre string que representa el Nombre del Proveedor.
     * @param telefono string que representa el telefono de contacto del Proveedor.
     * 
    */
    public constructor( id: number, nombre: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    /**
     * @returns number que representa el identificador del Proveedor.
     */
     public getId (): number {
        return this.id;
    }
    /**
     * @returns string que representa el nombre del Proveedor.
     */
    public getNombre (): string {
        return this.nombre;
    }
    /**
     * @returns string que representa el teléfono del Proveedor.
     */
    public getTelefono (): string {
        return this.telefono;
    }
    /**
     * Cambia el telefono del Proveedor
     * @param telefonoNuevo string representa nuevo telefono
     */
    public setTelefono ( telefonoNuevo: string): void {
        this.telefono = telefonoNuevo;
    }

    public verProveedorEnLinea(consola: boolean): string {
        let retorno: string =``;
        retorno += `Id: ${this.id} - Nombre: ${this.nombre} - Telefóno: ${this.telefono}`;
        if (consola){
            console.log(retorno);
        }
        return retorno;
    }
    public toString(): string {
        let retorno: string =``;
        retorno += this.verProveedorEnLinea(false);
        return retorno;
    }

}