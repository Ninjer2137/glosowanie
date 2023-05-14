const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const { createConnection } = require('net')
const internal = require('stream')

const app = express()

app.use(cors())

const port = 3000

app.get('/', (req, res)=>(
    res.send('ok')
))

app.get('/select', (req, res)=>{
    const sql = "SELECT * FROM glosy"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

app.get('/selectkandyvote1', (req, res)=>{
    const sql = "SELECT COUNT(glos) AS liczba FROM `glosy` WHERE glos=1"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else {
            res.send(`${result[0].liczba};`)
        }
    })
})

app.get('/selectkandyvote2', (req, res)=>{
    const sql = "SELECT COUNT(glos) AS liczba FROM `glosy` WHERE glos=2"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else {
            res.send(`${result[0].liczba};`)
        }
    })
})

app.get('/selectkandyvote3', (req, res)=>{
    const sql = "SELECT COUNT(glos) AS liczba FROM `glosy` WHERE glos=3"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else {
            res.send(`${result[0].liczba};`)
        }
    })
})

app.get('/selecttable', (req, res)=>{
    const sql = "SELECT * FROM `glosy` ORDER BY glos"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

app.get("/add/:pesel/:imie/:nazwisko/:glos", (req, res)=>{
    const pesel = req.params.pesel
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const glos = req.params.glos

    const sql = `INSERT INTO glosy (pesel, imie, nazwisko, glos) VALUES ('${pesel}', '${imie}', '${nazwisko}', '${glos}')`
    con.query(sql, function(err, result, filds){
        if(err){
            console.log(err)
        }else {
            res.send(result)
        }
    })
})

app.listen(port, ()=>(
    console.log("aplikacja działa na porcie: "+port)
))

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "glosowanie"
})

con.connect(function(err){
    if(err){
        console.log(err)
    }else {
        console.log("połączono z bazą danych")
    }
})