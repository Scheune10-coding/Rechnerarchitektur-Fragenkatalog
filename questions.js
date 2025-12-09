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
              "answer": "Seriell: Bits werden nacheinander über eine oder wenige Leitungen übertragen. Parallel: mehrere Bits gleichzeitig über mehrere Leitungen. Serielle Übertragung ist einfacher, störungsärmer und skaliert bei hohen Taktraten besser, parallele ist lokal auf kurzen Strecken sehr schnell."
            },
            {
              "id": "hardware_02",
              "question": "Welche gängigen Schnittstellen nutzen serielle Übertragung?",
              "answer": "USB, SATA, PCIe, HDMI – alle verwenden schnelle serielle Hochgeschwindigkeitskanäle. Bei SATA und USB steht das „S“ für „Serial“."
            },
            {
              "id": "hardware_03",
              "question": "Welche Komponente ist heute noch parallel mit der CPU verbunden?",
              "answer": "Der RAM – moderne DDR-Module nutzen weiterhin einen parallelen Datenbus mit typischerweise 64 Datenleitungen."
            },
            {
              "id": "hardware_24",
              "question": "Für welches Wort steht das „S“ in Bezeichnungen wie SATA oder USB und was bedeutet es?",
              "answer": "Es steht für „Serial“. Die Daten werden bitweise nacheinander über wenige differenzielle Leitungen übertragen, statt viele Bits parallel über viele Leitungen zu schicken."
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
              "answer": "Datenleitungen übertragen Daten. Adressleitungen übertragen die Speicheradresse. Steuerleitungen übertragen Signale wie Lesen/Schreiben, Takt, Chip-Select und Freigabe."
            },
            {
              "id": "hardware_05",
              "question": "Worin unterscheiden sich SRAM und DRAM und wo werden sie eingesetzt?",
              "answer": "SRAM ist schnell, teuer und benötigt kein Refresh – ideal für CPU-Caches und Register. DRAM ist billig, kompakt, braucht Refresh – ideal als Hauptspeicher (RAM)."
            },
            {
              "id": "hardware_06",
              "question": "Warum besitzen Server-RAM-Module zusätzliche Chips oder 72 Bit Breite?",
              "answer": "Sie enthalten 8 zusätzliche ECC-Bits zur Fehlerkorrektur. Damit lassen sich 1-Bit-Fehler korrigieren und viele Mehrbit-Fehler erkennen. Eingesetzt in Servern und Workstations, wo Datenintegrität wichtiger ist als Kosten."
            },
            {
              "id": "hardware_07",
              "question": "Was ist die kleinste adressierbare Einheit im RAM?",
              "answer": "Ein Byte (8 Bit). Eine Adresse verweist immer auf ein Byte, auch wenn CPU und Bus in größeren Einheiten (z. B. 64 Bit oder ganze Cachelines) arbeiten."
            },
            {
              "id": "hardware_16",
              "question": "Warum gibt es mehrere Cache-Level (L1, L2, L3) und wie unterscheiden sie sich?",
              "answer": "Mehrere Ebenen sind ein Kompromiss zwischen Geschwindigkeit und Größe. L1 sehr klein und extrem schnell, L2 größer und langsamer, L3 groß und oft zwischen Kernen geteilt. Je größer der Cache, desto langsamer, aber desto mehr Daten passen hinein."
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
            },
            {
              "id": "hardware_26",
              "question": "Warum kann man nicht einfach alle Daten im Cache halten, statt sie im RAM oder auf Platte vorzuhalten?",
              "answer": "Cache-Speicher (SRAM) ist deutlich teurer und flächenintensiver als DRAM und Massenspeicher und daher viel kleiner. Er wird für schnellen Zugriff optimiert, nicht für große Datenmengen. Deshalb braucht man eine kleine, sehr schnelle Cache-Stufe plus große, langsamere Speicherstufen."
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
              "answer": "Im RAM hat jedes Byte eine eigene Adresse. Massenspeicher arbeiten blockweise (typisch 512 B oder 4 KB) – die kleinste Einheit, die gelesen oder geschrieben wird, ist ein Block, nicht ein einzelnes Byte."
            },
            {
              "id": "hardware_09",
              "question": "Welches Problem hat Flash-Speicher technisch?",
              "answer": "Begrenzte Schreib-/Löschzyklen. Hohe Schreiblast führt zu Verschleiß, steigender Latenz und Fehlern. SSD-Controller nutzen Wear-Leveling, Overprovisioning und Fehlerkorrektur, um die Lebensdauer zu verlängern."
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
              "answer": "Ein I/O-Gerät kann per DMA direkt auf RAM zugreifen, ohne dass die CPU jedes Datenwort bewegt. Vorteil: CPU-Entlastung, höhere I/O-Leistung, geringere Latenzen."
            },
            {
              "id": "hardware_11",
              "question": "Wie läuft ein DMA-Transfer technisch ab?",
              "answer": "Die CPU programmiert den DMA-Controller mit Quelle, Ziel und Größe. Der DMA übernimmt den Bus, überträgt die Daten autonom zwischen Gerät und RAM und signalisiert den Abschluss per Interrupt."
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
              "answer": "Von-Neumann: gemeinsamer Speicher und Bus für Daten und Code → potenzieller Engpass. Harvard: getrennte Speicher/Busse für Instruktionen und Daten → paralleler Zugriff und höhere Geschwindigkeit in der CPU."
            },
            {
              "id": "hardware_13",
              "question": "Was ist SIMD und welche Befehle nutzen es?",
              "answer": "SIMD = Single Instruction, Multiple Data. Ein Befehl verarbeitet mehrere Daten parallel in Vektorregistern. Auf x86 sind MMX, SSE/SSE2+ und AVX/AVX2/AVX-512 typische SIMD-Erweiterungen."
            },
            {
              "id": "hardware_14",
              "question": "Was ist NUMA und wie wirkt es sich aus?",
              "answer": "Non-Uniform Memory Access: jeder CPU-Sockel hat einen eigenen lokalen RAM-Bereich. Zugriff auf lokalen RAM ist schneller als auf entfernten RAM eines anderen Sockels → Performance hängt davon ab, wo Daten im System liegen."
            },
            {
              "id": "hardware_15",
              "question": "Welche Zugriffsmuster machen Caches effektiv?",
              "answer": "Temporal Locality: Häufiger Zugriff auf dieselben Daten. Spatial Locality: Zugriff auf benachbarte Daten. Beides sorgt dafür, dass geladene Cachelines mit hoher Wahrscheinlichkeit bald wieder gebraucht werden."
            },
            {
              "id": "hardware_18",
              "question": "Wie schnell sind typische Speicherstufen (L1, L2, L3, RAM, SSD, HDD) ungefähr?",
              "answer": "Größenordnungen: L1-Cache ~1 ns, L2 ~3–5 ns, L3 ~10–15 ns, RAM ~60–100 ns, SSD ~50–150 µs, HDD ~5–10 ms."
            },
            {
              "id": "hardware_19",
              "question": "Wie lang ist ein CPU-Taktzyklus moderner x86-CPUs ungefähr?",
              "answer": "Bei 3 GHz etwa 0,33 ns pro Taktzyklus."
            },
            {
              "id": "hardware_20",
              "question": "Warum ist ein mechanischer Plattenzugriff so langsam im Vergleich zu RAM?",
              "answer": "Weil mechanische Bewegungen nötig sind: der Schreib-/Lesekopf muss positioniert werden (Seek), zusätzlich kommt Rotationswartezeit dazu. Das liegt in der Größenordnung von Millisekunden statt Nanosekunden."
            },
            {
              "id": "hardware_21",
              "question": "Wie heißt die Architektur mit getrennten Instruktions- und Datenbussen in der CPU?",
              "answer": "Harvard-Architektur."
            },
            {
              "id": "hardware_22",
              "question": "Gibt es außerhalb der CPU eine Trennung von Befehls- und Datenspeicher?",
              "answer": "Nein. Im restlichen System (System-RAM, Massenspeicher) liegen Code und Daten gemeinsam im selben Speicher und nutzen denselben Bus."
            },
            {
              "id": "hardware_23",
              "question": "Was bedeutet Intels Marketing-Begriff Hyperthreading technisch?",
              "answer": "Eine physische CPU-Kerneinheit stellt mehrere logische Prozessoren bereit. Zwei Threads teilen sich Pipeline und Ausführungseinheiten, um Leerlaufzeiten zu reduzieren und den Kern besser auszulasten."
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
              "answer": "Über einen Hardware-Interrupt, ausgelöst über eine Interrupt-Leitung zum Interrupt-Controller und von dort an die CPU."
            },
            {
              "id": "os_02",
              "question": "Was ist ein Interrupt-Handler und was enthält die Interrupt-Vektortabelle?",
              "answer": "Ein Interrupt-Handler (ISR) ist der Kernel-Code zur Verarbeitung eines bestimmten Interrupts. Die Interrupt-Vektortabelle enthält die Einsprungadressen aller ISRs, indexiert nach Interruptnummer."
            },
            {
              "id": "os_03",
              "question": "Welche Programme laufen vor dem eigentlichen OS?",
              "answer": "BIOS/UEFI als Firmware im Flash (initialisiert Hardware) und anschließend ein Bootloader, der das eigentliche Betriebssystem von einem Massenspeicher lädt."
            },
            {
              "id": "os_05",
              "question": "Welche Ereignisse führen zum Wechsel vom Nutzermodus in den Kernel?",
              "answer": "Hardware-Interrupts, Systemaufrufe (Syscalls) und Ausnahmen wie Page Faults oder Schutzverletzungen."
            },
            {
              "id": "os_06",
              "question": "Welche typischen Quellen für Interrupts gibt es?",
              "answer": "Timer, I/O-Geräte (z. B. Netzwerkkarten, Plattencontroller), Software-Interrupts sowie Exceptions der CPU (Page Fault, Division durch Null usw.)."
            },
            {
              "id": "os_07",
              "question": "Was sucht BIOS/UEFI beim Booten und was startet es anschließend?",
              "answer": "Es sucht nach einem Bootloader beziehungsweise einem konfigurierten Starteintrag und lädt diesen in den Speicher, um ihn auszuführen."
            },
            {
              "id": "os_10",
              "question": "Welcher Hardware-Baustein erzeugt regelmäßig Interrupts ohne Datenübertragung, und wozu nutzt das Betriebssystem diese?",
              "answer": "Ein System-Timer (PIT, APIC-Timer, HPET). Das Betriebssystem nutzt diese Interrupts für Zeitscheiben-Scheduling, Zeitmessung, Timeouts und andere zeitabhängige Aufgaben."
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
              "answer": "Char-Devices sind zeichenorientiert, liefern Daten als Strom und erlauben meist keinen wahlfreien Zugriff (z. B. Tastatur, serielle Schnittstellen). Block-Devices arbeiten blockorientiert, gepuffert und erlauben wahlfreien Zugriff (z. B. HDDs, SSDs)."
            },
            {
              "id": "os_08",
              "question": "Wie lautet der Sammelbegriff für Massenspeicher unter Unix/Linux?",
              "answer": "Block-Devices – alle Platten, SSDs und ähnliche Massenspeicher werden so angesprochen."
            },
            {
              "id": "os_09",
              "question": "Welche Geräte zählen zu Character Devices?",
              "answer": "Zum Beispiel Tastatur, Maus, serielle Schnittstellen, Terminals, Pseudo-Terminals und Pipes."
            },
            {
              "id": "os_11",
              "question": "Wie heißt das Verfahren, bei dem die CPU den Status eines I/O-Bausteins fortlaufend abfragt, statt auf einen Interrupt zu warten?",
              "answer": "Polling – die CPU fragt den Gerätestatus in einer Schleife aktiv ab und wartet nicht passiv auf Interrupts."
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
              "answer": "FIFO/Batch → Durchsatz. Round-Robin → Reaktionszeit und Fairness. Priority-Scheduling → bevorzugt wichtige/Echtzeit-Prozesse."
            },
            {
              "id": "sched_02",
              "question": "Wann wird der Scheduler aktiv?",
              "answer": "Bei Timer-Interrupts (Zeitscheibenende), bei Systemaufrufen, bei I/O-Interrupts, wenn ein Prozess blockiert oder endet und wenn wartende Prozesse wieder bereit werden."
            },
            {
              "id": "sched_06",
              "question": "Warum ist ideal faires Scheduling in der Praxis nicht fair?",
              "answer": "Weil Prozesse sich unterschiedlich verhalten: I/O-lastige Prozesse blockieren oft und würden bei rein zeitbasierter Fairness bevorteilt oder benachteiligt. Praktische Scheduler berücksichtigen Interaktivität, I/O-Verhalten und Prioritäten."
            },
            {
              "id": "sched_07",
              "question": "Welche Kriterien nutzt ein Scheduler außer der reinen Strategie?",
              "answer": "Priorität, bisher verbrauchte CPU-Zeit, I/O-Wartezeit, Interaktivitäts-Heuristiken und ggf. Alterung (Aging), um Starvation zu verhindern."
            },
            {
              "id": "sched_08",
              "question": "Welche Scheduling-Strategien passen zu Webserver, Echtzeitsteuerung und wissenschaftlichen Berechnungen?",
              "answer": "Webserver: Round-Robin/fairer Scheduler. Echtzeitsteuerung (z. B. U-Bahn, ABS): Prioritäts- oder Echtzeit-Scheduler. Wissenschaftliche Batch-Jobs: FIFO/Batch-Scheduling."
            },
            {
              "id": "sched_11",
              "question": "In welchen Anwendungsbereichen ist eine kurze Reaktionszeit das Hauptkriterium für den Scheduler?",
              "answer": "Bei interaktiven Systemen (GUI, Shell), Audio-/Video-Anwendungen und Echtzeitsystemen wie Maschinen- und Fahrzeugsteuerungen."
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
              "answer": "Threads eines Prozesses teilen sich Code, Daten und Heap, haben aber eigene Stacks und Registerzustände. Prozesse haben normalerweise vollständig getrennte Adressräume und Ressourcenlisten."
            },
            {
              "id": "sched_04",
              "question": "Was speichert ein OS pro Thread und pro Prozess?",
              "answer": "Pro Thread: Registerzustand, Stackpointer, Stack, Threadzustand, Scheduling-Infos. Pro Prozess: virtueller Adressraum (Page Tables), offene Dateien, Benutzer-/Gruppen-IDs, Umgebungsvariablen, Prozesszustand und Liste der Threads."
            },
            {
              "id": "sched_09",
              "question": "Welche Informationen speichert das Betriebssystem konkret pro Thread?",
              "answer": "Thread-ID, Registersatz (inkl. Instruction Pointer), Stackpointer, Stack, Status (running, blocked, ready), Priorität und diverse Scheduling-Flags."
            },
            {
              "id": "sched_10",
              "question": "Welche Informationen speichert das Betriebssystem konkret pro Prozess?",
              "answer": "Prozess-ID, Zuordnung zu Benutzer/Gruppen, virtueller Adressraum und Page Tables, offene Dateien, Signalhandler, Umgebungsvariablen, aktuelle Working-Directory und eine Liste der zum Prozess gehörenden Threads."
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
              "answer": "Harte Echtzeit: Deadlines dürfen nie verfehlt werden (z. B. Airbag, Zugsicherung). Weiche Echtzeit: Deadline-Verletzungen sind tolerierbar, aber unerwünscht (z. B. Video-Streaming)."
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
              "answer": "Die virtuelle Adresse sieht das Programm. Die physische Adresse bezeichnet eine reale Position im RAM. Die MMU übersetzt bei jedem Speicherzugriff von virtuell nach physisch."
            },
            {
              "id": "mmu_02",
              "question": "Welche Aufgaben hat die MMU?",
              "answer": "Adressübersetzung und Zugriffsprüfung für jede Speicheroperation. Sie entscheidet, ob eine Adresse gültig ist und ob der Zugriff (lesen, schreiben, ausführen) erlaubt ist."
            },
            {
              "id": "mmu_03",
              "question": "Wie groß ist eine Page und warum braucht man sie?",
              "answer": "Typisch 4 KB. Pages sind die Zuordnungseinheit zwischen virtuellen und physischen Speicherbereichen und ermöglichen effizientes Swapping und flexible Speicherverwaltung."
            },
            {
              "id": "mmu_08",
              "question": "Wer erstellt und verwaltet die Page Tables einer Anwendung?",
              "answer": "Der Kernel des Betriebssystems. Er legt Page Tables pro Prozess an, aktualisiert sie bei Speicheranforderungen und beim Swapping."
            },
            {
              "id": "mmu_09",
              "question": "Welche zwei Gründe führen zu einem verweigerten Speicherzugriff durch die MMU?",
              "answer": "Entweder existiert für die virtuelle Adresse kein gültiger Eintrag in der Seitentabelle (nicht gemappt), oder die angeforderten Rechte (z. B. Schreiben) sind für diese Seite nicht erlaubt."
            },
            {
              "id": "mmu_16",
              "question": "Wer prüft bei jedem Speicherzugriff, ob der Zugriff zulässig ist, läuft das in Hardware oder Software und was macht diese Einheit zusätzlich?",
              "answer": "Die MMU (Memory Management Unit) prüft in Hardware für jeden Zugriff die Rechte und übersetzt gleichzeitig die virtuelle Adresse mithilfe der Page Tables in eine physische Adresse."
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
              "answer": "Ein Zugriff auf eine virtuelle Adresse ohne gültigen Seiteneintrag oder mit unzulässigen Zugriffsrechten. Die MMU löst einen Fault/Trap aus."
            },
            {
              "id": "mmu_05",
              "question": "Wie reagiert das OS auf Page Faults?",
              "answer": "Wenn die Seite nur ausgelagert ist, wird sie von Platte nachgeladen, die Page Table aktualisiert und der Prozess fortgesetzt. Bei illegalen Zugriffen beendet das OS den Prozess (z. B. mit Segmentation Fault)."
            },
            {
              "id": "mmu_10",
              "question": "Was passiert bei einem Page Fault technisch?",
              "answer": "Die CPU unterbricht den laufenden Code, ruft eine Fault-Routine im Kernel auf, dieser prüft den Grund, lädt ggf. die fehlende Seite von Sekundärspeicher, aktualisiert die Page Tables oder beendet den Prozess."
            },
            {
              "id": "mmu_11",
              "question": "Was ist Swapping und wann tritt es auf?",
              "answer": "Swapping ist das Auslagern von Speicherseiten oder ganzen Prozessen auf den Sekundärspeicher, wenn RAM knapp ist. Es tritt auf, wenn die Summe der Working Sets die physische RAM-Kapazität übersteigt."
            },
            {
              "id": "mmu_13",
              "question": "Wie heißt der Fachbegriff für das Ereignis, wenn ein Speicherzugriff auf eine nicht gültig gemappte oder unzulässige Adresse trifft?",
              "answer": "Page Fault bzw. Speicherzugriffs-Fault (Memory Access Violation)."
            },
            {
              "id": "mmu_14",
              "question": "Wozu dienen pagefile.sys unter Windows bzw. Swap-Partitionen unter Linux und wann wird darauf zugegriffen?",
              "answer": "Sie dienen als Auslagerungsspeicher für RAM-Seiten. Geschrieben wird dorthin, wenn RAM knapp wird und selten genutzte Seiten Platz machen müssen; gelesen wird, wenn eine ausgelagerte Seite wieder benötigt wird und zurück in den RAM geholt wird."
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
              "answer": "Die Menge der Speicherseiten, auf die ein Prozess in einem bestimmten Zeitraum tatsächlich zugreift."
            },
            {
              "id": "mmu_07",
              "question": "Was ist Thrashing und wie entsteht es?",
              "answer": "Thrashing ist ein Zustand extremer Auslagerungsvorgänge, wenn die Working Sets der Prozesse nicht in den RAM passen. Das System verbringt fast seine gesamte Zeit mit Paging statt mit nützlicher Arbeit."
            },
            {
              "id": "mmu_12",
              "question": "Was lässt sich aus dem Working Set eines Systems für die RAM-Dimensionierung ableiten?",
              "answer": "Der RAM sollte so dimensioniert sein, dass die Summe der Working Sets aller gleichzeitig aktiven Prozesse hineinpasst. Sonst droht Thrashing und massive Performanceeinbrüche."
            },
            {
              "id": "mmu_15",
              "question": "Woran erkennt man Thrashing im laufenden Betrieb und was hilft dagegen?",
              "answer": "Symptome: sehr hohe Platten- bzw. SSD-Last, viele Page Faults, CPU überwiegend wartend, Anwendungen wirken extrem langsam, obwohl sie kaum direkten Datei-I/O machen. Hilfe: mehr RAM einbauen, weniger Prozesse parallel laufen lassen oder speicherhungrige Anwendungen begrenzen."
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
              "answer": "Erhöhte Ausfallsicherheit durch Redundanz und höhere Performance durch parallele Plattenzugriffe (Striping)."
            },
            {
              "id": "raid_02",
              "question": "Welche Eigenschaften haben RAID 0, 1, 5 und 10?",
              "answer": "RAID 0: nur Striping, keine Redundanz, maximal schnell. RAID 1: Spiegelung, hohe Sicherheit, halbe Kapazität. RAID 5: Striping mit verteilter Parität, gute Kapazität und Redundanz, aber langsame Schreibzugriffe. RAID 10: gespiegelte Stripes, kombiniert hohe Performance mit hoher Ausfallsicherheit."
            },
            {
              "id": "raid_05",
              "question": "Wie viel Ausfallsicherheit bietet RAID 0?",
              "answer": "Keine. Fällt eine Platte aus, ist der gesamte Verbund unbrauchbar und alle Daten sind verloren."
            },
            {
              "id": "raid_06",
              "question": "Wie viele Nutzdatenplatten ergeben sich bei 10 Platten für RAID 0, RAID 5 und RAID 10?",
              "answer": "RAID 0: 10 Platten Nutzdaten. RAID 5: 9 Nutzplatten, eine Platte Parität. RAID 10: 5 Nutzplatten, je zwei Platten bilden ein Spiegelpaar."
            },
            {
              "id": "raid_07",
              "question": "Wie viele Platten dürfen bei RAID 5 ausfallen, ohne Datenverlust zu verursachen?",
              "answer": "Genau eine Platte. Beim Ausfall einer zweiten Platte ist der Verbund verloren."
            },
            {
              "id": "raid_10",
              "question": "Warum kombiniert man RAID 0 und RAID 1 zu RAID 10?",
              "answer": "Um das Striping von RAID 0 (Performance) mit der Spiegelung von RAID 1 (Redundanz) zu kombinieren. So erhält man hohe Geschwindigkeit bei gleichzeitig hoher Ausfallsicherheit."
            },
            {
              "id": "raid_11",
              "question": "In welchem Punkt ist RAID 5 besser als RAID 1 oder RAID 10, und wo liegt der Nachteil?",
              "answer": "RAID 5 nutzt den Speicherplatz effizienter, da nur eine Platte (äquivalent) für Parität draufgeht. Nachteil: komplexere Paritätsberechnung, langsamere Schreibzugriffe und lange, riskante Rebuild-Phasen."
            }
          ]
        },
        {
          "id": "rebuild",
          "title": "Rebuild & Risiken",
          "questions": [
            {
              "id": "raid_03",
              "question": "Welche Problematik muss man im Auge behalten, wenn man während des Produktivbetriebs in einem RAID-5-Verbund eine defekte Platte ersetzt?",
              "answer": "Der Rebuild erzeugt hohe Zusatzlast auf den verbleibenden Platten, erhöht deren Verschleiß und dauert bei großen Platten lange. Das Risiko eines zweiten Ausfalls oder Lesefehlers während des Rebuilds ist deutlich erhöht; der Verbund läuft in dieser Zeit ohne Redundanz."
            },
            {
              "id": "raid_04",
              "question": "Warum eignet sich RAID 10 besser für hohe Schreiblast?",
              "answer": "Weil RAID 10 keine Paritätsberechnung und keinen Read-Modify-Write-Zyklus benötigt. Daten werden auf zwei gespiegelte Platten geschrieben, was bei vielen kleinen Writes deutlich performanter und weniger komplex ist als Paritätshandling in RAID 5."
            },
            {
              "id": "raid_08",
              "question": "Wie viele Plattenzugriffe sind bei RAID 5 nötig, um einen einzelnen Block zu schreiben?",
              "answer": "Typischerweise vier: alten Datenblock lesen, alte Parität lesen, neue Parität berechnen, neuen Datenblock schreiben und neue Parität schreiben – klassischer Read-Modify-Write-Zyklus."
            },
            {
              "id": "raid_09",
              "question": "Welche Zugriffe sind beim Rebuild einer RAID-5-Platte nötig?",
              "answer": "Es müssen alle verbliebenen Daten- und Paritätsblöcke gelesen werden, um die Inhalte der ausgefallenen Platte Block für Block neu zu berechnen und zu schreiben. Das bedeutet sehr viele sequentielle Lese- und Schreibzugriffe über den gesamten Verbund."
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
              "answer": "Meist einer Partition oder einem logischen Volume. Auf Betriebssystemebene ist es der Einhängepunkt (Mount) eines Dateisystems auf diesem Volume."
            },
            {
              "id": "fs_02",
              "question": "Was bedeutet das Dirty Bit?",
              "answer": "Es markiert ein Dateisystem als nicht sauber ausgehängt, etwa nach Stromausfall oder unsauberem Entfernen. Beim Mounten wird es geprüft; ist es gesetzt, führt das System in der Regel eine Dateisystemprüfung oder ein Journal-Replay durch."
            },
            {
              "id": "fs_08",
              "question": "Was sind Quotas in Dateisystemen?",
              "answer": "Quotas sind Begrenzungen für Speicherplatz oder Dateianzahl pro Benutzer oder Gruppe. Sie verhindern, dass einzelne Nutzer das Dateisystem füllen oder missbrauchen."
            },
            {
              "id": "fs_09",
              "question": "Was macht Formatieren und was macht es nicht?",
              "answer": "Formatieren legt die Grundstrukturen des Dateisystems neu an und markiert alle Bereiche als frei. In der Standardeinstellung werden die alten Daten aber nicht sicher überschrieben, sondern nur ihre Zuordnung verworfen."
            },
            {
              "id": "fs_12",
              "question": "Wofür steht FAT und welche Informationen werden dort gespeichert?",
              "answer": "FAT steht für File Allocation Table. Sie enthält für jeden Cluster, ob er frei oder belegt ist, und wie die Cluster einer Datei verkettet sind."
            },
            {
              "id": "fs_13",
              "question": "Was stellt das sichere Auswerfen eines Speichermediums sicher?",
              "answer": "Dass alle Schreibcaches geleert, alle Dateisystemstrukturen konsistent geschrieben und keine offenen Zugriffe mehr bestehen, bevor das Medium entfernt wird."
            },
            {
              "id": "fs_14",
              "question": "Woran erkennt das Betriebssystem, ob ein Speichermedium sauber ausgeworfen wurde und was kann auf dem Medium sein, wenn es nicht sauber ausgeworfen wurde?",
              "answer": "Es erkennt es über Flags im Dateisystem, z. B. Dirty Bit oder Journaling-Status. Wird ein Medium nicht sauber ausgeworfen, können ungeschriebene Daten im Cache fehlen, Metadaten inkonsistent sein und Dateien unvollständig oder beschädigt sein."
            },
            {
              "id": "fs_15",
              "question": "Welche Tools (z. B. fsck, chkdsk) setzt das Betriebssystem bei gesetztem Dirty Bit ein und was tun sie?",
              "answer": "Werkzeuge wie fsck (Unix/Linux) oder chkdsk (Windows) prüfen Dateisystemstrukturen, vergleichen Soll- und Ist-Zustand und reparieren Inkonsistenzen, z. B. falsche Blocklisten, verwaiste Dateien oder fehlerhafte Verzeichniseinträge."
            },
            {
              "id": "fs_16",
              "question": "Was ist Journaling in Dateisystemen und welchen Vorteil bietet es?",
              "answer": "Journaling protokolliert Metadaten-Änderungen zuerst in einem Journal, bevor sie endgültig ins eigentliche Dateisystem geschrieben werden. Nach Abstürzen kann das Dateisystem anhand des Journals schnell und gezielt in einen konsistenten Zustand zurückgebracht werden, statt die komplette Struktur scannen zu müssen."
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
              "answer": "Lesen (r), Schreiben (w) und Ausführen (x) für jeweils Besitzer, Gruppe und andere – dargestellt in der Form rwxrwxrwx."
            },
            {
              "id": "fs_04",
              "question": "Was unterscheidet Hardlinks und Symlinks?",
              "answer": "Hardlinks sind mehrere Verzeichniseinträge, die auf dieselbe Inode zeigen. Symlinks sind spezielle Dateien, die nur einen Pfad zum Ziel speichern. Wird das Ziel gelöscht oder verschoben, kann ein Symlink „broken“ sein, ein Hardlink nicht."
            },
            {
              "id": "fs_10",
              "question": "Wie erkennt man Hardlinks und Symlinks in ls -l?",
              "answer": "Symlinks haben Dateityp 'l' und zeigen den Zielpfad an (name -> ziel). Hardlinks teilen sich dieselbe Inode mit anderen Einträgen, was sich in gleicher Inode-Nummer und Link-Count > 1 zeigt."
            },
            {
              "id": "fs_11",
              "question": "Was bedeutet ein Link-Count größer als 1 bei einer Datei oder einem Verzeichnis?",
              "answer": "Es existieren mehrere Hardlinks, also mehrere Namen/Verzeichniseinträge, die alle auf dieselbe Inode und damit auf dieselben Daten zeigen. Bei Verzeichnissen ist der Link-Count mindestens 2 ('.' und Eintrag im Elternverzeichnis) plus je ein Eintrag für jedes Unterverzeichnis."
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
              "answer": "Sie frieren den Zustand eines Dateisystems zu einem Zeitpunkt ein, sodass konsistente Sicherungen erstellt werden können, während das System weiterläuft. Das minimiert Downtime und reduziert Inkonsistenzen bei offenen Dateien."
            },
            {
              "id": "fs_06",
              "question": "Was ist Thin Provisioning?",
              "answer": "Es wird mehr logischer Speicherplatz bereitgestellt, als physisch vorhanden ist. Physischer Platz wird erst zugewiesen, wenn Daten tatsächlich geschrieben werden. So lässt sich Speicher effizienter auslasten, allerdings muss man Überbelegung überwachen."
            },
            {
              "id": "fs_07",
              "question": "Wozu dient TRIM bzw. Discard?",
              "answer": "TRIM/Discard ist der Mechanismus, mit dem das Betriebssystem einer SSD oder einem Thin-Provisioned Storage mitteilt, welche Blöcke nicht mehr genutzt werden. Der Controller kann diese Blöcke intern freigeben, aufräumen und für Wear-Leveling bzw. Thin Provisioning korrekt berücksichtigen."
            },
            {
              "id": "fs_17",
              "question": "Was gewinnt man im praktischen Betrieb für Backups, wenn das Filesystem Snapshots beherrscht, und welche Vorgehensweise ermöglichen sie?",
              "answer": "Man kann einen konsistenten, schreibgeschützten Snapshot zum Sicherungszeitpunkt erstellen und das Backup vom Snapshot ziehen, während das Produktivsystem normal weiterläuft. Dadurch werden Inkonsistenzen bei offenen Dateien vermieden, Downtime reduziert und man kann bei Bedarf auf ältere Zustände zurückspringen."
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
              "answer": "Vollbackup: sichert den gesamten Datenbestand. Inkrementell: sichert nur Änderungen seit dem letzten Backup. Differenziell: sichert alle Änderungen seit dem letzten Vollbackup."
            },
            {
              "id": "backup_02",
              "question": "Welche Backups müssen nach Totalausfall wieder eingespielt werden?",
              "answer": "Bei rein inkrementeller Strategie: zuerst das letzte Vollbackup, dann alle zugehörigen inkrementellen Backups bis zum gewünschten Zeitpunkt. Bei differenzieller Strategie: Vollbackup plus das letzte differenzielle Backup."
            },
            {
              "id": "backup_03",
              "question": "Wie viel Speicher benötigt eine Woche täglicher Vollbackups bei 50 TB Daten?",
              "answer": "7 × 50 TB = 350 TB Sicherungsvolumen für eine Woche, wenn jeden Tag ein Vollbackup erstellt wird."
            },
            {
              "id": "backup_04",
              "question": "Wie viel Speicher benötigt eine Woche differenzieller Backups, wenn sich jeden Tag dieselben 10 TB ändern?",
              "answer": "Ein Vollbackup über 50 TB und zum Ende der Woche ein differenzielles Backup über 10 TB Änderungen. Insgesamt etwa 60 TB, wenn man nur das letzte differenzielle Backup vorhält."
            },
            {
              "id": "backup_05",
              "question": "Wie viel Speicher benötigen inkrementelle Backups über eine Woche bei 10 TB täglichen Änderungen?",
              "answer": "50 TB für das Vollbackup plus 6 × 10 TB für die an den anderen Tagen anfallenden Änderungen, also etwa 110 TB Gesamtspeicher."
            },
            {
              "id": "backup_06",
              "question": "Welche Backups müssen eingespielt werden, um am Freitag den letzten Stand wiederherzustellen?",
              "answer": "Das Vollbackup vom Wochenende und alle seitdem entstandenen inkrementellen Backups bis einschließlich Donnerstag. Beim differenziellen Ansatz: Vollbackup plus das letzte differenzielle Backup vor Freitag."
            },
            {
              "id": "backup_07",
              "question": "Bei welcher Sicherungsart ist der tägliche Sicherungsaufwand typischerweise geringer, inkrementell oder differentiell?",
              "answer": "Beim inkrementellen Backup, da täglich nur die Änderungen seit dem letzten Backup gesichert werden, während differenzielle Backups alle Änderungen seit dem letzten Vollbackup enthalten."
            },
            {
              "id": "backup_08",
              "question": "In welcher Reihenfolge müssen Backups bei inkrementellen bzw. differentiellen Verfahren zur Wiederherstellung eingespielt werden?",
              "answer": "Inkrementell: Vollbackup, dann alle inkrementellen Backups in zeitlicher Reihenfolge. Differenziell: Vollbackup, dann nur das letzte differenzielle Backup."
            },
            {
              "id": "backup_09",
              "question": "Eine Firma hat 50 TB Gesamtdaten, davon ändern sich täglich 10 TB regelmäßig genutzte Daten und zusätzlich 2 TB selten geänderte oder neue Daten. Am Wochenende wird ein Vollbackup erstellt. Wie groß ist der ungefähre Gesamt-Platzbedarf der Sicherungen einer Woche bei täglicher Vollsicherung, differentieller bzw. inkrementeller Sicherung?",
              "answer": "Bei täglicher Vollsicherung: 7 × 50 TB = 350 TB. Differentiell: 50 TB (So) + 12 + 24 + 36 + 48 + 60 + 72 TB ≈ 302 TB. Inkrementell: 50 TB (So) + 6 × 12 TB = 122 TB."
            },
            {
              "id": "backup_10",
              "question": "In obigem Szenario passiert Freitagvormittag ein Totalausfall. Welche Datenmenge muss vom Backup zurückgespielt werden, um den Stand der Nacht von Donnerstag auf Freitag zu erreichen – bei täglicher Voll-, differenzieller und inkrementeller Sicherung?",
              "answer": "Tägliche Vollsicherung: 50 TB (letztes Vollbackup). Differentiell: 50 TB Vollbackup + 48 TB differenzielles Backup von Do = 98 TB. Inkrementell: 50 TB Vollbackup + 4 × 12 TB von Mo–Do = 98 TB."
            },
            {
              "id": "backup_11",
              "question": "Auf welches Medium werden Backups im professionellen Umfeld meist gespeichert?",
              "answer": "Häufig auf LTO-Bandlaufwerke (Tape), oft zusätzlich auf Disk-basierte Backup-Systeme. LTO-Tapes sind günstig pro TB, langlebig und gut für Offsite-Lagerung geeignet."
            },
            {
              "id": "backup_12",
              "question": "Eine Firma speichert in der Nacht von Sonntag auf Montag ein Vollbackup, in den übrigen Nächten nur die Änderungen zum Vortag. Wie heißen die Backups der restlichen Woche und was ist der Hauptvorteil gegenüber täglichen Vollbackups?",
              "answer": "Die Backups der restlichen Woche sind inkrementelle Backups. Vorteil: deutlich geringerer Speicherbedarf und kürzere Sicherungszeiten, da nur Änderungen seit dem Vortag gesichert werden."
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
              "answer": "HA-Cluster (High Availability) fokussieren auf Verfügbarkeit und Ausfallsicherheit von Diensten. HPC-Cluster (High Performance Computing) fokussieren auf maximale Rechenleistung für große, parallelisierbare Aufgaben."
            },
            {
              "id": "cluster_02",
              "question": "Was ist ein SAN?",
              "answer": "Ein Storage Area Network – ein eigenes Speichernetzwerk, das Server mit zentralem Storage verbindet, typischerweise über Fibre Channel oder iSCSI, getrennt vom normalen LAN."
            },
            {
              "id": "cluster_03",
              "question": "Was ist ein Split-Brain?",
              "answer": "Clusterknoten verlieren die Verbindung untereinander, nehmen aber an, sie seien jeweils allein zuständig. Beide Seiten arbeiten unabhängig weiter, was zu widersprüchlichen Zuständen und möglicher Datenkorruption führt."
            },
            {
              "id": "cluster_05",
              "question": "Wofür wird die Verbindungstechnologie Infiniband typischerweise eingesetzt?",
              "answer": "Als sehr schnelle, latenzarme Interconnect-Technologie in HPC-Clustern und für Storage-Anbindungen, z. B. zwischen Rechenknoten und zentralem Parallel-Dateisystem."
            },
            {
              "id": "cluster_06",
              "question": "Was ist das primäre Ziel eines High-Availability-Clusters und was ist das wichtigste Designprinzip bei Hardware und Vernetzung?",
              "answer": "Primäres Ziel: maximale Verfügbarkeit von Diensten und Minimierung von Ausfallzeiten. Wichtigstes Designprinzip: Redundanz – keine Single Points of Failure; alle kritischen Komponenten (Server, Storage, Netz, Strom) werden doppelt/mehrfach ausgelegt."
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
              "answer": "Wenn mehrere Knoten gleichzeitig lesend und schreibend auf dasselbe Volume zugreifen müssen. Ein Cluster-Filesystem koordiniert Locking und Caching über alle Knoten hinweg, damit die Daten konsistent bleiben."
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
              "answer": "Insgesamt 11 – das Host-Betriebssystem plus 10 Gastbetriebssysteme in den virtuellen Maschinen."
            },
            {
              "id": "vm_02",
              "question": "Wie viele bei 10 Containern?",
              "answer": "Nur ein Betriebssystem – alle Container teilen sich den Kernel des Hosts und laufen isoliert im Userland."
            },
            {
              "id": "vm_03",
              "question": "Was unterscheidet VM-Images von Container-Images?",
              "answer": "VM-Images enthalten ein vollständiges Betriebssystem inklusive Kernel und virtueller Hardware. Container-Images enthalten nur die Anwendung, Bibliotheken und Laufzeitumgebung und nutzen den Kernel des Host-Systems."
            },
            {
              "id": "vm_04",
              "question": "Welche Möglichkeiten bieten VMs, die Container nicht bieten?",
              "answer": "Eigener Kernel, unterschiedliche Betriebssysteme nebeneinander, stärkere Isolation auf Hardwareebene und eigene virtuelle Hardwarekonfiguration pro VM."
            },
            {
              "id": "vm_05",
              "question": "Können auf einem Host gleichzeitig verschiedene Betriebssysteme laufen – mit VMs, Containern oder beiden?",
              "answer": "Mit VMs ja, da jede VM ihr eigenes Betriebssystem mit eigenem Kernel enthält. Container alleine erlauben nur verschiedene Nutzerlandschaften auf demselben Kernel."
            },
            {
              "id": "vm_06",
              "question": "Welche Nachteile haben VMs gegenüber Containern?",
              "answer": "Höherer Ressourcenverbrauch, längere Startzeiten, größere Images und mehr Verwaltungsaufwand. Container sind leichtergewichtig, starten schneller und teilen sich Betriebssystemkernel und Bibliotheken."
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
              "answer": "Message Passing, weil Prozesse auf unterschiedlichen Rechnern keinen gemeinsamen physischen Speicher teilen können."
            },
            {
              "id": "ipc_14",
              "question": "Bei welchem IPC-Modell sind zusätzliche Synchronisationskonstrukte nötig und warum?",
              "answer": "Bei Shared Memory, da mehrere Threads oder Prozesse gleichzeitig auf gemeinsame Daten zugreifen können. Ohne Synchronisation (Locks) entstehen Race Conditions und inkonsistente Zustände."
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
              "answer": "Ein fehlerhafter Zustand durch unsynchronisierten parallelen Zugriff auf gemeinsame Daten, bei dem das Ergebnis vom zeitlichen Ablauf abhängt."
            },
            {
              "id": "ipc_04",
              "question": "Was ist ein Deadlock?",
              "answer": "Mehrere Prozesse oder Threads warten zyklisch auf Ressourcen, die jeweils vom anderen gehalten werden. Keiner kann fortfahren, das System ist in dieser Hinsicht blockiert."
            },
            {
              "id": "ipc_05",
              "question": "Was ist Busy Waiting?",
              "answer": "Ein Thread wartet aktiv in einer Schleife auf eine Bedingung, statt zu blockieren oder zu schlafen. Dadurch wird CPU-Zeit verbrannt, ohne Fortschritt zu erzielen."
            },
            {
              "id": "ipc_07",
              "question": "Was unterscheidet atomare von normalen Befehlen?",
              "answer": "Atomare Befehle garantieren, dass Lesen, Prüfen und Schreiben einer Speicherstelle als unteilbarer Schritt ausgeführt wird. Kein anderer Thread kann dazwischen denselben Wert ändern."
            },
            {
              "id": "ipc_08",
              "question": "Wie verhindert man Gleichzeitigkeitseffekte auf Single-Core-Systemen ohne spezielle atomare Befehle?",
              "answer": "Man schaltet kurzzeitig Interrupts ab, führt den kritischen Abschnitt aus und schaltet Interrupts danach wieder an. So kann kein anderer Thread dazwischen geschaltet werden."
            },
            {
              "id": "ipc_09",
              "question": "Was muss das Betriebssystem tun, wenn eine kritische Region freigegeben wird?",
              "answer": "Es muss wartende Threads wecken oder in die Ready-Queue einreihen, damit der Scheduler sie wieder einplanen kann."
            },
            {
              "id": "ipc_10",
              "question": "Warum ist Benutzereingabe in kritischen Regionen problematisch?",
              "answer": "Weil sie die kritische Region potenziell sehr lange blockiert und dadurch andere Threads unnötig lange warten müssen – im Extremfall führt das zu Deadlocks oder massiven Latenzen."
            },
            {
              "id": "ipc_12",
              "question": "Welche typischen Konstrukte werden zur zeitlichen Koordinierung des Datenzugriffs bei Shared Memory verwendet?",
              "answer": "Mutexe, Semaphore, Monitor-Konstrukte, Spinlocks und ähnliche Lock-Mechanismen. Sie schützen kritische Abschnitte und sorgen für gegenseitigen Ausschluss oder begrenzte Parallelität."
            },
            {
              "id": "ipc_13",
              "question": "Was muss ein Test-and-Set-Maschinenbefehl im Zusammenhang mit einer Belegt-Variable garantieren?",
              "answer": "Dass das Testen des aktuellen Wertes und das anschließende Setzen auf belegt atomar erfolgt, also ohne Unterbrechung durch andere Threads, damit nicht zwei Threads gleichzeitig dieselbe Ressource reservieren."
            },
            {
              "id": "ipc_15",
              "question": "Wie verhalten sich die beiden wesentlichen Operationen von Locks/Mutexen (Lock/Acquire und Unlock/Release) und was tun sie intern?",
              "answer": "Lock/Acquire versucht, einen Lock zu bekommen: ist er frei, wird er atomar belegt; ist er belegt, blockiert oder spinnt der Thread. Unlock/Release gibt den Lock frei und weckt ggf. wartende Threads, damit einer von ihnen den Lock übernehmen kann."
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
              "answer": "Die Beschleunigung eines Programms ist durch den seriellen Anteil begrenzt. Selbst mit unendlich vielen Prozessoren ist der Speedup maximal 1/s, wenn s der serielle Anteil ist."
            },
            {
              "id": "ipc_11",
              "question": "Welche Eingangsgrößen verwendet Amdahl’s Law und was ist die Ausgabe?",
              "answer": "Eingangsgrößen: serieller Anteil s und Prozessoranzahl N. Ausgabe: der theoretische Speedup S, mit dem der Programmablauf beschleunigt werden kann."
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
              "answer": "Mit einer Pipe zu less, zum Beispiel: befehl | less."
            },
            {
              "id": "shell_02",
              "question": "Was bewirken >, >> und 2>&1?",
              "answer": "> überschreibt eine Datei mit stdout, >> hängt stdout an eine Datei an, 2>&1 leitet stderr auf stdout um, sodass beide gemeinsam umgeleitet werden können."
            },
            {
              "id": "shell_06",
              "question": "Wie kombinierst du who und wc -l, um die angemeldeten Benutzer zu zählen?",
              "answer": "Mit who | wc -l. who listet die eingeloggten Benutzer zeilenweise, wc -l zählt die Zeilen."
            },
            {
              "id": "shell_11",
              "question": "Wohin gibt man in einem C-Programm Ausgaben, die immer im Terminal erscheinen sollen – unabhängig von Umleitungen wie > oder |?",
              "answer": "Auf stderr, also den Standardfehlerkanal (z. B. fprintf(stderr, \"Fehler\\n\")). Dieser wird bei einfachen stdout-Umleitungen normalerweise nicht mit umgeleitet."
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
              "answer": "Eine Liste von Verzeichnissen, in denen die Shell nach ausführbaren Programmen sucht. Unter Linux werden die Einträge durch Doppelpunkte getrennt, unter Windows durch Semikolons."
            },
            {
              "id": "shell_04",
              "question": "Warum startet man ein Programm im aktuellen Ordner mit ./programm?",
              "answer": "Weil das aktuelle Verzeichnis aus Sicherheitsgründen nicht im PATH steht. Mit ./ gibt man explizit den relativen Pfad an."
            },
            {
              "id": "shell_05",
              "question": "Was passiert beim Mounten eines USB-Sticks?",
              "answer": "Das Dateisystem des Sticks wird an einem Mountpoint (z. B. /media/usb) in den bestehenden Verzeichnisbaum eingehängt. Sein Inhalt erscheint dann unter diesem Verzeichnis."
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
              "answer": "In welchen Verzeichnissen die Shell bei der Eingabe eines Befehlsnamens (ohne Pfad) nach einer ausführbaren Datei sucht – in der angegebenen Reihenfolge."
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
            },
            {
              "id": "shell_14",
              "question": "Unterscheiden sich die beiden Befehle cd meinOrdner und cd ./meinOrdner in ihrer Wirkung?",
              "answer": "Nein. cd meinOrdner wechselt in das Unterverzeichnis meinOrdner des aktuellen Verzeichnisses. cd ./meinOrdner macht dasselbe; ./ bezeichnet explizit das aktuelle Verzeichnis."
            }
          ]
        }
      ]
    }
  ]
};
