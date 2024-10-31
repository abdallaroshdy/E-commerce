const mongoose = require('mongoose')

require('dotenv').config()

const app = require('./app')



app.listen(process.env.PORT , ()=>{
    console.log("Server is started successfully");
})


mongoose.connect(`${process.env.DB}`) .then(() => {
    console.log("Database Connected successfully");
    })
    .catch((err) => {
    console.error("Database connection error:", err);
});



