function hiddenToggle(button, menu) {
    let toggleButton = document.getElementById(button);
    let toggleMenu = document.getElementById(menu);

    toggleButton.addEventListener('click', () => {
        toggleMenu.classList.toggle('hidden');
    })
}

//button id, menu id
hiddenToggle("mobile-menu-button", "mobile-menu");
hiddenToggle("profile-button", "profile-menu");
