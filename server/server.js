const express = require('express')
const path = require ('path')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const Port = 5689;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static("Wine/server/public"))
app.listen(Port , ()=>{
    console.log(`Port is open at: http://localhost:${Port}`)
})

app.get('/images/Apriori', (req, res) => {
 res.sendFile(path.join(__dirname, 'public/images/Apriori.jpg'))
});
app.get('/images/chianti', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/chianti.jpg"))
});
app.get('/images/Chateau', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/Chateau.jpg"))
});
app.get('/images/glenfiddich', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/glenfiddich.jpg"))
});
app.get('/images/imperial', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/imperial.jpg"))
});
app.get('/images/jacobs', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/jacobs.jpg"))
});
app.get('/images/jimador', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/jimador.jpg"))
});
app.get('/images/Nobilo', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/Nobilo.jpg"))
});
app.get('/images/Palacio', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/Palacio.jpg"))
});
app.get('/images/pinot', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/pinot.jpg"))
});
app.get('/images/Rose', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/Rose.jpg"))
});
app.get('/images/Sauvignon', (req, res) => {
 res.sendFile(path.join(__dirname,  "public/images/Sauvignon.jpg"))
});
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '/asset/productData.js'))
});
