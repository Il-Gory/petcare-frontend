# Specifiche del progetto Frontend: PetCare
## Descrizione
Interfaccia utente sviluppata con **React** e **Vite** per la gestione del sistema PetCare. L'applicazione permette ai proprietari di gestire le schede dei propri animali, monitorare le scadenze dei vaccini, lo storico delle visite e le condizioni cliniche (allergie/patologie).

## Tech Stack & Dipendenze Previste
*   **Framework:** React (Vite)
*   **Routing:** `react-router-dom` per la gestione della navigazione.
*   **State Management & API:** `axios` per le chiamate HTTP.
*   **Styling:** `bootstrap` per il design dei componenti.

---

## Architettura delle Pagine (Rotte)

| Rotta             | Pagina                | Contenuto/Funzionalità                                                            |
| :---------------: | :-------------------: | :-------------------------------------------------------------------------------: |
| `/`               | **Dashboard**         | Overview con alert vaccini in scadenza (30gg) e widget riassuntivi.               |
| `/login`          | **Login**             | Form di accesso utente.                                                           |
| `/register`       | **Register**          | Form di registrazione nuovo account.                                              |
| `/pets`           | **Pet List**          | Visualizzazione di tutti i propri animali con filtri per specie/razza/condizione. |
| `/pets/new`       | **Add Pet**           | Form per la creazione di una nuova scheda animale.                                |
| `/pets/:id`       | **Pet Detail**        | Dettaglio completo, cronologia vaccini, visite e gestione condizioni.             |
| `/vaccinations`   | **Vaccination Log**   | Storico globale dei vaccini di tutti i pet.                                       |
| `/visits`         | **Visit Log**         | Elenco completo delle visite effettuate.                                          |

---

## Componenti Principali della UI
*   **Navbar/Sidebar:** Navigazione principale tra Dashboard, Animali e Profilo.
*   **PetCard:** Card per la lista principale con foto (placeholder), nome e specie.
*   **VaccineAlert:** Banner in dashboard che evidenzia i vaccini vicini alla data di `expiration_date`.
*   **MedicalTimeline:** Componente grafico per visualizzare in ordine cronologico visite e vaccini nel dettaglio pet.
*   **ConditionBadge:** Label colorate per identificare rapidamente le patologie/allergie (es. Rosso per croniche, Giallo per allergie).

---

## Funzionalità Frontend da Implementare

### 1. Gestione CRUD (Anagrafica Pet)
Interfaccia fluida per inserire, modificare ed eliminare i dati degli animali. Gestione del caricamento dati tramite gli endpoint `/api/pets`.

### 2. Sistema di Filtri Avanzati
Possibilità di filtrare la lista degli animali non solo per testo, ma anche selezionando una specifica `Condition` clinica (es. "Mostra tutti i cardiopatici").

### 3. Logica Alert Scadenze
Implementazione di una logica client-side che confronta la data odierna con la `expiration_date` dei vaccini ricevuti dall'endpoint `/api/vaccinations`, evidenziando quelli con scadenza < 30 giorni.

### 4. Note e Recensioni
Integrazione di un sistema per inserire e visualizzare note testuali o feedback relativi alle visite veterinarie, come richiesto dalle specifiche funzionali.

---