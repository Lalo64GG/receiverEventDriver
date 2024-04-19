import express from 'express';
import cors from 'cors';
import pagosRoute from './src/pagos/infrestructure/routes/pagos.router';


const app = express();

const PORT = '3001';

let corOptions = {
    origin: '*'
};

app.use(cors(corOptions));

app.use(express.json());

app.use('/pagos', pagosRoute);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto:', PORT);
});