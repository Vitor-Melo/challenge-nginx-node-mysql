const express = require('express')
const mysql = require('mysql')
const faker = require('faker')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}


const connection = mysql.createConnection(config)


app.get('/', (req, res) => {
    const name = faker.name.findName();

    connection.query(`INSERT INTO people(name) values("${name}")`)

    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        res.send(`
          <h1>Full Cycle Rocks!</h1>
          <ul>
            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
          </ul>
        `)
    })
})

app.listen(port, () => {
    console.log('Running port: ' + port);
})


























