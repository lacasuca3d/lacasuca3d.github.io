# Portfolio La Casuca 3D

Web estática responsive para portfolio de impresión 3D personalizada. Está preparada para GitHub Pages y usa ilustraciones CSS decorativas en lugar de fingir que son fotos reales de tus productos.

## Archivos
- `index.html`: contenido y secciones de la página.
- `styles.css`: colores, diseño responsive y las ilustraciones decorativas.
- `script.js`: enlaces de WhatsApp y menú móvil.

## Antes de publicar
1. Abre `script.js` y confirma el número en `WHATSAPP_NUMBER`. Está puesto como `34676469819` según los datos facilitados.
2. Cambia el nombre de marca si quieres usar otra escritura.
3. Sustituye las tarjetas de ejemplo por fotos reales cuando las tengas. Busca `FOTO DE TU PIEZA` en `index.html`; puedes reemplazar cada bloque `.project-image` por una imagen, por ejemplo:
   `<div class="project-image"><img src="assets/mi-pieza.jpg" alt="Descripción de tu pieza impresa en 3D"></div>`
   Añade también en `styles.css`:
   `.project-image img { width:100%; height:100%; object-fit:cover; display:block; }`
4. Revisa los textos, porque los ejemplos de categorías son orientativos.

## Publicar gratis en GitHub Pages
1. Crea o inicia sesión en https://github.com/
2. Crea un repositorio público llamado `TUUSUARIO.github.io` (sustituye TUUSUARIO por tu usuario exacto de GitHub).
3. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets` (si la usas) a la raíz del repositorio.
4. En el repositorio, ve a **Settings → Pages** y activa la publicación desde la rama `main`, carpeta `/ (root)`.
5. Espera a que GitHub publique la web en `https://TUUSUARIO.github.io`.

## Conectar lacasuca3d.es comprado en Wix
Hazlo después de comprobar que la web de GitHub Pages funciona. Los nombres exactos de los menús de Wix pueden variar.

1. En el repositorio, entra en **Settings → Pages → Custom domain**.
2. Introduce `lacasuca3d.es` y guarda.
3. En Wix, abre la administración de dominios y localiza la gestión de registros DNS de `lacasuca3d.es`.
4. Configura los registros DNS del dominio raíz para GitHub Pages:
   - A `185.199.108.153`
   - A `185.199.109.153`
   - A `185.199.110.153`
   - A `185.199.111.153`
5. Para `www`, crea un CNAME que apunte a `TUUSUARIO.github.io` (sustituye por tu usuario real).
6. No borres registros MX/TXT de correo ni otros registros que necesites. Si ya existen registros A/AAAA/CNAME que contradicen los anteriores, revisa antes de sustituirlos.
7. La propagación DNS puede tardar; después de verificar el dominio en GitHub Pages, activa **Enforce HTTPS** cuando aparezca disponible.
8. Considera configurar una redirección entre el dominio raíz y `www` si lo deseas; elige una versión canónica y comprueba ambas.

Documentación oficial:
- GitHub Pages: https://docs.github.com/en/pages
- Dominios personalizados: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- DNS en Wix: https://support.wix.com/en/article/managing-dns-records-in-your-wix-account

## Costes
GitHub Pages puede alojar gratis una web estática dentro de sus límites y condiciones. El dominio sigue teniendo su renovación normal con Wix. No se incluye tienda online, cobro, base de datos ni formulario backend; las solicitudes se hacen por WhatsApp.
