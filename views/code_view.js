export const code_Page = () =>{
    const code_div = document.createElement("div");
    const code = `
    <div class="nav nav-tabs f2 navStyle" id="div_2">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link color" id="go_code">Cifrar</a>
            </li>
            <li class="nav-item">
                <a class="nav-link color" id="go_decode">Descifrar</a>
            </li>
            <li class="nav-item">
                <a class="nav-link color" id="go_out">Salir</a>
            </li>
        </ul>
    </div>
    <div id="container_code" class="margin center">
        <h3 class="h3_text"><span>Aquí codifica <span></h3>
        <span class= "back_text"> Clave: </span> 
        <input id="jump_encode" type="number" min="1" max="33" class="input-des"/>
        </br>
        <textarea id="area_code" class="text-area" rows="4" cols="50" placeholder="Escribe aquí"></textarea>
        </br>
        <button type="button" class="btn btn-warning" id="btn_code">Cifrar</button>
        <button type="button" class="btn btn-danger" id="btn_clean">Reiniciar</button>
        <br/>
        <br/>
        <p class="inst_text center f2" id="area2_code"></p>
        <br/>
    </div> `
code_div.innerHTML=code;

code_div.querySelector("#go_decode").addEventListener("click", ()=>{
    window.location.hash = "#/decode_Page"
})

code_div.querySelector("#go_out").addEventListener("click", ()=>{
    window.location.hash = ""
})

const area_code = code_div.querySelector("#area_code");
const jump_encode = code_div.querySelector("#jump_encode");
const area2_code = code_div.querySelector("#area2_code");
const btn_code = code_div.querySelector("#btn_code");
const btn_clean = code_div.querySelector("#btn_clean");

//read text written in textarea and show the same text in encode
btn_code.addEventListener("click", ()=>{
    area2_code.value=""; 
    const textIn_code = area_code.value;
    const offsetCode = jump_encode.value;
    const result_code = cipher.encode(textIn_code , offsetCode);
    area2_code.innerHTML=result_code
})
//Reset all
btn_clean.addEventListener("click", ()=>{
    area_code.value="";
    jump_encode.value= "";
    area2_code.innerHTML="";
})
return code_div
}