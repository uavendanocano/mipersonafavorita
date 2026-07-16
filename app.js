const gift = document.getElementById("gift");

const button = document.getElementById("openGift");

const letter = document.getElementById("letter");

const message = document.getElementById("message");

const envelope = document.getElementById("envelope");

const openLetter = document.getElementById("openLetter");

const seal = document.getElementById("seal");

const music = document.getElementById("music");

const light = document.getElementById("light");

const signature = document.getElementById("signature");

const loveBox = document.getElementById("loveBox");

const loveButton = document.getElementById("loveButton");

const loveMessage = document.getElementById("loveMessage");

let confettiInterval;


const text = `
Hola Karla❤️

Hoy quería darte un pequeño detalle...

No es algo que puedas guardar en una caja, pero espero que lo guardes siempre en tu corazón.

Gracias por cada sonrisa,
por hacer especial cada momento y por estar conmigo.

Deseo con todo mi corazón que pases un cumpleaños increíble.

Te mereces el mundo entero. Te admiro mcuhísimo.

Te amodoro ❤️👻
`;


/* CREAR CONFETI */

function crearConfeti(){

    const area = document.getElementById("confetti");


    confettiInterval = setInterval(()=>{


        const pieza = document.createElement("div");


        pieza.className = "confetti-piece";


        pieza.style.left =
        Math.random()*100+"vw";


        pieza.style.background =
        [
            "#e91e63",
            "#ffd700",
            "#2196f3",
            "#4caf50",
            "#ff5722",
            "#9c27b0"

        ][Math.floor(Math.random()*6)];


        pieza.style.animationDuration =
        (3 + Math.random()*4)+"s";


        area.appendChild(pieza);



        setTimeout(()=>{

            pieza.remove();

        },7000);



    },80);

}




/* DETENER CONFETI */

function detenerConfeti(){

    clearInterval(confettiInterval);


    const area =
    document.getElementById("confetti");


    area.style.opacity="0";


    setTimeout(()=>{

        area.innerHTML="";

    },1000);

}




/* ABRIR REGALO */

button.addEventListener("click",()=>{


    gift.classList.add("open");


    setTimeout(()=>{


        gift.style.display="none";


        button.style.display="none";


        detenerConfeti();


        envelope.style.display="block";


    },1200);


});





/* ABRIR CARTA Y ROMPER SELLO */
openLetter.addEventListener("click",()=>{
    seal.classList.add("break");
    setTimeout(()=>{
        envelope.style.display="none";
        // efecto luz
        light.classList.add("show");
        // aparece carta
        letter.classList.add("show");
        // iniciar música
        music.volume = 0;
        music.play();
        let volumen = 0;
        const fade = setInterval(()=>{
            if(volumen < 0.4){
                volumen += 0.02;
                music.volume = volumen;
            }else{
                clearInterval(fade);
            }
        },100);
        setTimeout(()=>{
            escribir();
        },1000);
    },700);
});







/* MAQUINA DE ESCRIBIR */
function escribir(){
    let i = 0;
    const cursor = document.getElementById("cursor");
    const interval = setInterval(()=>{
        cursor.before(text.charAt(i));
        i++;
        if(i >= text.length){
            clearInterval(interval);
            // quitar cursor al finalizar
            cursor.style.display="none";
            setTimeout(()=>{
                signature.classList.add("show");
            },800);
            setTimeout(()=>{
                loveBox.classList.add("show");
            },3000);
            setTimeout(()=>{
                corazones();
            },2000);
        }
    },50);
}







/* CORAZONES FINAL */

function corazones(){


    let cantidad = 0;


    const heartInterval = setInterval(()=>{


        const heart = document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";


        heart.style.left =
        Math.random()*100+"vw";


        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },4000);



        cantidad++;


        if(cantidad >= 20){


            clearInterval(heartInterval);


        }



    },300);



}





// Iniciar confeti al cargar

crearConfeti();

const loveTexts = [

    "Te quiero ❤️",

    "Muchísimo ❤️",

    "Cada día me enamoro más de ti ❤️",

    "Gracias por llegar a mi vida ❤️",

    "Eres mi lugar favorito ❤️",

    "Contigo todo es mejor ❤️",

    "Siempre elegiría estar contigo ❤️",

    "Mi corazón es feliz contigo ❤️",
    "Te amodoro ❤️👻",
    "Eres una gran mujer ❤️"

];

let loveCount = 0;



loveButton.addEventListener("click",()=>{


    loveMessage.textContent =
    loveTexts[loveCount];


    loveMessage.classList.add("show");



    setTimeout(()=>{


        loveMessage.classList.remove("show");


    },2500);



    loveCount++;


    if(loveCount >= loveTexts.length){

        loveCount=0;

    }


});