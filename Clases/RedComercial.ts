import Sucursal from "./Sucursal";
import Proveedor from "./Proveedor";
import Generador from "./Generador";
import * as mostrar from "../Helpers/functions";
import Cliente from "./Cliente";

export default class RedComercial {
    private nombre: string;
    private sucursales : Array<Sucursal>;
    private proveedores : Array<Proveedor>;
    private generadorId : Generador;
    
    /**
     * Constructor de RedComercial
     * @param nombre string de la RedComercial.
     * @param sucursales array de Sucursales.
     * @param proveedores array de Proveedores.
     */
    public constructor( nombre: string, sucursales?:Array<Sucursal>, proveedores?:Array<Proveedor>) {
        this.nombre = nombre;
        this.generadorId = new Generador();
        if (typeof sucursales !== 'undefined') {  
            this.sucursales = sucursales;
        } else {
            this.sucursales = [];
        }
        if (typeof proveedores !== 'undefined') {  
            this.proveedores = proveedores;
        } else {
            this.proveedores = [];
        }

    }
    /**
     * @returns string que representa el nombre de la Red.
     */
    public getNombre (): string {
        return this.nombre;
    }
    /**
     * @returns True si tiene al menos una Sucursal.
     */
     public tieneSucursales (): boolean  {
        return ( this.sucursales.length > 0);
    }
    /**
     * @returns True si tiene al menos un Proveedor.
     */
     public tieneProveedores (): boolean  {
        return ( this.proveedores.length > 0);
    }
    
