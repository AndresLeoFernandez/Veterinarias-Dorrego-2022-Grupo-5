export default class Generador {
    /* Tope maximo para establecer rango de numeros aleatorios */
    private tope: number;
    /* Arreglo de valores generados para garantizar la integridad de identificador unico*/
    private valores: Array<number>;
    
    /**
     * Constructor de Generador.
     * Por defecto crea un generador de identificadores con la posibilidad de emitir 100 numeros
     * aleatorios enteros distintos entre 0 y 100.
    */
    public constructor () {
        this.tope = 100; 
        this.valores = [];   
    }
    /**
     * Devuelve un valor Entero entre 0 y tope establecido por default con el valor 100.
     * @returns Entero
     */
    private generaId = (): number => {
        return (Math.floor(Math.random() * this.tope));
    }
    /**
     * Indica si el valor esta disponible para su utilizacion.
     * @param valor entero mayor a 0
     * @returns  True si el valor no fue emitido hasta el momento por el Generador, False caso contrario. 
     */
    private esUnico = (valor: number ): boolean => {
        for (let indice: number = 0; indice < this.valores.length; indice++ ) {
            if (valor == this.valores[indice]) {
                return false
            }
        }
        return true
    }
    /**
     * Devuelve un identificador unico.
     * @returns number que representa un identificador valido.
     */
    public getId(): number {
        if (this.idDisponibles()>0) {
            let actual = this.generaId();
            while (!this.esUnico(actual)){
                actual = this.generaId();
            } 
            this.valores.push(actual);
            return actual;
        } else {
            throw new Error("No es posible emitir mas numeros distintos entre si hasta tanto no se modifique el tope.");
        }
    }
    /**
     * @returns number que inica el total de id que podra gestar el Generador.
     */
     public getTope(): number {
        return this.tope; 
    }
    /**
     * Devuelve el historial de numeros aleatorios generados.
     * @returns array<number> de id asignados.
     */
    public getIds(): Array<number> {
        return this.valores; 
    }
    /**
     * Modifica el Tope. Debe ser un valor mayor que Tope default que es 100.
     * @param nuevoTope nuevo valor para generar rango de valores.
     */
    public setTope(nuevoTope: number): void {
        if (nuevoTope < this.tope) {
            throw new Error("No es posible realizar el cambio debido a que el valor que intenta aplicarr es inferior al actual.");
        } else {
            this.tope = nuevoTope;
        }
    }
    /**
     * Devuelve cantidad de id que puede emitir.
     * @returns entero que representa cantidad de identificadores pendientes de generar. 
     */
    public idDisponibles(): number {
        return this.tope - this.valores.length;
    } 
}