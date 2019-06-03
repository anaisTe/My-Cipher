import { changePage } from "./router_view.js";

export const router_main = () =>{
    window.addEventListener("load",changePage(window.location.hash))
    if(("onhashchange" in window)) window.onhashchange = () =>changePage(window.location.hash)
}