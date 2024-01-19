const express = require('express')
const app = express()
const PORT = 3000

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const customers = [
    {
        name: "ABC",
        industry:"music"
    },
    {
        name: "DEF",
        industry:"sports"
    },
    {
        name:"GHI",
        industry: "medicine"
    }
]

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/api/customers', (req, res) => {
    res.send({"customers": customers})
})


app.post('/', (req,res) => {
    res.send("This is a post request")
})

app.post("/api/customers", (req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

const start = async() =>{
    try{
        await mongoose.connect('mongodb+srv://palashasoni5:notpassword@cluster0.zg9lngy.mongodb.net/')
        app.listen(PORT, ()=>{
            console.log("App listening on port" + PORT)
        })
        }catch(e){
            console.log(e.message)
        }}


start()