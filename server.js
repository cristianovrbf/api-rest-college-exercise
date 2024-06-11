const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use('/', require('./server/route/paymentReceiversRoute'));
app.use('/', require('./server/route/loginRoute'));
app.use('/', require('./server/route/servicesRoute'));

app.use(cors());

app.listen(3000);
