const petition = document.getElementById('petition');
const question = document.getElementById('question');
const title = document.getElementById('title');

var petitionText = "anveer please answer the following question"
var c = 0;
var answer="",setPetition="T";

function updateInput(val){
    if(petition.value.charAt(0) == "."){
        petition.value="T"
        console.log("HERE!")
        petition.addEventListener("input", (e)=>{
        
            answer += e.target.value.charAt((e.target.value).length-1)
            console.log();
            setPetition += petitionText.charAt(c);
            petition.value =setPetition;
            //set answer for form
            document.getElementById('answer').value = answer;
            
            // title.innerText = e.target.value;
            c++;    
     })
    }else{
        petition.addEventListener("input", (e)=>{
            petition.value = e.target.value;
        })
    }

    if(petition == ""){
        petition="WRITE!"
    }
}

question.addEventListener("input", (e)=>{
    question.value = e.target.value;
})

function submitQuestion() {
    // title.innerText = "Answer: "+answer;
    console.log("Before FETCH: "+ question.value + answer);
    // (async () => {
    //     const rawResponse = await fetch('http://localhost:3001', {
    //       method: 'POST',
    //       redirect: "follow",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       },
    //       body: JSON.stringify({question: question.value, answer})
    //     });
    //     const content = await rawResponse.json();
      
    //     console.log(content);
    //   })();
}

petition.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 ){
        console.log("BEFORE: "+answer);
        let str = setPetition.substr(0, setPetition.length - 2);
        setPetition = str;
        let a = answer.substr(0, answer.length - 1)
        answer = a;
        c-=2;
        console.log("After: "+answer);
        console.log("BACKSPACE PRESSED!!");
    }
        
};