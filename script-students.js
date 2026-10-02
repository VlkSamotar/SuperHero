// ======================================================================
// 🥉 ÚROVEŇ 1: Probuzení hrdiny
// ======================================================================
// 1. Pomocí document.querySelector vyhledej nadpis s ID "jmeno-postavy".
// 2. Pomocí vlastnosti "innerHTML" změň text nadpisu na jméno svého
//    oblíbeného superhrdiny nebo herní postavy (např. "Batman").
// 3. Vyhledej celou kartu (ID "karta") a změň její barvu pozadí
//    (style.backgroundColor) na nějaký tmavý odstín, který se k hrdinovi hodí.

// TODO 1: Napiš svůj kód pro Úroveň 1 zde:
// Nápověda:
// let jmeno_postavy = document.querySelector('#jmeno-postavy');
// jmeno_postavy.innerHTML = 'Tvůj hrdina';


// ======================================================================
// 🥈 ÚROVEŇ 2: Síla interakce
// ======================================================================
// 1. Vyhledej tlačítko s ID "btn-schopnost" a obrázek s ID "foto".
// 2. Přidej na tlačítko posluchač události "click". Zařiď, aby se po kliknutí:
//    - Obrázek postavy změnil (dostal barevný rámeček přes style.borderColor).
//    - Do odstavce s ID "status-zprava" vypsal text: "Schopnost aktivována!".
// 3. BONUS: Přidej na obrázek události "mouseover" a "mouseout".
//    Při najetí myší obrázek zvětši (style.transform = 'scale(1.1)'),
//    při odjetí ho vrať zpět ('scale(1)').

// TODO 2: Napiš svůj kód pro Úroveň 2 zde:
// Nápověda:
// let btn = document.querySelector('#btn-schopnost');
// btn.addEventListener('click', () => { ... });


// ======================================================================
// 🥇 ÚROVEŇ 3: Výbava do akce
// ======================================================================
// 1. Vytvoř pole s názvem "inventar", které bude obsahovat aspoň 4 předměty,
//    které tvůj hrdina nosí u sebe (např. ['Meč', 'Štít', 'Lektvar']).
// 2. Vyhledej v DOMu prázdný seznam s ID "seznam-predmetu".
// 3. Napiš cyklus "for", který projde celé tvoje pole od indexu 0 až po jeho konec
//    (využij vlastnost inventar.length).
// 4. Uvnitř cyklu zařiď, aby se pro každý předmět přidal do seznamu nový řádek.
//    (Nápověda: seznam.innerHTML += '<li>' + inventar[i] + '</li>')

// TODO 3: Napiš svůj kód pro Úroveň 3 zde:
// Nápověda:
// let inventar = ['Předmět 1', 'Předmět 2'];
// let seznam = document.querySelector('#seznam-predmetu');
// for (let i = 0; i < inventar.length; i++) { ... }
