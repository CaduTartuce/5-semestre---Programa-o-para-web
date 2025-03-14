const express = require(`express`);
const calc = require(`./calculadora`);

const app = express();

app.get(`/ola/:cadu`, (req, res)=>{
    res.send(`Ola, ${req.params.nome}!`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`app rodando na porta ` + PORT);
});