# Rechnernetze – Fragenkatalog Trainer

Dieses Projekt ist ein interaktiver Fragenkatalog für das Fach Rechnernetze, optimiert für die Klausurvorbereitung. Die Anwendung bietet Karteikarten- und Listenansicht, Filtermöglichkeiten nach Kategorie und Thema sowie eine Prüfungssimulation.

## Features
- **Karteikarten-Modus**: Fragen einzeln durchgehen, Antwort per Klick oder Wischgeste (Swipe) auf mobilen Geräten anzeigen.
- **Listen-Modus**: Alle gefilterten Fragen als Liste mit ausklappbaren Antworten.
- **Filter**: Nach Kategorie, Thema und Suchbegriff filtern.
- **Prüfungssimulation**: Starte eine Simulation mit den aktuell gefilterten Fragen. Falsche Antworten kommen erneut in die Queue.
- **Statistiken**: Zeigt Gesamtanzahl und gefilterte Anzahl der Fragen.
- **Tastatur-Shortcuts**: Navigation und Antwortanzeige per Tastatur (Desktop).
- **Animationen**: Kartenwechsel ist animiert für ein modernes Nutzererlebnis.

## Installation & Nutzung
1. Repository klonen oder Dateien herunterladen.
2. Stelle sicher, dass die Datei `questions.js` im Projektverzeichnis liegt und die Fragenstruktur enthält.
3. Öffne `index.html` im Browser (Desktop oder Mobile).

**ODER**

- Rufe [rechnerarchitektur-fragenkatalog.netlify.app](https://rechnerarchitektur-fragenkatalog.netlify.app) auf

## Dateien
- `index.html`: Hauptanwendung mit Karteikarten, Listenansicht und Filter.
- `questions.js`: Enthält den Fragenkatalog als JavaScript-Objekt.
- `exam.html`: Prüfungssimulation (separat aufrufbar).

## Projektstruktur

```
Rechnerarchitektur-Fragenkatalog/
├── index.html                # Hauptanwendung (Karteikarten & Liste)
├── exam.html                 # Prüfungssimulation
├── questions.js              # Fragenkatalog (Daten)
├── README.md                 # Projektbeschreibung
└── scripts/                  # JavaScript-Logik, modular aufgebaut
    ├── main.js               # Einstiegspunkt für index.html
    ├── exam.js               # Einstiegspunkt für exam.html
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

## Struktur der `questions.js`
Die Datei `questions.js` definiert den Fragenkatalog als JavaScript-Objekt und bindet ihn über `window.CATALOG` ein. Die Struktur sieht folgendermaßen aus:

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
- Fragen, Kategorien und Themen können in `questions.js` angepasst werden.
- Das Design basiert auf [Tailwind CSS](https://tailwindcss.com/) und ist für moderne Browser und mobile Geräte optimiert.

## Lizenz
Dieses Projekt ist für den privaten Gebrauch und die Klausurvorbereitung gedacht. Bei Weiterverwendung bitte Quellen angeben.
