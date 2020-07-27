const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption  = document.querySelector(".caption");

/*ABRE LA CLASE MODAL */
/* original viene del html data-original */
previews.forEach(previ =>{
    previ.addEventListener("click", () =>{
        modal.classList.add("open");
        original.classList.add("open");
        /*DYNAMIC CHANGE TEXT AND IMAGE */
        const originalSrc = previ.getAttribute("data-original");
        //Obtenemos la imagen console.log(originalSrc);
        original.src = `./full/${originalSrc}`;
        const altText = previ.alt;
        caption.textContent = altText;
    })
});

/*SI CONTIENE LA CLASE MODAL CERRAMOS EL MODAL */

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});