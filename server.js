const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/', require('./server/route/paymentReceiversRoute'));
app.use('/', require('./server/route/loginRoute'));
app.use('/', require('./server/route/servicesRoute'));
app.use('/', require('./server/route/serviceRequestRoute'));


app.listen(3000);
