
document.addEventListener('DOMContentLoaded', function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const pawPads = document.querySelectorAll('.paw-pad');

    pawPads.forEach(pad => {
        const linkElement = pad.querySelector('a'); // Get the anchor tag inside the pad
        if (linkElement) { // Ensure there's an anchor tag
            pad.addEventListener('click', function() {
                const link = linkElement.href;
                const audioPath = linkElement.dataset.audio; // Get the audio path from data-audio attribute

                if (audioPath) {
                    const audio = new Audio(audioPath);
                    audio.play().catch(e => console.error("Error playing audio:", e));
                }

                if (link) {
                    // Open the link in a new tab
                    window.open(link, '_blank');
                }
            });
        }
    });

    const pathArray = window.location.pathname.split("/");
    const currentPath = pathArray[pathArray.length - 1];
    if (currentPath == "index.html") {
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
            const audioPath = "./audio/Meow.mp3";
            const audio = new Audio(audioPath);
            audio.play().catch(e => console.error("Error playing audio:", e));
            setTimeout(function() {
                window.location.href = "https://carlostaglio.github.io/totalfull/beneficios.html";
            }, 1500);
        });
    }

    if (currentPath == "beneficios.html") {
        const cards = document.getElementsByClassName('carde');
        Array.from(cards).forEach(function(card) {
            card.addEventListener('click', function() {
                
                if(card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    card.classList.add('active');
                    const audioPath = "./audio/Meow.mp3";
                    const audio = new Audio(audioPath);
                    audio.play().catch(e => console.error("Error playing audio:", e));
                }
            });
        });
    }
    


});
