import express from 'express';
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

app.get('/api/v1', (req, res) => {
    res.writeHead('Hello Wolrd, coming from backend '+ PORT);
    res.end();
});