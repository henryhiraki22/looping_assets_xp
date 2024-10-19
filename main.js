var i = 0;
function ativos(){
    setTimeout(function(){
        var chipElement = document.querySelector('soma-chip[aria-label="Recarregar"]');

        if (chipElement) {
            // Simular o clique no elemento
            chipElement.click(); // Simular o clique no elemento
        } else {
            console.log("Elemento soma-chip com aria-label='Recarregar' não encontrado");
        }
        i++;
        if (i <= 10){
            ativos();
        }
    }, 5000)
}

ativos();
