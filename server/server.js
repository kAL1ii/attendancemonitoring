import express from 'express';
import cors from 'cors';
import database from './configs/db/dbconfig.js';

try {
    await database.authenticate();
    console.log("connection established");
} 
catch(error){
    console.log(error);
}

const app = express();
app.use(cors());
app.use(express.json())
const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});