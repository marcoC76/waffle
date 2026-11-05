# Seguridad informática — versión Marp

Presentación de TIC construida en [Marp](https://marp.app/) a partir de la
original en impress.js (<https://marcoc76.github.io/waffle/seguridad.html#/algo>).

**Regla del deck: máximo 10 palabras visibles por diapositiva.** El contenido
completo de cada una va en las notas del presentador.

## Contenido

| Archivo | Descripción |
| --- | --- |
| `seguridad.md` | Fuente Marp. **89 diapositivas**, 16:9, tema y notas incluidas. |
| `img/` | 54 imágenes (49 del repositorio original + 5 actuales con licencia libre). |
| `seguridad.html` | Exportación HTML. **Aquí funciona la vista de presentador.** |
| `seguridad.pdf` | Exportación PDF, sin notas. |
| `propuesta-ejemplos.md` | Investigación que originó el bloque de casos actuales, con fuentes. |
| `vista-general.png` | Muestra de cuatro diapositivas. |
| `fondo-animado.png` | Comparativa del fondo animado (t = 0 s frente a t = 23 s). |

## Notas del presentador

Cada diapositiva lleva un comentario HTML con el guion completo: qué decir, datos,
cifras y fuentes. Marp los trata como *speaker notes*.

```markdown
<!--
Change Healthcare (EE. UU., 2024): el ataque paralizó el sistema de pagos médicos...
-->
```

Para verlas mientras presentas:

- **Abre `seguridad.html`** en Chrome y pulsa **P**: vista de presentador con
  diapositiva actual, notas y siguiente.
- En **VS Code** con la extensión *Marp for VS Code*: vista previa y panel de notas.
- En el propio `seguridad.md`, cada bloque comentado está justo debajo de su
  diapositiva.

Nota: `marp-cli --pdf-notes` no produjo un PDF con notas verificable, así que no
se incluye; para imprimir un guion, exporta el HTML y usa "Imprimir".

## Recuento de palabras

| Métrica | Valor |
| --- | --- |
| Diapositivas | 89 |
| Máximo de palabras en una diapositiva | 9 |
| Media | 3,0 |
| Diapositivas sin notas | 0 |

El recuento excluye notas, imágenes, directivas y números de página. Se retiró el
pie de página («Seguridad informática · TIC») para no gastar el presupuesto de
palabras; las fuentes se acreditan ahora **en las notas** de cada diapositiva.

## Uso de mayúsculas

Todo el texto visible va en **tipo oración**: mayúscula solo en la primera letra
de cada línea o frase, y el resto en minúsculas.

- Se respetan siglas y nombres propios: **TIC**, **2FA**, **US$**, **MOVEit**,
  **XZ Utils**, **Bloomberg**, **StyleGAN**, **Passkeys** al inicio de línea.
- Las líneas que abren con una cifra («31% Fallos de software») llevan mayúscula
  en la primera palabra siguiente.
- Los separadores de bloque ya **no** se fuerzan a mayúsculas por CSS: antes se
  mostraban en caja alta y ahora respetan el texto escrito («Sistema seguro»).

## Sistema visual

| Clase | Uso |
| --- | --- |
| *(sin clase)* / `lead` | Portada. |
| `agenda` | Índice en dos columnas. |
| `opener` | Separador: numeral fantasma, título en mono mayúsculas y filete verde. |
| `statement` | Frase suelta en mono itálica, enmarcada. |
| `split` / `split left` | Imagen a sangre al 46 %, sólo título. |
| `split fit` / `split left fit` | Igual, con la imagen contenida sobre un *mat*. |
| `case` / `case left` | Imagen al 38 % y título + una línea al otro lado. |
| `stats` | Cifra grande en mono con su lectura debajo. |
| `list` | Una afirmación grande, sin viñeta. |
| `diptych` | Dos imágenes a la misma altura. |

Los estilos de un solo elemento (`li:only-child`) hacen que una única idea se
muestre como afirmación, sin viñeta ni filete.

Tipografía: **Encode Sans** y **Share Tech Mono** (Google Fonts). Sin conexión se
sustituyen por las del sistema.

## Fondo animado

Dos resplandores derivan lentamente (46 s, ida y vuelta). Se desactiva con
`prefers-reduced-motion` y en `@media print`, así que el PDF sale siempre con el
fondo en su estado inicial. Detalle en `fondo-animado.png`.

## Créditos de las imágenes nuevas

Todas de Wikimedia Commons, descargadas a 1600 px y algunas recortadas:

| Archivo | Obra original | Autor | Licencia |
| --- | --- | --- | --- |
| `actual-hospital.jpg` | *Tuen Mun Hospital, ground floor corridor* (2016) | YipshaiukOWL | CC BY-SA 4.0 |
| `actual-codigo.jpg` | *CSS code on a screen* (Unsplash) | Sai Kiran Anagani | CC0 |
| `actual-deepfake.jpg` | *This Person Does Not Exist example* (StyleGAN2) | StyleGAN2 | Dominio público |
| `actual-consola.jpg` | *PS5 Controller 7* | InclusiveGameLab | CC BY-SA 4.0 |
| `actual-qr.jpg` | *NHS COVID-19 QR code poster* (recortado) | Crookesmoor | CC BY-SA 4.0 |

## Fuentes de los datos

Están citadas en las notas de cada diapositiva. Las principales:

- Verizon, *2026 Data Breach Investigations Report* — <https://www.verizon.com/business/resources/reports/dbir/>
- IBM, *Cost of a Data Breach Report 2026* — <https://www.ibm.com/reports/data-breach>
- IBM, *Change Healthcare revela un pago de ransomware de 22 millones de dólares* — <https://www.ibm.com/mx-es/think/news/change-healthcare-22-million-ransomware-payment>
- ThaiCERT, *UnitedHealth reports 190 million people affected* — <https://www.thaicert.or.th/en/2025/01/28/unitedhealth-reports-190-million-people-affected-by-massive-data-breach-in-2024/>
- IDEMIA, *Anatomy of the Arup scam* — <https://www.idemia.com/insights/anatomy-256-million-arup-scam-everyone-recognized-faces-no-one-verified-them>
- Excélsior, *Cuidado con los montadeudas* (09/10/2025) — <https://www.excelsior.com.mx/nacional/cuidado-con-los-montadeudas/1744791>
- FIDO Alliance, *Passkeys enabling access to 15 billion online accounts* — <https://fidoalliance.org/biometric-update-passkeys-build-momentum-enabling-access-to-15-billion-online-accounts/>
- NIST NVD, *CVE-2024-3094 (XZ Utils)* — <https://nvd.nist.gov/vuln/detail/CVE-2024-3094>

## Ver y editar

- **VS Code**: extensión *Marp for VS Code*, abrir `seguridad.md` y usar la vista previa.
- **CLI**:

  ```bash
  npx @marp-team/marp-cli seguridad.md --preview
  npx @marp-team/marp-cli seguridad.md --pdf  --allow-local-files
  npx @marp-team/marp-cli seguridad.md --html --output seguridad.html
  ```

  `--allow-local-files` es necesario para incrustar `img/` al exportar.

Al editar, mantén el máximo de 10 palabras por diapositiva y mueve lo demás a la
nota.

## Comprobaciones hechas

- 89 diapositivas renderizadas y revisadas en capturas.
- Recuento automático de palabras: máximo 9, ninguna por encima de 10, todas con notas.
- Comprobación de maquetación en Chrome: sin textos invadiendo paneles, sin
  elementos fuera del lienzo y sin imágenes rotas.
