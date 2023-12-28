const img=document.getElementById('imgp');

const url1 = "https://media.istockphoto.com/id/1464561797/photo/artificial-intelligence-processor-unit-powerful-quantum-ai-component-on-pcb-motherboard-with.jpg?s=1024x1024&w=is&k=20&c=vKnJb_tlENfrcT5jSWRugaJv-ESAlBkTcDgiNGgFPW0=";
const url2 = "https://media.istockphoto.com/id/1488332977/photo/wooden-deck-at-the-seaside.jpg?s=1024x1024&w=is&k=20&c=XRr06j9NltxCkLqquxHovC8NuclQErao0dwY_etMzBo=";

var toggle = false;
function toggleimage() {
    if(toggle===true) {
        img.setAttribute('src',url2);
    }
    else{
        img.setAttribute('src',url1);
        
    }
    toggle=!toggle;
}

setInterval(toggleimage,1000);//it will call the toggleimage function after every 1 second.


//hide and unhide para after every 1.5 seconds

var istrue = false;
function parahide() {

}

const p = document.getquerySelector('p');

setInterval(()=>{
    p.classList.toggle('hide_p');
},1500);
