
/*
if(a>5){
    console.log("a is greater than 5")
}
else if (a==5){
    console.log("a is equal to 5")
}
else{
    console.log("a is less than 5")
}
let today=10
switch(today){
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is not there!")
        break
    case 3:
        console.log("Today is there!")
        break
    default:
        console.log("Hello world!")
}
        */
/*
for(let i=0;i<=10;i=i+1){
    if(i%2==0){
        break
    }
    console.log(i)

}

let i=0
while(i<=10){
    console.log(i)
    i=i+1
}
    */
/*
function first_function(){
    return "Hello this is a function!"
}
let msg=first_function()
console.log(msg)
function function_with_args(a,b){
    return a+b
}
let sum=function_with_args(10,20)
console.log(sum)

let temp=function(){
    return "This is function expression!"
}
console.log(temp())

let narrow=()=>{
    return "This is a narrow function!",10
}
console.log(narrow())
/*
function outer_function(){
    let name="Shahir"
    function inner_function(){
        return "My name is "+name
    }
    return inner_function
}
let func=outer_function()
console.log(func())


let count = 0;

let task = document.getElementsByTagName('input')[0];
let button = document.getElementsByTagName('button')[0];
let task_place = document.getElementsByClassName('show_task')[0];
task.addEventListener('keydown',(Event)=>{
    if(Event.key=='Enter'){
        button.click()
    }
})
task.addEventListener('focus', () => {
    task.style.border = '2px solid green';
});

task.addEventListener('blur', () => {
    task.style.border = '2px solid black';
});
button.addEventListener('click', () => {

    if (task.value != '') {
       
        let div_element = document.createElement('div');
        div_element.setAttribute('class', 'task');

        div_element.innerHTML = `
            <div style="display:flex; gap:20px; align-items:center">
                <ul id="text-${count}">
                    <li>${task.value}</li>
                </ul>
                <button id="delete-${count}" style="width:100px;height:20px">
                    Delete
                </button>
            </div>
        `;

        task_place.appendChild(div_element);

        let delete_button = document.getElementById(`delete-${count}`);

        delete_button.addEventListener('click', () => {
            div_element.remove();
        });
        let task_text=document.getElementById(`text-${count}`)
        task_text.addEventListener('click',()=>{
            task_text.style.textDecoration='line-through'
            
        })
        task_text.addEventListener('mouseover',()=>{
            task_text.style.color='red'
        })
        task_text.addEventListener('mouseout',()=>{
            task_text.style.color='black'
        })
         task.value=''
        count = count + 1;

    } else {
        alert("Please Enter something");
    }
});

let count=0
$('button').click(function(){
    if(count==0){
    $('p').text("Changed by Clicking!").css('color','red')

    count=count+1
    }
    else{
        $('p').text("Tasks:").css('color','black')
        count=count-1
    }
})


$("div[class='show_task']").before("<p>Inserted before</p>")

$("div[class='show_task']").after("<p>Inserted after</p>")



$("div[class='show_task']").prepend('<p>Inerted into it</p>')
$("div[class='show_task']").append('<p>Inserted into after</p>')


$("div[class='show_task']").attr('class','changed_class')
$("div[class='changed_class']").css({
    color:"red",
    padding:'50px'
})
    

$('li:lt(1)').css({
    color:'red'
})
    */


let english_input=document.getElementById('english_input')
let moorse_output=document.getElementById('moorse_output')
english_input.addEventListener('input',()=>{
    let user_input=english_input.value

    let input = user_input.split("");
    const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
};
    let res=[]
    for (let i of input) {
        if(i===" "){
            res.push("/")
        }
        else{

        
       let code=morseCode[i.toUpperCase()]
        res.push(code)
        }
    }
    moorse_output.value=res.join(" ")

})
let clear_button=document.getElementsByClassName('clear')[0]
clear_button.addEventListener('click',()=>{
    english_input.value=""
    moorse_output.value=""

})