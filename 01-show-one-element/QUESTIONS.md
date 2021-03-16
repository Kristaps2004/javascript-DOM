# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Teksts atkal paliek samazināts, jo atsvaidzinot mājaslapu scripts var teikt tiek aizvērts ciet un ja tu vēlies lasīt vairāk tev tas atkal ir jāpalaiž.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Kad noņem to koda daļu kods vairāk nestrādā un neparāda tekstu.
Šī kods gaida kamēr mājaslapa ir ielādējusies

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

addEventListener () metodi izmanto lai pieliktu event handler kādam specifiskam elementam

