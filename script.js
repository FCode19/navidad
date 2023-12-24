document.addEventListener('DOMContentLoaded', function() {

    const fechaObjetivo = new Date('December 25, 2023 00:00:00').getTime();

    const intervalo = setInterval(function() {

        const fechaActual = new Date().getTime();
        const diferencia = fechaObjetivo - fechaActual;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('contador').innerHTML = `¡Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s para Navidad!`;

        if (diferencia < 0) {
            clearInterval(intervalo);
            document.getElementById('contador').innerHTML = '¡Feliz Navidad!';
            lanzarSerpentinas();
        }
    }, 1000);
    function lanzarSerpentinas() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(confetti);
        }
    }
});
