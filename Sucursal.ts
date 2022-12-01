import Cliente from "./Cliente";

export default class Sucursal {
    private id: number;
    private nombre: string;
    private direccion: string;
    private listaClientes: Array<Cliente>;
    
    
    /**
     * Constructor de Cliente
     * @param id numero de identificación unica de la sucursal.
     * @param nombre string que representa el Nombre de la Sucursal.
     * @param direccion string que representa la dirección de la Sucursal.
     * @param clientes Lista de clientes (opcional).
     * 
    */
    public constructor( id: number, nombre: string, direccion: string, clientes?: Array<Cliente> ) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.direccion = direccion.toUpperCase();
        if (typeof clientes !== 'undefined') {  
            this.listaClientes = clientes
        } else {
            this.listaClientes = [];
        }
    }
    /**
     * @returns number que representa el identificador de la Sucursal.
     */
    public getId (): number {
        return this.id;
    }
    /**
     * @returns string que representa el nombre de la Sucursal.
     */
    public getNombre (): string {
        return this.nombre;
    }
    /**
     * @returns un string que representa la dirección de la Sucursal.
     */
    public getDireccion (): string {
        return this.direccion;
    }
    /**
     * Devuelve un arrego de Clientes
     * @returns array 
     */
    public getClientes (): Array<Cliente> {
        return this.listaClientes;
    }
    /**
     * Muestra por pantalla la Sucursal
     */
    public verSucursal (): void {
        console.log(this);
    }
    /**
     * Cambia el nombre de la Sucursal
     * @param nombreNuevo nuevo nombre de la Sucursal
    */
    public setNombre ( nombreNuevo: string): void {
        this.nombre = nombreNuevo.toUpperCase();
    }
    /**
     * Cambia la dirección de la Sucursal
     * @param direccionNueva string nueva direccion de la Sucursal
     */
    public setDireccion (direccionNueva: string): void {
        this.direccion = direccionNueva.toUpperCase();
    }
    /**
     * Agrega un cliente a la Sucursal
     * @param cliente Cliente
     */
    public agregarCliente ( cliente: Cliente): void {
        /*determinar si lo busca al cliente o no antes de agregar*/
        this.listaClientes.push(cliente);
    }
    /**
     * 
     * @param id number de Cliente en el sistema
     * @param nombre string que representa el nuevo nombre 
     * @param telefono string que representa el nuevo teléfono
     */
    public modificarCliente ( id: number, nombre: string, telefono: string): void {
        for (let i : number = 0; i < this.listaClientes.length; i++){  
            if (id == this.listaClientes[i].getId()){
                this.listaClientes[i].setNombre(nombre);
                this.listaClientes[i].setTelefono(telefono);
                console.log(`El cliente ha sido modificado.`);
            }
        }
    }
    
    /**
     * Dado un numero de id verifica la existencia y lo elimina de la Sucursal.
     * @param id numero de identificacion a eliminar
     */
    public eliminarCliente ( id: number): void {
        let encontrado: boolean = false;
        for (let i : number = 0; i < this.listaClientes.length; i++){  
            if (id == this.listaClientes[i].getId()){
                this.listaClientes.splice(i, 1);
                encontrado = true;
                break
            }
        }
        if (encontrado){
            console.log(`El cliente ha sido eliminado.`);
        } else {
            console.log(`El id ingresado no es valido.`);
        }
    }
    /**
     * Devuelve informacion si la Sucursal tiene Clientes
     * @returns True si tiene al menos un Cliente, False en caso contrario.
     */
    public tieneClientes (): boolean  {
        return ( this.listaClientes.length > 0);
    }

    /**
     * Muestra por pantalla datos de la Sucursal en una linea id-nombre-direccion
     * @param consola si es True imprime en consola el resultado.
     * @returns string del Cliente en una linea.
     */
     public verSucursalEnLinea(consola: boolean): string {
        let retorno: string =``;
        retorno += `Id Suc.: ${this.id} - Nombre: ${this.nombre} - Dirección: ${this.direccion}`;
        if (consola){
            console.log(retorno);
        }
        return retorno;
    }
    /**
     * Otorga los datos de la Sucursal Completos en formato texto
     * @returns string con todos los datos de la Sucursal.
     */
    public toString(): string {
        let retorno: string =``;
        retorno += this.verSucursalEnLinea(false);
        if (this.tieneClientes()){
            for (let t: number = 0; t < this.listaClientes.length; t++) {
                retorno += `\n     Cliente Nº ${t+1} - ${this.listaClientes[t].toString()}`;
            }
        } else {
            retorno += `\n     No posee Clientes. `;
        }
        return retorno;
    }
}