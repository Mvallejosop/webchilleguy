# Chill e Guy — V2.12 · Home + Studio + Services

Esta versión reemplaza la V2 visual anterior. Sigue el mockup que compartiste:
hero «Ideas need stories», collage urbano, tipografía condensada, Challenge
con fotografía horizontal, tres servicios con números superpuestos, territorios
fotográficos, Journal compacto y CTA con detalle de chaqueta.

## Abrir en VS Code

Cierra el servidor de la versión anterior con Ctrl+C. Descomprime este ZIP y abre
la carpeta `chill-e-guy-v2.12` en una ventana nueva de VS Code. Usa Node.js 24 LTS.

```bash
npm install
npm run dev
```

Abre la URL que indique Astro, normalmente http://localhost:4321.
Si hay otro servidor abierto, podría usar otro puerto; usa la dirección de la
terminal de esta carpeta. No mezcles los archivos con los de la V2 anterior.

Para verificar la compilación:

```bash
npm run build
npm run preview
```

`npm ci` instala las versiones exactas del archivo lock. `dist/` contiene el sitio
estático listo para hosting.

## Diseño y contenido

- Componentes Astro separados para las seis secciones y el trazo chartreuse.
- Anton y Oswald incluidas localmente con sus licencias OFL.
- Imágenes locales; el sitio no solicita fuentes ni fotografías externas.
- Fotos principales recreadas con ImageGen a partir de la dirección del mockup.
  Las otras fotografías son alternativas de Unsplash. No son los archivos
  originales usados al generar la imagen de referencia.
- Home, Studio y Services siguen los mockups aprobados. Contact y los tres
  artículos Markdown conservan el contenido original.
- No hay dependencias nuevas: solo Astro, CSS y SVG para detalles gráficos.
- Navegación por teclado, enlace para saltar al contenido, responsive y foco visible.
- El círculo del Journal abre el listado completo. No es un carrusel.
- No se inventan cuentas sociales: el footer enlaza a Contact hasta definirlas.

## Modificar

`src/pages/index.astro` compone la Home. Cada bloque vive en `src/components/`.
`src/styles/global.css` contiene colores, tipografía, proporciones y breakpoints.
`public/images/` contiene imágenes reemplazables.
`src/data/services.ts` contiene la información de los tres servicios.

## Journal

Los tres artículos existentes son textos de ejemplo y se conservan sin cambios.
Agrega archivos `.md` en `src/content/journal/` con frontmatter:

```yaml
---
title: "A new story"
description: "Short introduction."
pubDate: 2026-10-04
category: Technology
readTime: "5 min read"
featured: false
---
```

Categorías: `Technology`, `Entertainment`, `Digital Culture`.
Los listados se ordenan por fecha; la Home muestra los tres más recientes.
El nombre del archivo define la URL. Contact usa el email existente mediante
`mailto:hello@chilleguy.com`; no hay backend de formularios.

## Fuentes de assets

Fotos generadas: `hero-editorial.png`, `challenge-editorial.png`, `ai-cube.png`.
Fotos de referencia de Unsplash:

- `culture.jpg`: https://images.unsplash.com/photo-1519501025264-65ba15a82390
- `concert.jpg`: https://images.unsplash.com/photo-1459749411175-04bf5292ceea
- `technology.jpg`: https://images.unsplash.com/photo-1511707171634-5f897ff02aa9
- `headphones.jpg`: https://images.unsplash.com/photo-1505740420928-5e560c06d30e
- `palms.jpg`: https://images.unsplash.com/photo-1510414842594-a61c69b5ae57
- `cinema.jpg`: https://images.unsplash.com/photo-1485846234645-a62644f84728

Fuentes: Google Fonts, licencias en `public/anton-license.txt` y
`public/oswald-license.txt`.

## Validación

Instalación y build de las ocho páginas, enlaces locales, imágenes, anclas de
servicios y conservación de Markdown comprobados. Home revisada en escritorio,
tablet y móvil. ZIP sin `node_modules/`, `.astro/` ni `dist/`.

## Ajustes heredados de Home

Los números de What We Do tienen mayor separación entre dígitos y usan
exactamente el color del fondo (`var(--bg)`). Se ubican dentro de la fotografía
para que ambos dígitos sigan siendo legibles, sin sombras ni cambio a negro.

## Studio

Nueva página `/studio/` basada en el mockup oscuro aprobado: seis bloques
numerados, fotografías amplias, titulares condensados, narrativa y CTA final.

