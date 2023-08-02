var counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
var autoPray = localStorage.getItem('autoPray') ? parseInt(localStorage.getItem('autoPray')) : 0;

var button = document.getElementById('clicker');
var autoButton = document.getElementById('autoPray');
var display = document.getElementById('counter');
var effect = document.getElementById('effect');

// Load saved counter value
display.textContent = "Prayers: " + counter;

button.addEventListener('click', function() {
    counter++;
    display.textContent = "Prayers: " + counter;
    localStorage.setItem('counter', counter);
    effect.style.display = 'block';
    setTimeout(function() {
        effect.style.display = 'none';
    }, 500); // Image will be displayed for 500ms
});

autoButton.addEventListener('click', function() {
    if (counter >= 10) {
        counter -= 10;
        autoPray++;
        localStorage.setItem('autoPray', autoPray);
        display.textContent = "Prayers: " + counter;
        localStorage.setItem('counter', counter);
    }
});

// Auto pray feature
setInterval(function() {
    if (autoPray > 0) {
        counter += autoPray;
        display.textContent = "Prayers: " + counter;
        localStorage.setItem('counter', counter);
    }
}, 1000);

// Autosave every 10 seconds
setInterval(function(){
    localStorage.setItem('counter', counter);
    localStorage.setItem('autoPray', autoPray);
}, 10000);
