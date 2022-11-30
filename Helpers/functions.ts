/* importo libreria */
import * as chalk from "chalk";

const log = console.log;
/**
 * Imprime en pantalla el valor con letra estilo negrita y color verde
 * @param valor cadena de texto 
 */
export function msgOk (valor: string): void {
    log(chalk.bold.green(valor));
}
/**
 * Imprime en pantalla el valor con letra estilo negrita y color amarillo
 * @param valor cadena de texto 
 */
export function msgWarning( valor: string): void {
    log(chalk.bold.yellow(valor));
}
/**
 * Imprime en pantalla el valor con letra estilo negrita y color rojo
 * @param valor cadena de texto 
 */
export function msgError( valor: string): void {
    log(chalk.bold.red(valor));
}
/**
 * Imprime en pantalla el valor con letra color blanco
 * @param valor cadena de texto 
 */
export function msgNormal( valor: string): void{
    log(chalk.white(valor));
}
export function msgInfo( valor: string): void {
    log(chalk.blue(valor));
}