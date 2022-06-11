const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('GELLLLLLL');
})

app.listen(3001, ()=>{
    console.log('Listening')
})