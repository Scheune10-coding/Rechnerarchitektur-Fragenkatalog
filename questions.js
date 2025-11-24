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
              "answer": "USB, SATA, PCIe, HDMI – alle verwenden schnelle, serielle Hochgeschwindigkeitskanäle."
            },
            {
              "id": "hardware_03",
              "question": "Welche Komponente ist heute noch parallel mit der CPU verbunden?",
              "answer": "Der RAM – moderne DDR-Module nutzen weiterhin einen parallelen Datenbus."
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
              "answer": "Char-Devices: zeichenorientiert, sequenziell, kein Cache (z. B. Tastatur). Block-Devices: blockorientiert, gepuffert, wahlfreier Zugriff (z. B. SSD)."
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
              "answer": "Bei Timer-Interrupts, Syscalls, I/O-Interrupts, Prozesswechseln und wenn ein Prozess blockiert oder endet."
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
              "answer": "Threads teilen Code, Daten, Heap – aber haben eigenen Stack. Prozesse haben vollkommen getrennte Adressräume."
            },
            {
              "id": "sched_04",
              "question": "Was speichert ein OS pro Thread und pro Prozess?",
              "answer": "Pro Thread: Registerzustand, Stack, Threadstatus. Pro Prozess: Adressraum, offene Dateien, Rechte, Scheduling-Infos, Threads."
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
              "answer": "Virtuelle Adresse sieht das Programm. Die MMU übersetzt sie in eine physische Adresse im RAM."
            },
            {
              "id": "mmu_02",
              "question": "Welche Aufgaben hat die MMU?",
              "answer": "Adressübersetzung und Zugriffsprüfung für jede Speicheroperation."
            },
            {
              "id": "mmu_03",
              "question": "Wie groß ist eine Page und warum braucht man sie?",
              "answer": "Typisch 4 KB. Pages sind die Zuordnungseinheit zwischen virtuellen und physischen Speicherbereichen."
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
              "answer": "Ein Zugriff auf eine virtuelle Adresse ohne gültigen Seiteneintrag. Die MMU löst einen Interrupt aus."
            },
            {
              "id": "mmu_05",
              "question": "Wie reagiert das OS auf Page Faults?",
              "answer": "Entweder fehlende Page nachladen und fortsetzen oder Prozess beenden (illegaler Zugriff)."
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
              "answer": "Die Menge der Speicherseiten, die ein Prozess aktiv nutzt."
            },
            {
              "id": "mmu_07",
              "question": "Was ist Thrashing und wie entsteht es?",
              "answer": "Zustand extremer Auslagerungsvorgänge, wenn Working Sets nicht in den RAM passen. System arbeitet fast nur noch paging-lastig."
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
              "answer": "Rebuild dauert lange → hohe Belastung → erhöhtes Risiko eines zweiten Ausfalls → Totalschaden."
            },
            {
              "id": "raid_04",
              "question": "Warum eignet sich RAID 10 besser für hohe Schreiblast?",
              "answer": "Keine Paritätsberechnung, kein Read-Modify-Write-Zyklus."
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
              "answer": "Markiert ein unsauber ausgehängtes Dateisystem. Beim Mounten wird dann eine Prüfung ausgeführt."
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
              "answer": "Hardlinks verweisen auf dieselbe Inode, Symlinks speichern nur einen Pfad. Symlinks können „broken“ werden."
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
              "answer": "Konsistente Sicherungen ohne Downtime, da der Zustand eingefroren wird."
            },
            {
              "id": "fs_06",
              "question": "Was ist Thin Provisioning?",
              "answer": "Es wird mehr logischer Speicher bereitgestellt als physisch vorhanden ist. Physischer Platz wird erst bei Bedarf belegt."
            },
            {
              "id": "fs_07",
              "question": "Wozu dient TRIM?",
              "answer": "Das OS teilt SSD/Storage mit, welche Blöcke unbenutzt sind, damit sie freigegeben werden können."
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
              "answer": "Vollbackup + alle nachfolgenden inkrementellen Backups."
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
              "answer": "HA: Verfügbarkeit. HPC: Rechenleistung."
            },
            {
              "id": "cluster_02",
              "question": "Was ist ein SAN?",
              "answer": "Ein eigenes Speichernetzwerk, das Server mit Storage verbindet (z. B. Fibre Channel)."
            },
            {
              "id": "cluster_03",
              "question": "Was ist ein Split-Brain?",
              "answer": "Clusterknoten verlieren Verbindung und arbeiten unabhängig weiter → inkonsistente Daten."
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
              "answer": "Wenn mehrere Knoten gleichzeitig auf dieselben Dateien lesend und schreibend zugreifen."
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
              "answer": "11 – 10 Gäste + 1 Host."
            },
            {
              "id": "vm_02",
              "question": "Wie viele bei 10 Containern?",
              "answer": "Nur 1 – alle Container teilen sich den Host-Kernel."
            },
            {
              "id": "vm_03",
              "question": "Was unterscheidet VM-Images von Container-Images?",
              "answer": "VM-Images enthalten ein vollständiges OS inklusive Kernel. Container-Images enthalten nur die Anwendung und Libraries."
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
              "answer": "Message Passing."
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
              "answer": "Ein fehlerhafter Zustand durch unsynchronisierten parallelen Zugriff."
            },
            {
              "id": "ipc_04",
              "question": "Was ist ein Deadlock?",
              "answer": "Prozesse warten zyklisch aufeinander und keiner kann fortfahren."
            },
            {
              "id": "ipc_05",
              "question": "Was ist Busy Waiting?",
              "answer": "CPU wartet in einer Schleife auf eine Bedingung → Ressourcenverschwendung."
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
              "answer": "Mit „| less“."
            },
            {
              "id": "shell_02",
              "question": "Was bewirken >, >> und 2>&1?",
              "answer": "> überschreibt Datei, >> hängt an, 2>&1 leitet stderr zu stdout um."
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
              "answer": "Liste der Verzeichnisse, in denen die Shell nach Programmen sucht."
            },
            {
              "id": "shell_04",
              "question": "Warum startet man ein Programm im aktuellen Ordner mit ./programm?",
              "answer": "Weil das aktuelle Verzeichnis nicht im PATH ist."
            },
            {
              "id": "shell_05",
              "question": "Was passiert beim Mounten eines USB-Sticks?",
              "answer": "Das Dateisystem des Sticks wird unter einem Verzeichnis in den Dateibaum eingeblendet."
            }
          ]
        }
      ]
    }
  ]
};

