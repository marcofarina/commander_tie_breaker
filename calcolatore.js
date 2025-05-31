document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    const resetButton = document.getElementById('reset-button');

    // Funzione principale per calcolare tutto
    const calculateTotal = () => {
        let totalPP = 0;

        // 1. Punti Vita
        const life = parseInt(document.getElementById('life').value) || 0;
        let lifePoints = 0;
        if (life >= 60) {
            lifePoints = 30;
        } else if (life > 0) {
            lifePoints = 30 - Math.floor((60 - life) / 2);
        }
        document.getElementById('life-points').textContent = `${lifePoints} PP`;
        totalPP += lifePoints;

        // 2. Carte in mano
        const cards = parseInt(document.getElementById('cards').value) || 0;
        let cardPoints; // Inizializzazione rimossa per pulizia codice
        if (cards === 0) {
            cardPoints = 0;
        } else if (cards >= 7) {
            cardPoints = 25;
        } else {
            cardPoints = 25 - (7 - cards) * 3;
        }
        document.getElementById('cards-points').textContent = `${cardPoints} PP`;
        totalPP += cardPoints;

        // 3. Board: Creature e Forza
        const creatures = parseInt(document.getElementById('creatures').value) || 0;
        const power = parseInt(document.getElementById('power').value) || 0;
        let creatureScore; // Inizializzazione rimossa per pulizia codice
        if (creatures >= 10) {
            creatureScore = 20;
        } else {
            creatureScore = 20 - (10 - creatures) * 2;
        }
        creatureScore += power;
        document.getElementById('board-creatures-points').textContent = `${creatureScore} PP`;
        totalPP += creatureScore;

        // 4. Board: Mana (Cap 30)
        const manaPerm = parseInt(document.getElementById('mana-perm').value) || 0;
        const manaTemp = parseInt(document.getElementById('mana-temp').value) || 0;
        let manaPoints = manaPerm + Math.floor(manaTemp / 2);
        manaPoints = Math.min(manaPoints, 30); // Applica il cap
        document.getElementById('mana-points').textContent = `${manaPoints} PP`;
        totalPP += manaPoints;

        // 5. Bonus
        if (document.getElementById('cmdr-in-campo').checked) totalPP += 10;
        if (document.getElementById('permanents').checked) totalPP += 10;
        if (document.getElementById('flyer').checked) totalPP += 5;
        if (document.getElementById('monarch').checked) totalPP += 5;

        // 6. Malus
        if (document.getElementById('voltron-lethal').checked) totalPP -= 20;
        if (document.getElementById('poison').checked) totalPP -= 20;
        if (document.getElementById('deck-half').checked) totalPP -= 10;

        // Aggiorna totale
        const totalEl = document.getElementById('total-points');
        totalEl.textContent = totalPP;
        totalEl.classList.add('total-pulse');
        setTimeout(() => totalEl.classList.remove('total-pulse'), 500);
    };

    // Funzione per resettare il form
    const resetForm = () => {
        document.getElementById('life').value = 40;
        document.getElementById('cards').value = 7;
        document.getElementById('creatures').value = 0;
        document.getElementById('power').value = 0;
        document.getElementById('mana-perm').value = 0;
        document.getElementById('mana-temp').value = 0;

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);

        calculateTotal();
    };

    // Aggiungi event listener a tutti gli input
    inputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
        input.addEventListener('change', calculateTotal);
    });

    resetButton.addEventListener('click', resetForm);

    // Calcolo iniziale al caricamento
    calculateTotal();
});

// Funzione per i pulsanti + e -
function updateValue(id, amount) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value) || 0;
    let newValue = currentValue + amount;
    if (newValue < (parseInt(input.min) || 0)) {
        newValue = (parseInt(input.min) || 0);
    }
    input.value = newValue;
    // Scatena l'evento 'input' per ricalcolare il totale
    input.dispatchEvent(new Event('input'));
}

// Funzione per cliccare sulla label del checkbox
function toggleCheckbox(id) {
    const checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
}