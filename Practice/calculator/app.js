const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let button of buttons) {
    button.addEventListener('click',(event)=>{
        const btntext = event.target.innerText;
        
        if(btntext==='C'){
            screen.value = "";
        }
        else if(btntext==='X'){
            screen.value+= '*';
        }
        else if(btntext==='='){
            try{
                screen.value=eval(screen.value);
            }
            catch(e){
                screen.value='Invalid';
            }
        }
        else{
            screen.value+= btntext;
        } 
    })
}

