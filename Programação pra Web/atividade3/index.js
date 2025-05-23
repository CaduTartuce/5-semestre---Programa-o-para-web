const express = require("express");
const app = express();

app.get("/", (req, res) => {
    let html = <h1>app_calculadora</h1>
    html += "<h3>Rotas disponiveis</h3>"
    html += `<p>/somar/:a/:b (<a href="somar/2/3">somar/2/3)</p>`
    html += `<p>/subtrair/:a/:b (<a href="subtrair/2/3">subtrair/2/3)</p>`
    html += `<p>/multiplicar/:a/:b (<a href="multiplicar/2/3">multiplicar/2/3)</p>`
    html += `<p>/dividir/:a/:b (<a href="dividir/2/3">dividir/2/3)</p>`
    res.send(html);
});

app.get(`/somar/:a/:b`, (req, res)=> {
    let b = number(req.params.b);
    let a = number(req.params.a);
    let resultado = calc.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});

app.get(`/subtrair/:a/:b`, (req, res)=> {
    let b = number(req.params.b);
    let a = number(req.params.a);
    let resultado = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${resultado}`);
});

app.get(`/multiplicar/:a/:b`, (req, res)=> {
    let b = number(req.params.b);
    let a = number(req.params.a);
    let resultado = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${resultado}`);
});

app.get(`/dividir/:a/:b`, (req, res)=> {
    let b = number(req.params.b);
    let a = number(req.params.a);
    let resultado = calc.dividir(a, b);
    res.send(`${a} / ${b} = ${resultado}`);
});

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log(`App rodando na porta ${PORT}`);
});