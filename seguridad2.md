---
marp: true
theme: dracula
paginate: true
style: |
  :root {
    color: #f8f8f2;
    background-color: #170177;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23170177'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%230c013c'/%3E%3Cstop offset='1' stop-color='%23170177'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='translate(1000 0)'%3E%3Cg transform='translate(0 750)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-338.4 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.23' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    font-size: 30px; /* Tamaño base para todo el texto */
  }
  
  /* Ajuste de tamaños de encabezados */
  h1 {
    font-size: 2.5em;  /* 75px */
    margin: 0.5em 0;
  }
  
  h2 {
    font-size: 2em;    /* 60px */
    margin: 0.5em 0;
  }
  
  h3, h4, h5, h6 {
    font-size: 1.5em;  /* 45px */
    margin: 0.5em 0;
  }
  
  /* Tamaño mínimo para párrafos y texto normal */
  p, li, blockquote, pre, code, table {
    font-size: 1em;    /* 30px */
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #f8f8f2;
    text-align: center;
    margin: 0.5em 0;
  }
  
  section {
    background-color: #282a36;
    color: #f8f8f2;
    text-align: center;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
  }
  
  section > *:not(style) {
    margin: 0.5em 0;
  }
  
  /* Style for code blocks */
  pre, code {
    background-color: #44475a;
    color: #f8f8f2;
    border-radius: 4px;
  }
  
  /* Style for blockquotes */
  blockquote {
    border-left: 4px solid #6272a4;
    padding-left: 1em;
    color: #f8f8f2;
    text-align: left;
  }
---


<!-- _class: lead -->
# Seguridad Informática

---

<!-- Diapositiva 1 -->

## Sistema seguro

---

<!-- Diapositiva 2 -->

# Libre de...

---

<!-- Diapositiva 3 -->

# Peligro
![w:90% bg left:40%](img/peligro.svg)

---

<!-- Diapositiva 4 -->

# Riesgo
![bg right:40%](img/riesgo.png)

---

<!-- Diapositiva 5 -->

# Daño
![width:90% bg left:40%](img/agrietar.svg)

---

<!-- Diapositiva 6 -->


#  _Ningún sistema es infalible_

---

<!-- Diapositiva 7 -->

# Fiabilidad informática

---

<!-- Diapositiva 8 -->

## Objetivos

---

<!-- Diapositiva 9 -->

## Confidencialidad
![bg right:50%](img/secreto.webp)

---

<!-- Diapositiva 10 -->

## Integridad
![bg left:60%](img/puzzle.jpg)

---

<!-- Diapositiva 11 -->

## Disponibilidad
![width:90% bg right:40%](img/servicio-24-h.svg)

---

<!-- Diapositiva 12 -->

# Proteger

---

<!-- Diapositiva 13 -->

## Hardware
![ bg left:50%](img/hw.svg)

---

<!-- Diapositiva 14 -->

## Software
![bg right:50%](img/app.webp)

---

<!-- Diapositiva 15 -->

## Datos
![width:90% bg left:40%](img/analisis.svg)

---

<!-- Diapositiva 16 -->

# Amenazas

---

<!-- Diapositiva 17 -->
## Personas

---

<!-- Diapositiva 18 -->
## Pasivos

---

<!-- Diapositiva 19 -->
## Accidentes

![width:100% bg right:60%](img/accidente.webp)

---

<!-- Diapositiva 20 -->
## Hackers
![width:90% bg left:40%](img/hacker-1.png)

---

<!-- Diapositiva 21 -->
## Curiosos
![width:100% bg right:60%](img/curioso.webp)

---

<!-- Diapositiva 22 -->
## Activos

---

<!-- Diapositiva 23 -->
## Antiguos empleados
![width:100% bg right:70%](img/despedido.gif)

---

<!-- Diapositiva 24 -->
## Crackers
![ bg left:60%](img/cracker.gif)

---

<!-- Diapositiva 25 -->
## Piratas informáticos
![bg left:40%](img/pirata.jpg)

---

<!-- Diapositiva 26 -->
# Amenazas lógicas

---

<!-- Diapositiva 27 -->
## Intencionadas

---

<!-- Diapositiva 28 -->
## Virus y malware
![ bg right:60%](img/virus.png)

---

<!-- Diapositiva 29 -->
## Herramientas de seguridad
![width:90% bg left:70%](img/1425__Wireshark1_3.png)

---

<!-- Diapositiva 30 -->
## Puertas traseras
![ bg left:70%](img/backdor.jpg)

---

