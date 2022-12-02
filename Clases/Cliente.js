"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    /**
     * Constructor de Cliente
     * @param id numero de identificación unica del Cliente.
     * @param nombre string que representa el Nombre del Cliente.
     * @param telefono string que representa el telefono de contacto del Cliente.
     * @param mascotas lista de Mascotas.
     *
    */
    function Cliente(id, nombre, telefono, mascotas) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.telefono = telefono;
        this.cantidadVisitas = 0;
        if (typeof mascotas !== 'undefined') {
            this.listaMascotas = mascotas;
        }
        else {
            this.listaMascotas = [];
        }
    }
    /**
     * @returns numero que representa el identificador del Cliente
     */
    Cliente.prototype.getId = function () {
        return this.id;
    };
    /**
     * @returns string que representa el nombre del Cliente.
     */
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * @returns un string que podra ser "gato", "perro" o "exotico".
     */
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    /**
     * @returns True si tiene al menos una mascota.
     */
    Cliente.prototype.tieneMascota = function () {
        return (this.listaMascotas.length > 0);
    };
    /**
     * @returns un string que podra ser "gato", "perro" o "exotico".
     */
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascotas;
    };
    /**
     *
     * @returns True si tiene cinco visitas o mas.
     */
    Cliente.prototype.esBip = function () {
        return (this.cantidadVisitas >= 5);
    };
    /**
     * Cambia el nombre del Cliente
     * @param nombreNuevo nuevo nombre del Cliente
     */
    Cliente.prototype.setNombre = function (nombreNuevo) {
        this.nombre = nombreNuevo.toUpperCase();
    };
    /**
     * Cambia el telefono del Cliente
     * @param telefonoNuevo nuevo telefono del Cliente
     */
    Cliente.prototype.setTelefono = function (telefonoNuevo) {
        this.telefono = telefonoNuevo;
    };
    /**
     * Agrega una visita del Cliente
     */
    Cliente.prototype.agregarVisita = function () {
        this.cantidadVisitas++;
    };
    /**
     * Agrega la mascota si aun no surje registrada con el cliente.
     * @param mascota Paciente.
     */
    Cliente.prototype.agregaMascota = function (mascota) {
        var encontrado = false;
        for (var t = 0; t < this.listaMascotas.length; t++) {
            if (this.listaMascotas[t].getNombre() == mascota.getNombre()) {
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            this.listaMascotas.push(mascota);
            console.log("La mascota ".concat(mascota.getNombre(), " fue registrada con exito."));
        }
        else {
            console.log("Ya tiene registrada esa mascota.");
        }
    };
    /**
     *
     * @param id
     */
    Cliente.prototype.eliminarMascota = function (id, nombre) {
        var encontrado = false;
        for (var i = 0; i < this.listaMascotas.length; i++) {
            if (id == this.listaMascotas[i].getIdCliente() && (nombre == this.listaMascotas[i].getNombre())) {
                this.listaMascotas.splice(i, 1);
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            console.log("La mascota fue eLiminada.");
        }
        else {
            console.log("El id no es valido.");
        }
    };
    /**
    * Muestra por pantalla el Cliente
    */
    Cliente.prototype.verCliente = function () {
        console.log(this);
    };
    /**
     * Muestra por pantalla datos del Cliente en una linea
     * @param consola si es True imprime en consola el resultado.
     * @returns datos del Cliente en una linea
     */
    Cliente.prototype.verClienteEnLinea = function (consola) {
        var retorno = "";
        retorno += "Id Cliente: ".concat(this.id, " - Nombre: ").concat(this.nombre, " - Telefono: ").concat(this.telefono).concat(this.esBip() == true ? '- BIP' : '');
        if (consola) {
            console.log(retorno);
        }
        return retorno;
    };
    /**
     *
     * @returns
     */
    Cliente.prototype.toString = function () {
        var retorno = "";
        retorno += this.verClienteEnLinea(false);
        if (this.tieneMascota()) {
            for (var t = 0; t < this.listaMascotas.length; t++) {
                retorno += "\n     ".concat(t + 1, " - ").concat(this.listaMascotas[t].toString());
            }
        }
        return retorno;
    };
    return Cliente;
}());
exports["default"] = Cliente;
