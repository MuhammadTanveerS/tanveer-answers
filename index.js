const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.render('home');
})

app.post('/', (req,res) => {
    console.log(req.body);
    res.render('home');
})

app.listen(3001, ()=>{
    console.log('Listening')
})