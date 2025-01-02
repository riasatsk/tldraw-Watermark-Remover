function removeWatermark() {
    const watermark = document.querySelector('.tl-watermark_SEE-LICENSE');
    if (watermark) {
        watermark.remove(); // Only remove the watermark if it exists
    }
}

setTimeout(removeWatermark, 5000);

document.addEventListener('touchmove', function(event) {
    // Ensure the event is cancelable before calling preventDefault
    if (event.cancelable) {
        event.preventDefault(); // Prevent default only if cancelable
    }
}, { passive: false });
