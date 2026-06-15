function atualizarSimulador() {
    // A fazenda começa com 50% de cada status
    let prod = 50;
    let amb = 50;

    // --- PRÁTICAS SUSTENTÁVEIS (Sobem ambos ou equilibram) ---
    if (document.getElementById('plantio').checked) {
        prod += 10;
        amb += 15;
    }
    if (document.getElementById('tecnologia').checked) {
        prod += 20;
        amb += 10;
    }
    if (document.getElementById('ilpf').checked) {
        prod += 15;
        amb += 20;
    }

    // --- PRÁTICAS PREDATÓRIAS (Sobem lucro rápido, mas destroem o ambiente) ---
    if (document.getElementById('desmatamento').checked) {
        prod += 25; // Lucro rápido por mais espaço
        amb -= 35; // Destruição pesada do ambiente
    }
    if (document.getElementById('quimicos').checked) {
        prod += 15; 
        amb -= 20; 
    }
    if (document.getElementById('solo').checked) {
        prod += 10; 
        amb -= 25; 
    }

    // Garantir que os valores fiquem entre 0% e 100%
    prod = Math.max(0, Math.min(prod, 100));
    amb = Math.max(0, Math.min(amb, 100));

    // Atualizar os textos na tela
    document.getElementById('prod-val').innerText = prod + "%";
    document.getElementById('amb-val').innerText = amb + "%";

    // Lógica das mensagens de Feedback baseadas no tema do Agrinho
    let msg = document.getElementById('mensagem');
    
    if (amb <= 20) {
        msg.innerText = "❌ Colapso Ambiental! Suas práticas esgotaram os recursos naturais. A longo prazo, a fazenda vai falir por falta de água e solo fértil.";
        msg.style.color = "#c62828";
    } else if (prod <= 30) {
        msg.innerText = "⚠️ Prejuízo Financeiro! Preservar é essencial, mas a fazenda precisa produzir alimentos para se manter forte e sustentável.";
        msg.style.color = "#ef6c00";
    } else if (prod >= 80 && amb >= 80) {
        msg.innerText = "🏆 Perfeito! AGRO FORTE, FUTURO SUSTENTÁVEL! Você provou que alta produção e respeito ao meio ambiente andam juntos! 🌱🚜";
        msg.style.color = "#2e7d32";
    } else if (prod > 70 && amb < 50) {
        msg.innerText = "🚜 Alerta: Alta produção, mas com risco ambiental alto. O futuro da sua propriedade está ameaçado.";
        msg.style.color = "#d84315";
    } else {
        msg.innerText = "🔄 Ajuste suas escolhas. Busque o equilíbrio onde a Produtividade e a Preservação fiquem acima de 80%.";
        msg.style.color = "#2c3e50";
    }
}
