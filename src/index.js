const init = () => { //write code here//
    const inputForm = document.querySelector('form');
    
    inputForm.addEventListener('submit', (event)=> {
        event.preventDefault();
        console.log(event);
        
    })
    
}


document.addEventListener('DOMContentLoaded', init);