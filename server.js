const express = require('express')
const mongoose = require('mongoose')
const sectionsRoutes = require('./routes/sections')
const imgController = require('./controllers/imgController')
const userRoutes = require("./routes/user");

const cors = require('cors');
require('dotenv').config()
const app = express()
app.use(express.json());


// Enable CORS for all routes
app.use(cors());

mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
    app.listen(4000,()=>{
        console.log('connected to port')
        
    })
})
app.use("/api/user", userRoutes);
app.use('/sections',sectionsRoutes)
app.use('/sections',imgController)

