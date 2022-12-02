export default class Paciente {
    private idCliente : number;
    private nombre : string;
    private especie: string;    
    /**
     * Constructor de Paciente
     * @param nombre Nombre del Paciente.
     * @param idCliente Entero que identifica al titular del paciente.
     * @param especie podra tomar valores de PERRO, GATO o de lo contrario se asume como "EXOTICO".
     */
    public constructor( idCliente : number, nombre : string, especie : string) {
        const GATO = "GATO";
        const PERRO = "PERRO";
        const EXOTICO = "EXOTICO";
        this.idCliente = idCliente;
        this.nombre = nombre.toUpperCase();
        if (especie.toUpperCase() == GATO || especie.toUpperCase() == PERRO){
            this.especie = especie.toUpperCase();    
        }else {
            this.especie = EXOTICO;
        } 
    }
    /**
     * Devuelve el id del Cliente
     * @returns entero que representa el identificador del Cliente
     */
    public getIdCliente (): number {
        return this.idCliente;
    }
    /**
     * Devuelve el Nombre del Paciente
     * @returns string que representa el nombre del Paciente.
     */
    public getNombre (): string {
        return this.nombre;
    }
    /**
     * Devuelve la Especie del Paciente
     * @returns string que podra ser "GATO", "PERRO" o "EXOTICO".
     */
    public getEspecie (): string {
        return this.especie;
    }

    public verPaciente(): void {
        console.log(this);
    }
    /**
     * Cambia el Nombre del Paciente
     * @param nombreNuevo string nuevo nombre del Paciente
     */
    public setNombre (nombreNuevo : string): void {
        this.nombre = nombreNuevo.toUpperCase();
    }
    /**
     * Otorga los datos del Paciente en formato texto
     * @returns string con todos los datos del Paciente.
     */
    public toString(): string {
        let retorno: string =``;
        retorno += `Id del Cliente: ${this.idCliente} - Nombre: ${this.nombre} - Especie: ${this.especie}`;
        return retorno;
    }
    
}