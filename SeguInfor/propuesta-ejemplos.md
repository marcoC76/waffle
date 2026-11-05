# Propuesta de actualización — Seguridad informática (TIC)

Revisión de la sección **Ejemplos** y del resto del deck frente a lo que se está
viendo en 2025-2026. Todo lo que sigue está listo para pegar en `seguridad.md`,
con la clase de layout indicada.

---

## 1. Diagnóstico

La sección de ejemplos es coherente, pero **se quedó en 2010-2018**:

| Diapositiva actual | Año del ejemplo | Problema |
| --- | --- | --- |
| RubberDucky | 2010 | Sigue válido, pero ya no es "el" ataque; hoy el equivalente es BadUSB y el robo de sesiones. |
| Femtoceldas | 2011 | Tecnología muy de nicho; el concepto actual es *IMSI catcher* y sobre todo el **SIM swapping**. |
| Stuxnet | 2010 | Pieza histórica clave, pero se presenta como si fuera actual. |
| Chip espía chino | 2018 | Caso **nunca confirmado públicamente** (Apple y Amazon lo desmintieron). Mal ejemplo para enseñar. |
| Ransomware | 2017 (WannaCry) | Falta el modelo actual: **doble extorsión y RaaS**. |
| Phishing | 2016 | Falta **smishing, quishing y phishing escrito por IA**. |
| Fuerza bruta | — | Falta distinguir *credential stuffing* (listas filtradas), que es lo que de verdad se usa. |

Y **falta lo que más les toca a los estudiantes**: robo de cuentas de juego,
apps que extorsionan, deepfakes y passkeys.

---

## 2. Datos actuales para abrir el bloque (1 diapositiva)

> Sirve de marco y hace que los ejemplos no parezcan anécdotas sueltas.

```markdown
<!-- _class: statement -->
## 31 % de las brechas ya empieza por un fallo de software, no por una contraseña robada
```

Y una segunda con las tres cifras que cuentan la historia:

```markdown
<!-- _class: list -->
## Cómo se ataca hoy

- **48 %** de las brechas involucran ransomware.
- **40 %** más clics en el móvil: el SMS y la llamada sustituyen al correo.
- **15 %** de las técnicas ya se apoyan en IA generativa.

*Verizon DBIR 2026*
```

```markdown
<!-- _class: list -->
## Lo que cuesta

- **4.99 M USD**: costo medio de una brecha, récord histórico (+12 %).
- **56 %** más ataques asistidos por IA (deepfakes y malware generado).
- **15 000 millones** de cuentas ya admiten llaves de acceso (passkeys).

*IBM Cost of a Data Breach 2026 · FIDO Alliance*
```

---

## 3. Cinco casos nuevos (el corazón de la propuesta)

### 3.1 Ransomware moderno — Change Healthcare

```markdown
<!-- _class: list -->
## Ransomware hoy: cobrar dos veces

- **Change Healthcare (EE. UU., 2024)**: 190 millones de personas afectadas.
- Pagó **22 M USD** de rescate y aun así los datos se publicaron.
- El ataque paró los pagos de clínicas durante semanas.

**Doble extorsión**: cifran, roban y amenazan con publicar.
```

*Por qué funciona en clase*: conecta con "Disponibilidad" (slide 13) y con
"Respaldos": el daño no fue perder datos, fue **no poder trabajar**.

### 3.2 Cuando el software es la puerta — MOVEit y XZ Utils

```markdown
<!-- _class: list -->
## Un fallo, miles de víctimas

- **MOVEit (2023)**: una vulnerabilidad en un programa de transferencia de
  archivos expuso datos de miles de organizaciones.
- **XZ Utils (2024)**: una puerta trasera estuvo a punto de entrar en Linux;
  la detectaron por una demora de medio segundo.

Actualizar no es una molestia: es la diferencia entre 0 y miles de víctimas.
```

### 3.3 IA que suplanta — el caso Arup

```markdown
<!-- _class: list -->
## Deepfakes: la videollamada falsa

- **Hong Kong, 2024**: un empleado "vio" a su director financiero en una
  videollamada. Todos eran deepfakes. Transferencia de **25 M USD**.
- Con **3 segundos** de audio ya se clona una voz.
- Regla: **verificar por otro canal**, nunca por el número o el video que
  te acaban de enviar.
```

*Es el ejemplo que más impresiona y el más fácil de convertir en regla práctica.*

### 3.4 Robo de cuentas — infostealers

```markdown
<!-- _class: list -->
## Te roban la sesión, no la contraseña

- El **infostealer** copia contraseñas guardadas y *cookies* de sesión: entra
  sin necesitar tu contraseña ni tu 2FA.
- Se reparte en juegos y mods pirateados, "cheats" y cracks.
- Revisa **sesiones activas** y cierra las que no reconozcas.
```

*Conecta directo con su vida diaria: cuentas de Steam, Discord, Roblox, Instagram.*

### 3.5 México — apps que extorsionan (montadeudas)

```markdown
<!-- _class: list -->
## Montadeudas: la app que te extorsiona

- **1 073** apps de préstamo ilegal identificadas; 397 seguían activas.
- **29 000** reportes en 2024 (+80 %); el **60 %** de las víctimas son mujeres.
- Piden permisos de **contactos, cámara y fotos** y luego amenazan.

Si una app pide contactos y no es de contactos, **no la instales**.
```

*Es el ejemplo más cercano a su realidad y enseña permisos, no teoría.*

---

## 4. Tres diapositivas de defensa actual (cierre del bloque)

```markdown
<!-- _class: list -->
## El fin de la contraseña

- **Passkeys**: entras con tu huella o tu cara; no hay contraseña que robar.
- **2FA con app**, no por SMS (el SMS se intercepta con SIM swapping).
- **Gestor de contraseñas**: una distinta por sitio, todas memorizadas por él.
```

