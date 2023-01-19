function show (a){
    document.querySelector('.text02').value = a;
}


let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}

// 
const container = document.querySelector('.container');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
})

//

let btnSend = document.querySelector('.send-btn');
let inputs = document.querySelectorAll('input');

btnSend.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});

// 

