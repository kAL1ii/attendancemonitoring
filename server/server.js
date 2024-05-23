import express from 'express';
import database from './configs/db/dbconfig.js';
import router from './routes/accountRoutes.js';
import cors from 'cors';

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
app.use(express.json())
app.use('/accounts', router);


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})