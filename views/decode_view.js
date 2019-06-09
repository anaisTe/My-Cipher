export const decode_Page = () => { 
const decode_div = document.createElement("div");
const decode = `
<div class="" id="div_2">
<ul class="nav justify-content-center">
    <li class="nav-item">
        <a class="nav-link" id="go_code">Cifrar</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="go_decode">Descifrar</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="go_out">Salir</a>
    </li>
</ul>

<div id="container_code" class="center">
    <p>Cifra una palabra y ten una contraseña segura</p>
    Desplazamiento: 
    <input id="jump" type="number" min="1" max="33" class="input-des"/>
    </br>
    <textarea id="area_decode" class="text-area" rows="4" cols="50" placeholder="Escribe aquí"></textarea>
    </br>
    <button type="button" class="btn btn-outline-secondary" id="btn_decode">Descifrar</button>
</div>`

decode_div.innerHTML = decode;

decode_div.querySelector("#go_code").addEventListener("click", ()=>{ 
    window.location.hash = "#/code_Page"
})

decode_div.querySelector("#go_out").addEventListener("click", ()=>{   
    window.location.hash = "#/page1"
})

return decode_div
}