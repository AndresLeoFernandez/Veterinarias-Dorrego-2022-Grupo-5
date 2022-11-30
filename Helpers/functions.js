"use strict";
exports.__esModule = true;
exports.msgInfo = exports.msgNormal = exports.msgError = exports.msgWarning = exports.msgOk = void 0;
/* importo libreria */
var chalk = require("chalk");
var log = console.log;
/**
 * Imprime en pantalla el valor con letra estilo negrita y color verde
 * @param valor cadena de texto
 */
function msgOk(valor) {
    log(chalk.bold.green(valor));
}
exports.msgOk = msgOk;
/**
 * Imprime en pantalla el valor con letra estilo negrita y color amarillo
 * @param valor cadena de texto
 */
function msgWarning(valor) {
    log(chalk.bold.yellow(valor));
}
exports.msgWarning = msgWarning;
/**
 * Imprime en pantalla el valor con letra estilo negrita y color rojo
 * @param valor cadena de texto
 */
function msgError(valor) {
    log(chalk.bold.red(valor));
}
exports.msgError = msgError;
/**
 * Imprime en pantalla el valor con letra color blanco
 * @param valor cadena de texto
 */
function msgNormal(valor) {
    log(chalk.white(valor));
}
exports.msgNormal = msgNormal;
function msgInfo(valor) {
    log(chalk.blue(valor));
}
exports.msgInfo = msgInfo;
