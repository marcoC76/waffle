---
marp: true
theme: default
paginate: true
style: |
  /* Fondo con patrón SVG que cubre toda la pantalla */
  :root {
    --bg-color: #000000;
  }
  
  @page {
    size: 1280px 720px;
    margin: 0;
  }
  
  section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cpath fill='none' stroke-width='34.4' stroke-opacity='0.76' id='a' d='M0.74-509.63l485.39 352.65l-185.4 570.61h-599.97l-185.4-570.61L0.74-509.63 M0.74-510.87l-486.56 353.51l185.85 571.99h601.42L487.3-157.36L0.74-510.87L0.74-510.87z'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(22.32 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%230d1508' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%2314230e' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23183112' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%231c4014' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%231f4f16' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23215f18' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23236f19' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23248019' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23259119' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%2324a319' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%2323b417' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%2320c715' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%231bd911' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%2312ec0a' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%230F0' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #ffffff;
    padding: 40px 60px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
  }
  
  /* Asegurar que el contenido no tenga márgenes */
  section > *:not(:first-child) {
    margin: 0;
    max-width: 100%;
  }
  
  /* Estilo para títulos */
  h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0.5em auto 1em;
    text-align: center;
    width: 100%;
    display: block;
    padding: 0 10%;
    box-sizing: border-box;
    line-height: 1.3;
  }
  
  h1 { 
    font-size: 3em;
    color: #ffd700;
    margin-top: 1em;
    margin-bottom: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 2.5em;
    color: #4fc3f7;
    margin-top: 1em;
    margin-bottom: 0.8em;
    font-weight: 600;
  }
  
  h3 {
    font-size: 2em;
    color: #81c784;
    margin-top: 1em;
    margin-bottom: 0.8em;
    font-weight: 500;
  }
  
  /* Estilo para imágenes */
  img {
    max-width: 80%;
    max-height: 60vh;
    margin: 20px auto;
    display: block;
    border-radius: 12px;
    
  }
  
  /* Estilo para texto normal */
  p, li {
    font-size: 2em;
    line-height: 1.6;
    color: #e0e0e0;
    max-width: 90%;
    margin: 15px auto;
    text-align: center;
  }
  
  /* Efecto sutil para las diapositivas */
  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
  
  /* Mejora el contraste para mejor legibilidad */
  strong {
    color: #ffd700;
  }
  
  /* Estilo para los enlaces */
  a {
    color: #4fc3f7;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #81c784;
    text-decoration: underline;
  }
  
  /* Número de diapositiva */
  section::after {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.8em;
  }

---
# Comunicación en linea

---

# Comunicación sincróna y asincróna

---

# Sincróna

---

Los usuarios coinciden en el tiempo y se comunican entre sí

![width:700px](img/sincrona.jpg)

---

# Asincróna

---

Los participantes utilizan el sistema de comunicación en tiempos diferentes

![width:700px](img/asincrona.png)

---

# Asíncrona

---

## El correo electrónico

---

email, del inglés, "electronic mail"

![width:45%](img/email.png)

---

## Tipos de archivos que se pueden enviar por correo electrónico

---

### Archivos de video

![width:500px](img/video.png)

---

### Archivos de audio

![width:500px](img/audio-file.png)

---

### Imágenes y fotografías

![width:500px](img/pictures.png)

---

## Caracteristicas

---

## Rápido

![width:700px](img/fast.gif)

---

## Fiable

![width:700px](img/lost.gif)

---

## Cómodo

![width:70%](img/confort.png)

---

## Fácil de usar

<br>

![width:700px](img/tenor.gif)

---

## Normas:

---

# Lectura del correo

---

# Identificar el asunto

---

# Identificarse como emisor

---

# Cuidar la expresión

---

# Concisión

---

# Evitar los envíos masivos de mensajes

---

# Controlar el tamaño de los mensajes

---

# Usar en la respuesta parte del texto recibido

---

# Mas usados:

---

# Gmail
![width:60%](img/2000px-New_Logo_Gmail.svg_.png)

---

# Outlook
![width:40%](img/outlook.svg)

---

# Yahoo! Mail
![width:40%](img/yahoo.svg)

---

# Yopmail
![width:400px](img/yopmail-logo.png)
<br>
[http://www.yopmail.com/es/](http://www.yopmail.com/es/)

---

## Foro

---

La gente comparte su opinión, experiencias y dudas sobre cualquier tema

![width:300px](img/foro.png)

---

# Síncrona

---

## Chat

---

Anglicismo que significa charla

<br>
<br>

![width:40%](img/speak.svg) ![width:40%](img/speak.svg)

---

Conversación simultánea entre dos o más personas conectadas a la red

![width:50%](img/chat.gif)

---

Acceso a los mensajes enviados sin ningún tipo de retardo

![width:60%](img/tarde.gif)

---

## Tipos de chat

---

### Chats privados

![width:50%](img/mask.svg)

---

### Chats públicos

![width:50%](img/seo.svg)

---

## Características

---

# Mensajes instantáneos

![width:30%](img/customer-review.svg)

---

# Salón de Chat

![width:40%](img/group.svg)

---

# Enlaces Web

![width:40%](img/link.svg)

---

# Video

![width:40%](img/video-play.svg)

---

# Imágenes

![width:40%](img/image.svg)

---

# Audio

![width:40%](img/speaker.svg)

---

# Archivos

![width:40%](img/attach.svg)

---

## Lenguaje en los chats

---

## Es habitual acortar las palabras, suprimir ciertas vocales o cambiar algunas letras por otras

---

![](img/orto.jpeg)

---

## Se utilizan emoticonos, emojis o stikers para expresar sentimientos

---

### Emoticonos animados

![width:500px](img/surprise.gif)

---

### Stickers

![width:500px](img/stiker.png)

---

## Esto supone una merma evidente en la calidad del lenguaje

---

## Otros servicios de internet

---

# Videoconferencia
![width:60%](img/d6dd2aa34079b582abd2819d2a0b3dd4.png)

---

# Descarga de archivos
<br>

![width:300px](img/DEXhaI2XcAA7Pyq.jpg)

---

# Juegos Online

---

![bg](img/juegos-online-2.gif)

---

# Streaming

---

![bg](img/streming.jpg)

---

## Los emoticones

---

## Formados por caracteres del teclado de la computadora

<div style="font-size: 8em; text-align: center; margin: 0.5em 0;">:-)</div>

---

## Ejemplo de emoticonos

![width:80%](img/emoticonsirlf.png)

---

## Representan una emoción

![width:60%](img/88.gif)

---

## Los emojis pueden representar eso y muchas cosas más: objetos, animales, deportes…

---

## Maniculas medievales

![width:70%](img/1531231560_703470_1531239910_sumario_normal.jpg)

---

![width:70%](https://medievalbooks.nl/wp-content/uploads/2015/03/paris_bnf_fr_12584.jpg)


---

![width:900px](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf59Sm3ATSC7UT-rbM8u26nBbMSRioyYcLtw&s)

---

![width:70%](https://travelbetweenthepages.com/wp-content/uploads/2022/08/manicule.jpg)

---

![width:70%](https://img.atlasobscura.com/lf0hmot2ks89UE3Yh3_XhvviUp2tEW329ZWZXWfteuk/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy9iMDY5ZTkyZmMw/ZTcxNGRlZTBfaW1n/XzU5NTguanBn.jpg)