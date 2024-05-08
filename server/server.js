import express from 'express';
import cors from 'cors';
import database from './configs/db/dbconfig.js';
import GuestRoutes from './routes/guestRoutes.js';
import ParentRoutes from './routes/parentRoutes.js';
import StudentRoutes from './routes/studentRoutes.js';

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


// URL 
app.use('/guest', GuestRoutes);
app.use('/parent', ParentRoutes);
app.use('/student', StudentRoutes);



const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});