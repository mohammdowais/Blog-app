const expresss = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// routes
const userRoutes = require('./routes/userRoutes')
const articleRoutes = require('./routes/articlesRoutes')

// app logic
const app = expresss()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/',(req,res)=>{return res.json({message:"hello there"})})


app.use('/user',userRoutes)
app.use('/article',articleRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
        .then(
            app.listen(3000,()=>console.log(`server started http://localhost:3000`))
        )