<!-- Diapositiva 31 -->
## Software incorrecto (Bugs)
![bg right:50%](img/bug.jpeg)

---

<!-- Diapositiva 32 -->
## Amenazas Físicas

---

<!-- Diapositiva 33 -->
# Medidas de seguridad

---

<!-- Diapositiva 34 -->
## Prevención

---

<!-- Diapositiva 35 -->
## Contraseñas
![bg right:60%](img/pass.jpg)

---

<!-- Diapositiva 36 -->
## Permisos de acceso
![ bg left:50%](img/permisos.jpg)

---

<!-- Diapositiva 37 -->
## Seguridad de las comunicaciones
![ bg right:60%](img/KRACK.jpg)

---

<!-- Diapositiva 38 -->
## Actualizaciones
![bg left:60%](img/por-que-actualizacion-aplicaciones.jpg)

---

<!-- Diapositiva 39 -->
# Detección

---

<!-- Diapositiva 40 -->
## Antivirus
![bg left:60%](img/antivirus.gif)

---

<!-- Diapositiva 41 -->
## Firewalls y proxis
![width:90% bg right:60%](img/ddos.png)

---

<!-- Diapositiva 42 -->
## Tor o redes VPN
![width:90% bg left:60%](img/tor.png)

---

<!-- Diapositiva 43 -->
# Recuperación

---

<!-- Diapositiva 44 -->
## Respaldos

---
![bg ](img/3-2-11.gif)

---

<!-- Diapositiva 45 -->
# Ingeniería Social

---

<!-- Diapositiva 46 -->
## Conductas que permiten obtener información confidencial

---

<!-- Diapositiva 47 -->
## Timo o fraude
![bg right:60%](img/cert1.jpeg)

---

<!-- Diapositiva 48 -->
## Robo de empleados
![bg left:70%](img/robo-empleado.jpg)

---

<!-- Diapositiva 49 -->
## Phishing
![bg right:60%](img/Phishing-attack.jpg)

---

<!-- Diapositiva 50 -->
## Spoofing
![bg left:60%](img/impostor.jpg)

---

<!-- Diapositiva 51 -->
## Evitar ataques

---

<!-- Diapositiva 52 -->
## Comprobar autenticidad
![bg right:70%](img/CapturaFacebbok.PNG)

---

<!-- Diapositiva 53 -->
## Analizar correo electrónico

---

<!-- Diapositiva 54 -->
## No responder solicitudes
![bg left:60%](img/solicitudes-facebook-codigo-nuevo.jpg)

---

<!-- Diapositiva 55 -->
# Nunca se debe solo tirar documentación sensible

---

<!-- Diapositiva 56 -->
# Contraseñas

---

<!-- Diapositiva 57 -->
## Fáciles de recordar, Difíciles de adivinar
![bg right:60%](img/contra.jpg)

---

<!-- Diapositiva 58 -->
## Aa-Zz 0-9 !"#$%&/()=?

---

<!-- Diapositiva 59 -->
## Evitar secuencias de números o letras, así como caracteres repetidos

---

<!-- Diapositiva 60 -->
# Protección de la información

---

<!-- Diapositiva 61 -->
## Encriptación

---

![bg width:90%](img/ROT13-es.png)

---

<!-- Diapositiva 62 -->
# Ejemplos

---

<!-- Diapositiva 63 -->
## Fuerza bruta
![bg left:60%](img/fuerza-bruta.gif)

---

<!-- Diapositiva 64 -->
## RubberDucky
![bg right:60%](img/rubber_ducky_2000x.jpg)

---

<!-- Diapositiva 65 -->
## Phishing
![bg left:60%](img/phisi_0.jpg)

---

<!-- Diapositiva 66 -->
## Llaves electrónicas
![width:100% bg right:60%](img/descarga.jpg)

---

<!-- Diapositiva 67 -->
## Femtoceldas
![height:100% bg left:50% ](img/20110221-alcatel-lucent-femtocell-metro-cell-exterior.jpg)

---

<!-- Diapositiva 68 -->
## Ransomware
![bg right:70%](img/ransomware-screenshots.jpg)

---

<!-- Diapositiva 70 -->
## Keylogger
![width:100% bg left:70%](img/Teclado-Keylogger.jpg)

---

<!-- Diapositiva 72 -->
## Memorias "perdidas" o "enviadas"
![width:90% bg left:40%](img/memria.png)
![width:90% bg right:40%](img/1f48c.png)

---

<!-- Diapositiva 73 -->
## No confiar en nadie
![bg left:60%](img/hotel.jpg)
