
document.addEventListener('DOMContentLoaded', function() {
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
});
