import express from 'express';
import cors from 'cors';
import database from './configs/db/dbconfig.js';
import GuestRoutes from './routes/guestRoutes.js';
import ParentRoutes from './routes/parentRoutes.js';
import StudentRoutes from './routes/studentRoutes.js';

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


// URL 
app.use('/guest', GuestRoutes);
app.use('/parent', ParentRoutes);
app.use('/student', StudentRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});