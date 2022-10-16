const  express = require('express')
const cors = require('cors')
const path = require('path')
const assert = require('assert')
const port = 9800
const app = express()
const taskRoute =  require('./route/taskroute')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(cors())

app.set('view engine','ejs')//fetch view engie pkg

app.set('views', './views') //fetch view folder

//default root
app.use('/', taskRoute)

//pnf route
app.all("*" ,(req,res) =>{
   res.render('pnf')
})


//server call 
app.listen(port , ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})