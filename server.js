const express = require('express');
const app = express();

//Rota principal
app.get('/', (req, res) =>{
    res.send('Olá, este é o servidor com expre');
})

//Rota "sobre"
app.get('/sobre', (req,res)=>{
    res.send('Olá, este é o servidor com Express');
});

//Rota "Produtos"
app.get('/produtos', (req,res)=>{
     res.send('Lista de Produtos');
});

//Rota que retorna JSON (simula uma API)
app.get('/api/produtos', (req,res)=>{
    const produtos = [
        
    {id: 1,nome:'Mouse'},
    {id: 2,nome:'Teclado'}
    ];
});

//Inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log('Servidor rodando http://localhost:3000');

});