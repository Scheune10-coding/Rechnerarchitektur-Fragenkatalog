# Rechnernetze – Fragenkatalog Trainer

Dieses Projekt ist ein interaktiver Fragenkatalog für das Fach Rechnernetze, optimiert für die Klausurvorbereitung. Die Anwendung bietet Karteikarten- und Listenansicht, Filtermöglichkeiten nach Kategorie und Thema sowie eine Prüfungssimulation.

## Features
- **Karteikarten-Modus**: Fragen einzeln durchgehen, Antwort per Klick oder Wischgeste (Swipe) auf mobilen Geräten anzeigen.
- **Listen-Modus**: Alle gefilterten Fragen als Liste mit ausklappbaren Antworten.
- **Filter**: Nach Kategorie, Thema und Suchbegriff filtern.
- **Prüfungssimulation**: Starte eine Simulation mit den aktuell gefilterten Fragen. Falsche Antworten kommen erneut in die Queue. Die Reihenfolge der Prüfungsfragen ist immer zufällig.
- **Statistiken**: Zeigt Gesamtanzahl und gefilterte Anzahl der Fragen.
- **Tastatur-Shortcuts**: Navigation und Antwortanzeige per Tastatur (Desktop).
- **Wischgesten**: Auf mobilen Geräten kann per Swipe zwischen Karten gewechselt und in der Prüfung bewertet werden.
- **Animationen**: Kartenwechsel ist animiert für ein modernes Nutzererlebnis.
- **Datenquellen-Auswahl**: Du kannst zwischen verschiedenen Fragenkatalogen (questions.js, questionsExtended.js) wählen.

## Installation & Nutzung
1. Repository klonen oder Dateien herunterladen.
2. Stelle sicher, dass die Datei `questions.js` und optional `questionsExtended.js` im Projektverzeichnis liegen und die Fragenstruktur enthalten.
3. Öffne `index.html` im Browser (Desktop oder Mobile).

**ODER**

- Rufe [rechnerarchitektur-fragenkatalog.netlify.app](https://rechnerarchitektur-fragenkatalog.netlify.app) auf

## Dateien
- `index.html`: Hauptanwendung mit Karteikarten, Listenansicht und Filter.
- `questions.js`: Standard-Fragenkatalog als JavaScript-Objekt.
- `questionsExtended.js`: Erweiterter Fragenkatalog mit zusätzlichen/vertieften Fragen.
- `exam.html`: Prüfungssimulation (separat aufrufbar).
- `README.md`: Projektbeschreibung.
- `questionsExtended.js`: Enthält einen größeren/vertieften Fragenpool. Wähle im Menü die gewünschte Datenquelle aus.

## Unterschied zwischen `questions.js` und `questionsExtended.js`
- **questions.js**: Enthält den Basis-Fragenkatalog für die Standard-Klausurvorbereitung.
- **questionsExtended.js**: Enthält zusätzliche, vertiefende oder schwierigere Fragen. Ideal für intensive Vorbereitung oder Wiederholung.
- Die Anwendung kann im Menü zwischen beiden Quellen umschalten. Die gewählte Quelle wird überall verwendet (Karten, Liste, Prüfung).

## Projektstruktur
```
Rechnerarchitektur-Fragenkatalog/
├── index.html                # Hauptanwendung (Karteikarten & Liste)
├── exam.html                 # Prüfungssimulation
├── questions.js              # Standard-Fragenkatalog (Daten)
├── questionsExtended.js      # Erweiterter Fragenkatalog (Daten)
├── README.md                 # Projektbeschreibung
└── scripts/                  # JavaScript-Logik, modular aufgebaut
    ├── main.js               # Einstiegspunkt für index.html
    ├── exam.js               # Einstiegspunkt für exam.html
    ├── dataSource.js         # Logik für Datenquellen-Auswahl und Laden
    ├── dom/                  # DOM-Initialisierung und Auswahl
    │   ├── initCategorySelect.js    # Kategorie-Auswahl initialisieren
    │   └── updateTopicSelect.js     # Themen-Auswahl aktualisieren
    ├── filter/                 # Filterfunktionen
    │   ├── getFilteredQuestions.js  # Fragen filtern
    │   └── clampIndex.js            # Index begrenzen
    ├── render/                 # Renderfunktionen für UI
    │   ├── renderCardView.js        # Kartenansicht rendern
    │   └── renderListView.js        # Listenansicht rendern
    ├── events/                 # Interaktionslogik (Touch, Keyboard, UI)
    │   ├── cardEvents.js             # Wischgesten & Animationen für Karten
    │   ├── keyboardEvents.js         # Tastatursteuerung
    │   └── uiEvents.js               # UI-Events (Filter, Moduswechsel)
    └── exam/                   # Logik für Prüfungssimulation
        └── setupExamNavigation.js   # Navigation & Logik für Prüfung
```

## Struktur der `questions.js` und `questionsExtended.js`
Beide Dateien definieren den Fragenkatalog als JavaScript-Objekt und binden ihn über `window.CATALOG` ein. Die Struktur sieht folgendermaßen aus:

```js
window.CATALOG = {
  categories: [
    {
      id: "kategorie-id",
      title: "Kategoriename",
      topics: [
        {
          id: "thema-id",
          title: "Themenname",
          questions: [
            {
              id: "fragen-id",
              question: "Fragetext",
              answer: "Antworttext"
            },
            // ...weitere Fragen
          ]
        },
        // ...weitere Themen
      ]
    },
    // ...weitere Kategorien
  ]
};
```

- **categories**: Array von Kategorien, jede mit `id`, `title` und einer Liste von Themen (`topics`).
- **topics**: Array von Themen pro Kategorie, jeweils mit `id`, `title` und einer Liste von Fragen (`questions`).
- **questions**: Array von Fragen pro Thema, jeweils mit `id`, `question` (Fragetext) und `answer` (Antworttext).

Die Anwendung liest diese Struktur aus und stellt die Fragen entsprechend dar.

## Anpassung
- Fragen, Kategorien und Themen können in `questions.js` und `questionsExtended.js` angepasst werden.
- Das Design basiert auf [Tailwind CSS](https://tailwindcss.com/) und ist für moderne Browser und mobile Geräte optimiert.

## Lizenz
Dieses Projekt ist für den privaten Gebrauch und die Klausurvorbereitung gedacht. Bei Weiterverwendung bitte Quellen angeben.