```markdown
<!-- _class: list -->
## Phishing 2.0

- **Smishing**: "paquete retenido", "multa", "tu cuenta será bloqueada".
- **Quishing**: QR falsos en anuncios, menús y parquímetros.
- Escrito por IA: **sin faltas de ortografía** y con tu nombre real.
```

```markdown
<!-- _class: list -->
## Lo que sí funciona

- Actualiza sistema, apps y router.
- Passkeys o 2FA con app + gestor de contraseñas.
- Copias **3-2-1** y **probar** que restauran.
- Desconfía de la prisa: la urgencia es la firma del fraude.
- Verifica por otro canal. Denuncia (Policía Cibernética, CONDUSEF).
```

---

## 5. Ajustes a diapositivas que ya existen

| Diapositiva | Cambio sugerido |
| --- | --- |
| `Stuxnet` | Añadir "(2010)" y una línea: *primer ciberarma documentada; hoy su heredero es Industroyer2 (2022)*. |
| `RubberDucky` | Añadir "(2010)" y mención a **BadUSB** y cables USB regalados. |
| `Femtoceldas` | Renombrar a **"SIM swapping e IMSI catchers"**: el ataque que hoy les puede pasar es el duplicado de SIM. |
| `Chip espía chino` | **Retirar** o reformular: *"El caso del chip (2018): nunca se comprobó. Lección: verificar fuentes antes de creer un titular."* |
| `Fuerza bruta` | Añadir una línea: hoy no se prueban todas las claves, se usan **listas filtradas** (*credential stuffing*). |
| `Hailbreak y root` | Corregir a **"Jailbreak y root"** y añadir *sideloading* de APK: por ahí entran troyanos bancarios. |
| `Memorias "perdidas"` | Actualizar con **"la memoria que regalas"**: USB de eventos, cargadores públicos. |

---

## 6. Dos diapositivas delicadas (opcionales)

Para un grupo de secundaria, el **ciberacoso y la sextorsión** son el riesgo más
probable y el deck no los toca. Redacción sobria, sin imágenes:

```markdown
<!-- _class: list -->
## Sextorsión: cómo se hace y qué hacer

- Te escriben con una contraseña vieja o una foto tuya para asustarte.
- **No pagues**: pagar no detiene la extorsión, la confirma.
- Guarda pruebas, no reenvíes nada y denuncia.
```

---

## 7. Plan sugerido

**Fase 1 (mínimo, ~50 min de trabajo, 6 diapositivas):**
datos DBIR + Change Healthcare + Arup + infostealers + montadeudas + "lo que sí funciona".

**Fase 2 (completo, +6 diapositivas):**
MOVEit/XZ, passkeys, phishing 2.0, ciberacoso, y los ajustes de la tabla del punto 5.

Esto llevaría el deck de **77 a ~89 diapositivas**. Si es demasiado para una
sesión de clase, la Fase 1 sola ya actualiza el mensaje.

---

## 8. Necesito decidir contigo

1. **¿Implemento la Fase 1, la Fase 2, o solo te dejo el texto?**
2. Los casos nuevos **no tienen imagen** (son de 2023-2026 y no están en el
   repositorio original). Opciones: (a) diapositivas solo de texto con el estilo
   `list`; (b) genero una ilustración/diagrama simple por caso; (c) busco
   imágenes con licencia libre y las cito.
3. ¿Mantengo las diapositivas "clásicas" (Stuxnet, RubberDucky) como historia
   o las retiro?

---

## Fuentes

- Verizon, *2026 Data Breach Investigations Report* — <https://www.verizon.com/business/resources/reports/dbir/>
- IBM, *Cost of a Data Breach Report 2026* — <https://www.ibm.com/reports/data-breach>
- IBM, *Change Healthcare revela un pago de ransomware de 22 millones de dólares* — <https://www.ibm.com/mx-es/think/news/change-healthcare-22-million-ransomware-payment>
- ThaiCERT, *UnitedHealth reports 190 million people affected* — <https://www.thaicert.or.th/en/2025/01/28/unitedhealth-reports-190-million-people-affected-by-massive-data-breach-in-2024/>
- IDEMIA, *Anatomy of the Arup scam* — <https://www.idemia.com/insights/anatomy-256-million-arup-scam-everyone-recognized-faces-no-one-verified-them>
- Excélsior, *Cuidado con los montadeudas: mil 73 apps de préstamo ilegal en México* (09/10/2025) — <https://www.excelsior.com.mx/nacional/cuidado-con-los-montadeudas/1744791>
- El Imparcial, *Condusef advierte sobre mensajes falsos de multas y paquetes* — <https://www.elimparcial.com/dinero/2026/08/24/condusef-advierte-sobre-el-envio-masivo-de-mensajes-falsos-de-multas-y-paquetes-disenado-para-defraudar-a-trabajadores-de-30-a-50-anos/>
- FIDO Alliance, *Passkeys enabling access to 15 billion online accounts* — <https://fidoalliance.org/biometric-update-passkeys-build-momentum-enabling-access-to-15-billion-online-accounts/>
- NIST NVD, *CVE-2024-3094 (XZ Utils)* — <https://nvd.nist.gov/vuln/detail/CVE-2024-3094>
- BankInfoSecurity, *CMS now says 3.1 million affected by MOVEit* — <https://www.bankinfosecurity.net/cms-now-says-31-million-affected-by-moveit-hack-a-26375>
- MSSP Alert, *Infostealers' latest targets* — <https://www.msspalert.com/perspective/hackers-are-gaming-the-system-new-study-shows-infostealers-latest-targets>
