export const code_Page = () =>{
    const code_div = document.createElement("div");
    const code = `
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
        <textarea id="area_code" class="text-area" rows="4" cols="50" placeholder="Escribe aquí"></textarea>
        </br>
        <button type="button" class="btn btn-outline-secondary" id="btn_code">Cifrar</button>
        <br/>
        <br/>
        <p id="area2_code"></p>
        <br/>
    </div> `
code_div.innerHTML=code;

code_div.querySelector("#go_decode").addEventListener("click", ()=>{
    window.location.hash = "#/decode_Page"
})

code_div.querySelector("#go_out").addEventListener("click", ()=>{
    window.location.hash = "#/page1"
})


//read text written in textarea and show the same text in code
const btn_code = code_div.querySelector("#btn_code");
    btn_code.addEventListener("click", ()=>{
    code_div.querySelector("#area2_code").value=""; 
    const textIn_code = code_div.querySelector("#area_code").value;
    const offsetCode = code_div.querySelector("#jump").value;
    const result_code = cipher.encode(textIn_code , offsetCode);
    code_div.querySelector("#area2_code").innerHTML=result_code
})
return code_div
}
