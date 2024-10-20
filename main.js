var i = 0;
var timeoutId; 

function ativos() {
    timeoutId = setTimeout(function() {
        var chipElement = document.querySelector('soma-chip[aria-label="Recarregar"]');

        if (chipElement) {
            var event = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            chipElement.dispatchEvent(event);
        } else {
            console.log("Elemento soma-chip com aria-label='Recarregar' não encontrado");
        }

        i++;
        if (i < 10) {
            ativos(); 
        }
    }, 5000);
}

ativos();

function stop() {
    clearTimeout(timeoutId); 
}
