# 🎮 Tic Tac Toe (Tris)

Tic Tac Toe (Tris) è un'applicazione web del classico gioco del tris, progettata per offrire un'esperienza di gioco semplice ma coinvolgente. L'interfaccia intuitiva permette di giocare immediatamente, alternando le mosse tra X e O sulla griglia 3x3.

## ✨ Funzionalità Principali

- **Griglia di Gioco 3x3**: Il classico campo da gioco del tris
- **Alternanza Automatica**: Le mosse si alternano automaticamente tra X e O
- **Rilevamento Vittoria**: Identificazione automatica delle combinazioni vincenti
- **Rilevamento Pareggio**: Riconoscimento delle situazioni di stallo
- **Modalità Light/Dark**: Tema chiaro e scuro per adattarsi alle tue preferenze
- **Design Responsivo**: Esperienza ottimale su tutti i dispositivi, dai desktop agli smartphone
- **Interfaccia Intuitiva**: Design minimalista per un'esperienza di gioco immediata

## 🛠️ Tecnologie Utilizzate

- **Frontend**: Vue.js 3 (versione CDN)
- **UI Framework**: Bootstrap 5
- **Icone**: Bootstrap Icons
- **Stili**: CSS personalizzato con variabili per temi
- **Gestione Stato**: Vue.js Reactivity System

## 🚀 Installazione e Utilizzo

### Requisiti Preliminari

Non sono necessari requisiti particolari, l'applicazione funziona direttamente nel browser.

### Passaggi per l'Utilizzo

1. Clona il repository:
   ```bash
   git clone https://github.com/tuousername/Tris.github.io.git
   cd Tris.github.io
   ```

2. Apri il file index.html nel tuo browser preferito:
   ```bash
   start index.html  # su Windows
   open index.html   # su macOS
   ```

## Struttura del progetto

Il progetto ora segue una struttura moderna, con tutto il codice sorgente all'interno della cartella `src`:

```
Tris.github.io/
├── src/
│   ├── main.js         # Entry point
│   ├── App.vue         # Root component
│   └── components/
│       ├── GameBoard.vue
│       └── Cell.vue
├── index.html
├── style.css
└── README.md
```

## 📱 Come Giocare

1. **Apri l'applicazione** nel tuo browser
2. **Inizia a giocare** cliccando su una cella vuota (inizia sempre X)
3. **Alterna le mosse** cliccando su altre celle (dopo X tocca a O)
4. **Vinci** allineando tre simboli uguali in orizzontale, verticale o diagonale
5. **Ricomincia** con il pulsante "Reset Game" per una nuova partita
6. **Cambia tema** utilizzando il toggle in alto a destra per passare dalla modalità chiara a quella scura

## 🔄 Possibili Miglioramenti Futuri

- Implementazione di un avversario AI per il gioco in solitario
- Aggiunta di effetti sonori per le mosse e le vittorie
- Conteggio del punteggio per partite multiple
- Possibilità di personalizzare i simboli X e O
- Versione online per giocare contro avversari remoti

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti. Sentiti libero di aprire una issue o inviare una pull request.

---

Creato con ❤️ per gli amanti dei giochi classici.
© 2025 Tic Tac Toe