- `src/pages/studio.astro`: textos y composición de Studio.
- `src/styles/studio.css`: estilos exclusivos de Studio; no afectan la Home.
- `src/components/studio/StudioNumber.astro`: numeración reutilizable.
- `src/components/studio/StudioFeature.astro`: bloque de foto y texto.
- `Header.astro`: variante oscura para Studio, incluyendo Home en navegación.
- Imágenes generadas para Studio en `public/images/studio-*.png`.

Las fotografías se recrearon para esta implementación; no son las imágenes
originales del mockup. Todos los textos son editables como HTML/Astro, no están
incorporados en una captura de la página.

Se integran los ajustes más recientes entregados para Home: filtros de Technology
y Digital Culture, tipografía y diagramación del CTA, descriptor del hero en dos
líneas y numeración off-white de servicios. Se preservan Contact y
los tres artículos Markdown existentes. No se agregaron dependencias.

Las imágenes que hayas sustituido manualmente en tu copia local no están en este
ZIP; puedes volver a copiarlas en `public/images/`.

## Services V2.12

La página `/services/` sigue el mockup oscuro: hero con arquitectura, tres pilares
de servicio, listas de áreas, navegación por anclas y conversación final.

- `src/pages/services.astro`: composición y CTA de Services.
- `src/data/serviceDetails.ts`: títulos, listas, imágenes y textos de los pilares.
- `src/components/services/ServicePillar.astro`: bloque reutilizable foto + texto.
- `src/styles/services.css`: responsive y composición exclusivos de Services.
- `src/styles/dark-shell.css`: navegación, botones y pie oscuro.
- `public/images/services-story.png` y `services-filmmaker.png`: imágenes
  recreadas para el proyecto. No son los archivos originales del mockup.

Los enlaces `#find-the-story`, `#make-it-visual` y `#make-people-care` siguen
funcionando desde Home y dentro de Services. El selector «Start where you need us»
lleva a cada sección; «Start a conversation» abre Contact.

Home y Studio se preservan; Journal mantiene los tres artículos Markdown.
No se agregan dependencias. Se comprobaron build, recursos locales, enlaces,
responsive y navegación activa de Services.

## Journal V2.12

Listado editorial dinámico de dos columnas (una en móvil), ordenado por fecha.
Filtros accesibles por las categorías de la colección existente; sin JavaScript
se muestran todos los artículos. Agrega un Markdown válido en
`src/content/journal/` y vuelve a compilar para publicarlo automáticamente.
No se agregaron artículos ni se cambiaron títulos, imágenes o contenido.
`src/styles/journal.css` limita los estilos a esta página.
El cierre reutiliza la fotografía arquitectónica de Studio.

## Contact

Nuevo diseño responsive basado en el mockup. El formulario valida los campos
y abre un borrador en la aplicación de correo hacia hello@chilleguy.com.
El usuario debe enviar ese correo; no existe un backend ni confirmación falsa
de envío. Sin JavaScript se usa la acción mailto del formulario.
Para recepción directa desde la web se deberá conectar un servicio de formularios.
Los enlaces sociales utilizan las URLs oficiales facilitadas por el usuario.
Se reutiliza la foto arquitectónica del proyecto.

## Sistema común V2.12

Todas las páginas usan la misma navegación, posición y logo `chill e guy`.
La barra ocupa su propio espacio y conserva contraste en páginas claras y oscuras.
`src/styles/site-system.css` centraliza la navegación y los roles tipográficos:
Anton para titulares, Arial para cuerpo y Courier New para etiquetas pequeñas,
como en Home. Las tarjetas de Journal mantienen sus títulos en Arial como Home.

## Ajustes Studio V2.12

Se retira la numeración de las secciones y los dos párrafos indicados.
«Different worlds. Same curiosity.» ocupa una sola línea.

Studio: titulares y textos de introducción y manifiesto con menor tamaño,
interlineado amplio y ancho de lectura controlado.

## Animación al navegar

`ScrollReveal.astro` aplica un fade-in de 550 ms y desplazamiento de 12 px
a bloques de texto fuera de la primera pantalla, una vez al entrar en vista.
No agrega dependencias. La navegación, hero y formulario permanecen visibles.
Sin JavaScript o con movimiento reducido, todo el contenido es visible.

## Ajustes V2.12

Se elimina el texto de apoyo de «Start where you need us» en Services.
En Studio, los títulos de los tres territorios tienen mayor separación
de las fotografías y descripciones, e interletraje más abierto.
