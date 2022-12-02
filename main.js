"use strict";
exports.__esModule = true;
var Paciente_1 = require("./Clases/Paciente");
var RedComercial_1 = require("./Clases/RedComercial");
var mostrar = require("./Helpers/functions");
var readlineSync = require("readline-sync");
function bienvenida() {
    console.log("\n\n");
    var titulo = "BIENVENIDO a ".concat(redVeterinaria.getNombre().toUpperCase());
    mostrar.msgInfo(titulo);
    var linea = '';
    for (var i = 0; i < titulo.length; i++) {
        linea += "═";
    }
    mostrar.msgInfo(linea);
}
function pausar() {
    console.log("\n\n\n\n\n\n\n\n\n\n");
    readlineSync.keyInPause('Oprima cualquier tecla para continuar...');
}
function operacionesPacientes() {
    var opePac = ['ALTA PACIENTE NUEVO', 'MODIFICAR PACIENTE EXISTENTE', 'BAJA DE PACIENTE', 'ATENDER MASCOTA', 'VER PACIENTES x CLIENTE'];
    var continuar = true;
    while (continuar) {
        mostrar.msgInfo("\nOPERACIONES CON PACIENTES");
        var indice = readlineSync.keyInSelect(opePac, 'Que desea hacer: ', { cancel: 'Volver Atras' });
        console.log("\n");
        if (redVeterinaria.tieneSucursales() && (indice != -1)) {
            var sucursal = obtenerSucursalDeTrabajo(redVeterinaria);
            if (sucursal[0].tieneClientes()) {
                var ClienteActual = obtenerClienteDeTrabajo(sucursal[0]);
                switch (indice) {
                    case 0:
                        if (ClienteActual[1] == true) {
                            mostrar.msgInfo(opePac[indice]);
                            var nombre = readlineSync.question(mostrar.msgWarning("Ingrese el NOMBRE de la MASCOTA NUEVA: "));
                            var especie = readlineSync.question("Ingrese la especie: [gato / perro ]: ", { limit: ['gato', 'perro', 'exotico'] });
                            var mascotaNueva = new Paciente_1["default"](ClienteActual[0].getId(), nombre, especie);
                            ClienteActual[0].agregaMascota(mascotaNueva);
                        }
                        else {
                            continuar = false;
                            mostrar.msgWarning("Se interrumpio la operacion al seleccionar el Cliente.");
                        }
                        break;
                    case 1:
                        if (ClienteActual[1] == true) {
                            var mascotaActual = obtenerMascotaDeTrabajo(ClienteActual[0]);
                            if (mascotaActual[1] == true) {
                                mostrar.msgInfo(opePac[indice]);
                                var nombreMod = readlineSync.question(mostrar.msgWarning("Ingrese el NUEVO NOMBRE de la MASCOTA: "));
                                mascotaActual[0].setNombre(nombreMod);
                            }
                            else {
                                continuar = false;
                                mostrar.msgWarning("Se interrumpio la operacion en la eleccion de la mascota.");
                            }
                        }
                        else {
                            continuar = false;
                            mostrar.msgWarning("Se interrumpio la operacion en la eleccion del Cliente.");
                        }
                        break;
                    case 2:
                        if (ClienteActual[1] == true) {
                            var mascotaActual = obtenerMascotaDeTrabajo(ClienteActual[0]);
                            if (mascotaActual[1] == true) {
                                mostrar.msgInfo(opePac[indice]);
                                ClienteActual[0].eliminarMascota(mascotaActual[0].getIdCliente());
                            }
                            else {
                                continuar = false;
                                mostrar.msgWarning("Se interrumpio la operacion en la eleccion de la Mascota.");
                            }
                        }
                        else {
                            continuar = false;
                            mostrar.msgWarning("Se interrumpio la operacion en la eleccion del Cliente.");
                        }
                        break;
                    case 3:
                        if (ClienteActual[1] == true) {
                            var mascotaActual = obtenerMascotaDeTrabajo(ClienteActual[0]);
                            if (mascotaActual[1] == true) {
                                mostrar.msgInfo(opePac[indice]);
                                ClienteActual[0].agregarVisita();
                                mostrar.msgOk("\nEn el d\u00EDa de la fecha el cliente ".concat(ClienteActual[0].esBip() == true ? 'RECURENTE' : '', " ").concat(ClienteActual[0].getNombre().toUpperCase(), " se hizo presente con su mascota ").concat(mascotaActual[0].getNombre().toUpperCase(), "."));
                            }
                            else {
                                continuar = false;
                                mostrar.msgWarning("Se interrumpio la operaci\u00F3n en la elecci\u00F3n de la Mascota.");
                            }
                        }
                        else {
                            continuar = false;
                            mostrar.msgWarning("Se interrumpio la operaci\u00F3n en la elecci\u00F3n del Cliente.");
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
            }
            else {
                continuar = false;
                if (indice != -1) {
                    mostrar.msgWarning("No es posible porque la Sucursal no tiene Clientes. Debe cargar el Cliente primero.");
                }
            }
        }
        else {
            continuar = false;
            if (indice != -1) {
                mostrar.msgError("No es posible porque la Red no tiene Sucursales.");
            }
        }
    }
}
function operacionesSucursales() {
    var opeSuc = ['ALTA SUCURSAL NUEVA', 'MODIFICACION SUCURSAL EXISTENTE', 'BAJA SUCURSAL', 'Ver TODAS las SUCURSALES'];
    var continuar = true;
    while (continuar) {
        mostrar.msgInfo("\nOPERACIONES CON SUCURSALES");
        var indice = readlineSync.keyInSelect(opeSuc, 'Que desea hacer:', { cancel: 'Volver Atras' });
        switch (indice) {
            case 0:
                mostrar.msgInfo(opeSuc[indice]);
                var nombre = readlineSync.question(mostrar.msgWarning("Ingrese el Nombre de la NUEVA SUCURSAL: "));
                var dire = readlineSync.question(mostrar.msgWarning("Ingrese la Direccion: "));
                var sucursalNueva = redVeterinaria.altaSucursal(nombre.toUpperCase(), dire.toUpperCase());
                pausar();
                break;
            case 1:
                if (redVeterinaria.tieneSucursales()) {
                    var sucursalActual = obtenerSucursalDeTrabajo(redVeterinaria);
                    if (sucursalActual[1] == true) {
                        mostrar.msgInfo(opeSuc[indice]);
                        var nombreMod = readlineSync.question(mostrar.msgWarning("Ingrese el NUEVO nombre para la Sucursal: "));
                        var direMod = readlineSync.question(mostrar.msgWarning("Ingrese la NUEVA direcci\u00F3n para la Sucursal: "));
                        redVeterinaria.modificaSucursal(sucursalActual[0].getId(), nombreMod, direMod);
                    }
                    else {
                        continuar = false;
                        mostrar.msgWarning("Se interrumpio la operacion en la eleccion de la Sucursal.");
                    }
                }
                else {
                    continuar = false;
                    mostrar.msgWarning("No es posible lleva a cabo la operaci\u00F3n porque la Red no tiene Sucursales.");
                }
                pausar();
                break;
            case 2:
                if (redVeterinaria.tieneSucursales()) {
                    var sucursalActual = obtenerSucursalDeTrabajo(redVeterinaria);
                    if (sucursalActual[1] == true) {
                        mostrar.msgInfo(opeSuc[indice]);
                        redVeterinaria.eliminaSucursal(sucursalActual[0].getId());
                    }
                    else {
                        continuar = false;
                        mostrar.msgWarning("Se interrumpio la operacion en la eleccion de la Sucursal.");
                    }
                }
                else {
                    continuar = false;
                    mostrar.msgWarning("No es posible lleva a cabo la operaci\u00F3n porque la Red no tiene Sucursales.");
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
function operacionesProveedores() {
    var opeProv = ['ALTA PROVEEDOR NUEVO', 'MODIFICACION PROVEEDOR EXISTENTE', 'BAJA PROVEEDOR', 'VER LISTADO DE PROVEEDORES'];
    var continuar = true;
    while (continuar) {
        console.log("\n\n");
        mostrar.msgInfo(" OPERACIONES CON PROVEEDORES");
        var indice = readlineSync.keyInSelect(opeProv, 'Que desea hacer:', { cancel: 'Volver Atras' });
        switch (indice) {
            case 0:
                var nombre = readlineSync.question(mostrar.msgWarning("Ingrese el nombre del NUEVO Proveedor: "));
                var telefono = readlineSync.question(mostrar.msgWarning("Ingrese la direccion: "));
                redVeterinaria.altaProveedor(nombre, telefono);
                pausar();
                break;
            case 1:
                if (redVeterinaria.tieneProveedores()) {
                    var proveedorActual = obtenerProveedorDeTrabajo(redVeterinaria);
                    if (proveedorActual[1] == true) {
                        var telefonoMod = readlineSync.question(mostrar.msgWarning("Ingrese el telefono nuevo: "));
                        redVeterinaria.modificaProveedor(proveedorActual[0].getId(), telefonoMod);
                    }
                    else {
                        continuar = false;
                        mostrar.msgWarning("Se interrumpio la operacion en la eleccion del Proveedor.");
                    }
                }
                else {
                    mostrar.msgWarning("No es posible lleva a cabo la operaci\u00F3n porque la Red no tiene Proveedores.");
                }
                pausar();
                break;
            case 2:
                if (redVeterinaria.tieneProveedores()) {
                    var proveedorActual = obtenerProveedorDeTrabajo(redVeterinaria);
                    if (proveedorActual[1] == true) {
                        redVeterinaria.eliminaProveedor(proveedorActual[0].getId());
                    }
                    else {
                        continuar = false;
                        mostrar.msgWarning("Se interrumpio la operacion en la eleccion del Proveedor.");
                    }
                }
                else {
                    continuar = false;
                    mostrar.msgWarning("No es posible lleva a cabo la operaci\u00F3n porque la Red no tiene Proveedores.");
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
function obtenerMascotaDeTrabajo(cliente) {
    /* muestro los clientes y le hago elegir */
    var recuperaId = function (paciente) {
        return ("Id: ".concat(paciente.getIdCliente(), "-").concat(paciente.getNombre().toUpperCase()));
    };
    var mascotasVigentes = cliente.getListaMascota();
    var opciones = mascotasVigentes.map(recuperaId);
    mostrar.msgInfo("LISTADO DE MASCOTAS DISPONIBLES");
    var op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion correspondiente al Paciente con el que pretende trabajar: ', { cancel: 'Cancelar Tarea' });
    if (op == -1) {
        return [mascotasVigentes[0], false];
    }
    else {
        return [mascotasVigentes[op], true];
    }
}
function obtenerSucursalDeTrabajo(red) {
    /* muestro las sucursales y le hago elegir*/
    var recuperaId = function (sucursal) {
        return ("Id: ".concat(sucursal.getId(), "-").concat(sucursal.getNombre().toUpperCase()));
    };
    var sucursalesVigentes = red.getSucursales();
    var opciones = sucursalesVigentes.map(recuperaId);
    mostrar.msgInfo("LISTADO DE SUCURSALES DISPONIBLES");
    var op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion de acuerdo a la Sucursal sobre la que se realizaran las tareas: ', { cancel: 'Cancelar Tarea' });
    if (op == -1) {
        return [sucursalesVigentes[0], false];
    }
    else {
        return [sucursalesVigentes[op], true];
    }
}
function obtenerClienteDeTrabajo(sucursal) {
    /* muestro los clientes y le hago elegir */
    var recuperaId = function (cliente) {
        return ("Id: ".concat(cliente.getId(), "-").concat(cliente.getNombre().toUpperCase()));
    };
    var clientesVigentes = sucursal.getClientes();
    var opciones = clientesVigentes.map(recuperaId);
    mostrar.msgInfo("LISTADO DE CLIENTES DISPONIBLES");
    var op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion conforme al cliente que se pretende trabajar: ', { cancel: 'Cancelar Tarea' });
    if (op == -1) {
        return [clientesVigentes[0], false];
    }
    else {
        return [clientesVigentes[op], true];
    }
}
function obtenerProveedorDeTrabajo(red) {
    /* muestro los clientes y le hago elegir */
    var recuperaId = function (proveedor) {
        return ("Id: ".concat(proveedor.getId(), "-").concat(proveedor.getNombre().toUpperCase()));
    };
    var proveedoresVigentes = red.getProveedores();
    var opciones = proveedoresVigentes.map(recuperaId);
    mostrar.msgInfo("LISTADO DE PROVEEDORES DISPONIBLES");
    var op = readlineSync.keyInSelect(opciones, 'Selecciona la opcion conforme al proveedores  que se pretende trabajar: ', { cancel: 'Cancelar Tarea' });
    if (op == -1) {
        return [proveedoresVigentes[0], false];
    }
    else {
        return [proveedoresVigentes[op], true];
    }
}
function operacionesClientes() {
    var opeCli = ['ALTA CLIENTE NUEVO', 'MODIFICACION CLIENTE EXISTENTE', 'BAJA CLIENTE', 'VER CLIENTES x SUCURSAL'];
    var continuar = true;
    while (continuar) {
        mostrar.msgInfo("\nOPERACIONES CON CLIENTES");
        var indice = readlineSync.keyInSelect(opeCli, 'Que desea hacer: ', { cancel: 'Volver Atras' });
        console.log("\n");
        if (redVeterinaria.tieneSucursales() && (indice != -1)) {
            var sucursal = obtenerSucursalDeTrabajo(redVeterinaria);
            if (sucursal[1] == true) {
                switch (indice) {
                    case 0:
                        mostrar.msgOk(opeCli[indice]);
                        var nombre = readlineSync.question(mostrar.msgWarning("Ingrese el Nombre del NUEVO CLIENTE: "));
                        var telefono = readlineSync.question(mostrar.msgWarning("Ingrese el telefono del CLIENTE: "));
                        redVeterinaria.agregarClienteaSucursal(sucursal[0], nombre, telefono);
                        break;
                    case 1:
                        if (sucursal[0].tieneClientes()) {
                            var ClienteActual = obtenerClienteDeTrabajo(sucursal[0]);
                            if (ClienteActual[1] == true) {
                                mostrar.msgOk(opeCli[indice]);
                                var nombreMod = readlineSync.question(mostrar.msgWarning("Ingrese el NUEVO NOMBRE: "));
                                var telMod = readlineSync.question(mostrar.msgWarning("Ingrese el NUEVO TELEFONO: "));
                                sucursal[0].modificarCliente(ClienteActual[0].getId(), nombreMod, telMod);
                            }
                            else {
                                mostrar.msgWarning("Se interrumpio la operacion.");
                                continuar = false;
                            }
                        }
                        else {
                            mostrar.msgWarning("No es posible lleva a cabo la operacion porque la sucursal no posee Clientes. Debe dar de Alta un cliente primero.");
                        }
                        break;
                    case 2:
                        if (sucursal[0].tieneClientes()) {
                            var ClienteActual = obtenerClienteDeTrabajo(sucursal[0]);
                            if (ClienteActual[1] == true) {
                                mostrar.msgError(opeCli[indice]);
                                sucursal[0].eliminarCliente(ClienteActual[0].getId());
                            }
                            else {
                                mostrar.msgWarning("Se interrumpio la operacion.");
                                continuar = false;
                            }
                        }
                        else {
                            mostrar.msgError("No es posible lleva a cabo la operacion porque la sucursal no posee Clientes. Debe dar de Alta un cliente primero.");
                        }
                        break;
                    case 3:
                        console.log(sucursal[0].toString());
                        break;
                    default:
                        continuar = false;
                }
            }
            else {
                continuar = false;
                mostrar.msgWarning("Se interrumpio la operacion.");
            }
        }
        else {
            continuar = false;
            if (indice != -1) {
                mostrar.msgError("No es posible porque no tiene sucursales. Debe dar de Alta una Sucursal");
            }
        }
    }
}
function operacionesMenuPrincipal() {
    var operacionesPrincipales = ['CRUD SUCURSALES', 'CRUD PROVEEDORES', 'CRUD CLIENTES', 'CRUD MASCOTAS', 'VER TODA la RED'];
    var terminar = false;
    while (!terminar) {
        mostrar.msgInfo("\nOPERACIONES MENU PRINCIPAL");
        var index = readlineSync.keyInSelect(operacionesPrincipales, 'Seleccione el numero de la opcion ', { cancel: 'SALIR' });
        console.log("\n");
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
                mostrar.msgOk("\n\n  Gracias por Utilizar la Aplicacion.");
                terminar = true;
        }
    }
}
var redVeterinaria = new RedComercial_1["default"]("Mundo Animal");
bienvenida();
operacionesMenuPrincipal();
