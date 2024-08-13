let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let sciCalc = document.getElementById('sciCalc');
let string = "";
let arr = Array.from(buttons);

sciCalc.style.display = 'none'; // Hide the scientific calculator by default

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        } else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        } else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        } else if(e.target.classList.contains('toggleSci')){
            sciCalc.style.display = sciCalc.style.display === 'none' ? 'block' : 'none';
        } else if(e.target.innerHTML == 'sin'){
            string = Math.sin(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'cos'){
            string = Math.cos(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'tan'){
            string = Math.tan(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == 'ln'){
            string = Math.log(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == '√'){
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        } else if(e.target.innerHTML == '^'){
            string += '**';
        } else if(e.target.innerHTML == 'π'){
            string += Math.PI;
            input.value = string;
        } else if(e.target.innerHTML == 'e'){
            string += Math.E;
            input.value = string;
        } else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
