import express from 'express';
import database from './configs/dbconfig.js';
import cors from 'cors';
import accountsRoute from './routes/accountRoutes.js';

const PORT = 5000;
const app = express();

try {
    await database.authenticate();
    console.log("connection established");
} 
catch(error){
    console.log(error);
}

app.use(cors());
app.use(express.json());
app.use('/accounts', accountsRoute);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})