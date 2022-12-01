"use strict";
exports.__esModule = true;
var Sucursal = /** @class */ (function () {
    /**
     * Constructor de Cliente
     * @param id numero de identificación unica de la sucursal.
     * @param nombre string que representa el Nombre de la Sucursal.
     * @param direccion string que representa la dirección de la Sucursal.
     * @param clientes Lista de clientes (opcional).
     *
    */
    function Sucursal(id, nombre, direccion, clientes) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.direccion = direccion.toUpperCase();
        if (typeof clientes !== 'undefined') {
            this.listaClientes = clientes;
        }
        else {
            this.listaClientes = [];
        }
    }
    /**
     * @returns number que representa el identificador de la Sucursal.
     */
    Sucursal.prototype.getId = function () {
        return this.id;
    };
    /**
     * @returns string que representa el nombre de la Sucursal.
     */
    Sucursal.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * @returns un string que representa la dirección de la Sucursal.
     */
    Sucursal.prototype.getDireccion = function () {
        return this.direccion;
    };
    /**
     * Devuelve un arrego de Clientes
     * @returns array
     */
    Sucursal.prototype.getClientes = function () {
        return this.listaClientes;
    };
    /**
     * Muestra por pantalla la Sucursal
     */
    Sucursal.prototype.verSucursal = function () {
        console.log(this);
    };
    /**
     * Cambia el nombre de la Sucursal
     * @param nombreNuevo nuevo nombre de la Sucursal
    */
    Sucursal.prototype.setNombre = function (nombreNuevo) {
        this.nombre = nombreNuevo.toUpperCase();
    };
    /**
     * Cambia la dirección de la Sucursal
     * @param direccionNueva string nueva direccion de la Sucursal
     */
    Sucursal.prototype.setDireccion = function (direccionNueva) {
        this.direccion = direccionNueva.toUpperCase();
    };
    /**
     * Agrega un cliente a la Sucursal
     * @param cliente Cliente
     */
    Sucursal.prototype.agregarCliente = function (cliente) {
        /*determinar si lo busca al cliente o no antes de agregar*/
        this.listaClientes.push(cliente);
    };
    /**
     *
     * @param id number de Cliente en el sistema
     * @param nombre string que representa el nuevo nombre
     * @param telefono string que representa el nuevo teléfono
     */
    Sucursal.prototype.modificarCliente = function (id, nombre, telefono) {
        for (var i = 0; i < this.listaClientes.length; i++) {
            if (id == this.listaClientes[i].getId()) {
                this.listaClientes[i].setNombre(nombre);
                this.listaClientes[i].setTelefono(telefono);
                console.log("El cliente ha sido modificado.");
            }
        }
    };
    /**
     * Dado un numero de id verifica la existencia y lo elimina de la Sucursal.
     * @param id numero de identificacion a eliminar
     */
    Sucursal.prototype.eliminarCliente = function (id) {
        var encontrado = false;
        for (var i = 0; i < this.listaClientes.length; i++) {
            if (id == this.listaClientes[i].getId()) {
                this.listaClientes.splice(i, 1);
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            console.log("El cliente ha sido eliminado.");
        }
        else {
            console.log("El id ingresado no es valido.");
        }
    };
    /**
     * Devuelve informacion si la Sucursal tiene Clientes
     * @returns True si tiene al menos un Cliente, False en caso contrario.
     */
    Sucursal.prototype.tieneClientes = function () {
        return (this.listaClientes.length > 0);
    };
    /**
     * Muestra por pantalla datos de la Sucursal en una linea id-nombre-direccion
     * @param consola si es True imprime en consola el resultado.
     * @returns string del Cliente en una linea.
     */
    Sucursal.prototype.verSucursalEnLinea = function (consola) {
        var retorno = "";
        retorno += "Id Suc.: ".concat(this.id, " - Nombre: ").concat(this.nombre, " - Direcci\u00F3n: ").concat(this.direccion);
        if (consola) {
            console.log(retorno);
        }
        return retorno;
    };
    /**
     * Otorga los datos de la Sucursal Completos en formato texto
     * @returns string con todos los datos de la Sucursal.
     */
    Sucursal.prototype.toString = function () {
        var retorno = "";
        retorno += this.verSucursalEnLinea(false);
        if (this.tieneClientes()) {
            for (var t = 0; t < this.listaClientes.length; t++) {
                retorno += "\n     Cliente N\u00BA ".concat(t + 1, " - ").concat(this.listaClientes[t].toString());
            }
        }
        else {
            retorno += "\n     No posee Clientes. ";
        }
        return retorno;
    };
    return Sucursal;
}());
exports["default"] = Sucursal;
