let text="";
let buttons=document.querySelectorAll('.d-v');

//for operation text
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttontext=e.target.innerText;
        text+=buttontext;
        document.getElementById('calculator-display').innerHTML=text;
    })
}



// function for clear display
function clearText() {
    text="";
    document.getElementById('calculator-display').innerHTML=text;
}
// function for display result
function displayResult() {
    console.log(eval(text));
    text=eval(text);
    document.getElementById('calculator-display').innerHTML=text;
}