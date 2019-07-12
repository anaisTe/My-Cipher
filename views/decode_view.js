export const decode_Page = () => { 
const decode_div = document.createElement("div");
const decode = `
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
    <h3 class="h3_text"><span>Decodifíca el texto secreto, es necesario tener la clave para que funcione <span></h3>
    <span class= "back_text"> Clave: </span> 
    <input id="jump_decode" type="number" min="1" max="33" class="input-des"/>
    </br>
    <textarea id="area_decode" class="text-area" rows="4" cols="50" placeholder="Escribe aquí"></textarea>
    </br>
    <button type="button" class="btn btn-warning" id="btn_decode">Descifrar</button>
    <button type="button" class="btn btn-danger" id="btn_reset">Reiniciar</button>
    <br/>
    <br/>
    <p class="inst_text center f2" id="area2_decode"></p>
    <br/>
</div>`

decode_div.innerHTML = decode;

decode_div.querySelector("#go_code").addEventListener("click", ()=>{ 
    window.location.hash = "#/code_Page"
})

decode_div.querySelector("#go_out").addEventListener("click", ()=>{   
    window.location.hash = ""
})

const area_decode = decode_div.querySelector("#area_decode");
const jump_decode = decode_div.querySelector("#jump_decode");
const area2_decode = decode_div.querySelector("#area2_decode");
const btn_decode = decode_div.querySelector("#btn_decode");
const btn_reset = decode_div.querySelector("#btn_reset");

//Decode the text written
btn_decode.addEventListener("click", ()=>{
    area2_decode.value=""; 
    const textIn_decode = area_decode.value;        
    const offsetDecode = jump_decode.value;    
    const result_decode = cipher.decode(textIn_decode , offsetDecode); 
    area2_decode.innerHTML=result_decode;
    })

btn_reset.addEventListener("click", ()=>{
    area_decode.value="";
    jump_decode.value="";
    area2_decode.innerHTML="";
    })
    
    return decode_div
}