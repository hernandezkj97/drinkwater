const small =document.querySelectorAll('.cup-small');
const liters =document.getElementById('liters');
const percentage=document.getElementById('percentage');
const remaining=document.getElementById('remaining');




small.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>hightlightCups(idx));
});

function hightlightCups(idx){
if(small[idx].classList.contains('full') 
&& !small[idx].nextElementSibling.classList.contains('full')){
    idx--
}

    small.forEach((cup,i)=>{
        if(i<=idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    });
    updateCup();
};


function updateCup(){
    const fullCups =document.querySelectorAll('.cup-small.full').length;
    const totalCups =small.length

    if(fullCups===0){
    percentage.style.visibility="hidden";
    percentage.style.height=0;
    }else{
        percentage.style.visibility="visible";
        percentage.style.height=`${fullCups/totalCups*330}px`;
        percentage.innerText=`${fullCups/totalCups*100}%`;
    }

    if(fullCups==totalCups){
        remaining.style.visibility="hidden";
        remaining.style.height=0
    }else{
        remaining.style.visibility="visible";
        liters.innerText=`${2-(250*fullCups/1000)}L`
    }
}