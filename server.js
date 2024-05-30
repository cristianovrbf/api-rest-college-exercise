const express = require('express');
const app = express();
const database = require('./server/infra/database');

app.use('/', require('./server/route/paymentReceiversRoute'));
app.get('/posts', function(){
    return database.query("select * from payments.payment_receiver");    
})

app.get('/dados', async (req, res) => {
    try {
        const data = await database.any('SELECT * FROM payments.payment_receiver'); // Ajuste a consulta conforme sua necessidade
        res.json(data);
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        console.log(error.data);
        res.status(500).send('Erro ao consultar o banco de dados');
    }
});

app.listen(3000);
