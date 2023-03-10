const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/router');
const app = express();
const port = 2300;
const db = "mongodb+srv://msv:224872@cluster0.hq0zwho.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db)
.then(()=>{
    console.log("DB connect successfully");
})
.catch(()=>{
    console.log("DB Not connected");
})


app.use(express.json());
app.use('/api',router)
app.listen(port,()=>{
    console.log("server running port at:",port);
})
