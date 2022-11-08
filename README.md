
Este repositorio contiene un trabajo grupal de caracter obligatorio para aplicar conocimientos adquiridos en el transcurso del segundo semestre del año 2022 en la materia FIP y Programación de la carrera Programador Full-stack.

## Participantes 
- Yamila Dib
- Axel Godardo
- Silvio Alvarez
- Andrés Fernández

# Enunciado Veterinarias
Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
 - Sucursales de Veterinarias
 - Clientes
 - Pacientes (mascotas)
 - Proveedores

## Veterinarias
nombre, dirección, id (un número generado aleatoriamente al momento del alta) La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.

## Clientes
nombre, teléfono, si es VIP (cliente recurrente, en el cual se guarda el número de visitas e incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o mas) y un id (generado igual que los anteriores), las veterinarias deben contar con la opción de alta, baja y modificación de los mismos.

## Pacientes (mascotas)
nombre, especie (si no es perro o gato, deberá registrarse como exótica), id del dueño, las veterinarias deben contar con la opción de alta, baja y modificación de los mismos.

## Proveedores
nombre, teléfono y un id generado como los otros la red debe contar con la opción de alta, baja y modificación de los mismos.

IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. Si ya existe se debe volver a generar.

