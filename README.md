# Calcolatore Punti Partita per Magic: The Gathering (Commander)

> Uno strumento web semplice e intuitivo, ottimizzato per dispositivi mobili, per calcolare i Punti Partita (PP) in partite di Magic: The Gathering, formato Commander.

Questo progetto fornisce una pagina web auto-contenuta che permette ai giocatori di calcolare rapidamente i "Punti Partita" (PP). Questi punti sono utilizzati in formati multiplayer come Commander per determinare il piazzamento dei giocatori che non hanno vinto la partita, specialmente in situazioni di eliminazioni simultanee o quando si deve stabilire un ordine di arrivo allo scadere del tempo.

## Come vengono calcolati i Punti Partita (PP)

Il calcolatore implementa il seguente, specifico sistema di punteggio per valutare la posizione di un giocatore. La valutazione si basa su dati raccolti all'inizio del turno del giocatore o all'inizio della sua fase di combattimento.

### 1. Punti Vita
* **30 PP** se il giocatore ha 60 o più punti vita.
* Per ogni 2 punti vita al di sotto di 60, si sottrae 1 PP.

### 2. Carte in Mano
* **25 PP** se il giocatore ha 7 o più carte in mano.
* Per ogni carta in meno di 7, si sottraggono 3 PP.
* Con 0 carte in mano, il punteggio per questa categoria è **0 PP**.

### 3. Situazione sul Campo di Battaglia (Board State)
* **Creature e Forza:** Si parte da **20 PP** per 10 o più creature, con una penalità di **-2 PP** per ogni creatura in meno. A questo valore si sommano **PP pari alla forza totale** di tutte le creature controllate.
* **Mana Disponibile:** Si guadagna **+1 PP** per ogni mana producibile da permanenti (terre, artefatti, creature) e **+1 PP** ogni 2 mana "usa e getta" (es. Tesori). Il punteggio massimo ottenibile da questa categoria è limitato a **30 PP**.
* **Altri Permanenti:** Si ottengono **+10 PP** se si controlla il proprio Comandante e **+10 PP** se si controllano almeno 5 permanenti che non siano né creature né fonti di mana.

### 4. Bonus e Malus di Stato
* **+5 PP** per essere il Monarca.
* **+5 PP** per controllare almeno una creatura con volare.
* **-10 PP** se il proprio grimorio è ridotto a meno della metà delle carte iniziali.
* **-20 PP** se si hanno 7 o più segnalini veleno.
* **-20 PP** se si è sotto la minaccia di un attacco letale da danno da Comandante (Voltron).

## Funzionalità dello strumento

* **Calcolo in tempo reale**: Il punteggio totale si aggiorna istantaneamente ad ogni modifica.
* **Interfaccia semplice e intuitiva**: Progettato per essere veloce da usare, con pulsanti `+` e `-` per una rapida modifica dei valori numerici e checkbox per i bonus/malus.
* **Design Mobile-first**: Ottimizzato per l'uso su smartphone, ideale per l'utilizzo al tavolo da gioco.
* **Completo**: Include campi per tutti i fattori che influenzano il calcolo dei PP secondo le regole implementate.
* **Funzionamento Offline**: Una volta caricata la pagina (o salvato il file HTML in locale), non è necessaria alcuna connessione a internet.
* **Tasto Reset**: Un pulsante permette di azzerare rapidamente tutti i campi per iniziare un nuovo calcolo.

## Come usare lo strumento

1.  Salva il file HTML del calcolatore sul tuo dispositivo (PC, tablet o smartphone).
2.  Aprilo con un qualsiasi browser web moderno (es. Chrome, Safari, Firefox, Edge).
3.  Utilizza i controlli interattivi (input numerici, pulsanti, checkbox) per inserire i valori corrispondenti allo stato di gioco del giocatore da valutare.
4.  Il totale dei Punti Partita (PP) sarà visualizzato chiaramente in fondo alla pagina e si aggiornerà automaticamente.
5.  Premi il tasto "Reset" per cancellare tutti i dati inseriti e preparare il calcolatore per una nuova valutazione.

## Tecnologie utilizzate

* **HTML5**: Per la struttura semantica della pagina.
* **Tailwind CSS**: Per uno stile moderno, responsive e pulito, applicato tramite classi di utilità (incluso via CDN).
* **JavaScript (Vanilla)**: Per tutta la logica di calcolo e l'interattività della pagina, senza dipendenze da framework esterni.