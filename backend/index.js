//https://www.npmjs.com/package/express


//importing
const express = require('express')      //used to import the express
require("./connection")         //used to  import the 'connection.js'  to 'index.js'
var empModel = require('./model/employee')  //used to  import the 'employee.js' in model folder to 'index.js'
var edatalogModel = require('./model/edatalog')


const app = express()       //initilaised app with express call

var cors  = require('cors')


//middleware
app.use(cors())

//middleware
app.use(express.json());

// api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})


app.get('/trial', (req, res) => {
  res.send('Trial World')
})

//login

app.post('/log',async(req,res)=>{
    const {User,Pass} = req.body

    try {
        const user = await edatalogModel.findOne({User: User,Pass: Pass})
        
        if(user){
            res.send({success:true, message:"login successful"})
        }
        else{
            res.send({success:false, message:"login unsuccessful"})
        }
    } catch (error) {
        console.log("Login Error:", error)
    }
})

//signup

app.post('/signup',async(req,res)=>{
    try {
        await edatalogModel(req.body).save()
        res.send({mesage: "login details added"})
    } catch (error) {
        console.log(error)
    }
})


//add
app.post('/add',async(req,res)=>{
    try {
        await empModel(req.body).save()
        res.send({mesage: "data added"})
    } catch (error) {
        console.log(error)
    }
})

//view
app.get('/view',async(req,res)=>{
    try {
        var a = await empModel.find()
        res.send(a)
    } catch (error) {
        console.log(error)
    }
})

//delete

// http://localhost:3000/delete/<_id> put this in postman by replacing the id with the id to  delete

app.delete('/delete/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted" })
    } catch (error) {
        console.log(error)
        // res.status(500).send({ error: "Deletion failed" })
    }
})


//update
// http://localhost:3000/update/<_id> put this in postman by replacing the id with the id to  update


app.put('/update/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "data updated" })
    } catch (error) {
        console.log(error)
        // res.status(500).send({ error: "Update failed" })
    }
})


// setting up the port
app.listen(3000,()=>{
    console.log("port is running at 3000")
})

