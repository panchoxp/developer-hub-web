# Developer Hub

### Portfolio personal — Francisco Sucuy

Portfolio personal desarrollado con **Angular y TypeScript** como espacio para presentar mi perfil profesional, conocimientos, proyectos y evolución como desarrollador de software.

El proyecto está diseñado no solo como una página de presentación, sino también como un proyecto práctico para aplicar conceptos de arquitectura, desarrollo frontend, reutilización de componentes, navegación y organización de código.

---

## 👨‍💻 Sobre mí

Soy **Francisco Sucuy**, Tecnólogo en Programación de Ecuador y desarrollador de software recién graduado.

Me apasiona la resolución de problemas y la construcción de aplicaciones web, APIs y soluciones digitales robustas.

Mi stack técnico incluye:

- Java
- Python
- JavaScript
- HTML
- CSS
- Bases de datos
- Soporte técnico

Actualmente continúo ampliando mis conocimientos hacia:

- Angular
- TypeScript
- Spring Boot
- PostgreSQL

Busco integrarme a proyectos reales donde pueda transformar el conocimiento académico en experiencia práctica, aportar al equipo y continuar creciendo profesionalmente.

---

## 🚀 Sobre el proyecto

**Developer Hub** es un portfolio personal desarrollado para presentar mi perfil profesional, conocimientos y proyectos de desarrollo.

### Objetivos

- Construir un portfolio moderno y funcional.
- Aplicar conocimientos de desarrollo frontend en un proyecto real.
- Implementar una arquitectura organizada y mantenible.
- Utilizar componentes reutilizables.
- Gestionar proyectos mediante modelos y servicios.
- Implementar navegación entre diferentes vistas.
- Preparar la aplicación para futuras integraciones backend.

El objetivo a largo plazo es evolucionar el proyecto desde un portfolio principalmente frontend hacia una aplicación que integre una API REST, persistencia de datos y nuevas funcionalidades.

---

## ✨ Características

Actualmente el proyecto incluye:

- Diseño minimalista y responsive.
- Navegación lateral interactiva.
- Detección de la sección activa durante el scroll.
- Scroll suave entre las diferentes secciones.
- Sección de presentación personal.
- Sección de tecnologías.
- Showcase de proyectos.
- Componentes reutilizables.
- Páginas individuales para los proyectos.
- Routing dinámico mediante Angular.
- Información detallada de cada proyecto.
- Footer con información de contacto.
- Copia del correo electrónico directamente desde el portfolio.

---

## 🛠️ Tecnologías

### Frontend

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap

### Herramientas

- Git
- GitHub

### Tecnologías planificadas

- Spring Boot
- PostgreSQL
- REST API

---

## 🏗️ Arquitectura

El proyecto utiliza una estructura organizada por responsabilidades:

```text
src/app/
│
├── core/
│   ├── data/
│   │   └── project.data.ts
│   │
│   ├── models/
│   │   ├── project.ts
│   │   └── project-detail.ts
│   │
│   └── services/
│       └── project.service.ts
│
├── shared/
│   └── components/
│       ├── section-heading/
│       ├── glass-card/
│       └── project-card/
│
├── layout/
│   ├── navbar/
│   └── footer/
│
└── features/
    │
    ├── home/
    │   ├── hero/
    │   ├── about/
    │   ├── skills/
    │   ├── projects-preview/
    │   ├── experience/
    │   └── contact/
    │
    └── projects/
        ├── project-list/
        └── project-detail/
```

### Core

Contiene los elementos fundamentales utilizados por diferentes partes de la aplicación.

Incluye:

- Modelos.
- Datos.
- Servicios.

### Shared

Contiene componentes reutilizables que pueden ser utilizados en diferentes funcionalidades.

Por ejemplo:

- `section-heading`
- `glass-card`
- `project-card`

### Layout

Contiene los elementos estructurales que forman parte de la interfaz general:

- Navbar
- Footer

### Features

Contiene las funcionalidades específicas de la aplicación.

Actualmente se divide principalmente en:

- `home`
- `projects`

Esta separación permite mantener las responsabilidades organizadas y facilita la incorporación de nuevas funcionalidades.

---

## 📂 Sistema de proyectos

