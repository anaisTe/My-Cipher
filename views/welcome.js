export const welcome_Page = () =>{
    const welcome_div = document.createElement("div");
    const welcome = ` 
    <div class="init center" id="welcomeContainer" >
        <h1 class="text-secondary">Bienvenidos a Irene Adler</h1>
        <div id="container_instructions" class="show f2">
            <h3 class="text-secondary">Instructiones</h3>
            <h5 class="inst_text center f2"> Es necesario que tengas una palabra o algo en mente por esribir, 
            luego selecciona una clave (esto indentifica la cantidad de desplazamiento para codificar) y 
            por último selecciona codificar y listo obtendrás un texto secreto.</h5>
        </div>
        <button type="button" class="btn btn-outline-dark" id="btn_start">Comenzar</button>
    </div> `
welcome_div.innerHTML=welcome;

const btn_start = welcome_div.querySelector("#btn_start");
btn_start.addEventListener("click", ()=>{
    window.location.hash = "#/code_Page"
})

return welcome_div
}

