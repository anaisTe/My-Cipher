export const welcome_Page = () =>{
    const welcome_div = document.createElement("div");
    const welcome = ` 
    <div class="init center" id="welcomeContainer" >
    <h4 class="text-secondary">Welcome to</h4>
    <h1 class="text-secondary">Irene Adler</h1>
    <div id="container_instructions" class="show">
    <h1 >Instructions</h1>
    </div>
    <button type="button" class="btn btn-outline-secondary" id="btn_start">start!</button>     
</div> `
welcome_div.innerHTML=welcome;

const btn_start = welcome_div.querySelector("#btn_start");
btn_start.addEventListener("click", ()=>{
    window.location.hash = "#/code_Page"
})

return welcome_div
}