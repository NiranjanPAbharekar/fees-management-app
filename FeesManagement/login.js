const express = require('express');
const app = express();
require('dotenv').config();
const routes=require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');



app.use(cors({
  origin: 'http://localhost:4200',  // allow only Angular app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use('/api', routes);

const mainDb = async () => {
     try {
    await mongoose.connect(process.env.DataBase);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Database connection failed', error);
  } 
};


mainDb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
