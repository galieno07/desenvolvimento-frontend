const express = require('express');
const app = express();
const port = 3000

console.log(`http://localhost:${port}`)
app.listen(port)

app.post('/cadastrar-usuario', (req, res) => {
    const { nome, email, senha, confirmacaoSenha } = req.body;

    if (usuarios.has(email)) {
        return res.status(400).json({ mensagem: 'Email já está sendo utilizado' });
    }

    if (senha !== confirmacaoSenha) {
        return res.status(400).json({ mensagem: 'As senhas devem ser iguais' });
    }

    usuarios.set(email, { nome, email, senha });
    res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!!' });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const usuario = usuarios.get(email);
    if (!usuario || usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Usuário ou senha inválido' });
    }

    res.status(200).json({ mensagem: 'Login bem sucedido' });
});



app.listen(3000, () => console.log('Servidor rodando na porta 3000'));


