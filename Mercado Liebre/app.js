const express = require("express")

const path = require('path')

const app = express()

app.listen(3000, () => {
   console.log('El servidor esta corriendo')
})

app.get('/', (req, res) => {
   let htmlpath = path.resolve(__dirname, './views/home.html')
   res.sendFile(htmlpath)
})
