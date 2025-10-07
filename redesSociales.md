---
marp: true
theme: gaia
paginate: true
style: |
  /* Estilos base de la sección */
  section {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect fill='none' stroke-width='96.8' stroke-opacity='0.6' id='a' x='-400' y='-300' width='800' height='600'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(126 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23000011' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23000022' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23000033' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23000044' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23000055' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23000066' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23000077' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23000088' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23000099' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%230000aa' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%230000bb' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%230000cc' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%230000dd' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%230000ee' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    color: #ffffff;
    text-align: center; /* Centra el texto */
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
  
  /* Contenedor para centrar contenido */
  section > *:not(style) {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Estilos para imágenes */
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    border-radius: 20px; /* Bordes ligeramente redondeados para todas las imágenes */
  }
  
  /* Bordes más redondeados para imágenes cuadradas */
  img[width*="px"] {
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 20px;
  }
  
  /* Ajuste para imágenes con tamaños específicos */
  img[width*="500px"],
  img[width*="400px"],
  img[width*="300px"] {
    border-radius: 40px;
  }
  
  /* Estilos para los títulos */
  h1 {
    color: #81c784 !important; /* Verde claro */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
    text-align: center;
    width: 100%;
    font-size: 3.5em !important;
    margin-bottom: 0.5em !important;
  }
  
  h2 {
    color: #a5d6a7 !important; /* Verde más claro */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    text-align: center;
    width: 100%;
    font-size: 2.8em !important;
    margin-bottom: 0.4em !important;
  }
  
  h3 {
    color: #c8e6c9 !important; /* Verde muy claro */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    text-align: center;
    width: 100%;
    font-size: 2.2em !important;
    margin-bottom: 0.3em !important;
  }
  
  h4, h5, h6 {
    color: #e8f5e9 !important; /* Verde casi blanco */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    text-align: center;
    width: 100%;
    font-size: 1.8em !important;
  }
  
  /* Estilo para párrafos y listas */
  p, li, ul, ol, blockquote {
    color: #e0e0e0 !important;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5em !important;
    line-height: 1.6;
  }
  
  /* Mejora el contraste de los enlaces */
  a {
    color: #4fc3f7 !important;
  }
  
  /* Centrar citas */
  blockquote {
    border-left: none;
    padding: 10px 20px;
    margin: 20px auto;
    font-style: italic;
  }
  
  /* Fondo semi-transparente para mejorar la legibilidad */
  section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  
  /* Asegura que el contenido esté por encima del fondo */
  section > *:not(::after) {
    position: relative;
    z-index: 1;
  }
  
  /* Ajustes para listas */
  ul, ol {
    text-align: left;
    display: inline-block;
    margin: 0 auto;
  }
  
  /* Ajuste para el pie de página */
  footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    font-size: 0.8em;
    color: #999;
  }

---

# Redes Sociales

---

Comunidades de individuos (en internet) con intereses o actividades en común.

![width:400px](img/comunidad.jpg)

---

Los individuos no se tienen que conocer previo a tomar contacto.

<br>

![width:75%](img/redessociales.jpg)

---

# Tipos de Redes Sociales

---

## Genéricas

---

Muy numerosas y populares (como Facebook o Twitter).

![width:500px](img/redessociales2.jpg)

---

## Profesionales

---

![width:500px](img/PROFESIONALES.png)

---

LinkedIn: involucran individuos que comparten el ámbito laboral.

<br>

![width:600px](img/Linkedin.png)

---

## Temáticas

---

Relacionan personas con intereses específicos en común siendo la más famosa Flickr.

![width:500px](img/Flickr.jpg)

---

# Primera red social

---

## [classmates.com](https://www.classmates.com/)

Creada en 1995 por Randy Conrads.

![width:400px](img/class.png)

---

Buscaba mantener en contacto a ex compañeros de universidad.

![width:500px](img/images.jpg)

---

# Teoría de los seis grados

---

Cualquiera en la Tierra puede estar conectado a cualquier otra persona en el planeta a través de una cadena de conocidos que no tiene más de seis intermediarios

---

Cada persona conoce de media a unas 100 personas.

![width:500px](img/6degrees.jpg)

---

# FACEBOOK

---

Los estudiantes creaban grupos para compartir resúmenes, noticias, retc.

![width:500px](img/facebook.jpg)

---

# TWITTER

---

El nombre original del producto era twttr.

![width:500px](img/twitter.jpg)

---

Microblogging: hay que limitarse a postear en 280 caracteres.

![width:500px](img/280-caracteres-twitter.jpg)

---

# YouTube 
![width:500px](img/YouTube_logo_(2013-2015).png)

---

![width:50%](img/youtube.jpeg)

---

# Instagram 

![width:300px](img/log.png)

---

![width:1000px](img/insatgram.gif)

---

![width:500px](img/SoundCloud_logo_small3.png)

---

# Reddit 

![width:10%](img/Reddit.png)

---

![width:700px](img/upvote.gif)

---

## Ashley Madison

---

![width:1000px](img/472842-ashley-madison-logo.jpg)

---

Plataforma para contactar a otras personas que estén dispuestas a cometer una infidelidad.

---

Mandar el primer correo electrónico te costará 5 créditos.


![width:450px](img/credito.jpg)

---

El costo de las conversaciones aplica solo para los hombres.

![width:700px](img/shut_up_and_take_my_money_by_lolikips-d34yx16.png)


---

Bots femeninos.

![width:90%](img/bot.jpg)

---

![width:1200px](img/ashleyhacked.jpg)