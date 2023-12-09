const paraToggles = document.querySelectorAll('.paraToggler');
const paraButtons = document.querySelectorAll('.para');

paraButtons.forEach((button) => {
    button.style.display = 'none';
});

let isTrue = {};

paraToggles.forEach((toggle, index) => {
    isTrue[index] = true;

    toggle.addEventListener('click', function () {
        if (isTrue[index]) {
            paraButtons[index].style.display = 'flex';
            toggle.src = 'assets/images/icon-minus.svg'; // Change image source for toggled state
            isTrue[index] = false;
        } else {
            paraButtons[index].style.display = 'none';
            toggle.src = 'assets/images/icon-plus.svg'; // Change image source for untoggled state
            isTrue[index] = true;
        }
    });
});