    /**
     * 
     * @param nombre 
     * @param direccion 
     * @returns 
     */
    public altaSucursal (nombre: string, direccion: string): Sucursal {
        let identificador = this.generadorId.getId();
        let nuevaSucursal = new Sucursal (identificador, nombre,direccion);
        this.sucursales.push(nuevaSucursal);
        mostrar.msgOk(`La sucursal ${nuevaSucursal.getNombre().toUpperCase()} fue registrada con exito bajo el identificador ${nuevaSucursal.getId()}.`);
        return nuevaSucursal;
    }
    /**
     * 
     * @param id 
     * @param nombre 
     * @param direccion 
     */
    public modificaSucursal ( id: number, nombre?: string, direccion?: string): void {
        if (this.tieneSucursales()) {            
            let encontrado: boolean = false;
            for (let i : number = 0; i < this.sucursales.length; i++){  
                if (id == this.sucursales[i].getId()){
                    if (typeof nombre !== 'undefined') {  
                        mostrar.msgOk(`Actualizando el nombre de la sucursal ${this.sucursales[i].getNombre().toUpperCase()}...`);    
                        this.sucursales[i].setNombre(nombre.toUpperCase());
                        mostrar.msgOk(`El cambio fue realizado con exito.\nEl nuevo nombre de la SUCURSAL es ${this.sucursales[i].getNombre()}.`);    
                    } 
                    if (typeof direccion !== 'undefined') {  
                        mostrar.msgOk(`Actualizando el domicilio de la SUCURSAL ${this.sucursales[i].getNombre().toUpperCase()}...`);    
                        mostrar.msgNormal(`Domicilio de BAJA: ${this.sucursales[i].getDireccion().toUpperCase()}`);
                        this.sucursales[i].setDireccion(direccion.toUpperCase());
                        mostrar.msgOk(`Se actualizo el DOMICILIO de la SUCURSAL por ${this.sucursales[i].getDireccion()}`);    
                    }
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) {
                mostrar.msgOk(`La SUCURSAL a sido modificada con exito.`);  
            }else {
                mostrar.msgError(`La identificación ${id} no existe.`);
            }
        } else {
            mostrar.msgWarning(`No existen Sucursales en la Red.`);
        }

    }
    public eliminaSucursal (id: number): void {
        if (this.tieneSucursales()) {            
            let encontrado: boolean = false;
            let sucursalActual = '';
            for (let i : number = 0; i < this.sucursales.length; i++){  
                if (id == this.sucursales[i].getId()) {
                    sucursalActual = this.sucursales[i].verSucursalEnLinea(false);
                    this.sucursales.splice(i, 1);
                    encontrado = true;
                    break
                }
            }
            if (encontrado) {
                mostrar.msgOk(`La sucursal ${sucursalActual} fue eliminada.`);   
            }else {
                mostrar.msgError(`La identificación ${id} no existe. `);
            }

        } else {
            mostrar.msgWarning(`No existen Sucursales en la Red.`);
        }
    }
    /**
     * 
     * @returns 
     */
    public getSucursales (): Array<Sucursal> {
        return this.sucursales;
    }
    public altaProveedor (nombre: string, telefono: string): Proveedor {
        let identificador = this.generadorId.getId();
        let nuevoProveedor = new Proveedor (identificador, nombre,telefono);
        this.proveedores.push(nuevoProveedor);
        mostrar.msgOk(`El Alta fue realizada con exito.`);
        return nuevoProveedor;

    }
    public modificaProveedor (id: number, telefono: string): void {
        let encontrado: boolean = false;
        for (let t: number = 0; t < this.proveedores.length; t++) {
            let proveedorActual : Proveedor = this.proveedores[t];
	        if (proveedorActual.getId() == id) {
                proveedorActual.setTelefono(telefono);
                encontrado = true;
                break
            }
        }
        if (encontrado) {
            mostrar.msgOk(`Modificación realizada con Exito!!!.`);   
        }else {
            mostrar.msgError(`La identificación es invalida.`);
        }
    }
    /**
     * 
     * @param id 
     */
    public eliminaProveedor (id: number): void {
        if (this.tieneProveedores()) { 
            let encontrado: boolean = false;     
            let proveedorActual = '';      
            for (let i : number = 0; i < this.proveedores.length; i++){  
                proveedorActual = this.proveedores[i].verProveedorEnLinea(false);
                if (id == this.proveedores[i].getId()){
                    this.proveedores.splice(i, 1);
                    encontrado = true;
                }
            }
            if (encontrado) {
                mostrar.msgOk(`El proveedor ${proveedorActual} ha sido eliminado.`);   
            }else {
                mostrar.msgError(`La identificación ${id} no existe. `);
            }
        } else {
            mostrar.msgWarning(`No existen Proveedores en la Red.`);
        }
    }
    /**
     * 
     * @returns 
     */
    public getProveedores(): Array<Proveedor> {
        return this.proveedores;
    }
    public ver(): void {
        console.log(this);
    }
    public verRedEnLinea(consola: boolean): string {
        let retorno: string =``;
        retorno += `Nombre: ${this.nombre.toUpperCase()} - Cantidad de Sucursales: ${this.sucursales.length} - Cantidad de Proveedores: ${this.proveedores.length}`;
        if (consola){
            console.log(retorno);
        }
        return retorno;
    }
    public verSucursalesEnLinea(consola: boolean): string {
        let retorno: string =``;
        if (this.tieneSucursales()){
            retorno += `\nSUCURSAL/ES `;
            for (let t: number = 0; t < this.sucursales.length; t++) {
                retorno += `\n  ${t+1} - ${this.sucursales[t].toString()}`;
            }
        } else {
            retorno += `\nNo posee Sucursales.`;
        }
        if (consola){
            console.log(retorno);
        }
        return retorno;
    }
    public verProveedoresEnLinea(consola: boolean): string {
        let retorno: string =``;
        if (this.tieneProveedores()) {
            retorno += `\nPROVEEDOR/ES `;
            for (let t: number = 0; t < this.proveedores.length; t++) {
                retorno += `\n  ${t+1} - ${this.proveedores[t].toString()}`;
            }
        } else {
            retorno += `\nNo posee Proveedores. `;
        }
        if (consola){
            console.log(retorno);
        }
        return retorno;
    }

    public toString(): string {
        let retorno: string =``;
        retorno += this.verRedEnLinea(false);
        retorno += this.verSucursalesEnLinea(false);
        retorno += this.verProveedoresEnLinea(false);
        return retorno;
    }
    public agregarClienteaSucursal( sucursal: Sucursal, nombre: string, telefono: string): void{
        let identificador = this.generadorId.getId();
        let clienteNuevo = new Cliente(identificador, nombre, telefono);
        sucursal.agregarCliente(clienteNuevo);
        mostrar.msgOk(`El cliente ${clienteNuevo.getNombre().toUpperCase()} fue registrado bajo el Id: ${clienteNuevo.getId()} en la Sucursal ${sucursal.getId()} `);
    } 
}