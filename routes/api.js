const express = require('express');
const enrutador = express.Router();

const Student = require('../models/estudent');
//el mongoose ya tiene metodos establecidos
//no tenemos que hacer como con el ejemlpo de mongo db
//que debemos llamar mongoClient y hacer todo el codigo para las consultas
//En este caso usamos las funciones de moongose create, find etc.
enrutador.get('/students', function (req, res) {
    Student.find().then(function (students) {
        res.send(students);
    });
})

enrutador.get('/student/:id', function (req, res) {
    Student.findOne({ _id: req.params.id }).then(function (student) {
        res.send(student);
    });
})

enrutador.post('/student', function (req, res) {
    Student.create(req.body).then(function (student) {
        res.send(student);
    });
})

enrutador.put('/student/:id', function (req, res) {
    Student.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (student) {
        //Aquí ya se actualizo, pero vamos a reotrnar el nuevo elemento ya editado   
        Student.findOne({ _id: req.params.id }).then(function (student) {
            res.send(student);
        })
    });
});

enrutador.delete('/student/:id', function (req, res) {
    Student.findOneAndDelete({ _id: req.params.id }).then(function (student) {
        res.send(student);
    });
});

module.exports = enrutador;