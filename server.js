const express = require('express');
require('dotenv').config();
const connectDB = require('./db');

const app = express();

app.use(express.json({ extended: false }));


connectDB();

// routes
app.use('/api/v1/user/', require('./routes/users'));
app.use('/api/v1/auth/', require('./routes/auth'));
app.use('/api/v1/contacts/', require('./routes/contacts'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is runing ${PORT}`));
