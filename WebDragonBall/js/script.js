var swiper= new Swiper(".slide-content",{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination:{
        el:".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
    }
});

document.addEventListener("DOMContentLoaded",()=>{
    let navNav=document.querySelector("div.navbar");            //Guardamos el selector del navbar para modificar su atributo right
    let boton = document.querySelector("div.menu > button");    //Ruta del boton para abrir el desplegable
    let botonnv= document.querySelector("div.navbar > button"); //ruta del boton para cerrar el desplegable
    
    boton.addEventListener("click",()=>{                        //Evento cuando hagamos click en el boton cambiamos la propiedad para que aparezca el menu
        
       if(window.innerWidth <=825){                             //hacemos un if else que cuando el hancho de la pantalla sea menor de 825 cambiamos la propiedad left
        navNav.style.left="0%";
       }else{
        navNav.style.left="70%";
       }
       
    });
    botonnv.addEventListener("click",()=>{                      //Evento cuando hagamos click olvemos a cambiar la propiedad para guardar el menu
        navNav.style.left="100%";
    });
   
    navNav.addEventListener("mouseleave",()=>{                  //Evento que cambie la propiedad cuando salgamos del elemento navNav y lo esconda.
        navNav.style.left="100%";
    })
});



function quitar(){
    const enla1=document.querySelector(".nav>div:nth-child(2)>a:nth-child(4)");

    if(window.innerWidth <=1350){
        enla1.style.display="none";
    }else{
        enla1.style.display="block";
    }
}
window.addEventListener("resize",quitar);