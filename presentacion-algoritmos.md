---
marp: true
title: Algoritmos
description: Presentación Zen sobre algoritmos para bachillerato
paginate: true
size: 16:9
backgroundColor: #11161c
color: #f3f6fa
style: |
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

  :root {
    --bg: #11161c;
    --bg-deep: #0c1015;
    --bg-soft: #18202a;
    --surface: rgba(255, 255, 255, 0.035);
    --surface-strong: rgba(255, 255, 255, 0.06);
    --text: #f4f7fb;
    --muted: #b4bfd0;
    --accent: #6f93cb;
    --accent-strong: #89a9d8;
    --accent-muted: rgba(111, 147, 203, 0.14);
    --accent-line: rgba(111, 147, 203, 0.42);
    --line: rgba(180, 191, 208, 0.18);
    --shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  }

  section {
    font-family: "Manrope", "Aptos", "Segoe UI", sans-serif;
    background:
      radial-gradient(ellipse at 15% 20%, rgba(111, 147, 203, 0.10), transparent 48%),
      radial-gradient(ellipse at 85% 80%, rgba(111, 147, 203, 0.05), transparent 40%),
      linear-gradient(180deg, #141a21 0%, var(--bg) 55%, var(--bg-deep) 100%);
    color: var(--text);
    padding: 78px 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);
    background-size: 56px 56px;
    opacity: 0.025;
    pointer-events: none;
  }

  section > * {
    position: relative;
  }

  section::after {
    color: rgba(180, 191, 208, 0.55);
    font-size: 0.46em;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  h1, h2, p {
    margin: 0;
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: 3.8em;
    line-height: 0.98;
    font-weight: 800;
  }

  h2 {
    font-size: 2.35em;
    line-height: 1.12;
    font-weight: 750;
    max-width: 11ch;
    text-wrap: balance;
  }

  p {
    font-size: 1.8em;
    line-height: 1.25;
    max-width: 12ch;
  }

  strong {
    color: var(--accent-strong);
    font-weight: 750;
  }

  a {
    color: var(--accent-strong);
    text-decoration: none;
    border-bottom: 1px solid var(--accent-line);
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  a:hover {
    color: #a7c0e6;
    border-bottom-color: rgba(167, 192, 230, 0.7);
  }

  a:focus-visible {
    outline: 2px solid var(--accent-strong);
    outline-offset: 4px;
    border-radius: 2px;
  }

  .kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--accent);
    font-size: 0.58em;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 26px;
  }

  .kicker::before {
    content: "";
    width: 28px;
    height: 1px;
    background: var(--accent-line);
    flex-shrink: 0;
  }

  .muted {
    color: var(--muted);
  }

  .small {
    font-size: 1.05em;
    max-width: 16ch;
    color: var(--muted);
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  /* Split layout */
  section.split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    padding: 72px 88px;
  }

  section.split .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
  }

  section.split .col:not(.visual) {
    padding: 8px 0;
  }

  section.split h2,
  section.split p,
  section.split .small {
    max-width: 100%;
  }

  section.split h2 {
    max-width: 9ch;
  }

  section.split .visual {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
  }

  section.split .visual img,
  section.split .visual a img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    background: rgba(255, 255, 255, 0.02);
    box-shadow: var(--shadow);
  }

  section.split .visual a {
    display: flex;
    width: 100%;
    border-bottom: none;
  }

  section.split .visual.frame img,
  section.split .visual.frame a img {
    background: #f6f8fb;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.65);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(111, 147, 203, 0.08);
  }

  section.split .visual.soft img,
  section.split .visual.soft a img {
    background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
    padding: 16px;
    border: 1px solid var(--line);
    box-shadow: 0 16px 44px rgba(0, 0, 0, 0.24);
  }

  /* Center slides */
  section.center-slide {
    text-align: center;
    align-items: center;
  }

  section.center-slide h2,
  section.center-slide p {
    max-width: 12ch;
  }

  section.center-slide .kicker::before {
    display: none;
  }

  section.center-slide .kicker {
    justify-content: center;
  }

  /* Chapter tint for flowchart examples */
  section.flow {
    background:
      radial-gradient(ellipse at 70% 30%, rgba(111, 147, 203, 0.12), transparent 45%),
      radial-gradient(ellipse at 20% 80%, rgba(111, 147, 203, 0.04), transparent 40%),
      linear-gradient(180deg, #151c24 0%, #111720 55%, #0d1219 100%);
  }

  /* Pair / comparison */
  .pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    width: 100%;
    margin-top: 10px;
  }

  .box {
    padding: 36px 32px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.02) 100%);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .box .label {
    color: var(--muted);
    font-size: 0.54em;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .box p {
    font-size: 1.25em;
    max-width: 10ch;
    line-height: 1.35;
    font-weight: 550;
  }

  .box.good {
    border-color: var(--accent-line);
    background: linear-gradient(180deg, rgba(111,147,203,0.16) 0%, rgba(111,147,203,0.06) 100%);
  }

  .box.good .label {
    color: var(--accent-strong);
  }

  /* Cover */
  section.cover {
    justify-content: flex-end;
    padding-bottom: 96px;
    background: transparent;
  }

  section.cover::before {
    opacity: 0.015;
  }

  section.cover h1 {
    font-size: 4.8em;
    letter-spacing: -0.04em;
  }

  section.cover p {
    font-size: 1.3em;
    max-width: 15ch;
    color: #dce6f3;
    font-weight: 500;
    line-height: 1.4;
  }

  section.cover .kicker {
    color: #93b0da;
  }

  section.cover .kicker::before {
    background: rgba(147, 176, 218, 0.5);
  }

  /* Closing */
  section.closing h2 {
    font-size: 2.8em;
    max-width: 11ch;
  }
---

<!-- _class: cover -->
<!-- _paginate: false -->
![bg brightness:0.24 saturate:0.65](img/laberinto.png)

<div class="kicker">Cultura Digital</div>

# Algoritmos

Pasos claros para resolver problemas.

---

<!-- _paginate: false -->
![bg contain](img/laberinto.png)

---

<!-- _class: split -->

<div class="col visual">
  <img src="img/algoNetflix.jpg" alt="Recomendaciones de una plataforma digital">
</div>
<div class="col">
  <div class="kicker">Cotidiano</div>
  <h2>Ya usas algoritmos.</h2>
  <p class="small" style="margin-top:28px;">En recetas, rutas y apps.</p>
</div>

---

<!-- _class: center-slide -->

## Una secuencia ordenada de pasos.

---

<!-- _class: center-slide -->

## Para resolver un problema.

---

<!-- _class: split -->

<div class="col">
  <div class="kicker">Anatomía</div>
  <h2>Entrada. Proceso. Salida.</h2>
</div>
<div class="col visual frame">
  <img src="img/entradaysalida.PNG" alt="Diagrama de entrada, proceso y salida">
</div>

---

<!-- _class: center-slide -->

<div class="kicker">Entrada</div>

## Lo que necesitas.

---

<!-- _class: center-slide -->

<div class="kicker">Proceso</div>

## Lo que haces.

---

<!-- _class: center-slide -->

<div class="kicker">Salida</div>

## Lo que verificas.

---

<!-- _class: center-slide -->

## ¿Falló entrada, proceso o salida?

---

<!-- _class: split -->

<div class="col visual soft">
  <img src="img/pasos.png" alt="Pasos representados en orden">
</div>
<div class="col">
  <div class="kicker">Orden</div>
  <h2>El orden importa.</h2>
</div>

---

<!-- _class: center-slide -->

## Mismos pasos, distinto resultado.

---

<!-- _class: split -->

<div class="col">
  <div class="kicker">Precisión</div>
  <h2>La precisión importa.</h2>
</div>
<div class="col visual frame">
  <img src="img/algoritmo.png" alt="Representación visual de un algoritmo">
</div>

---

<div class="pair">
<div class="box">
<div class="label">Ambigua</div>
<p>“Ponle tantita leche.”</p>
</div>
<div class="box good">
<div class="label">Precisa</div>
<p>“Vierte <strong>250 ml</strong> de leche.”</p>
</div>
</div>

---

<!-- _class: split -->

<div class="col visual frame">
  <img src="img/Exam-preparation-step-by-step.png" alt="Pasos de preparación en secuencia">
</div>
<div class="col">
  <div class="kicker">Ciclo</div>
  <h2>Diseña la solución primero.</h2>
</div>

---

<!-- _class: split -->

<div class="col">
  <div class="kicker">Ciclo</div>
  <h2>Traduce a una herramienta.</h2>
</div>
<div class="col visual soft">
  <img src="img/flujo.png" alt="Diagrama de flujo">
</div>

---

<!-- _class: center-slide flow -->

<div class="kicker">Diagramas de flujo</div>

## Ejemplos claros y visuales.

---

<!-- _class: split flow -->

<div class="col visual frame">
  <img src="img/SimbolosDF.png" alt="Símbolos de diagramas de flujo">
</div>
<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>Símbolos básicos</h2>
</div>

---

<!-- _class: split flow -->

<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>Abrir una puerta</h2>
</div>
<div class="col visual frame">
  <img src="img/abrirPuerta.PNG" alt="Diagrama de flujo para abrir una puerta">
</div>

---

<!-- _class: split flow -->

<div class="col visual frame">
  <img src="img/suma.PNG" alt="Diagrama de flujo de suma de dos números">
</div>
<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>Sumar dos números</h2>
</div>

---

<!-- _class: split flow -->

<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>¿Vas al cine?</h2>
</div>
<div class="col visual frame">
  <img src="img/pelicula.PNG" alt="Diagrama de flujo con decisión para ir al cine">
</div>

---

<!-- _class: split flow -->

<div class="col visual frame">
  <img src="img/decisionSimple.jpg" alt="Diagrama de flujo con decisión simple">
</div>
<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>Decisión simple</h2>
</div>

---

<!-- _class: split flow -->

<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>Un bucle</h2>
</div>
<div class="col visual frame">
  <img src="img/bucle.jpg" alt="Diagrama de flujo con bucle">
</div>

---

<!-- _class: split flow -->

<div class="col visual frame">
  <img src="img/dias.PNG" alt="Diagrama de flujo de días de la semana">
</div>
<div class="col">
  <div class="kicker">Ejemplo</div>
  <h2>Días de la semana</h2>
</div>

---

<!-- _class: center-slide -->

## Prueba, valida y corrige.

---

<!-- _class: center-slide -->

## El error también enseña.

---

<!-- _class: split -->

<div class="col">
  <div class="kicker">Reto 15 min</div>
  <h2>Robot Humano</h2>
  <p class="small" style="margin-top:28px;">Da instrucciones literales.</p>
</div>
<div class="col visual">
  <img src="img/pareja.png" alt="Dos personas colaborando en una actividad">
</div>

---

<!-- _class: split -->

<div class="col visual">
  <a href="https://g.co/doodle/ygxau2?ds=cl" target="_blank"><img src="img/conejo.jpg" alt="Juego del conejo y las zanahorias"></a>
</div>
<div class="col">
  <div class="kicker">Reto 25 min</div>
  <h2><a href="https://g.co/doodle/ygxau2?ds=cl" target="_blank">Conejo y zanahorias</a></h2>
  <p class="small" style="margin-top:28px;">Diseña, prueba y mejora.</p>
</div>

---

<!-- _class: center-slide -->

## Descompón. Sé preciso. Valida.

---

<!-- _class: center-slide closing -->
<!-- _paginate: false -->
![bg opacity:0.07](img/laberinto.png)

## Primero piensa la **solución**.

---

<!-- _class: center-slide closing -->
<!-- _paginate: false -->
![bg opacity:0.07](img/laberinto.png)

## Luego elige la **herramienta**.
