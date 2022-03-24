#!/usr/bin/env node
// con la linea anterior nos aseguramos que este se ejecutara en la linea de comandos, y que es de node
//en esta carpeta bin, esta la configuracion del paquete que se instala de forma global

let random =  require('../src/index'); //nos traemos la funcion exportada.

random.randomMsg();



