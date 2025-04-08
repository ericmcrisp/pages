// test script for basic interactivity

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById(  'clickMeButton' );
    if (button) {
        button.addEventListener('click', () => {
            alert('Fuck You!');
        });
    }
});