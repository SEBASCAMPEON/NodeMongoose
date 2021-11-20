const express = require('express');
const mongoose = require('mongoose');

//Si no existe la base de datos, esta línea la crea al llamar la función de conexión
const url='mongodb://127.0.0.1:27017/database';
mongoose.connect(url);

//Instanciar express
const app = express();
const port= 3000;

//use
app.use(express.json());
app.use('/api', require('./routes/api.js'))

app.listen(port, function(){
    console.log('Server running in http://localhost:' + port);
});


//NotaS:
//mongoose me pide definir un modelo o plantilla para el manejo de los datos, creamos la carpeta models
//defino una carpeta routes donde voy a definir las rutas del proyecto
//con este codigo no necesitamos crear la colección como tal primero, sino que cuando hacemos un post a la bd, crea la colección si no existe
//Sin embargo esta estructura no es camisa de fuerza
//Cada persona organiza sus carpetas como quiere, pero hay un standar establecido
