btn = document.querySelector(".hero-btn");
h3 = document.querySelector("#btn");
cont = document.querySelector(".hide");
btn.addEventListener("click", () => {
    if(cont.style.display == "none"){
        cont.style.display = "inline";
        h3.innerText = "Less >"
    }else{
        cont.style.display = "none";
        h3.innerText = "Know More >"
    }
});