//https://www.npmjs.com/package/mongoose

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mahadevangopakumar:mahadevan@cluster0.ogcuc5i.mongodb.net/EmpData?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Connected")
})


//used to print the error 
.catch((err)=>{
    console.log(err)
})