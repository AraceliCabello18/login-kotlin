const express = require('express')
const mysql = require('mysql')
const bodyParse = require('body-parse')

const app = express()

app.use(bodyParse.json())

const puerto = 3000;

const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'gatos',
  user: 'root',
  password: ''
})

app.post('/appAgregarUsuario', (req, res) =>{
  const usuario = {
  nombre: req.body.nombre,
  apPaterno: req.body.apPaterno,
  apMaterno: req.body.apMaterno,
  edad: req.body.edad,
  genero: req.body.genero,
  correo: req.body.correo,
  contrasena: req.body.contrasena,
  fechaNacimiento: req.body.fechaNacimiento
  }
const querry = 'INSERT INTO t_usuario SET ?'
conexion.query(query, usuario, (error)=>{
  if(error) return console.error(error.message)

  res.json('Se inserto correctamente el usuario')
})
})