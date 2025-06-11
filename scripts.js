
document.addEventListener('DOMContentLoaded', function() {

    const pathArray = window.location.pathname.split("/");
    const currentPath = pathArray[pathArray.length - 1];
    console.log(currentPath);
    if (currentPath == "index.html" || currentPath == "") {
        sessionStorage.setItem("puntaje", 0);
        sessionStorage.setItem("q1", false);
        sessionStorage.setItem("q2", false);
        sessionStorage.setItem("q3", false);
        sessionStorage.setItem("q4", false);
        
        const juegoButton = document.getElementById('juegoButton');
        juegoButton.addEventListener('click', async function() {
            const audioPath = "./audio/Meow.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta1.html";
            }, 1500);
        });

        const beneficiosButton = document.getElementById('beneficiosButton');
        beneficiosButton.addEventListener('click', async function() {
            const audioPath = "./audio/Meow2.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/beneficios.html";
            }, 1500);
        });
    }

    if (currentPath == "pregunta1.html") {
        if (!sessionStorage.getItem("puntaje")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/";
        }
        if (sessionStorage.getItem("q1")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/pregunta2.html";
        }
        console.log(sessionStorage.getItem("puntaje"));
        
        const pataA = document.getElementById('pata1a');
        pataA.addEventListener('click', async function() {
            const audioPath = "./audio/Prrr.mp3";
            const audio = new Audio(audioPath);
            sessionStorage.setItem("puntaje", 1);
            sessionStorage.setItem("q1", true);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta2.html";
            }, 1500);
        });

        const pataB = document.getElementById('pata1b');
        pataB.addEventListener('click', async function() {
            const audioPath = "./audio/Enojado.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            sessionStorage.setItem("puntaje", 0);
            sessionStorage.setItem("q1", true);
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta2.html";
            }, 1500);
        });
    }

    if (currentPath == "pregunta2.html") {
        if (!sessionStorage.getItem("puntaje")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/";
        }
        if (sessionStorage.getItem("q2")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/pregunta3.html";
        }
        console.log(sessionStorage.getItem("puntaje"));
        
        const pataA = document.getElementById('pata2a');
        pataA.addEventListener('click', async function() {
            const audioPath = "./audio/Prrr.mp3";
            const audio = new Audio(audioPath);
            sessionStorage.setItem("puntaje", sessionStorage.getItem("puntaje")+1);
            sessionStorage.setItem("q2", true);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta3.html";
            }, 1500);
        });

        const pataB = document.getElementById('pata2b');
        pataB.addEventListener('click', async function() {
            const audioPath = "./audio/Enojado.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            sessionStorage.setItem("q2", true);
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta3.html";
            }, 1500);
        });
    }

    if (currentPath == "pregunta3.html") {
        if (!sessionStorage.getItem("puntaje")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/";
        }
        if (sessionStorage.getItem("q3")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/pregunta4.html";
        }
        console.log(sessionStorage.getItem("puntaje"));
        
        const pataA = document.getElementById('pata3a');
        pataA.addEventListener('click', async function() {
            const audioPath = "./audio/Enojado.mp3";
            const audio = new Audio(audioPath);
            sessionStorage.setItem("q3", true);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta4.html";
            }, 1500);
        });

        const pataB = document.getElementById('pata3b');
        pataB.addEventListener('click', async function() {
            const audioPath = "./audio/Prrr.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            sessionStorage.setItem("puntaje", sessionStorage.getItem("puntaje")+1);
            sessionStorage.setItem("q1", true);
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/pregunta4.html";
            }, 1500);
        });
    }

    if (currentPath == "pregunta4.html") {
        if (!sessionStorage.getItem("puntaje")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/";
        }
        if (sessionStorage.getItem("q4")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/beneficios.html";
        }
        console.log(sessionStorage.getItem("puntaje"));
        
        const pataA = document.getElementById('pata4a');
        pataA.addEventListener('click', async function() {
            const audioPath = "./audio/Prrr.mp3";
            const audio = new Audio(audioPath);
            sessionStorage.setItem("puntaje", 1);
            sessionStorage.setItem("q4", true);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                if (sessionStorage.getItem("puntaje") == 4) {
                    window.location.href = "https://carlostaglio.github.io/totalfull/felicitaciones.html";
                } else {
                    window.location.href = "https://carlostaglio.github.io/totalfull/bastante_bien.html";
                }
            }, 1500);
        });

        const pataB = document.getElementById('pata4b');
        pataB.addEventListener('click', async function() {
            const audioPath = "./audio/Enojado.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            sessionStorage.setItem("q4", true);
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/bastante_bien.html";
            }, 1500);
        });
    }

    if (currentPath == "felicitaciones.html") {
        if (!sessionStorage.getItem("puntaje") && sessionStorage.getItem("puntaje") != 4) {
            window.location.href = "https://carlostaglio.github.io/totalfull/";
        }
        if (!sessionStorage.getItem("q4")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/beneficios.html";
        }
        console.log(sessionStorage.getItem("puntaje"));
    }

    if (currentPath == "bastante_bien.html") {
        if (!sessionStorage.getItem("puntaje")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/";
        }
        if (!sessionStorage.getItem("q4")) {
            window.location.href = "https://carlostaglio.github.io/totalfull/beneficios.html";
        }
    }

    if (currentPath == "beneficios.html") {
        sessionStorage.setItem("puntaje", 0);
        sessionStorage.setItem("q1", false);
        sessionStorage.setItem("q2", false);
        sessionStorage.setItem("q3", false);
        sessionStorage.setItem("q4", false);
        const cards = document.getElementsByClassName('carde1');
        Array.from(cards).forEach(function(card) {
            card.addEventListener('click', function() {
                
                if(card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    card.classList.add('active');
                    const audioPath = "./audio/Beneficios1.mp3";
                    const audio = new Audio(audioPath);
                    audio.play().catch(e => console.error("Error playing audio:", e));
                }
            });
        });
        const cards2 = document.getElementsByClassName('carde2');
        Array.from(cards2).forEach(function(card) {
            card.addEventListener('click', function() {
                
                if(card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    card.classList.add('active');
                    const audioPath = "./audio/Beneficios2.mp3";
                    const audio = new Audio(audioPath);
                    audio.play().catch(e => console.error("Error playing audio:", e));
                }
            });
        });
    }
    


});
