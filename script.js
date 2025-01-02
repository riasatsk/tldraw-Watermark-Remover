const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const watermarkDiv = document.querySelector('.tl-watermark_SEE-LICENSE');
        if (watermarkDiv) {
            watermarkDiv.remove();
            console.log('Watermark removed.');
            observer.disconnect(); // Stop observing after removing
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
