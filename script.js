document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    if (!timeElement) return;

    const updateTime = () => {
        timeElement.textContent = Date.now();
    };

    // Initialize immediately on render
    updateTime();

    // Refresh every 1000ms per task constraints
    setInterval(updateTime, 1000);
});