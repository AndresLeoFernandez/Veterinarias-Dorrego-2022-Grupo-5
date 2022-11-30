"use strict";
exports.__esModule = true;
var Proveedor = /** @class */ (function () {
    /**
     * Constructor de Proveedor
     * @param id numero de identificación unica del Proveedor.
     * @param nombre string que representa el Nombre del Proveedor.
     * @param telefono string que representa el telefono de contacto del Proveedor.
     *
    */
    function Proveedor(id, nombre, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    /**
     * @returns number que representa el identificador del Proveedor.
     */
    Proveedor.prototype.getId = function () {
        return this.id;
    };
    /**
     * @returns string que representa el nombre del Proveedor.
     */
    Proveedor.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * @returns string que representa el teléfono del Proveedor.
     */
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    /**
     * Cambia el telefono del Proveedor
     * @param telefonoNuevo string representa nuevo telefono
     */
    Proveedor.prototype.setTelefono = function (telefonoNuevo) {
        this.telefono = telefonoNuevo;
    };
    Proveedor.prototype.verProveedorEnLinea = function (consola) {
        var retorno = "";
        retorno += "Id: ".concat(this.id, " - Nombre: ").concat(this.nombre, " - Telef\u00F3no: ").concat(this.telefono);
        if (consola) {
            console.log(retorno);
        }
        return retorno;
    };
    Proveedor.prototype.toString = function () {
        var retorno = "";
        retorno += this.verProveedorEnLinea(false);
        return retorno;
    };
    return Proveedor;
}());
exports["default"] = Proveedor;
