const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const ans = ["I can't think of it right now.",
            "No answer.",
            "How should I Know?",
            "Please don't bothe me.",
            "Mein nhi batauga.",
            "I won't Amswer.",
            "You do not believe too much.",
            "You have to believe.",
            "I don't understand.",
            "I don't wish to answer now."  
        ]

app.get('/', (req,res) => {
    res.render('home');
})

app.post('/', (req,res) => {
    let rand = Math.floor(Math.random() * 10);
    let {question,answer,petition} = req.body;

    if(answer===''){
        answer = ans[rand];
    }
    if(question==='' || petition===''){
        answer = "Write Petition and Question Properly!";
    }
    console.log(req.body);
    console.log(ans[rand]);
    res.render('home' , {question, answer});
})

app.listen(3001, ()=>{
    console.log('Listening')
})