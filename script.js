function animateCounter(elementId, start, end, duration) {
    let counterElement = document.getElementById(elementId);
    let stepTime = Math.abs(Math.floor(duration / end));
    let current = start;

    let interval;

    function startAnimation() {
        interval = setInterval(() => {
            current++;
            counterElement.textContent = current + "%";

            if (current >= end) {
                clearInterval(interval);
            }
        }, stepTime);
    }

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimation();
                observer.unobserve(counterElement); // Stop observing after animation starts
            }
        });
    });

    observer.observe(counterElement);
}

// Call the function for each skill item
animateCounter('skill-item1', 0, 70, 1000);
animateCounter('skill-item2', 0, 30, 1000);
animateCounter('skill-item3', 0, 80, 1000);
animateCounter('skill-item4', 0, 80, 1000);