Los proyectos se gestionan mediante modelos TypeScript y un servicio dedicado.

Cada proyecto puede contener información como:

- Nombre.
- Descripción.
- Tecnologías.
- Imagen.
- Repositorio.
- Demo.
- Objetivo.
- Arquitectura.
- Proceso de desarrollo.
- Aprendizajes.
- Estado del proyecto.

Esto permite que la información de los proyectos se gestione de manera estructurada y que los componentes puedan reutilizarse para presentar diferentes proyectos.

---

## 🔎 Proyecto destacado: Developer Hub

### ¿Qué es?

Developer Hub es el propio portfolio personal utilizado para presentar mi perfil profesional, conocimientos y proyectos de desarrollo.

### Objetivo

Construir una aplicación que no solo funcione como portfolio, sino que también permita demostrar de forma práctica conocimientos de desarrollo frontend y establecer una base para futuras integraciones backend.

### Arquitectura

La aplicación está organizada en cuatro áreas principales:

| Área | Responsabilidad |
|---|---|
| `core` | Modelos, servicios y lógica fundamental |
| `shared` | Componentes reutilizables |
| `layout` | Elementos estructurales |
| `features` | Funcionalidades específicas |

---

## 🧩 Proceso de desarrollo

El desarrollo del proyecto se ha dividido en diferentes etapas:

### 01 — Configuración inicial

Creación del proyecto Angular, configuración del entorno, Bootstrap, Git y estructura inicial de la aplicación.

### 02 — Arquitectura

Organización del proyecto mediante la separación de `core`, `shared`, `layout` y `features`.

### 03 — Frontend

Desarrollo de la interfaz principal, incluyendo:

- Navbar.
- Hero.
- Sobre mí.
- Tecnologías.
- Proyectos.
- Footer.

### 04 — Sistema de proyectos

Implementación de modelos, datos, servicios, componentes reutilizables, navegación y páginas individuales para los proyectos.

### 05 — Backend y persistencia

Etapa planificada para integrar una API REST desarrollada con Spring Boot y una base de datos PostgreSQL.

---

## 📚 Aprendizajes

Durante el desarrollo de este proyecto he trabajado principalmente en:

### Arquitectura

Separación de responsabilidades dentro de una aplicación Angular y organización de funcionalidades.

### Reutilización

Creación de componentes reutilizables para evitar duplicación y mantener una interfaz consistente.

### TypeScript

Uso de interfaces y tipos para mantener estructuras de datos claras y predecibles.

### Routing

Implementación de navegación entre diferentes vistas y rutas dinámicas para los proyectos.

### Responsive Design

Construcción de una interfaz adaptable a diferentes tamaños de pantalla.

### Git

Uso de Git y GitHub para mantener el proyecto versionado y organizado.

---

## 📌 Estado del proyecto

**Frontend — En desarrollo**

**Backend — Planificado**

**Base de datos — Planificada**

**Aplicación móvil — Planificada**

El portfolio se encuentra actualmente en desarrollo y continuará evolucionando conforme avance mi formación y experiencia profesional.

---

## 🔮 Próximos pasos

Entre las funcionalidades y mejoras planificadas se encuentran:

- Incorporar formación y certificaciones.
- Ampliar la información de los proyectos.
- Integrar una API REST con Spring Boot.
- Incorporar PostgreSQL para persistencia de datos.
- Evolucionar la arquitectura frontend/backend.
- Mejorar progresivamente la experiencia responsive.
- Añadir nuevas funcionalidades al portfolio.

---

## 💻 Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Acceder al proyecto:

```bash
cd developer-hub
```

Instalar las dependencias:

```bash
npm install
```

---

## ▶️ Ejecución

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200/
```

---

## 🌐 Demo

Portfolio:

**<URL_DEL_PORTFOLIO>**

Repositorio:

**<URL_DEL_REPOSITORIO>**

---

## 📫 Contacto

**Francisco Sucuy**  
Tecnólogo en Programación · Desarrollador de Software

- GitHub: <URL_GITHUB>
- LinkedIn: <URL_LINKEDIN>
- Email: <CORREO>

---

## 📄 Licencia

Este proyecto corresponde a mi portfolio personal.

El código puede ser consultado con fines educativos y de referencia.