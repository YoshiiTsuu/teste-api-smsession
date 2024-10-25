const express = require('express');
const cors = require('cors');
const app = express();

// Configurar CORS para permitir a origem específica
app.use(cors({
    origin: 'https://otintrahomm.portoseguro.brasil'
}));

app.use(express.json());

app.post('/api/token', (req, res) => {
    const { smsession } = req.body;

    if (!smsession) {
        return res.status(400).json({ error: 'Token SMSESSION não fornecido' });
    }

    res.json({ message: 'Token SMSESSION recebido com sucesso', token: smsession });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
