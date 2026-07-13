// form validation
const form = document.querySelector('#contactForm');
const requiredFields = form.querySelectorAll('[required]');
requiredFields.forEach( (field) =>{
    field.addEventListener('blur' , ()=>{
        if(field.value.trim() === ""){
            field.classList.add('error')
        }
        else{
            field.classList.remove('error')
        }
    })
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();    
    requiredFields.forEach( (field) =>{
        if(field.value.trim() === ""){
            field.classList.add('error')
        }
        else{
            field.classList.remove('error')
        }
})
})