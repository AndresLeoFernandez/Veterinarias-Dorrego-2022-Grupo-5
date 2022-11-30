"use strict";
exports.__esModule = true;
var Sucursal_1 = require("./Sucursal");
var Proveedor_1 = require("./Proveedor");
var Generador_1 = require("./Generador");
var mostrar = require("../Helpers/functions");
var Cliente_1 = require("./Cliente");
var RedComercial = /** @class */ (function () {
    /**
     * Constructor de la RedComercial
     * @param nombre string de la RedComercial.
     * @param sucursales array de Sucursales.
     * @param proveedores array de Proveedores.
     */
    function RedComercial(nombre, sucursales, proveedores) {
        this.nombre = nombre;
        this.generadorId = new Generador_1["default"]();
        if (typeof sucursales !== 'undefined') {
            this.sucursales = sucursales;
        }
        else {
            this.sucursales = [];
        }
        if (typeof proveedores !== 'undefined') {
            this.proveedores = proveedores;
        }
        else {
            this.proveedores = [];
        }
    }
    /**
     * @returns string que representa el nombre de la Red.
     */
    RedComercial.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * @returns True si tiene al menos una Sucursal.
     */
    RedComercial.prototype.tieneSucursales = function () {
        return (this.sucursales.length > 0);
    };
    /**
     * @returns True si tiene al menos un Proveedor.
     */
    RedComercial.prototype.tieneProveedores = function () {
        return (this.proveedores.length > 0);
    };
    /**
     *
     * @param nombre
     * @param direccion
     * @returns
     */
    RedComercial.prototype.altaSucursal = function (nombre, direccion) {
        var identificador = this.generadorId.getId();
        var nuevaSucursal = new Sucursal_1["default"](identificador, nombre, direccion);
        this.sucursales.push(nuevaSucursal);
        mostrar.msgOk("La sucursal ".concat(nuevaSucursal.getNombre().toUpperCase(), " fue registrada con exito bajo el identificador ").concat(nuevaSucursal.getId(), "."));
        return nuevaSucursal;
    };
    /**
     *
     * @param id
     * @param nombre
     * @param direccion
     */
    RedComercial.prototype.modificaSucursal = function (id, nombre, direccion) {
        if (this.tieneSucursales()) {
            var encontrado = false;
            for (var i = 0; i < this.sucursales.length; i++) {
                if (id == this.sucursales[i].getId()) {
                    if (typeof nombre !== 'undefined') {
                        mostrar.msgOk("Actualizando el nombre de la sucursal ".concat(this.sucursales[i].getNombre().toUpperCase(), "..."));
                        this.sucursales[i].setNombre(nombre.toUpperCase());
                        mostrar.msgOk("El cambio fue realizado con exito.\nEl nuevo nombre de la SUCURSAL es ".concat(this.sucursales[i].getNombre(), "."));
                    }
                    if (typeof direccion !== 'undefined') {
                        mostrar.msgOk("Actualizando el domicilio de la SUCURSAL ".concat(this.sucursales[i].getNombre().toUpperCase(), "..."));
                        mostrar.msgNormal("Domicilio de BAJA: ".concat(this.sucursales[i].getDireccion().toUpperCase()));
                        this.sucursales[i].setDireccion(direccion.toUpperCase());
                        mostrar.msgOk("Se actualizo el DOMICILIO de la SUCURSAL por ".concat(this.sucursales[i].getDireccion()));
                    }
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) {
                mostrar.msgOk("La SUCURSAL a sido modificada con exito.");
            }
            else {
                mostrar.msgError("La identificaci\u00F3n ".concat(id, " no existe."));
            }
        }
        else {
            mostrar.msgWarning("No existen Sucursales en la Red.");
        }
    };
    RedComercial.prototype.eliminaSucursal = function (id) {
        if (this.tieneSucursales()) {
            var encontrado = false;
            var sucursalActual = '';
            for (var i = 0; i < this.sucursales.length; i++) {
                if (id == this.sucursales[i].getId()) {
                    sucursalActual = this.sucursales[i].verSucursalEnLinea(false);
                    this.sucursales.splice(i, 1);
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) {
                mostrar.msgOk("La sucursal ".concat(sucursalActual, " fue eliminada."));
            }
            else {
                mostrar.msgError("La identificaci\u00F3n ".concat(id, " no existe. "));
            }
        }
        else {
            mostrar.msgWarning("No existen Sucursales en la Red.");
        }
    };
    /**
     *
     * @returns
     */
    RedComercial.prototype.getSucursales = function () {
        return this.sucursales;
    };
    RedComercial.prototype.altaProveedor = function (nombre, telefono) {
        var identificador = this.generadorId.getId();
        var nuevoProveedor = new Proveedor_1["default"](identificador, nombre, telefono);
        this.proveedores.push(nuevoProveedor);
        mostrar.msgOk("El Alta fue realizada con exito.");
        return nuevoProveedor;
    };
    RedComercial.prototype.modificaProveedor = function (id, telefono) {
        var encontrado = false;
        for (var t = 0; t < this.proveedores.length; t++) {
            var proveedorActual = this.proveedores[t];
            if (proveedorActual.getId() == id) {
                proveedorActual.setTelefono(telefono);
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            mostrar.msgOk("Modificaci\u00F3n realizada con Exito!!!.");
        }
        else {
            mostrar.msgError("La identificaci\u00F3n es invalida.");
        }
    };
    /**
     *
     * @param id
     */
    RedComercial.prototype.eliminaProveedor = function (id) {
        if (this.tieneProveedores()) {
            var encontrado = false;
            var proveedorActual = '';
            for (var i = 0; i < this.proveedores.length; i++) {
                proveedorActual = this.proveedores[i].verProveedorEnLinea(false);
                if (id == this.proveedores[i].getId()) {
                    this.proveedores.splice(i, 1);
                    encontrado = true;
                }
            }
            if (encontrado) {
                mostrar.msgOk("El proveedor ".concat(proveedorActual, " ha sido eliminado."));
            }
            else {
                mostrar.msgError("La identificaci\u00F3n ".concat(id, " no existe. "));
            }
        }
        else {
            mostrar.msgWarning("No existen Proveedores en la Red.");
        }
    };
    /**
     *
     * @returns
     */
    RedComercial.prototype.getProveedores = function () {
        return this.proveedores;
    };
    RedComercial.prototype.ver = function () {
        console.log(this);
    };
    RedComercial.prototype.verRedEnLinea = function (consola) {
        var retorno = "";
        retorno += "Nombre: ".concat(this.nombre.toUpperCase(), " - Cantidad de Sucursales: ").concat(this.sucursales.length, " - Cantidad de Proveedores: ").concat(this.proveedores.length);
        if (consola) {
            console.log(retorno);
        }
        return retorno;
    };
    RedComercial.prototype.verSucursalesEnLinea = function (consola) {
        var retorno = "";
        if (this.tieneSucursales()) {
            retorno += "\nSUCURSAL/ES ";
            for (var t = 0; t < this.sucursales.length; t++) {
                retorno += "\n  ".concat(t + 1, " - ").concat(this.sucursales[t].toString());
            }
        }
        else {
            retorno += "\nNo posee Sucursales.";
        }
        if (consola) {
            console.log(retorno);
        }
        return retorno;
    };
    RedComercial.prototype.verProveedoresEnLinea = function (consola) {
        var retorno = "";
        if (this.tieneProveedores()) {
            retorno += "\nPROVEEDOR/ES ";
            for (var t = 0; t < this.proveedores.length; t++) {
                retorno += "\n  ".concat(t + 1, " - ").concat(this.proveedores[t].toString());
            }
        }
        else {
            retorno += "\nNo posee Proveedores. ";
        }
        if (consola) {
            console.log(retorno);
        }
        return retorno;
    };
    RedComercial.prototype.toString = function () {
        var retorno = "";
        retorno += this.verRedEnLinea(false);
        retorno += this.verSucursalesEnLinea(false);
        retorno += this.verProveedoresEnLinea(false);
        return retorno;
    };
    RedComercial.prototype.agregarClienteaSucursal = function (sucursal, nombre, telefono) {
        var identificador = this.generadorId.getId();
        var clienteNuevo = new Cliente_1["default"](identificador, nombre, telefono);
        sucursal.agregarCliente(clienteNuevo);
        mostrar.msgOk("El cliente ".concat(clienteNuevo.getNombre().toUpperCase(), " fue registrado bajo el Id: ").concat(clienteNuevo.getId(), " en la Sucursal ").concat(sucursal.getId(), " "));
    };
    return RedComercial;
}());
exports["default"] = RedComercial;
