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
        },
        {
          "id": "os_basics",
          "title": "Betriebssystem-Grundlagen",
          "questions": [
            {
              "id": "os_12",
              "question": "Welche Rechte unterscheidet die CPU-Hardware (z. B. Ring 0, Ring 3, Ring -1, Ring -2)?",
              "answer": "Ring 0 ist der Kernelmodus mit vollen Hardware-Rechten. Ring 3 ist der Usermodus für Anwendungen. Ring -1 ist der Hypervisor-Modus für Virtualisierung. Ring -2 wird für Firmware- und System-Management-Modus (SMM) verwendet."
            },
            {
              "id": "os_13",
              "question": "Warum darf nur der Kernel auf bestimmte Maschinenbefehle zugreifen?",
              "answer": "Privilegierte Befehle können Hardware- oder Speicherschutz aushebeln. Nur der Kernel darf sie ausführen, um das System vor fehlerhaften oder bösartigen Anwendungen zu schützen."
            },
            {
              "id": "os_14",
              "question": "Was bedeutet die Aussage 'der Kernel sieht den gesamten RAM' und warum ist das wichtig?",
              "answer": "Der Kernel verwaltet den gesamten physikalischen Speicher und entscheidet, welche Bereiche welchem Prozess zugeordnet werden. Dadurch lassen sich Isolation, Schutz und effiziente Auslastung des RAMs umsetzen."
            },
            {
              "id": "os_15",
              "question": "Welche Aufgaben hat das Betriebssystem im engeren Sinn?",
              "answer": "Prozess- und Threadverwaltung, Scheduling, Speicherverwaltung, Dateisysteme, Gerätesteuerung, Netzwerk-Stack sowie Mechanismen für Sicherheit und Interprozesskommunikation."
            },
            {
              "id": "os_16",
              "question": "Welche Komponenten zählen zur Systemsoftware, gehören aber nicht zum Kernel?",
              "answer": "Shell, Compiler, Systembibliotheken, Window-Manager, Desktopumgebung, Dienstprogramme und Tools – sie laufen im Usermode auf dem Betriebssystem auf."
            },
            {
              "id": "os_17",
              "question": "Warum interagiert der Kernel im Normalbetrieb nicht direkt mit dem Benutzer?",
              "answer": "Benutzerschnittstellen werden von Programmen im Usermode umgesetzt. Der Kernel stellt nur grundlegende Services bereit. Diese Trennung hält den Kernel klein, sicherer und unabhängig von der jeweils verwendeten Oberfläche."
            }
          ]
        },
        {
          "id": "syscalls",
          "title": "System Calls & Interrupts",
          "questions": [
            {
              "id": "os_18",
              "question": "Warum sind System Calls deutlich langsamer als normale Funktionsaufrufe?",
              "answer": "Ein System Call wechselt in den Kernelmodus, sichert Register und Status, führt Kernelcode aus und kehrt zurück. Ein normaler Funktionsaufruf bleibt im selben Modus und benötigt keinen Kontextwechsel."
            },
            {
              "id": "os_19",
              "question": "Wie läuft ein System Call technisch im Detail ab?",
              "answer": "Der Prozess legt Argumente in Register oder auf den Stack, führt die Syscall-Instruktion aus, die CPU springt in den Kernel, sichert Register, ruft die passende Kernelroutine auf, schreibt Rückgabewerte und kehrt mit einem speziellen Rücksprungbefehl in den Usermodus zurück."
            },
            {
              "id": "os_20",
              "question": "Was unterscheidet System Calls von Hardware-Interrupts?",
              "answer": "System Calls werden vom Programm explizit ausgelöst, Hardware-Interrupts asynchron von Geräten. Beide wechseln in den Kernelmodus, aber die Auslöser und die erwarteten Handler sind unterschiedlich."
            },
            {
              "id": "os_21",
              "question": "Welche Informationen speichert die Interrupt-Vektortabelle?",
              "answer": "Sie enthält für jeden möglichen Interrupt oder Exception die Sprungadresse des dazugehörigen Interrupt- oder Exception-Handlers im Kernel."
            },
            {
              "id": "os_22",
              "question": "Welche Ursachen haben CPU-interne Interrupts bzw. Exceptions wie Division durch 0?",
              "answer": "Fehler oder Sonderfälle innerhalb der CPU, zum Beispiel Division durch 0, ungültige Opcodes, Schutzverletzungen oder Page Faults."
            },
            {
              "id": "os_23",
              "question": "Was hat ein Debugger-Breakpoint mit einem Software-Interrupt zu tun?",
              "answer": "Viele Debugger setzen an der Breakpoint-Stelle eine spezielle Interrupt-Instruktion (z. B. INT3). Beim Erreichen löst die CPU einen Software-Interrupt aus und der Debugger übernimmt die Kontrolle."
            }
          ]
        },
        {
          "id": "kernel_arch",
          "title": "Kernelarchitekturen",
          "questions": [
            {
              "id": "os_24",
              "question": "Was unterscheidet monolithische Kernel von Microkerneln?",
              "answer": "Monolithische Kernel enthalten Treiber, Dateisysteme und viele Dienste im Kernelmodus. Microkernel verlagern möglichst viel in User-Prozesse und halten im Kernel nur grundlegende Mechanismen wie Scheduling, IPC und Speicherverwaltung."
            },
            {
              "id": "os_25",
              "question": "Welche Nachteile entstehen beim Microkernel durch die notwendige Kommunikation?",
              "answer": "Viele Operationen erfordern zusätzliche Kontextwechsel und Nachrichten zwischen Diensten, was mehr Overhead und höhere Latenzen verursachen kann."
            },
            {
              "id": "os_26",
              "question": "Welche Systemkomponenten laufen bei einem Microkernel typischerweise im User-Mode?",
              "answer": "Dateisystem-Server, Gerätetreiber, Netzwerk-Stacks und weitere Systemdienste laufen in separaten Userprozessen und kommunizieren über IPC."
            }
          ]
        },
        {
          "id": "history_standards",
          "title": "Geschichte, Standards & Architektur",
          "questions": [
            {
              "id": "os_27",
              "question": "Wo liegt der Unterschied zwischen POSIX und einem Unix-Derivat?",
              "answer": "POSIX ist eine Norm, die Schnittstellen und Verhalten definiert. Unix-Derivate sind konkrete Betriebssysteme, die historisch von Unix abstammen oder POSIX teilweise implementieren."
            },
            {
              "id": "os_28",
              "question": "Warum sind GUI-Komponenten unter Linux typischerweise kein Teil des Kernels, unter Windows aber tiefer integriert?",
              "answer": "Linux folgt einer stärker modularen Trennung zwischen Kernel und Userspace, während Windows lange Zeit Teile der Grafik- und Windowing-Schicht im Kernelmodus betrieb, um Performancevorteile zu erzielen."
            },
            {
              "id": "os_29",
              "question": "Warum ist GPU-Virtualisierung technisch schwierig?",
              "answer": "GPUs besitzen komplexe, stark parallelisierte Hardware mit großen, geteilten Speicherbereichen und wenig standardisierten Schnittstellen. Die saubere und performante Aufteilung dieser Ressourcen auf mehrere VMs ist deutlich komplizierter als bei CPUs."
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
            },
            {
              "id": "sched_17",
              "question": "Welche Anforderungen stellt die menschliche Wahrnehmung an Reaktionszeiten interaktiver Systeme?",
              "answer": "Eingaben sollten innerhalb weniger 10 Millisekunden sichtbar reagieren, damit das System als direkt und flüssig wahrgenommen wird."
            },
            {
              "id": "sched_18",
              "question": "Was bedeutet CPU-bound vs. IO-bound und wie beeinflusst das das Scheduling?",
              "answer": "CPU-bound-Prozesse rechnen viel und blockieren selten, IO-bound-Prozesse warten häufig auf Ein- und Ausgaben. Scheduler geben IO-bound-Prozessen oft bevorzugt kurze Zeitscheiben, um das System reaktionsfreudig zu halten."
            },
            {
              "id": "sched_19",
              "question": "Warum sind Multilevel-Feedback-Queues als Scheduling-Strategie so beliebt?",
              "answer": "Sie kombinieren Prioritäten und Round-Robin, passen die Priorität dynamisch an das Laufverhalten an und bieten damit einen guten Kompromiss aus Durchsatz, Fairness und Interaktivität."
            },
            {
              "id": "sched_20",
              "question": "Warum kann Round-Robin-Scheduling mit vielen I/O-lastigen Prozessen unfair erscheinen?",
              "answer": "I/O-lastige Prozesse blockieren oft frühzeitig und kommen dadurch häufiger wieder in die Ready-Queue, während CPU-bound-Prozesse ihre Zeitscheiben voll ausnutzen und subjektiv weniger oft laufen."
            },
            {
              "id": "sched_21",
              "question": "Warum sind regelmäßige Timer-Interrupts notwendig, um präemptives Multitasking zu ermöglichen?",
              "answer": "Nur mit Timer-Interrupts kann das Betriebssystem einem laufenden Prozess nach Ablauf einer Zeitscheibe die CPU zwangsweise entziehen und einen anderen Prozess einplanen."
            },
            {
              "id": "sched_22",
              "question": "Was passiert, wenn Interrupts längere Zeit gesperrt sind?",
              "answer": "Das System kann nicht auf externe Ereignisse reagieren, Timer laufen nicht, Scheduling und I/O verzögern sich. Im Extremfall wirkt das System eingefroren."
            },
            {
              "id": "sched_23",
              "question": "Was ist Core-Affinität und warum ist sie oft sinnvoll?",
              "answer": "Core-Affinität bedeutet, dass ein Thread bevorzugt auf demselben CPU-Kern läuft. Dadurch können dessen Caches und lokale NUMA-Speicher besser ausgenutzt und Cache-Misses reduziert werden."
            },
            {
              "id": "sched_24",
              "question": "Wie kann ein Scheduler NUMA-Topologien berücksichtigen?",
              "answer": "Indem er Threads bevorzugt auf Cores eines NUMA-Knotens einplant, zu dessen RAM deren Working Set gehört, und nur bei Bedarf Threads auf andere Knoten verschiebt."
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
            },
            {
              "id": "sched_12",
              "question": "Welche Ressourcen erbt ein Thread von seinem Prozess?",
              "answer": "Den virtuellen Adressraum inklusive Code, Daten und Heap, offene Dateien, Benutzer- und Gruppen-IDs, Signalbehandlung und weitere Prozesseigenschaften."
            },
            {
              "id": "sched_13",
              "question": "Warum ist ein Thread-Wechsel im gleichen Prozess viel billiger als ein Prozesswechsel?",
              "answer": "Beim Threadwechsel bleiben Adressraum und Page Tables gleich, es werden nur Register und Stackpointer gewechselt. Beim Prozesswechsel müssen zusätzlich der Adressraum und damit meist der TLB komplett umgeschaltet werden."
            },
            {
              "id": "sched_14",
              "question": "In welchem Zustand befindet sich ein neuer Thread direkt nach dem Start?",
              "answer": "In der Regel im Zustand 'ready' beziehungsweise 'bereit', sodass der Scheduler ihn auf einer CPU einplanen kann."
            },
            {
              "id": "sched_15",
              "question": "Was bedeutet die Aussage 'ein Prozess endet, wenn der letzte Thread endet'?",
              "answer": "Der Prozess existiert nur solange mindestens ein Thread dieses Prozesses läuft. Beendet sich der letzte Thread, werden Ressourcen des Prozesses freigegeben und der Prozess gilt als beendet."
            },
            {
              "id": "sched_16",
              "question": "Unter welchen Umständen kann ein Thread von außen beendet werden?",
              "answer": "Zum Beispiel durch Signale, explizite Terminate-Aufrufe oder das Beenden des gesamten Prozesses, etwa durch einen Kill-Befehl oder einen Absturz."
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
            },
            {
              "id": "mmu_15",
              "question": "Warum abstrahiert virtueller Speicher die reale RAM-Fragmentierung?",
              "answer": "Jeder Prozess sieht einen eigenen, scheinbar zusammenhängenden virtuellen Adressraum. Die MMU mappt diesen auf beliebig verteilte physische Seiten und versteckt damit Fragmentierung."
            },
            {
              "id": "mmu_16",
              "question": "Warum werden Standardpages typischerweise 4 KB groß gewählt?",
              "answer": "4 KB sind ein Kompromiss zwischen Verwaltungsaufwand und interner Fragmentierung: kleinere Pages brauchen mehr Page-Table-Einträge, größere Pages verschwenden mehr Speicher."
            },
            {
              "id": "mmu_17",
              "question": "Warum sieht jedes Programm einen zusammenhängenden Adressraum, obwohl der physische Speicher nicht zusammenhängend ist?",
              "answer": "Weil nur virtuelle Adressen im Programm verwendet werden. Die MMU übersetzt jede virtuelle Page unabhängig auf eine physische Page."
            },
            {
              "id": "mmu_18",
              "question": "Warum sind flache Page Tables für 64-Bit-Adressen unpraktikabel?",
              "answer": "Eine flache Tabelle für den gesamten 64-Bit-Adressraum wäre riesig und würde selbst absurd viel RAM verbrauchen, auch für nicht genutzte Bereiche."
            },
            {
              "id": "mmu_19",
              "question": "Warum haben 64-Bit-Page-Table-Strukturen mehrere Ebenen?",
              "answer": "Hierarchische Page Tables erlauben, große leere Adressbereiche kompakt als 'nicht vorhanden' darzustellen und nur Einträge für tatsächlich genutzte Bereiche anzulegen."
            },
            {
              "id": "mmu_20",
              "question": "Welche typischen Bits enthält ein Page Table Entry?",
              "answer": "Zum Beispiel gültig/ungültig, Read/Write, User/Kernel, Execute, Dirty-Bit, Accessed/Used-Bit, Caching-Attribute und manchmal Referenzen auf größere Pages."
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
            },
            {
              "id": "mmu_24",
              "question": "Welche Arten von Speicherseiten kann das Betriebssystem ohne zusätzlichen I/O verwerfen und warum?",
              "answer": "Dateigestützte, nicht geänderte (clean) Pages können einfach freigegeben werden, weil ihr Inhalt bei Bedarf wieder von der Datei geladen werden kann."
            },
            {
              "id": "mmu_25",
              "question": "Welche Speicherseiten müssen zwingend in den Swap-Bereich geschrieben werden, bevor sie verdrängt werden können?",
              "answer": "Private, geänderte (dirty) Pages ohne zugrunde liegende Datei müssen in den Swap geschrieben werden, sonst gingen ihre Inhalte verloren."
            },
            {
              "id": "mmu_26",
              "question": "Was macht der sogenannte Page Stealer bzw. der Hintergrund-Page-Daemon?",
              "answer": "Er räumt im Hintergrund RAM frei, indem er wenig benutzte Seiten auswählt, sie bei Bedarf in den Swap schreibt und dann freigibt, damit ausreichend freie Frames verfügbar sind."
            },
            {
              "id": "mmu_27",
              "question": "Wie entsteht Thrashing genau und warum bricht die Systemperformance dann ein?",
              "answer": "Wenn die Summe der Working Sets aller Prozesse größer ist als der RAM, werden laufend Seiten ein- und ausgelagert. Die CPU verbringt mehr Zeit mit Warten auf I/O als mit Rechnen."
            },
            {
              "id": "mmu_28",
              "question": "Welche Rolle spielt das Working Set eines Prozesses für die Performance?",
              "answer": "Nur wenn das Working Set eines Prozesses überwiegend im RAM gehalten werden kann, arbeitet er effizient. Ist es zu groß, steigt die Page-Fault-Rate stark an."
            },
            {
              "id": "mmu_29",
              "question": "Warum ist Paging für harte Echtzeit-Systeme ungeeignet?",
              "answer": "Page Faults können lange und nicht deterministische Verzögerungen erzeugen, da I/O-Zeiten schwer vorhersehbar sind. Harte Echtzeitsysteme brauchen strikt begrenzte Antwortzeiten."
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
        },
        {
          "id": "tlb",
          "title": "TLB & PCID",
          "questions": [
            {
              "id": "mmu_21",
              "question": "Warum benötigt man einen TLB und welche Vorteile bietet er?",
              "answer": "Der TLB ist ein Cache für Adressübersetzungen. Er verhindert, dass bei jedem Speicherzugriff mehrere Speicherzugriffe auf Page Tables nötig sind und ist damit entscheidend für die Performance."
            },
            {
              "id": "mmu_22",
              "question": "Welche Nachteile entstehen beim Flush des TLB?",
              "answer": "Alle gecachten Übersetzungen gehen verloren. Nach dem Flush treten viele TLB-Misses auf, bis der TLB wieder gefüllt ist, was die Ausführung deutlich verlangsamt."
            },
            {
              "id": "mmu_23",
              "question": "Was ist PCID und warum reduziert es Kosten beim Prozesswechsel?",
              "answer": "PCID markiert TLB-Einträge mit einer Prozess-ID. Beim Prozesswechsel können Einträge anderer Prozesse im TLB bleiben, statt komplett gelöscht zu werden, und später wiederverwendet werden."
            }
          ]
        },
        {
          "id": "mmap",
          "title": "Dateizugriff via mmap",
          "questions": [
            {
              "id": "mmu_30",
              "question": "Warum eignet sich mmap besonders für nicht-sequenzielle Dateizugriffe?",
              "answer": "Weil nur die tatsächlich benötigten Pages nachgeladen werden und Zugriffe beliebig im Dateibereich erfolgen können, ohne explizite seek-/read-Aufrufe."
            },
            {
              "id": "mmu_31",
              "question": "Welche Art von Pages entstehen bei mmap und wie werden sie nachgeladen?",
              "answer": "Es entstehen zunächst lediglich gemappte virtuelle Bereiche. Erst beim Zugriff löst der Page Fault das Nachladen der entsprechenden Dateiblöcke in RAM-Pages aus."
            },
            {
              "id": "mmu_32",
              "question": "Wann wird der Inhalt eines mmap-Bereiches zurück in die zugehörige Datei geschrieben?",
              "answer": "Wenn geänderte Pages (dirty) synchronisiert oder ausgelagert werden, zum Beispiel beim msync-Aufruf, beim Flushen von Caches oder beim sauberen Unmounten."
            }
          ]
        },
        {
          "id": "replacement",
          "title": "Replacement-Strategien",
          "questions": [
            {
              "id": "mmu_33",
              "question": "Warum kann man nicht exakt messen, wann eine Page zuletzt benutzt wurde?",
              "answer": "Eine exakte Zeitstempelung bei jedem Zugriff wäre zu teuer. Stattdessen nutzen CPUs einfache Bits wie 'Accessed/Used', die nur grobe Information liefern."
            },
            {
              "id": "mmu_34",
              "question": "Welche Bedeutung haben Used-Bits für Seitenersetzungsalgorithmen?",
              "answer": "Sie markieren Pages, die in letzter Zeit benutzt wurden, und helfen Algorithmen wie Clock oder NFU, selten genutzte Pages als Opfer zu wählen."
            },
            {
              "id": "mmu_35",
              "question": "Warum werden große Prozesse bei Seitenersetzung tendenziell schlechter behandelt als kleine?",
              "answer": "Sie belegen mehr Pages und sind deshalb öfter Opfer von Replacement-Entscheidungen, was zu höheren Page-Fault-Raten führen kann."
            }
          ]
        },
        {
          "id": "overcommit",
          "title": "Memory Overcommit",
          "questions": [
            {
              "id": "mmu_36",
              "question": "Warum lässt Windows standardmäßig kein echtes Memory Overcommit zu?",
              "answer": "Windows reserviert Speicher konservativer und stellt sicher, dass virtuelle Zusagen typischerweise von physischem RAM oder Swap gedeckt sind, um späte Allokationsfehler zu vermeiden."
            },
            {
              "id": "mmu_37",
              "question": "Warum kann bei Linux Memory Overcommit zum Out-of-Memory-Killer führen?",
              "answer": "Linux kann mehr Speicher zusagen, als physisch inklusive Swap vorhanden ist. Wenn diese Zusagen später tatsächlich genutzt werden, kann der Speicher ausgehen und der OOM-Killer muss Prozesse beenden."
            },
            {
              "id": "mmu_38",
              "question": "Nach welchen Kriterien entscheidet der OOM-Killer in Linux, welchen Prozess er beendet?",
              "answer": "Er berechnet einen 'Badness'-Score aus Faktoren wie belegtem Speicher, Priorität, Prozessalter und manchmal Benutzerkennung und beendet den als am entbehrlichsten eingestuften Prozess."
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
            },
            {
              "id": "vm_07",
              "question": "Was bedeutet Ring -1 bei Virtualisierung?",
              "answer": "Ring -1 ist ein spezieller CPU-Modus für Hypervisoren. Er erlaubt es, Gastbetriebssysteme zu kontrollieren, während deren Kernel weiterhin im gewohnten Ring 0 läuft."
            },
            {
              "id": "vm_08",
              "question": "Warum lief Virtualisierung früher ohne Hardwareunterstützung schlechter?",
              "answer": "Privilegierte Befehle der Gäste mussten aufwendig abgefangen und emuliert werden. Mit Hardwareunterstützung können solche Operationen effizienter und gezielter in Fallen umgewandelt werden."
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
          "id": "shell_basics",
          "title": "Shell-Grundlagen",
          "questions": [
            {
              "id": "shell_14",
              "question": "Was ist der Unterschied zwischen einem Shell-Builtin und einem externen Programm?",
              "answer": "Ein Shell-Builtin wird direkt in der Shell selbst ausgeführt und benötigt keinen neuen Prozess, Beispiele sind cd oder echo. Ein externes Programm ist eine ausführbare Datei im Dateisystem, die von der Shell als eigener Prozess gestartet wird."
            },
            {
              "id": "shell_15",
              "question": "Wie findest du heraus, ob ein Befehl ein Builtin oder ein externes Programm ist?",
              "answer": "Mit dem Befehl type name. Die Ausgabe zeigt zum Beispiel 'shell builtin' oder den Pfad zu einer ausführbaren Datei."
            },
            {
              "id": "shell_16",
              "question": "Welche Shells sind verbreitet und welche ist unter Linux typischerweise Standard?",
              "answer": "Verbreitet sind sh, bash, zsh, ksh, csh/tcsh und dash. Unter vielen Linux-Distributionen ist bash die Standardshell für interaktive Benutzer."
            },
            {
              "id": "shell_17",
              "question": "Was bewirkt die Tastenkombination Strg+D in einer interaktiven Shell?",
              "answer": "Sie signalisiert End-of-File auf stdin. Wenn die Shell keine weitere Eingabe erwartet, beendet sie sich dadurch."
            }
          ]
        },
        {
          "id": "io",
          "title": "Umleitungen & Pipes",
          "questions": [
            {
              "id": "shell_01",
              "question": "Wie zeigt man lange Ausgaben seitenweise an?",
              "answer": "Mit einer Pipe zu less, zum Beispiel: befehl | less."
            },
            {
              "id": "shell_02",
              "question": "Was bewirken >, >> und 2>&1?",
              "answer": "> überschreibt eine Datei mit stdout, >> hängt stdout an eine Datei an, 2>&1 leitet stderr auf stdout um."
            },
            {
              "id": "shell_18",
              "question": "Was macht eine Pipe '|' zwischen zwei Befehlen?",
              "answer": "Sie verbindet den stdout des linken Befehls mit dem stdin des rechten Befehls, sodass die Ausgabe des ersten Befehls direkt als Eingabe für den zweiten dient."
            },
            {
              "id": "shell_19",
              "question": "Wozu dient der Befehl tee in einer Pipeline?",
              "answer": "tee liest von stdin und schreibt die Daten gleichzeitig nach stdout und in eine oder mehrere Dateien, zum Beispiel: befehl | tee log.txt."
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
              "answer": "Weil das aktuelle Verzeichnis aus Sicherheitsgründen meist nicht im PATH steht. Mit ./ wird der relative Pfad im aktuellen Verzeichnis explizit angegeben."
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
              "answer": "Mit dem absoluten Pfad /index.html."
            },
            {
              "id": "shell_09",
              "question": "Wie sprichst du index.html zwei Ebenen höher an?",
              "answer": "../../index.html."
            },
            {
              "id": "shell_10",
              "question": "Was sagt PATH dem System konkret?",
              "answer": "In welchen Verzeichnissen der Shell-Interpreter nach einem ausführbaren Programm sucht, wenn man nur den Namen ohne Pfad angibt."
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
        },
        {
          "id": "navigation_wildcards",
          "title": "Navigation & Wildcards",
          "questions": [
            {
              "id": "shell_20",
              "question": "Was ist der Unterschied zwischen absoluten und relativen Pfaden?",
              "answer": "Absolute Pfade beginnen mit / und beziehen sich immer auf das Wurzelverzeichnis. Relative Pfade beziehen sich auf das aktuelle Arbeitsverzeichnis und beginnen nicht mit /."
            },
            {
              "id": "shell_21",
              "question": "Was macht cd ohne Argument?",
              "answer": "Es wechselt in das Home-Verzeichnis des aktuellen Benutzers."
            },
            {
              "id": "shell_22",
              "question": "Was macht cd -?",
              "answer": "Es wechselt zurück in das zuvor aktuelle Verzeichnis."
            },
            {
              "id": "shell_23",
              "question": "Was bedeuten . und .. im Dateisystem?",
              "answer": ". steht für das aktuelle Verzeichnis, .. für das übergeordnete Verzeichnis."
            },
            {
              "id": "shell_24",
              "question": "Was bedeutet ein Punkt am Anfang eines Dateinamens unter Unix/Linux?",
              "answer": "Die Datei oder das Verzeichnis ist versteckt und wird von ls ohne -a normalerweise nicht angezeigt."
            },
            {
              "id": "shell_25",
              "question": "Welche Wildcards gibt es in der Shell und was bedeuten sie?",
              "answer": "* steht für beliebig viele Zeichen, ? für genau ein beliebiges Zeichen und [abc] für genau eines der Zeichen in der Klammer. Die Expansion erfolgt durch die Shell, bevor das Programm gestartet wird."
            }
          ]
        },
        {
          "id": "jobs",
          "title": "Jobs & Prozesssteuerung in der Shell",
          "questions": [
            {
              "id": "shell_26",
              "question": "Wie startest du einen Prozess im Hintergrund und holst ihn später in den Vordergrund?",
              "answer": "Mit einem & am Ende startet man ihn im Hintergrund, zum Beispiel befehl &. Mit fg holt man den letzten gestoppten oder im Hintergrund laufenden Job in den Vordergrund."
            },
            {
              "id": "shell_27",
              "question": "Wozu dienen die Befehle jobs, fg und bg?",
              "answer": "jobs listet die aktuell von der Shell verwalteten Jobs auf, fg bringt einen Job in den Vordergrund, bg setzt einen gestoppten Job im Hintergrund fort."
            },
            {
              "id": "shell_28",
              "question": "Was bewirkt Strg+Z in einer interaktiven Shell?",
              "answer": "Es sendet ein STOP-Signal (SIGTSTP) an den Vordergrundprozess und setzt ihn in den Hintergrund im Zustand 'gestoppt'."
            }
          ]
        }
      ]
    },
    {
      "id": "linux",
      "title": "Linux-Basissystem & Werkzeuge",
      "topics": [
        {
          "id": "linux_fs_layout",
          "title": "Verzeichnisstruktur & Boot",
          "questions": [
            {
              "id": "linux_01",
              "question": "Was ist der Unterschied zwischen / und /home?",
              "answer": "/ ist das Wurzeldateisystem und enthält die grundlegende Systemstruktur. Unter /home liegen in der Regel die Home-Verzeichnisse der Benutzer."
            },
            {
              "id": "linux_02",
              "question": "Wozu dient /etc?",
              "answer": "In /etc liegen systemweite Konfigurationsdateien, zum Beispiel für Dienste, Netzwerk und Benutzer."
            },
            {
              "id": "linux_03",
              "question": "Was ist /dev?",
              "answer": "Ein Pseudodateisystem, in dem Geräte als Dateien sichtbar sind, etwa Block-Devices für Platten und Character-Devices für serielle Schnittstellen."
            },
            {
              "id": "linux_04",
              "question": "Wozu dient /proc?",
              "answer": "/proc ist ein virtuelles Dateisystem, über das Kernel- und Prozessinformationen als Dateien zugänglich gemacht werden, zum Beispiel Prozessverzeichnisse /proc/<pid>."
            },
            {
              "id": "linux_05",
              "question": "Was findet man typischerweise unter /usr?",
              "answer": "Anwendungen, Bibliotheken, Dokumentation und weitere Systemprogramme, die nicht zum minimalen Bootsystem gehören."
            },
            {
              "id": "linux_06",
              "question": "Wozu ist /tmp gedacht?",
              "answer": "Für temporäre Dateien. Viele Systeme löschen /tmp beim Booten oder nach einer gewissen Zeit automatisch."
            },
            {
              "id": "linux_07",
              "question": "Was ist eine initrd bzw. initramfs und wozu wird sie verwendet?",
              "answer": "Eine initiale RAM-Disk bzw. ein RAM-Dateisystem, das beim Booten vor dem eigentlichen Root-Dateisystem geladen wird, um Treiber zu laden und das System bis zum Mounten des echten Root-Dateisystems zu initialisieren."
            }
          ]
        },
        {
          "id": "linux_file_tools",
          "title": "Datei- und Speicherbefehle",
          "questions": [
            {
              "id": "linux_08",
              "question": "Worin unterscheiden sich ls, stat und du?",
              "answer": "ls listet Dateien und Verzeichnisse auf, stat zeigt detaillierte Metadaten zu einer Datei und du zeigt den tatsächlich belegten Plattenplatz von Dateien oder Verzeichnissen an."
            },
            {
              "id": "linux_09",
              "question": "Wozu dient der Befehl touch?",
              "answer": "Er aktualisiert die Zeitstempel einer Datei oder legt eine leere Datei an, wenn sie noch nicht existiert."
            },
            {
              "id": "linux_10",
              "question": "Was ist der Unterschied zwischen rm und rm -r?",
              "answer": "rm entfernt einzelne Dateien, rm -r löscht Verzeichnisse rekursiv inklusive ihres Inhalts."
            },
            {
              "id": "linux_11",
              "question": "Wie funktioniert chmod in symbolischer und oktaler Schreibweise?",
              "answer": "Symbolisch werden Rechte relativ geändert, zum Beispiel chmod u+rwx datei. In oktaler Schreibweise werden die Bits direkt gesetzt, zum Beispiel chmod 755 datei für rwxr-xr-x."
            }
          ]
        },
        {
          "id": "linux_users_system",
          "title": "Benutzer- und Systeminfos",
          "questions": [
            {
              "id": "linux_12",
              "question": "Was zeigt der Befehl id an?",
              "answer": "Die User-ID (UID), die primäre Gruppen-ID sowie die Liste der zusätzlichen Gruppen, in denen der Benutzer Mitglied ist."
            },
            {
              "id": "linux_13",
              "question": "Was ist der Unterschied zwischen uname -a und hostname?",
              "answer": "hostname zeigt den reinen Rechnernamen an. uname -a zeigt Kernelname, Version, Architektur, Hostname und weitere Systeminformationen."
            }
          ]
        },
        {
          "id": "linux_processes",
          "title": "Prozesse & Systembefehle",
          "questions": [
            {
              "id": "linux_14",
              "question": "Worin unterscheiden sich ps, top und pstree?",
              "answer": "ps zeigt einen Schnappschuss der aktuellen Prozesse, top zeigt laufend aktualisierte Prozessinformationen und pstree stellt Prozesse in einer Baumstruktur entsprechend ihrer Eltern-Kind-Beziehungen dar."
            },
            {
              "id": "linux_15",
              "question": "Wie beendet man einen Prozess typischerweise korrekt und wann verwendet man kill -9?",
              "answer": "Zuerst sendet man ein normales Terminationssignal, zum Beispiel kill PID (SIGTERM), damit der Prozess sauber aufräumen kann. kill -9 (SIGKILL) erzwingt die sofortige Beendigung ohne Aufräumen und sollte nur als letzte Notlösung genutzt werden."
            }
          ]
        },
        {
          "id": "linux_text_tools",
          "title": "Textverarbeitung & Filter",
          "questions": [
            {
              "id": "linux_16",
              "question": "Was ist der Unterschied zwischen grep und fgrep?",
              "answer": "grep interpretiert sein Suchmuster als regulären Ausdruck, fgrep (oder grep -F) sucht nach einem festen Textmuster ohne Regex-Auswertung und ist dafür oft schneller."
            },
            {
              "id": "linux_17",
              "question": "Was bewirkt die Kombination sort | uniq?",
              "answer": "sort sortiert die Eingabezeilen, uniq entfernt direkt aufeinanderfolgende Dubletten. Zusammen erhält man eine Liste eindeutiger Zeilen."
            },
            {
              "id": "linux_18",
              "question": "Was macht der Befehl cut -d : -f 1 /etc/passwd?",
              "answer": "Er schneidet aus jeder Zeile von /etc/passwd das erste Feld heraus, getrennt durch :, und gibt damit die Liste der Benutzernamen aus."
            },
            {
              "id": "linux_19",
              "question": "Was macht der sed-Befehl sed 's/foo/bar/g'?",
              "answer": "Er ersetzt in jeder Eingabezeile alle Vorkommen von foo durch bar und gibt das Ergebnis aus."
            },
            {
              "id": "linux_20",
              "question": "Was macht ein einfacher awk-Befehl wie awk '{print $1}' datei?",
              "answer": "Er gibt für jede Zeile der Datei das erste Feld der Zeile aus, wobei die Felder standardmäßig durch Whitespace getrennt werden."
            },
            {
              "id": "linux_21",
              "question": "Wozu dient der Befehl tee in einer Pipeline und wie wird er verwendet?",
              "answer": "tee schreibt die Eingabe gleichzeitig auf stdout und in eine oder mehrere Dateien. Beispiel: befehl | tee output.log zeigt die Ausgabe im Terminal und speichert sie parallel in output.log."
            }
          ]
        }
      ]
    }
  ]
};

