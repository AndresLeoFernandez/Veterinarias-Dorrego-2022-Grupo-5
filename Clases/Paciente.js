"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    /**
     * Constructor de Paciente
     * @param nombre Nombre del Paciente.
     * @param idCliente Entero que identifica al titular del paciente.
     * @param especie podra tomar valores de PERRO, GATO o de lo contrario se asume como "EXOTICO".
     */
    function Paciente(idCliente, nombre, especie) {
        var GATO = "GATO";
        var PERRO = "PERRO";
        var EXOTICO = "EXOTICO";
        this.idCliente = idCliente;
        this.nombre = nombre.toUpperCase();
        if (especie.toUpperCase() == GATO || especie.toUpperCase() == PERRO) {
            this.especie = especie.toUpperCase();
        }
        else {
            this.especie = EXOTICO;
        }
    }
    /**
     * Devuelve el id del Cliente
     * @returns entero que representa el identificador del Cliente
     */
    Paciente.prototype.getIdCliente = function () {
        return this.idCliente;
    };
    /**
     * Devuelve el Nombre del Paciente
     * @returns string que representa el nombre del Paciente.
     */
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * Devuelve la Especie del Paciente
     * @returns string que podra ser "GATO", "PERRO" o "EXOTICO".
     */
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.verPaciente = function () {
        console.log(this);
    };
    /**
     * Cambia el Nombre del Paciente
     * @param nombreNuevo string nuevo nombre del Paciente
     */
    Paciente.prototype.setNombre = function (nombreNuevo) {
        this.nombre = nombreNuevo.toUpperCase();
    };
    /**
     * Otorga los datos del Paciente en formato texto
     * @returns string con todos los datos del Paciente.
     */
    Paciente.prototype.toString = function () {
        var retorno = "";
        retorno += "Id del Cliente: ".concat(this.idCliente, " - Nombre: ").concat(this.nombre, " - Especie: ").concat(this.especie);
        return retorno;
    };
    return Paciente;
}());
exports["default"] = Paciente;
