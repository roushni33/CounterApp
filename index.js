document.addEventListener('DOMContentLoaded', function() {
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    const textElement = document.querySelector('.text');
    let count = 0;

    decrementButton.addEventListener('click', function() {
        count--;
        textElement.textContent = count;
    });

    incrementButton.addEventListener('click', function() {
        count++;
        textElement.textContent = count;
    });
});
