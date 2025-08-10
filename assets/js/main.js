function load_calculator() {
    fetch('pages/calculator.html')
        .then(response => response.text())
        .then(html => {
        document.querySelector('main').innerHTML = html;
    });
}

function load_converter() {
    fetch('pages/converter.html')
        .then(response => response.text())
        .then(html => {
        document.querySelector('main').innerHTML = html;
    });
}