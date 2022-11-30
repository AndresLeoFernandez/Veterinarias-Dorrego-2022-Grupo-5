import Cliente from "./Clases/Cliente";
import Paciente from "./Clases/Paciente";
import RedComercial from "./Clases/RedComercial";
import * as mostrar from "./Helpers/functions";
import * as readlineSync from 'readline-sync';
import Sucursal from "./Clases/Sucursal";
import Proveedor from "./Clases/Proveedor";

function bienvenida(): void {
    console.log(`\n\n`);
    let titulo = `BIENVENIDO a ${redVeterinaria.getNombre().toUpperCase()}`;
    mostrar.msgInfo(titulo);
    let linea = '';
    for (let i: number=0 ; i< titulo.length; i++ ) {  linea+="═"; } 
    mostrar.msgInfo(linea);
}

function pausar(): void {
    console.log(`\n\n\n\n\n\n\n\n\n\n`);
    readlineSync.keyInPause('Oprima cualquier tecla para continuar...');
}
function operacionesPacientes(): void  {
    let opePac = ['ALTA PACIENTE NUEVO','MODIFICAR PACIENTE EXISTENTE','BAJA DE PACIENTE','ATENDER MASCOTA','VER PACIENTES x CLIENTE'];
    let continuar = true;
    while (continuar){
        mostrar.msgInfo(`\nOPERACIONES CON PACIENTES`);
        let indice = readlineSync.keyInSelect(opePac, 'Que desea hacer: ',{cancel: 'Volver Atras'});
        console.log(`\n`);
        if (redVeterinaria.tieneSucursales()&& (indice!= -1) ){
            let sucursal = obtenerSucursalDeTrabajo(redVeterinaria);
            if (sucursal[0].tieneClientes()){
                let ClienteActual = obtenerClienteDeTrabajo(sucursal[0]);        
                switch (indice) {
                    case 0:
                        if (ClienteActual[1] == true) {
                            mostrar.msgInfo(opePac[indice]);
                            let nombre: string = readlineSync.question(mostrar.msgWarning(`Ingrese el NOMBRE de la MASCOTA NUEVA: `));
                            let especie = readlineSync.question("Ingrese la especie: [gato / perro ]: ",{limit:['gato','perro','exotico']});
                            let mascotaNueva= new Paciente (ClienteActual[0].getId(),nombre, especie);
                            ClienteActual[0].agregaMascota(mascotaNueva);
                        } else {
                            continuar = false;
                            mostrar.msgWarning(`Se interrumpio la operacion al seleccionar el Cliente.`);
                        }
                        break;
                    case 1:
                        if (ClienteActual[1] == true) {
                            let mascotaActual = obtenerMascotaDeTrabajo(ClienteActual[0]);
                            if (mascotaActual[1] == true) {
                                mostrar.msgInfo(opePac[indice]);
                                let nombreMod: string = readlineSync.question(mostrar.msgWarning(`Ingrese el NUEVO NOMBRE de la MASCOTA: `));
                                mascotaActual[0].setNombre(nombreMod);
                            } else {
                                continuar = false;
                                mostrar.msgWarning(`Se interrumpio la operacion en la eleccion de la mascota.`);    
                            }    
                        } else {
                            continuar = false;
                            mostrar.msgWarning(`Se interrumpio la operacion en la eleccion del Cliente.`);    
                        }
                        break;
                    case 2:
                        if (ClienteActual[1] == true) {
                            let mascotaActual = obtenerMascotaDeTrabajo(ClienteActual[0]);
                            if (mascotaActual[1] == true) {
                                mostrar.msgInfo(opePac[indice]);
                                ClienteActual[0].eliminarMascota(mascotaActual[0].getIdCliente());
                            } else {
                                continuar = false;
                                mostrar.msgWarning(`Se interrumpio la operacion en la eleccion de la Mascota.`);    
                            }
                        } else {
                            continuar = false;
                            mostrar.msgWarning(`Se interrumpio la operacion en la eleccion del Cliente.`);    
                        }
                        break;
                    case 3:
                        if (ClienteActual[1] == true) {
                            let mascotaActual = obtenerMascotaDeTrabajo(ClienteActual[0]);
                            if (mascotaActual[1] == true) {
                                mostrar.msgInfo(opePac[indice]);
                                ClienteActual[0].agregarVisita();
                                mostrar.msgOk(`\nEn el día de la fecha el cliente ${ClienteActual[0].esBip() == true ? 'RECURENTE':''} ${ClienteActual[0].getNombre().toUpperCase()} se hizo presente con su mascota ${mascotaActual[0].getNombre().toUpperCase()}.`);    
                            } else {
                                continuar = false;
                                mostrar.msgWarning(`Se interrumpio la operación en la elección de la Mascota.`);    
                            }
                        } else {
                            continuar = false;
                            mostrar.msgWarning(`Se interrumpio la operación en la elección del Cliente.`);    
                        }
                        break;
                    case 4:
                        if (ClienteActual[1] == true) {
                            mostrar.msgInfo(opePac[indice]);
                            console.log(ClienteActual[0].getListaMascota());
                        }
                        break;
                
                    default:
                        continuar = false;
                }
            } else {
                continuar = false;
                if (indice!= -1) {
                    mostrar.msgWarning(`No es posible porque la Sucursal no tiene Clientes. Debe cargar el Cliente primero.`);
                }    
            }
        }else {
            continuar = false;
            if (indice!= -1) {
                 mostrar.msgError(`No es posible porque la Red no tiene Sucursales.`);
            }
        }
    }
}
function operacionesSucursales(): void  {
    let opeSuc = ['ALTA SUCURSAL NUEVA','MODIFICACION SUCURSAL EXISTENTE','BAJA SUCURSAL','Ver TODAS las SUCURSALES'];
    let continuar = true;
    while (continuar){
        mostrar.msgInfo(`\nOPERACIONES CON SUCURSALES`);
        let indice = readlineSync.keyInSelect(opeSuc, 'Que desea hacer:',{cancel: 'Volver Atras'});
        switch (indice) {
            case 0:
                mostrar.msgInfo(opeSuc[indice]);
                let nombre: string = readlineSync.question(mostrar.msgWarning(`Ingrese el Nombre de la NUEVA SUCURSAL: `));
                let dire = readlineSync.question(mostrar.msgWarning(`Ingrese la Direccion: `));
                let sucursalNueva = redVeterinaria.altaSucursal(nombre.toUpperCase(),dire.toUpperCase());
                pausar();
                break;
            case 1:
                if (redVeterinaria.tieneSucursales()){
                    let sucursalActual = obtenerSucursalDeTrabajo(redVeterinaria);
                    if (sucursalActual[1] == true) {
                        mostrar.msgInfo(opeSuc[indice]);
                        let nombreMod: string = readlineSync.question(mostrar.msgWarning(`Ingrese el NUEVO nombre para la Sucursal: `));
                        let direMod= readlineSync.question(mostrar.msgWarning(`Ingrese la NUEVA dirección para la Sucursal: `));
                        redVeterinaria.modificaSucursal(sucursalActual[0].getId(), nombreMod, direMod);
                    } else {
                        continuar = false;
                        mostrar.msgWarning(`Se interrumpio la operacion en la eleccion de la Sucursal.`); 
                    }
                } else {
                    continuar = false;
                    mostrar.msgWarning(`No es posible lleva a cabo la operación porque la Red no tiene Sucursales.`);
                }
                pausar();
                break;
            case 2:
                if (redVeterinaria.tieneSucursales()){
                    let sucursalActual = obtenerSucursalDeTrabajo(redVeterinaria);
                    if (sucursalActual[1] == true) {
                        mostrar.msgInfo(opeSuc[indice]);
                        redVeterinaria.eliminaSucursal(sucursalActual[0].getId());
                    } else {
                        continuar = false;
                        mostrar.msgWarning(`Se interrumpio la operacion en la eleccion de la Sucursal.`); 
                    }
                } else {
                    continuar = false;
                    mostrar.msgWarning(`No es posible lleva a cabo la operación porque la Red no tiene Sucursales.`);
                }
                pausar();
                break;
            case 3:
                mostrar.msgInfo(opeSuc[indice]);
                redVeterinaria.verSucursalesEnLinea(true);
                pausar();
                break;
        
            default:
                continuar = false;
        }
    }
}
function operacionesProveedores(): void {
    let opeProv = ['ALTA PROVEEDOR NUEVO','MODIFICACION PROVEEDOR EXISTENTE','BAJA PROVEEDOR','VER LISTADO DE PROVEEDORES'];
    let continuar = true;
    while (continuar){
        console.log(`\n\n`);
        mostrar.msgInfo(` OPERACIONES CON PROVEEDORES`);
        let indice = readlineSync.keyInSelect(opeProv, 'Que desea hacer:',{cancel: 'Volver Atras'});
        switch (indice) {
            case 0:
                let nombre: string = readlineSync.question(mostrar.msgWarning(`Ingrese el nombre del NUEVO Proveedor: `));
                let telefono = readlineSync.question(mostrar.msgWarning(`Ingrese la direccion: `));
                redVeterinaria.altaProveedor(nombre,telefono);
                pausar();
                break;
            case 1:
                if (redVeterinaria.tieneProveedores()){
                    let proveedorActual = obtenerProveedorDeTrabajo(redVeterinaria);
                    if (proveedorActual[1] == true) {
                        let telefonoMod= readlineSync.question(mostrar.msgWarning(`Ingrese el telefono nuevo: `));
                        redVeterinaria.modificaProveedor(proveedorActual[0].getId(), telefonoMod);
                    } else {
                        continuar = false;
                        mostrar.msgWarning(`Se interrumpio la operacion en la eleccion del Proveedor.`);    
                    }   
                } else {
                    mostrar.msgWarning(`No es posible lleva a cabo la operación porque la Red no tiene Proveedores.`);
                }
                pausar();
                break;
            case 2:
                if (redVeterinaria.tieneProveedores()){
                    let proveedorActual = obtenerProveedorDeTrabajo(redVeterinaria);
                    if (proveedorActual[1] == true) {
                        redVeterinaria.eliminaProveedor(proveedorActual[0].getId());
                    } else {
                        continuar = false;
                        mostrar.msgWarning(`Se interrumpio la operacion en la eleccion del Proveedor.`);    
                    }
                } else {
                    continuar = false;
                    mostrar.msgWarning(`No es posible lleva a cabo la operación porque la Red no tiene Proveedores.`);
                }
                pausar();
                break;
            case 3:
                redVeterinaria.verProveedoresEnLinea(true);
                pausar();
                break;
            default:
                continuar = false;
        }
    }
}
function obtenerMascotaDeTrabajo( cliente: Cliente): [Paciente , boolean] {
    /* muestro los clientes y le hago elegir */
    const recuperaId = function(paciente: Paciente) {
        return (`Id: ${paciente.getIdCliente()}-${paciente.getNombre().toUpperCase()}`);
    }
    let mascotasVigentes = cliente.getListaMascota();
    let opciones = mascotasVigentes.map(recuperaId);
    mostrar.msgInfo(`LISTADO DE MASCOTAS DISPONIBLES`);
    let op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion correspondiente al Paciente con el que pretende trabajar: ',{cancel: 'Cancelar Tarea'});
    if (op == -1) {
        return [mascotasVigentes[0], false];    
    } else { 
        return [mascotasVigentes[op], true];
    }
}
function obtenerSucursalDeTrabajo(red: RedComercial): [Sucursal, boolean] {
    /* muestro las sucursales y le hago elegir*/
    const recuperaId = function(sucursal:Sucursal) {
        return (`Id: ${sucursal.getId()}-${sucursal.getNombre().toUpperCase()}`);
    }
    let sucursalesVigentes = red.getSucursales();
    let opciones = sucursalesVigentes.map(recuperaId);
    mostrar.msgInfo(`LISTADO DE SUCURSALES DISPONIBLES`);
    let op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion de acuerdo a la Sucursal sobre la que se realizaran las tareas: ',{cancel: 'Cancelar Tarea'});
    if (op == -1) {
        return [sucursalesVigentes[0], false];    
    } else { 
        return [sucursalesVigentes[op], true];
    }    
}
function obtenerClienteDeTrabajo(sucursal: Sucursal): [Cliente , boolean] {
    /* muestro los clientes y le hago elegir */
    const recuperaId = function(cliente: Cliente) {
        return (`Id: ${cliente.getId()}-${cliente.getNombre().toUpperCase()}`);
    }
    let clientesVigentes = sucursal.getClientes();
    let opciones = clientesVigentes.map(recuperaId);
    mostrar.msgInfo(`LISTADO DE CLIENTES DISPONIBLES`);
    let op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion conforme al cliente que se pretende trabajar: ', {cancel: 'Cancelar Tarea'});
    if (op == -1) {
        return [clientesVigentes[0], false];    
    } else { 
        return [clientesVigentes[op], true];
    }
}
function obtenerProveedorDeTrabajo(red:RedComercial): [Proveedor , boolean] {
    /* muestro los clientes y le hago elegir */
    const recuperaId = function(proveedor: Proveedor) {
        return (`Id: ${proveedor.getId()}-${proveedor.getNombre().toUpperCase()}`);
    }
    let proveedoresVigentes = red.getProveedores();
    let opciones = proveedoresVigentes.map(recuperaId);
    mostrar.msgInfo(`LISTADO DE PROVEEDORES DISPONIBLES`);
    let op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion conforme al proveedores  que se pretende trabajar: ', {cancel: 'Cancelar Tarea'});
    if (op == -1) {
        return [proveedoresVigentes[0], false];    
    } else { 
        return [proveedoresVigentes[op], true];
    }
}
function operacionesClientes(): void  {
    let opeCli = ['ALTA CLIENTE NUEVO','MODIFICACION CLIENTE EXISTENTE','BAJA CLIENTE','VER CLIENTES x SUCURSAL'];
    let continuar = true;
    while (continuar){
        mostrar.msgInfo(`\nOPERACIONES CON CLIENTES`);
        let indice = readlineSync.keyInSelect(opeCli,'Que desea hacer: ',{cancel: 'Volver Atras'});
        console.log(`\n`);
        if (redVeterinaria.tieneSucursales()&& (indice!= -1) ){
            let sucursal = obtenerSucursalDeTrabajo(redVeterinaria);
            if (sucursal[1] == true) {
                switch (indice) {
                    case 0:
                        mostrar.msgOk(opeCli[indice]);
                        let nombre: string = readlineSync.question(mostrar.msgWarning(`Ingrese el Nombre del NUEVO CLIENTE: `));
                        let telefono = readlineSync.question(mostrar.msgWarning(`Ingrese el telefono del CLIENTE: `));
                        redVeterinaria.agregarClienteaSucursal(sucursal[0], nombre, telefono); 
                        break;
                    case 1:
                        if (sucursal[0].tieneClientes()){
                            let ClienteActual = obtenerClienteDeTrabajo(sucursal[0]);        
                            if (ClienteActual[1] == true) {
                                mostrar.msgOk(opeCli[indice]);
                                let nombreMod: string = readlineSync.question(mostrar.msgWarning(`Ingrese el NUEVO NOMBRE: `));
                                let telMod= readlineSync.question(mostrar.msgWarning(`Ingrese el NUEVO TELEFONO: `));
                                sucursal[0].modificarCliente(ClienteActual[0].getId(), nombreMod, telMod);
                            } else {
                                mostrar.msgWarning(`Se interrumpio la operacion.`);
                                continuar = false;
                            }
                        } else {
                            mostrar.msgWarning(`No es posible lleva a cabo la operacion porque la sucursal no posee Clientes. Debe dar de Alta un cliente primero.`);
                        }
                        break;
                    case 2:
                        if (sucursal[0].tieneClientes()){
                            let ClienteActual = obtenerClienteDeTrabajo(sucursal[0]);        
                            if (ClienteActual[1] == true) {
                                mostrar.msgError(opeCli[indice]);
                                sucursal[0].eliminarCliente(ClienteActual[0].getId());
                            } else {
                                mostrar.msgWarning(`Se interrumpio la operacion.`);
                                continuar = false;
                            }
                        } else {
                            mostrar.msgError(`No es posible lleva a cabo la operacion porque la sucursal no posee Clientes. Debe dar de Alta un cliente primero.`);
                        }
                        break;
                    case 3:
                        console.log(sucursal[0].toString());
                        break;
                    default:
                        continuar = false;
                }
            } else {
                continuar = false;
                mostrar.msgWarning(`Se interrumpio la operacion.`);
            }
        } else {
            continuar = false;
            if (indice!= -1) {
                 mostrar.msgError(`No es posible porque no tiene sucursales. Debe dar de Alta una Sucursal`);
            }
        }

    }
}
function operacionesMenuPrincipal(): void {
    let operacionesPrincipales = ['CRUD SUCURSALES','CRUD PROVEEDORES','CRUD CLIENTES','CRUD MASCOTAS', 'VER TODA la RED'];
    let terminar: boolean = false;
    while (!terminar) {
        mostrar.msgInfo(`\nOPERACIONES MENU PRINCIPAL`);
        let index = readlineSync.keyInSelect(operacionesPrincipales, 'Seleccione el numero de la opcion ', {cancel: 'SALIR'});
        console.log(`\n`);
        switch (index) {
            case 0:
                operacionesSucursales();
                break;            
            case 1: 
                operacionesProveedores();
                break;
            case 2:
                operacionesClientes();
                break;
            case 3:
                operacionesPacientes();
                break;                
            case 4:
                console.log(redVeterinaria.toString());
                pausar();          
                break;
            default: 
                mostrar.msgOk(`\n\n  Gracias por Utilizar la Aplicacion.`);
                terminar= true;
        }
    }
}

let redVeterinaria: RedComercial = new RedComercial("Mundo Animal");
bienvenida();
operacionesMenuPrincipal();
