window.CATALOG = {
  "categories": [
    {
      "id": "hardware",
      "title": "Hardware & Speicher",
      "topics": [
        {
          "id": "ser_par",
          "title": "Serielle und Parallele Übertragung",
          "questions": [
            {
              "id": "hardware_01",
              "question": "Was unterscheidet serielle von paralleler Datenübertragung?",
              "answer": "Seriell: Bits nacheinander über eine Leitung. Parallel: mehrere Bits gleichzeitig über mehrere Leitungen. Serielle Übertragung ist einfacher, störungsärmer und skaliert bei hohen Takten besser, parallele ist lokal schneller."
            },
            {
              "id": "hardware_02",
              "question": "Welche gängigen Schnittstellen nutzen serielle Übertragung?",
              "answer": "USB, SATA, PCIe, HDMI – alle verwenden schnelle, serielle Hochgeschwindigkeitskanäle. Bei SATA und USB steht das \"S\" dabei für \"Serial\"."
            },
            {
              "id": "hardware_03",
              "question": "Welche Komponente ist heute noch parallel mit der CPU verbunden?",
              "answer": "Der RAM – moderne DDR-Module nutzen weiterhin einen parallelen Datenbus."
            },
            {
              "id": "hardware_24",
              "question": "Für welches Wort steht das \"S\" in Bezeichnungen wie SATA oder USB und was bedeutet es?",
              "answer": "Es steht für \"Serial\". Die Daten werden bitweise nacheinander über wenige Leitungen übertragen, statt viele Bits parallel über viele Leitungen zu schicken."
            }
          ]
        },
        {
          "id": "ram",
          "title": "RAM, ECC und Speicheraufbau",
          "questions": [
            {
              "id": "hardware_04",
              "question": "Welche Leitungsarten verbinden CPU und RAM?",
              "answer": "Datenleitungen übertragen Daten. Adressleitungen übertragen die Speicheradresse. Steuerleitungen übertragen Signale wie Lesen/Schreiben, Takt und Freigabe."
            },
            {
              "id": "hardware_05",
              "question": "Worin unterscheiden sich SRAM und DRAM und wo werden sie eingesetzt?",
              "answer": "SRAM ist schnell, teuer, ohne Refresh – ideal für CPU-Caches. DRAM ist billig, kompakt, braucht Refresh – ideal als Hauptspeicher."
            },
            {
              "id": "hardware_06",
              "question": "Warum besitzen Server-RAM-Module zusätzliche Chips oder 72 Bit Breite?",
              "answer": "Sie enthalten 8 zusätzliche ECC-Bits zur Fehlerkorrektur. Damit lassen sich 1-Bit-Fehler korrigieren und viele Mehrbit-Fehler erkennen. Eingesetzt in Servern und Workstations."
            },
            {
              "id": "hardware_07",
              "question": "Was ist die kleinste adressierbare Einheit im RAM?",
              "answer": "Ein Byte (8 Bit)."
            },
            {
              "id": "hardware_16",
              "question": "Warum gibt es mehrere Cache-Level (L1, L2, L3) und wie unterscheiden sie sich?",
              "answer": "Mehrere Ebenen sind ein Kompromiss zwischen Geschwindigkeit und Größe. L1 sehr klein und extrem schnell, L2 größer und langsamer, L3 groß und oft zwischen Kernen geteilt."
            },
            {
              "id": "hardware_17",
              "question": "Welcher Cache liegt im normalen RAM und wird vom Betriebssystem verwaltet?",
              "answer": "Der Page-Cache (Disk-Cache) im RAM. Er wird vom Betriebssystem verwaltet und puffert Dateizugriffe, um I/O-Latenzen zu reduzieren."
            },
            {
              "id": "hardware_25",
              "question": "Welche Speichertechnologien werden typischerweise für Hauptspeicher, CPU-Caches und BIOS/UEFI verwendet und warum?",
              "answer": "Hauptspeicher: DRAM, weil es hohe Kapazität bei niedrigen Kosten bietet. CPU-Caches: SRAM, weil es sehr schnell ist und kein Refresh braucht. BIOS/UEFI: Flash/EEPROM, weil der Inhalt nichtflüchtig und trotzdem umprogrammierbar ist."
            }
          ]
        },
        {
          "id": "massenspeicher",
          "title": "SSD, Flash und Blockspeicher",
          "questions": [
            {
              "id": "hardware_08",
              "question": "Wie unterscheidet sich RAM-Adressierung von der auf Platten und SSDs?",
              "answer": "Im RAM hat jedes Byte eine eigene Adresse. Massenspeicher arbeiten blockweise (512 B oder 4 KB) – kein Zugriff auf einzelne Bytes."
            },
            {
              "id": "hardware_09",
              "question": "Welches Problem hat Flash-Speicher technisch?",
              "answer": "Begrenzte Schreib-/Löschzyklen. Hohe Schreiblast führt zu Verschleiß, steigender Latenz und Fehlern. Enterprise-SSDs nutzen Wear-Leveling und Overprovisioning."
            }
          ]
        },
        {
          "id": "dma",
          "title": "DMA und Busmaster",
          "questions": [
            {
              "id": "hardware_10",
              "question": "Was bedeutet Busmastering und welchen Vorteil hat es?",
              "answer": "Ein I/O-Gerät kann per DMA direkt auf RAM zugreifen. Vorteil: CPU-Entlastung, höhere I/O-Leistung, geringere Latenzen."
            },
            {
              "id": "hardware_11",
              "question": "Wie läuft ein DMA-Transfer technisch ab?",
              "answer": "CPU programmiert DMA-Controller (Quelle/Ziel/Größe). DMA überträgt Daten autonom und signalisiert Abschluss per Interrupt."
            }
          ]
        },
        {
          "id": "architektur",
          "title": "CPU-Architektur & Caches",
          "questions": [
            {
              "id": "hardware_12",
              "question": "Was unterscheidet Harvard- von Von-Neumann-Architektur?",
              "answer": "Von-Neumann: gemeinsamer Speicher für Daten und Code → Engpass möglich. Harvard: getrennte Speicher/Busse → paralleler Zugriff, höhere Geschwindigkeit."
            },
            {
              "id": "hardware_13",
              "question": "Was ist SIMD und welche Befehle nutzen es?",
              "answer": "SIMD = ein Befehl verarbeitet mehrere Daten parallel. Auf x86: SSE, AVX, MMX."
            },
            {
              "id": "hardware_14",
              "question": "Was ist NUMA und wie wirkt es sich aus?",
              "answer": "Non-Uniform Memory Access: jeder CPU-Sockel hat eigenen lokalen RAM. Lokal schneller, Remote langsamer → relevante Performanceunterschiede."
            },
            {
              "id": "hardware_15",
              "question": "Welche Zugriffsmuster machen Caches effektiv?",
              "answer": "Temporal Locality (häufiger Zugriff auf dieselben Daten) und Spatial Locality (Zugriff auf benachbarte Daten)."
            },
            {
              "id": "hardware_18",
              "question": "Wie schnell sind typische Speicherstufen (L1, L2, L3, RAM, SSD, HDD) ungefähr?",
              "answer": "L1: etwa 1 ns, L2: etwa 3–5 ns, L3: etwa 10–15 ns, RAM: etwa 60–100 ns, SSD: grob 50–150 µs, HDD: grob 5–10 ms."
            },
            {
              "id": "hardware_19",
              "question": "Wie lang ist ein CPU-Taktzyklus moderner x86-CPUs ungefähr?",
              "answer": "Bei 3 GHz etwa 0,33 ns pro Takt."
            },
            {
              "id": "hardware_20",
              "question": "Warum ist ein mechanischer Plattenzugriff so langsam?",
              "answer": "Wegen mechanischer Latenzen: Kopfbewegung und Rotationswartezeit – Größenordnung Millisekunden statt Nanosekunden."
            },
            {
              "id": "hardware_21",
              "question": "Wie heißt die Architektur mit getrennten Instruktions- und Datenbussen in der CPU?",
              "answer": "Harvard-Architektur."
            },
            {
              "id": "hardware_22",
              "question": "Gibt es außerhalb der CPU eine Trennung von Befehls- und Datenspeicher?",
              "answer": "Nein. Außerhalb der CPU sind Code und Daten im selben RAM abgelegt."
            },
            {
              "id": "hardware_23",
              "question": "Was bedeutet Intels Marketing-Begriff Hyperthreading technisch?",
              "answer": "Eine physische CPU-Kerneinheit stellt zwei (oder mehr) logische Prozessoren bereit. Die Pipeline und Ausführungseinheiten werden von zwei Threads zeitlich geteilt, um Leerlaufzeiten zu reduzieren und die Auslastung des Kerns zu erhöhen."
            }
          ]
        }
      ]
    },
    {
      "id": "os",
      "title": "Betriebssystem",
      "topics": [
        {
          "id": "interrupts",
          "title": "Interrupts & Boot",
          "questions": [
            {
              "id": "os_01",
              "question": "Wie teilt ein I/O-Gerät der CPU mit, dass es bedient werden muss?",
              "answer": "Über einen Hardware-Interrupt, ausgelöst durch eine Interrupt-Leitung."
            },
            {
              "id": "os_02",
              "question": "Was ist ein Interrupt-Handler und was enthält die Interrupt-Vektortabelle?",
              "answer": "Ein ISR ist der Code zur Verarbeitung eines Interrupts. Die Interrupt-Vektortabelle enthält die Adressen aller ISRs."
            },
            {
              "id": "os_03",
              "question": "Welche Programme laufen vor dem eigentlichen OS?",
              "answer": "BIOS/UEFI (in Flash) und anschließend ein Bootloader (auf einem Speichergerät)."
            },
            {
              "id": "os_05",
              "question": "Welche Ereignisse führen zum Wechsel vom Nutzermodus in den Kernel?",
              "answer": "Hardware-Interrupts, Systemaufrufe (Syscalls) und Faults wie Page Faults oder Schutzverletzungen."
            },
            {
              "id": "os_06",
              "question": "Welche typischen Quellen für Interrupts gibt es?",
              "answer": "Timer, I/O-Geräte, Netzwerkkarten, Software-Interrupts und Exceptions."
            },
            {
              "id": "os_07",
              "question": "Was sucht BIOS/UEFI beim Booten und was startet es anschließend?",
              "answer": "Es sucht einen Bootloader beziehungsweise einen konfigurierten Starteintrag und lädt ihn in den Speicher."
            },
            {
              "id": "os_10",
              "question": "Welcher Hardware-Baustein erzeugt regelmäßig Interrupts ohne Datenübertragung, und wozu nutzt das Betriebssystem diese?",
              "answer": "Der Programmable Interval Timer (PIT) bzw. eine Timer-Hardware. Das Betriebssystem nutzt diese periodischen Interrupts für Zeitscheiben-Scheduling, Zeitmessung und Timeout-Steuerung."
            }
          ]
        },
        {
          "id": "devices",
          "title": "Char vs Block Devices",
          "questions": [
            {
              "id": "os_04",
              "question": "Worin unterscheiden sich Char- und Block-Devices?",
              "answer": "Char-Devices: zeichenorientiert, sequenziell, meist ohne Cache (z. B. Tastatur). Block-Devices: blockorientiert, gepuffert, wahlfreier Zugriff (z. B. SSD)."
            },
            {
              "id": "os_08",
              "question": "Wie lautet der Sammelbegriff für Massenspeicher unter Unix/Linux?",
              "answer": "Block Devices."
            },
            {
              "id": "os_09",
              "question": "Welche Geräte zählen zu Character Devices?",
              "answer": "Zum Beispiel Tastatur, Maus, serielle Schnittstellen, Terminals und Pipes."
            },
            {
              "id": "os_11",
              "question": "Wie heißt das Verfahren, bei dem die CPU den Status eines I/O-Bausteins fortlaufend abfragt, statt auf einen Interrupt zu warten?",
              "answer": "Polling – die CPU prüft in einer Schleife regelmäßig den Status des Geräts, ob es Daten senden oder empfangen kann."
            }
          ]
        }
      ]
    },
    {
      "id": "scheduling",
      "title": "Prozesse, Threads & Scheduling",
      "topics": [
        {
          "id": "strategien",
          "title": "Scheduling-Strategien",
          "questions": [
            {
              "id": "sched_01",
              "question": "Welche Scheduling-Strategien gibt es und was optimieren sie?",
              "answer": "FIFO/Batch → Durchsatz. Round-Robin → Reaktionszeit. Priority → Wichtigkeit/Echtzeit."
            },
            {
              "id": "sched_02",
              "question": "Wann wird der Scheduler aktiv?",
              "answer": "Bei Timer-Interrupts, Syscalls, I/O-Interrupts, wenn ein Prozess blockiert oder endet und bei Prioritätsänderungen."
            },
            {
              "id": "sched_06",
              "question": "Warum ist ideal faires Scheduling in der Praxis nicht fair?",
              "answer": "Weil Prozesse oft blockieren, zum Beispiel durch I/O. Dadurch bekommen I/O-lastige Prozesse im Mittel mehr Chancen als reine CPU-Burner."
            },
            {
              "id": "sched_07",
              "question": "Welche Kriterien nutzt ein Scheduler außer der reinen Strategie?",
              "answer": "Priorität, bisherige CPU-Zeit, I/O-Wartezeit, Alterung des Prozesses und Heuristiken für Interaktivität."
            },
            {
              "id": "sched_08",
              "question": "Welche Scheduling-Strategien passen zu Webserver, Echtzeitsteuerung und wissenschaftlichen Berechnungen?",
              "answer": "Webserver: Round Robin oder faire Scheduler. Echtzeitsteuerung: Prioritäts- bzw. Echtzeit-Scheduling. Wissenschaftliche Berechnungen: Batch/FIFO."
            },
            {
              "id": "sched_11",
              "question": "In welchen Anwendungsbereichen ist eine kurze Reaktionszeit das Hauptkriterium für den Scheduler?",
              "answer": "Bei interaktiven Systemen und Echtzeitanwendungen, zum Beispiel Benutzeroberflächen, Steuerungen (z.B. U-Bahn, ABS) und Audio/Video-Streaming."
            }
          ]
        },
        {
          "id": "prozesse_threads",
          "title": "Prozesse und Threads",
          "questions": [
            {
              "id": "sched_03",
              "question": "Wie unterscheiden sich Prozesse und Threads bezüglich Speicher?",
              "answer": "Threads teilen Code, Daten und Heap, haben aber eigene Stacks. Prozesse haben getrennte Adressräume."
            },
            {
              "id": "sched_04",
              "question": "Was speichert ein OS pro Thread und pro Prozess?",
              "answer": "Pro Thread: Registerzustand, Stack, Threadstatus. Pro Prozess: Adressraum, offene Dateien, Rechte, Umgebungsvariablen und die dazugehörigen Threads."
            },
            {
              "id": "sched_09",
              "question": "Welche Informationen speichert das Betriebssystem konkret pro Thread?",
              "answer": "Thread-ID, Registersatz, Stackpointer, Stack, Zustand (running, blocked …) und Scheduling-Informationen."
            },
            {
              "id": "sched_10",
              "question": "Welche Informationen speichert das Betriebssystem konkret pro Prozess?",
              "answer": "Virtueller Adressraum, Page Tables, offene Dateien, Benutzer- und Gruppen-IDs, Umgebungsvariablen, Prozessgruppe sowie die Liste der Threads."
            }
          ]
        },
        {
          "id": "echtzeit",
          "title": "Echtzeit",
          "questions": [
            {
              "id": "sched_05",
              "question": "Was unterscheidet harte und weiche Echtzeit?",
              "answer": "Harte Echtzeit: Deadlines dürfen nie verfehlt werden. Weiche Echtzeit: Deadline-Verletzungen sind tolerierbar, aber unerwünscht."
            }
          ]
        }
      ]
    },
    {
      "id": "mmu",
      "title": "Memory Management",
      "topics": [
        {
          "id": "virt_phys",
          "title": "Virtuelle & reale Adressen",
          "questions": [
            {
              "id": "mmu_01",
              "question": "Was ist der Unterschied zwischen virtueller und physischer Adresse?",
              "answer": "Die virtuelle Adresse sieht das Programm, die physische Adresse bezeichnet die reale Position im RAM. Die MMU übersetzt zwischen beiden."
            },
            {
              "id": "mmu_02",
              "question": "Welche Aufgaben hat die MMU?",
              "answer": "Adressübersetzung und Zugriffsprüfung für jede Speicheroperation."
            },
            {
              "id": "mmu_03",
              "question": "Wie groß ist eine Page und warum braucht man sie?",
              "answer": "Typisch 4 KB. Pages sind die Einheit, in der virtuelle und physische Speicherbereiche einander zugeordnet werden."
            },
            {
              "id": "mmu_08",
              "question": "Wer erstellt und verwaltet die Page Tables einer Anwendung?",
              "answer": "Der Kernel des Betriebssystems. Er verwaltet Page Tables pro Prozess."
            },
            {
              "id": "mmu_09",
              "question": "Welche zwei Gründe führen zu einem verweigerten Speicherzugriff durch die MMU?",
              "answer": "Die Seite ist nicht gemappt oder die angeforderten Zugriffsrechte (lesen, schreiben, ausführen) sind nicht erlaubt."
            }
          ]
        },
        {
          "id": "pagefaults",
          "title": "Page Faults & Swapping",
          "questions": [
            {
              "id": "mmu_04",
              "question": "Was ist ein Page Fault?",
              "answer": "Ein Zugriff auf eine virtuelle Adresse ohne gültigen Seiteneintrag oder mit unzulässigen Rechten. Die MMU löst einen Fault aus."
            },
            {
              "id": "mmu_05",
              "question": "Wie reagiert das OS auf Page Faults?",
              "answer": "Fehlende Page nachladen und Prozess fortsetzen – oder bei illegalem Zugriff den Prozess beenden."
            },
            {
              "id": "mmu_10",
              "question": "Was passiert bei einem Page Fault technisch?",
              "answer": "Die MMU löst einen Trap/Interrupt aus, der Kernel prüft den Zugriff, lädt ggf. die Seite von Platte nach, aktualisiert die Page Tables und setzt den Prozess fort oder beendet ihn."
            },
            {
              "id": "mmu_11",
              "question": "Was ist Swapping und wann tritt es auf?",
              "answer": "Wenn bei RAM-Knappheit viele Seiten oder ganze Prozesse auf Platte ausgelagert werden. Das tritt auf, wenn Working Sets größer sind als der vorhandene RAM."
            },
            {
              "id": "mmu_13",
              "question": "Wie heißt der Fachbegriff für das Ereignis, wenn ein Speicherzugriff auf eine nicht gültig gemappte oder unzulässige Adresse trifft?",
              "answer": "Page Fault beziehungsweise Speicherzugriffs-Fault; er löst einen Trap in den Kernel aus."
            },
            {
              "id": "mmu_14",
              "question": "Wozu dienen pagefile.sys unter Windows bzw. Swap-Partitionen unter Linux und wann wird darauf zugegriffen?",
              "answer": "Sie dienen als Auslagerungsspeicher für RAM-Seiten. Es wird geschrieben, wenn RAM knapp wird und selten benutzte Seiten Platz machen müssen. Es wird gelesen, wenn eine ausgelagerte Seite wieder benötigt wird und zurück in den RAM geholt wird."
            }
          ]
        },
        {
          "id": "thrashing",
          "title": "Thrashing & Working Set",
          "questions": [
            {
              "id": "mmu_06",
              "question": "Was ist das Working Set eines Prozesses?",
              "answer": "Die Menge der Speicherseiten, die ein Prozess aktuell aktiv nutzt."
            },
            {
              "id": "mmu_07",
              "question": "Was ist Thrashing und wie entsteht es?",
              "answer": "Zustand extremer Auslagerungsvorgänge, wenn Working Sets nicht in den RAM passen. Das System verbringt fast alle Zeit mit Paging."
            },
            {
              "id": "mmu_12",
              "question": "Was lässt sich aus dem Working Set eines Systems für die RAM-Dimensionierung ableiten?",
              "answer": "Der RAM sollte mindestens die Summe der Working Sets aller gleichzeitig aktiven Prozesse aufnehmen können, um Thrashing zu vermeiden."
            }
          ]
        }
      ]
    },
    {
      "id": "raid",
      "title": "RAID",
      "topics": [
        {
          "id": "raid_levels",
          "title": "RAID-Varianten",
          "questions": [
            {
              "id": "raid_01",
              "question": "Was sind die Ziele von RAID?",
              "answer": "Erhöhte Verfügbarkeit durch Redundanz und höhere Performance durch parallele Plattenzugriffe."
            },
            {
              "id": "raid_02",
              "question": "Welche Eigenschaften haben RAID 0, 1, 5 und 10?",
              "answer": "RAID 0: keine Redundanz, maximal schnell. RAID 1: Spiegelung, hohe Sicherheit. RAID 5: Parität, gute Kapazität, langsames Schreiben. RAID 10: kombiniert Performance und hohe Ausfallsicherheit."
            },
            {
              "id": "raid_05",
              "question": "Wie viel Ausfallsicherheit bietet RAID 0?",
              "answer": "Keine. Fällt eine Platte aus, sind alle Daten verloren."
            },
            {
              "id": "raid_06",
              "question": "Wie viele Nutzdatenplatten ergeben sich bei 10 Platten für RAID 0, RAID 5 und RAID 10?",
              "answer": "RAID 0: 10 Nutzdatenplatten. RAID 5: 9. RAID 10: 5, da jeweils zwei Platten gespiegelt werden."
            },
            {
              "id": "raid_07",
              "question": "Wie viele Platten dürfen bei RAID 5 ausfallen, ohne Datenverlust zu verursachen?",
              "answer": "Genau eine Platte."
            },
            {
              "id": "raid_10",
              "question": "Warum kombiniert man RAID 0 und RAID 1 zu RAID 10?",
              "answer": "Man kombiniert das Striping von RAID 0 (Performance) mit der Spiegelung von RAID 1 (Ausfallsicherheit). RAID 10 bietet damit hohe Geschwindigkeit und hohe Redundanz."
            },
            {
              "id": "raid_11",
              "question": "In welchem Punkt ist RAID 5 besser als RAID 1 oder RAID 10, und wo liegt der Nachteil?",
              "answer": "RAID 5 nutzt den Speicherplatz effizienter, weil nur die Paritätsinformation zusätzlich benötigt wird. Nachteil: Schreibzugriffe sind langsamer durch Paritätsberechnung und Read-Modify-Write, Rebuilds sind lang und riskant."
            }
          ]
        },
        {
          "id": "rebuild",
          "title": "Rebuild & Risiken",
          "questions": [
            {
              "id": "raid_03",
              "question": "Warum sind große RAID-5-Verbünde riskanter?",
              "answer": "Der Rebuild dauert lange und belastet alle Platten stark. Die Wahrscheinlichkeit eines zweiten Ausfalls während des Rebuilds steigt."
            },
            {
              "id": "raid_04",
              "question": "Warum eignet sich RAID 10 besser für hohe Schreiblast?",
              "answer": "Keine Paritätsberechnung und kein Read-Modify-Write-Zyklus. Schreibzugriffe sind einfacher und meist schneller."
            },
            {
              "id": "raid_08",
              "question": "Wie viele Plattenzugriffe sind bei RAID 5 nötig, um einen einzelnen Block zu schreiben?",
              "answer": "Typisch Read-Modify-Write: alten Datenblock und alte Parität lesen, neuen Datenblock und neue Parität schreiben – insgesamt vier Zugriffe."
            },
            {
              "id": "raid_09",
              "question": "Welche Zugriffe sind beim Rebuild einer RAID-5-Platte nötig?",
              "answer": "Alle verbliebenen Daten- und Paritätsblöcke müssen gelesen werden, um die Inhalte der ausgefallenen Platte komplett neu zu berechnen und zu schreiben."
            }
          ]
        }
      ]
    },
    {
      "id": "filesystem",
      "title": "Dateisysteme",
      "topics": [
        {
          "id": "basics",
          "title": "Dateisystemgrundlagen",
          "questions": [
            {
              "id": "fs_01",
              "question": "Was entspricht unter Windows einem Laufwerksbuchstaben?",
              "answer": "Einer Partition oder einem logischen Volume."
            },
            {
              "id": "fs_02",
              "question": "Was bedeutet das Dirty Bit?",
              "answer": "Es markiert ein Dateisystem als nicht sauber ausgehängt. Beim nächsten Mount wird eine Konsistenzprüfung oder ein Journal-Replay ausgelöst. Es wird beim Mounten geprüft; ist es gesetzt, führt das System eine Dateisystemprüfung oder ein Journal-Replay aus."
            },
            {
              "id": "fs_08",
              "question": "Was sind Quotas in Dateisystemen?",
              "answer": "Begrenzungen für Speicherplatz oder Dateianzahl pro Benutzer oder Gruppe."
            },
            {
              "id": "fs_09",
              "question": "Was macht Formatieren und was macht es nicht?",
              "answer": "Es legt die Strukturen des Dateisystems neu an und markiert Bereiche als frei, löscht Daten aber nicht sicher."
            },
            {
              "id": "fs_12",
              "question": "Wofür steht FAT und welche Informationen werden dort gespeichert?",
              "answer": "FAT steht für File Allocation Table. Dort ist vermerkt, welche Cluster belegt oder frei sind und wie die Cluster zu Dateien verkettet sind."
            },
            {
              "id": "fs_13",
              "question": "Was stellt das sichere Auswerfen eines Speichermediums sicher?",
              "answer": "Dass alle Schreibcaches geleert und alle Dateisystemstrukturen konsistent auf das Medium geschrieben wurden, bevor es entfernt wird."
            }
          ]
        },
        {
          "id": "rechte",
          "title": "Rechte & Links",
          "questions": [
            {
              "id": "fs_03",
              "question": "Welche Rechte kennt Unix/Linux ohne ACL?",
              "answer": "Lesen, Schreiben, Ausführen für Besitzer, Gruppe und andere – abgebildet in rwxrwxrwx."
            },
            {
              "id": "fs_04",
              "question": "Was unterscheidet Hardlinks und Symlinks?",
              "answer": "Hardlinks verweisen auf dieselbe Inode, Symlinks speichern nur einen Pfad. Symlinks können broken sein, Hardlinks nicht."
            },
            {
              "id": "fs_10",
              "question": "Wie erkennt man Hardlinks und Symlinks in ls -l?",
              "answer": "Symlinks haben Typ 'l' und zeigen den Zielpfad an. Hardlinks sehen wie normale Dateien aus, teilen sich aber die gleiche Inode mit anderen Einträgen."
            },
            {
              "id": "fs_11",
              "question": "Was bedeutet ein Link-Count größer als 1 bei einer Datei?",
              "answer": "Es existieren mehrere Hardlinks, die alle auf dieselbe Inode zeigen."
            }
          ]
        },
        {
          "id": "thin",
          "title": "Thin Provisioning & Snapshots",
          "questions": [
            {
              "id": "fs_05",
              "question": "Welche Vorteile haben Snapshots bei Backups?",
              "answer": "Konsistente Sicherungen ohne lange Downtime, weil der Zustand des Dateisystems eingefroren wird, während weitergearbeitet werden kann."
            },
            {
              "id": "fs_06",
              "question": "Was ist Thin Provisioning?",
              "answer": "Es wird mehr logischer Speicher bereitgestellt, als physisch vorhanden ist. Physischer Platz wird erst bei Bedarf zugewiesen."
            },
            {
              "id": "fs_07",
              "question": "Wozu dient TRIM?",
              "answer": "Das Betriebssystem teilt einer SSD mit, welche Blöcke nicht mehr genutzt werden, damit der Controller sie intern freigeben und optimal verwalten kann."
            }
          ]
        }
      ]
    },
    {
      "id": "backup",
      "title": "Backups",
      "topics": [
        {
          "id": "backup_arten",
          "title": "Backup-Arten",
          "questions": [
            {
              "id": "backup_01",
              "question": "Was unterscheidet Voll-, inkrementelle und differenzielle Backups?",
              "answer": "Voll: alles. Inkrementell: Änderungen seit letztem Backup. Differenziell: Änderungen seit dem letzten Vollbackup."
            },
            {
              "id": "backup_02",
              "question": "Welche Backups müssen nach Totalausfall wieder eingespielt werden?",
              "answer": "Vollbackup plus alle nachfolgenden inkrementellen Backups bis zum gewünschten Zeitpunkt."
            },
            {
              "id": "backup_03",
              "question": "Wie viel Speicher benötigt eine Woche täglicher Vollbackups bei 50 TB Daten?",
              "answer": "7 × 50 TB = 350 TB."
            },
            {
              "id": "backup_04",
              "question": "Wie viel Speicher benötigt eine Woche differenzieller Backups, wenn täglich 10 TB ändern?",
              "answer": "Ein Vollbackup mit 50 TB und zum Ende der Woche ein differenzielles Backup mit 10 TB → zusammen 60 TB."
            },
            {
              "id": "backup_05",
              "question": "Wie viel Speicher benötigen inkrementelle Backups über eine Woche bei 10 TB täglichen Änderungen?",
              "answer": "50 TB Vollbackup plus 6 × 10 TB inkrementelle Backups = 110 TB."
            },
            {
              "id": "backup_06",
              "question": "Welche Backups müssen eingespielt werden, um am Freitag den letzten Stand wiederherzustellen?",
              "answer": "Das Vollbackup vom Wochenende plus alle inkrementellen Backups bis einschließlich Donnerstag."
            },
            {
              "id": "backup_07",
              "question": "Bei welcher Sicherungsart ist der tägliche Sicherungsaufwand typischerweise geringer, inkrementell oder differentiell?",
              "answer": "Beim inkrementellen Backup, weil nur die Änderungen seit dem letzten beliebigen Backup gesichert werden, nicht seit dem letzten Vollbackup."
            },
            {
              "id": "backup_08",
              "question": "In welcher Reihenfolge müssen Backups bei inkrementellen bzw. differentiellen Verfahren zur Wiederherstellung eingespielt werden?",
              "answer": "Inkrementell: zuerst das letzte Vollbackup, dann alle inkrementellen Backups in zeitlicher Reihenfolge. Differentiell: das letzte Vollbackup und danach nur das letzte differentielle Backup."
            }
          ]
        }
      ]
    },
    {
      "id": "cluster",
      "title": "Cluster",
      "topics": [
        {
          "id": "ha_hpc",
          "title": "HA & HPC",
          "questions": [
            {
              "id": "cluster_01",
              "question": "Was unterscheidet HA- und HPC-Cluster?",
              "answer": "HA: Fokus auf Verfügbarkeit und Ausfallsicherheit. HPC: Fokus auf maximale Rechenleistung."
            },
            {
              "id": "cluster_02",
              "question": "Was ist ein SAN?",
              "answer": "Ein eigenes Speichernetzwerk, das Server mit Storage verbindet, typischerweise mit Fibre Channel oder iSCSI."
            },
            {
              "id": "cluster_03",
              "question": "Was ist ein Split-Brain?",
              "answer": "Clusterknoten verlieren die Verbindung zueinander und arbeiten unabhängig weiter – es entstehen widersprüchliche Zustände und Daten."
            },
            {
              "id": "cluster_05",
              "question": "Wofür wird die Verbindungstechnologie Infiniband typischerweise eingesetzt?",
              "answer": "Als sehr schnelle, latenzarme Interconnect-Technologie in HPC-Clustern und für Storage-Anbindungen, zum Beispiel zwischen Rechenknoten und zentralem Storage."
            }
          ]
        },
        {
          "id": "cluster_fs",
          "title": "Cluster-Filesysteme",
          "questions": [
            {
              "id": "cluster_04",
              "question": "Wann braucht man ein Cluster-Filesystem?",
              "answer": "Wenn mehrere Knoten gleichzeitig lesend und schreibend auf dieselben Dateien zugreifen müssen. Solche Filesysteme heißen Cluster-Filesysteme; sie koordinieren parallelen Zugriff mehrerer Knoten auf denselben Speicherbereich."
            }
          ]
        }
      ]
    },
    {
      "id": "vm",
      "title": "Virtualisierung",
      "topics": [
        {
          "id": "vm_container",
          "title": "VMs vs Container",
          "questions": [
            {
              "id": "vm_01",
              "question": "Wie viele Betriebssysteme laufen bei 10 VMs auf einem Host?",
              "answer": "11 – 10 Gastbetriebssysteme plus der Host."
            },
            {
              "id": "vm_02",
              "question": "Wie viele bei 10 Containern?",
              "answer": "Nur ein Betriebssystem, alle Container teilen sich den Host-Kernel."
            },
            {
              "id": "vm_03",
              "question": "Was unterscheidet VM-Images von Container-Images?",
              "answer": "VM-Images enthalten ein vollständiges OS inklusive Kernel. Container-Images enthalten nur Anwendung, Laufzeitumgebung und Bibliotheken."
            },
            {
              "id": "vm_04",
              "question": "Welche Möglichkeiten bieten VMs, die Container nicht bieten?",
              "answer": "Eigenen Kernel, unterschiedliche Betriebssysteme, starke Isolation auf Hardwareebene und eigene virtuelle Hardware."
            },
            {
              "id": "vm_05",
              "question": "Können auf einem Host gleichzeitig verschiedene Betriebssysteme laufen – mit VMs, Containern oder beiden?",
              "answer": "Mit VMs ja, mit Containern nicht, da Container den Kernel des Hosts teilen."
            },
            {
              "id": "vm_06",
              "question": "Welche Nachteile haben VMs gegenüber Containern?",
              "answer": "Höherer Ressourcenverbrauch, längere Startzeiten, größere Images und mehr Verwaltungsaufwand."
            }
          ]
        }
      ]
    },
    {
      "id": "ipc",
      "title": "Interprozesskommunikation",
      "topics": [
        {
          "id": "modelle",
          "title": "IPC-Modelle",
          "questions": [
            {
              "id": "ipc_01",
              "question": "Welche zwei Modelle zum Datenaustausch gibt es?",
              "answer": "Shared Memory und Message Passing."
            },
            {
              "id": "ipc_02",
              "question": "Welches Modell eignet sich besser für verteilte Systeme?",
              "answer": "Message Passing, weil Prozesse auf unterschiedlichen Rechnern keinen gemeinsamen Speicher haben."
            },
            {
              "id": "ipc_14",
              "question": "Bei welchem IPC-Modell sind zusätzliche Synchronisationskonstrukte nötig und warum?",
              "answer": "Bei Shared Memory, weil mehrere Threads oder Prozesse gleichzeitig auf gemeinsame Daten zugreifen können und ohne Synchronisation Race Conditions entstehen."
            }
          ]
        },
        {
          "id": "sync",
          "title": "Synchronisation",
          "questions": [
            {
              "id": "ipc_03",
              "question": "Was ist eine Race Condition?",
              "answer": "Ein fehlerhafter Zustand durch unsynchronisierten parallelen Zugriff auf gemeinsame Daten."
            },
            {
              "id": "ipc_04",
              "question": "Was ist ein Deadlock?",
              "answer": "Mehrere Prozesse oder Threads warten zyklisch auf Ressourcen voneinander, keiner kann fortfahren."
            },
            {
              "id": "ipc_05",
              "question": "Was ist Busy Waiting?",
              "answer": "Ein Thread wartet in einer Schleife aktiv auf eine Bedingung und verbrennt CPU-Zeit."
            },
            {
              "id": "ipc_07",
              "question": "Was unterscheidet atomare von normalen Befehlen?",
              "answer": "Atomare Befehle garantieren, dass Lesen, Ändern und Schreiben einer Speicherstelle nicht von anderen Threads unterbrochen werden können."
            },
            {
              "id": "ipc_08",
              "question": "Wie verhindert man Gleichzeitigkeitseffekte auf Single-Core-Systemen ohne atomare Befehle?",
              "answer": "Man deaktiviert kurzzeitig Interrupts, führt den kritischen Abschnitt aus und aktiviert Interrupts danach wieder."
            },
            {
              "id": "ipc_09",
              "question": "Was muss das Betriebssystem tun, wenn eine kritische Region freigegeben wird?",
              "answer": "Es muss wartende Threads wecken und dem Scheduler die Möglichkeit geben, sie einzuplanen."
            },
            {
              "id": "ipc_10",
              "question": "Warum ist Benutzereingabe in kritischen Regionen problematisch?",
              "answer": "Sie blockiert die kritische Region potenziell sehr lange und verhindert Fortschritt anderer Threads."
            },
            {
              "id": "ipc_12",
              "question": "Welche typischen Konstrukte werden zur zeitlichen Koordinierung des Datenzugriffs bei Shared Memory verwendet?",
              "answer": "Mutexe, Semaphore, Monitore, Spinlocks und ähnliche Lock-Konstrukte; sie schützen kritische Regionen vor gleichzeitiger Ausführung."
            },
            {
              "id": "ipc_13",
              "question": "Was muss ein Test-and-Set-Maschinenbefehl im Zusammenhang mit einer Belegt-Variable garantieren?",
              "answer": "Dass Prüfen und Setzen der Belegt-Variable atomar, also ununterbrechbar erfolgt, sodass kein anderer Thread dazwischen dieselbe Variable ändern kann."
            }
          ]
        },
        {
          "id": "amdahl",
          "title": "Amdahl's Law",
          "questions": [
            {
              "id": "ipc_06",
              "question": "Was sagt Amdahl’s Law aus?",
              "answer": "Die Beschleunigung eines Programms ist durch den seriellen Anteil begrenzt, selbst mit unendlich vielen Prozessoren."
            },
            {
              "id": "ipc_11",
              "question": "Welche Eingangsgrößen verwendet Amdahl’s Law und was ist die Ausgabe?",
              "answer": "Serieller Anteil s und Prozessoranzahl N. Ausgabe ist der erreichbare Speedup S."
            }
          ]
        }
      ]
    },
    {
      "id": "shell",
      "title": "Shell",
      "topics": [
        {
          "id": "io",
          "title": "Umleitungen",
          "questions": [
            {
              "id": "shell_01",
              "question": "Wie zeigt man lange Ausgaben seitenweise an?",
              "answer": "Mit einem Pipe zu less, zum Beispiel: Befehl | less."
            },
            {
              "id": "shell_02",
              "question": "Was bewirken >, >> und 2>&1?",
              "answer": "> überschreibt eine Datei mit stdout, >> hängt stdout an eine Datei an, 2>&1 leitet stderr auf stdout um."
            },
            {
              "id": "shell_06",
              "question": "Wie kombinierst du who und wc -l, um die angemeldeten Benutzer zu zählen?",
              "answer": "who | wc -l"
            },
            {
              "id": "shell_11",
              "question": "Wohin gibt man in einem C-Programm Ausgaben, die immer im Terminal erscheinen sollen – unabhängig von Umleitungen wie > oder |?",
              "answer": "Auf stderr, also den Standardfehlerkanal. Dieser wird normalerweise nicht von einfachen stdout-Umleitungen erfasst."
            }
          ]
        },
        {
          "id": "path_mount",
          "title": "PATH, Dateien & Mount",
          "questions": [
            {
              "id": "shell_03",
              "question": "Was enthält PATH?",
              "answer": "Eine durch Doppelpunkte getrennte Liste von Verzeichnissen, in denen die Shell nach Programmen sucht."
            },
            {
              "id": "shell_04",
              "question": "Warum startet man ein Programm im aktuellen Ordner mit ./programm?",
              "answer": "Weil das aktuelle Verzeichnis aus Sicherheitsgründen meist nicht im PATH steht."
            },
            {
              "id": "shell_05",
              "question": "Was passiert beim Mounten eines USB-Sticks?",
              "answer": "Das Dateisystem des Sticks wird unter einem Verzeichnis (Mountpoint) in den existierenden Verzeichnisbaum eingehängt."
            },
            {
              "id": "shell_07",
              "question": "Wie wechselst du zwei Verzeichnisebenen nach oben?",
              "answer": "Mit cd ../.."
            },
            {
              "id": "shell_08",
              "question": "Wie sprichst du index.html im Wurzelverzeichnis an?",
              "answer": "Mit dem absoluten Pfad /index.html"
            },
            {
              "id": "shell_09",
              "question": "Wie sprichst du index.html zwei Ebenen höher an?",
              "answer": "../../index.html"
            },
            {
              "id": "shell_10",
              "question": "Was sagt PATH dem System konkret?",
              "answer": "In welchen Verzeichnissen der Shell-Interpreter nach einem ausführbaren Programm gesucht, wenn man nur den Namen ohne Pfad angibt."
            },
            {
              "id": "shell_12",
              "question": "Wie verschiebst du die Datei input.txt aus deinem Home-Verzeichnis ins aktuelle Verzeichnis?",
              "answer": "Mit mv ~/input.txt ./"
            },
            {
              "id": "shell_13",
              "question": "Was macht der Befehl cp ~/report.pdf .?",
              "answer": "Er kopiert die Datei report.pdf aus dem Home-Verzeichnis in das aktuelle Verzeichnis."
            }
          ]
        }
      ]
    }
  ]
};

