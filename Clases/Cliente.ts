import Paciente from "./Paciente";

export default class Cliente {
    private id : number;
    private nombre : string;
    private telefono: string;
    private cantidadVisitas: number;
    private listaMascotas: Array<Paciente>;
        
    /**
     * Constructor de Cliente
     * @param id numero de identificación unica del Cliente.
     * @param nombre string que representa el Nombre del Cliente.
     * @param telefono string que representa el telefono de contacto del Cliente.
     * @param mascotas lista de Mascotas.
     * 
    */
    public constructor (id: number, nombre: string, telefono: string, mascotas?: Array<Paciente> ){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.telefono = telefono;
        this.cantidadVisitas = 0; 
        if (typeof mascotas !== 'undefined') {  
            this.listaMascotas = mascotas
        } else {
            this.listaMascotas = [];
        }
    }
    /**
     * @returns numero que representa el identificador del Cliente
     */
    public getId (): number {
        return this.id;
    }
    /**
     * @returns string que representa el nombre del Cliente.
     */
    public getNombre (): string {
        return this.nombre;
    }
    /**
     * @returns un string que podra ser "gato", "perro" o "exotico".
     */
    public getTelefono (): string {
        return this.telefono;
    }
    /**
     * @returns True si tiene al menos una mascota.
     */
    public tieneMascota (): boolean  {
        return ( this.listaMascotas.length > 0);
    }
    /**
     * @returns un string que podra ser "gato", "perro" o "exotico".
     */
     public getListaMascota ():Array<Paciente>  {
        return this.listaMascotas;
    }
    /**
     * 
     * @returns True si tiene cinco visitas o mas. 
     */
     public esBip (): boolean {
        return (this.cantidadVisitas >= 5)
    }
    /**
     * Cambia el nombre del Cliente
     * @param nombreNuevo nuevo nombre del Cliente
     */
     public setNombre ( nombreNuevo: string): void {
        this.nombre = nombreNuevo.toUpperCase();
    }
    /**
     * Cambia el telefono del Cliente
     * @param telefonoNuevo nuevo telefono del Cliente
     */
    public setTelefono ( telefonoNuevo: string): void {
        this.telefono = telefonoNuevo;
    }
    /**
     * Agrega una visita del Cliente
     */
    public agregarVisita (): void {
        this.cantidadVisitas++;
    }
    /**
     * Agrega la mascota si aun no surje registrada con el cliente.
     * @param mascota Paciente.
     */
    public agregaMascota ( mascota: Paciente ): void {
        let encontrado: boolean = false;
        for (let t: number = 0; t < this.listaMascotas.length; t++) {
            if (this.listaMascotas[t].getNombre() == mascota.getNombre()) {
                encontrado = true;
                break
            }
        }
        if (!encontrado) {
            this.listaMascotas.push(mascota);
            console.log(`La mascota ${mascota.getNombre()} fue registrada con exito.`);
        } else {
            console.log(`Ya tiene registrada esa mascota.`);
        }
    }
    /**
     * 
     * @param id 
     */
    public eliminarMascota ( id: number, nombre:string ): void {
        let encontrado: boolean = false;
        for (let i : number = 0; i < this.listaMascotas.length; i++){  
            if (id == this.listaMascotas[i].getIdCliente()&&(nombre == this.listaMascotas[i].getNombre())){
                this.listaMascotas.splice(i, 1);
                encontrado = true;
                break
            }
        }
        if (encontrado){
            console.log(`La mascota fue eLiminada.`);
        } else {
            console.log(`El id no es valido.`);
        }
        
    }
    /**
    * Muestra por pantalla el Cliente
    */
    public verCliente(): void {
        console.log(this);
    }
    /**
     * Muestra por pantalla datos del Cliente en una linea
     * @param consola si es True imprime en consola el resultado.
     * @returns datos del Cliente en una linea
     */
     public verClienteEnLinea(consola: boolean): string {
        let retorno: string =``;
        retorno += `Id Cliente: ${this.id} - Nombre: ${this.nombre} - Telefono: ${this.telefono}${this.esBip() == true ? '- BIP':''}`;
        if (consola){
            console.log(retorno);
        }
        return retorno;
    }
    /**
     * 
     * @returns 
     */
    public toString(): string {
        let retorno: string =``;
        retorno += this.verClienteEnLinea(false);
        if (this.tieneMascota()){
            for (let t: number = 0; t < this.listaMascotas.length; t++) {
                retorno += `\n     ${t+1} - ${this.listaMascotas[t].toString()}`;
            }
        }
        return retorno;
    }

}