'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click',Function(){
 
    document.body.classList.toggle('dark-theme')
 
    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent ="Dark";
    }
    else{
        this.textContent = "light";
    }
    console.log("Nome da atual class :" + className)
})

