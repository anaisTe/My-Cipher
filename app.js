const welcome_Container = document.getElementById("welcomeContainer");
const btn_start = document.getElementById("btn_start");
const div_2 = document.getElementById('div_2');
const go_instructions = document.getElementById('go_instructions');
const container_instructions = document.getElementById('container_instructions');
const go_code = document.getElementById('go_code');
const container_code = document.getElementById('container_code');
const go_decode = document.getElementById('go_decode');
const container_decode = document.getElementById('container_decode');

const btn_cifrar = document.getElementById('btn_cifrar');

btn_start.addEventListener('click', ()=> {
    welcome_Container.classList.remove('show');
    welcome_Container.classList.add('hidden');
    div_2.classList.remove('hidden');
    div_2.classList.add('show');

});

go_instructions.addEventListener('click', ()=> {
    container_instructions.classList.remove('hidden');
    container_instructions.classList.add('show');
    container_code.classList.remove('show');
    container_code.classList.add('hidden');
    container_decode.classList.remove('show');
    container_decode.classList.add('hidden');
});

go_code.addEventListener('click', ()=> {
    container_code.classList.remove('hidden');
    container_code.classList.add('show');
    container_instructions.classList.remove('show');
    container_instructions.classList.add('hidden');
    container_decode.classList.remove('show');
    container_decode.classList.add('hidden');
});

go_decode.addEventListener('click', ()=> {
    container_decode.classList.remove('hidden');
    container_decode.classList.add('show');
    container_code.classList.remove('show');
    container_code.classList.add('hidden');
    container_instructions.classList.remove('show');
    container_instructions.classList.add('hidden');
});

btn_cifrar.addEventListener('click', ()=> {
    alert('hola_2');
});