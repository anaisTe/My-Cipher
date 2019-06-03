import { welcome_Page } from "../views/welcome.js";
import { code_Page } from "../views/code_view.js";
import { decode_Page } from "../views/decode_view.js";

export const changePage = (hash) =>{
    if (hash === "#/" || hash === "" || hash === "#") {
        return all_Tmp("#/page1");
    } else if (hash === "#/page1" || hash === "#/code_Page" || hash === "#/decode_Page"){
        return all_Tmp(hash)
    } else{
        return all_Tmp();
    }
}

const all_Tmp = (routers) =>{
    const divMain = document.getElementById("main");
    divMain.innerHTML="";
    switch (routers) {
        case "#/page1":
            divMain.appendChild(welcome_Page());
            break;
        case "#/code_Page":
            divMain.appendChild(code_Page());
            break;
        case "#/decode_Page":
            divMain.appendChild(decode_Page());
            break;
        default:
            break;
    }
}