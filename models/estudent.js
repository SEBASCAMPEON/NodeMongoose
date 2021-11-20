const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Definimos los modelos para tener orden en nuestra bd no rel

const studentSchema = new Schema({
    nombre:String,
    apellido:String,
    edad:Number,
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;