function changeBackground(backgroundPath) {
    // Set the background image path in localStorage
    localStorage.setItem('background', backgroundPath);

    // Redirect to page2.html
    window.location.href = 'page2.html';
}