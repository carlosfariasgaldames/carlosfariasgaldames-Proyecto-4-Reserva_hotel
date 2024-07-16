
const promt = require('prompt-sync')();

require ("dotenv").config();


const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.SERVER_PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({extended: true}));
 
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log("servidor iniciado en el puerto" + port);
});

// http:localhost:3000/api/booking