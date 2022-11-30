"use strict";
exports.__esModule = true;
var Generador = /** @class */ (function () {
    /**
     * Constructor de Generador.
     * Por defecto crea un generador de identificadores con la posibilidad de emitir 100 numeros
     * aleatorios enteros distintos entre 0 y 100.
    */
    function Generador() {
        var _this = this;
        /**
         * Devuelve un valor Entero entre 0 y tope establecido por default con el valor 100.
         * @returns Entero
         */
        this.generaId = function () {
            return (Math.floor(Math.random() * _this.tope));
        };
        /**
         * Indica si el valor esta disponible para su utilizacion.
         * @param valor entero mayor a 0
         * @returns  True si el valor no fue emitido hasta el momento por el Generador, False caso contrario.
         */
        this.esUnico = function (valor) {
            for (var indice = 0; indice < _this.valores.length; indice++) {
                if (valor == _this.valores[indice]) {
                    return false;
                }
            }
            return true;
        };
        this.tope = 100;
        this.valores = [];
    }
    /**
     * Devuelve un identificador unico.
     * @returns number que representa un identificador valido.
     */
    Generador.prototype.getId = function () {
        if (this.idDisponibles() > 0) {
            var actual = this.generaId();
            while (!this.esUnico(actual)) {
                actual = this.generaId();
            }
            this.valores.push(actual);
            return actual;
        }
        else {
            throw new Error("No es posible emitir mas numeros distintos entre si hasta tanto no se modifique el tope.");
        }
    };
    /**
     * @returns number que inica el total de id que podra gestar el Generador.
     */
    Generador.prototype.getTope = function () {
        return this.tope;
    };
    /**
     * Devuelve el historial de numeros aleatorios generados.
     * @returns array<number> de id asignados.
     */
    Generador.prototype.getIds = function () {
        return this.valores;
    };
    /**
     * Modifica el Tope. Debe ser un valor mayor que Tope default que es 100.
     * @param nuevoTope nuevo valor para generar rango de valores.
     */
    Generador.prototype.setTope = function (nuevoTope) {
        if (nuevoTope < this.tope) {
            throw new Error("No es posible realizar el cambio debido a que el valor que intenta aplicarr es inferior al actual.");
        }
        else {
            this.tope = nuevoTope;
        }
    };
    /**
     * Devuelve cantidad de id que puede emitir.
     * @returns entero que representa cantidad de identificadores pendientes de generar.
     */
    Generador.prototype.idDisponibles = function () {
        return this.tope - this.valores.length;
    };
    return Generador;
}());
exports["default"] = Generador;
