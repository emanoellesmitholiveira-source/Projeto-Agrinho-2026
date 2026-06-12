function atualizarSimulador() {
    let prod = 50;
    let amb = 50;

    if (document.getElementById('plantio').checked) {
        prod += 15;
        amb += 15;
    }
    if (document.getElementById('tecnologia').checked) {
        prod += 25;
        amb += 10;
    }
    if (document.getElementById('ilpf').checked) {
        prod += 10;
        amb += 25;
    }

    // Limitar o máximo em 100%
    prod = Math.min(prod, 100);
    amb = Math.min(amb, 100);

    document.getElementById('prod-val').innerText = prod + "%";
    document.getElementById('amb-val').innerText = amb + "%";

    let msg = document.getElementById('mensagem');
    if (prod >= 80 && amb >= 80) {
        msg.innerText = "Parabéns! Você alcançou o equilíbrio perfeito: Agro Forte e Futuro Sustentável! 🌱🚜";
        msg.style.color = "#1b5e20";
    } else {
        msg.innerText = "Continue combinando tecnologias para atingir a máxima eficiência socioambiental.";
        msg.style.color = "#2c3e50";
    }
}
