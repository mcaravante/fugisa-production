# Fugisa - Web App

Aplicación web moderna para Fugisa (Fundiciones Giacobbe S.A.), empresa especializada en fundición de metales no ferrosos.

## Tecnologías

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **React** - Biblioteca de UI

## Características

- ✅ Diseño responsive y moderno
- ✅ Multiidioma (Español, Inglés, Portugués)
- ✅ SEO optimizado (Open Graph, Schema.org, Sitemap)
- ✅ Optimización de imágenes con Next.js Image
- ✅ Navegación suave entre secciones
- ✅ Formulario de contacto
- ✅ Integración de WhatsApp
- ✅ Integración del logo oficial de Fugisa

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Construcción

```bash
npm run build
npm start
```

## Probar Build de Producción Localmente

Antes de desplegar a Vercel, puedes probar el build de producción localmente:

### 1. Crear archivo de variables de entorno

```bash
cp .env.local.example .env.local
```

Edita `.env.local` y configura:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Construir y probar

```bash
# Opción 1: Build y start por separado
npm run build
npm start

# Opción 2: Build y start en un comando
npm run preview
```

Esto iniciará el servidor en modo producción en `http://localhost:3000`.

### 3. Verificar

- ✅ El sitio carga correctamente
- ✅ Todas las imágenes se muestran
- ✅ El selector de idioma funciona
- ✅ Los enlaces de navegación funcionan
- ✅ El formulario de contacto funciona
- ✅ El botón de WhatsApp funciona
- ✅ No hay errores en la consola del navegador
- ✅ No hay errores en la terminal

### 4. Verificar SEO

Abre las herramientas de desarrollador y verifica:
- `<head>` contiene todas las meta tags
- Schema.org JSON-LD está presente
- Open Graph tags están presentes
- Sitemap accesible en `/sitemap.xml`
- Robots.txt accesible en `/robots.txt`

### 5. Verificar en diferentes dispositivos

Usa las herramientas de desarrollador para probar:
- Mobile (375px, 768px)
- Tablet (1024px)
- Desktop (1920px)

## Deployment en Vercel

### Configuración Inicial

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js y configurará el proyecto

### Variables de Entorno

Configura las siguientes variables de entorno en el dashboard de Vercel:

```
NEXT_PUBLIC_SITE_URL=https://www.fugisa.com.ar
NEXT_PUBLIC_PRODUCTION_DOMAIN=www.fugisa.com.ar
NEXT_PUBLIC_ALLOW_INDEXING=true
```

**Variables importantes:**

- `NEXT_PUBLIC_SITE_URL`: URL completa del sitio (requerida para producción)
- `NEXT_PUBLIC_PRODUCTION_DOMAIN`: Dominio productivo (por defecto: `www.fugisa.com.ar`)
- `NEXT_PUBLIC_ALLOW_INDEXING`: Control manual de indexación
  - `true`: Permitir indexación (solo en dominio productivo)
  - `false`: Bloquear indexación (útil para staging/preview)
  - Sin configurar: Solo indexa si el dominio coincide con `NEXT_PUBLIC_PRODUCTION_DOMAIN`

**Nota:** Si no configuras `NEXT_PUBLIC_SITE_URL`, Vercel usará automáticamente `VERCEL_URL` para generar las URLs.

**⚠️ Prevención de Indexación en Dominios Temporales:**

Por defecto, el sitio **NO será indexado** si está en un dominio temporal (como `*.vercel.app`). Solo se indexará cuando:
- El dominio coincida con `NEXT_PUBLIC_PRODUCTION_DOMAIN`, O
- `NEXT_PUBLIC_ALLOW_INDEXING=true` esté configurado explícitamente

Esto previene problemas de contenido duplicado durante la migración.

### Dominio Personalizado

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado (ej: `www.fugisa.com.ar`)
4. Sigue las instrucciones para configurar los DNS

### Build y Deploy

Vercel ejecutará automáticamente:
- `npm run build` durante el deployment
- Optimización automática de imágenes
- Generación de sitemap y robots.txt

## Estructura del Proyecto

```
fugisa/
├── app/
│   ├── layout.tsx      # Layout principal con metadata SEO
│   ├── page.tsx        # Página de inicio
│   ├── sitemap.ts      # Sitemap dinámico
│   └── globals.css     # Estilos globales
├── components/
│   ├── Header.tsx      # Encabezado con navegación y selector de idioma
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sección sobre la empresa
│   ├── Services.tsx    # Sección de servicios
│   ├── Products.tsx    # Sección de productos
│   ├── Brass.tsx       # Información sobre el latón
│   ├── Map.tsx         # Mapa de ubicación
│   ├── Contact.tsx     # Sección de contacto
│   ├── Footer.tsx       # Pie de página
│   ├── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   ├── BackToTop.tsx   # Botón para volver arriba
│   ├── StructuredData.tsx  # Schema.org JSON-LD
│   └── LanguageUpdater.tsx # Actualizador de idioma HTML
├── contexts/
│   └── LanguageContext.tsx  # Contexto de idioma
├── lib/
│   └── translations.ts     # Traducciones multiidioma
├── public/
│   ├── images/         # Imágenes estáticas
│   └── robots.txt      # Configuración para crawlers
└── next.config.js      # Configuración de Next.js
```

## SEO

El sitio incluye:

- ✅ Metadata completa (title, description, keywords)
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org structured data (Organization, LocalBusiness, Product)
- ✅ Sitemap dinámico con alternativas de idioma
- ✅ robots.txt configurado
- ✅ URLs canónicas
- ✅ Hreflang para multiidioma

## Optimizaciones

- ✅ Imágenes optimizadas con Next.js Image
- ✅ Compresión automática
- ✅ Minificación de código
- ✅ Lazy loading de componentes
- ✅ React Strict Mode habilitado

## Notas de Deployment

- El sitemap se genera automáticamente en `/sitemap.xml`
- Los robots.txt están en `/public/robots.txt`
- Las variables de entorno se configuran en el dashboard de Vercel
- Vercel detecta automáticamente Next.js y optimiza el build
