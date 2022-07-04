"strict mode";


let input = document.querySelector('input');

window.addEventListener('DOMContentLoaded' , ()=>{ 
   input.focus()
})

input.addEventListener('input' , (event)=>{ 
   if (event.target.value.length > 4) { 
      event.target.value = event.target.value.slice(0,4) + event.target.value.replace(/\d/isg , '');
   }
})



