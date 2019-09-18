const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

//menggunakan express
app.get('/siswa', (request, response)=>
{
    response.end("Menampilkan siswa");
})

app.get('/siswa/:nama' , (request, response)=>
{
    //Proses dengan siswa bernama x
    let namaSiswa = request.params.nama;

    response.end("Nama saya adalah : " + namaSiswa);
})

app.post('/siswa', (request,response)=>
{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Nama saya : " + namaSiswa + "Alamat saya : " + alamatSiswa);
})

app.delete('/siswa/:nama' , (request, response)=>
{
    let namaSiswa = request.params.nama;

    response.end("Siswa bernama : " + namaSiswa + " akan dihapus tekok sistemmmmmmmmmmmmmmmmmmmmm!");
})

app.put('/siswa/:id' , (req, res)=>
{
    let id = req.params.id
    let namaSiswa = req.body.nama;
    let alamatSiswa = req.body.alamat;

    res.end("Siswa dengan ID " + id + " telah terupdate");
})

app.listen('8080', (e)=>
{
    console.log(e)
})