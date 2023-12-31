# Trabajo Práctico Integrador - Comisión 112 UTN Argentina Programa 4.0
# To-Do List App

Una sencilla aplicación web de lista de tareas desarrollada en React con Vite, diseñada para gestionar y organizar tus tareas diarias. La aplicación utiliza componentes funcionales, el hook `useState` para el manejo del estado, el hook `useEffect` para realizar efectos secundarios, y eventos para interactuar con el usuario.

## Características

- **Componentes Funcionales:**
  - `TaskList`: Componente que muestra la lista de tareas.
  - `TaskItem`: Componente que representa un elemento individual en la lista de tareas.
  - `TaskForm`: Componente que permite al usuario agregar nuevas tareas.

- **Hooks Utilizados:**
  - `useState`: Utilizado para gestionar el estado de la lista de tareas.
  - `useEffect`: Implementado para realizar efectos secundarios, como cargar datos iniciales.

- **Interacción con el Usuario:**
  - **Componente de Lista (`TaskList`):**
    - Marcar tareas como completadas.
    - Eliminar tareas de la lista.

  - **Componente de Formulario (`TaskForm`):**
    - Agregar nuevas tareas a la lista.

## Requerimientos del Sistema

- Node.js (versión mínima 14.0.0)
- npm (versión mínima 6.0.0)

## Uso de Tailwind CSS

Esta aplicación utiliza Tailwind CSS para el estilo. Tailwind CSS es una biblioteca de utilidades de CSS que permite construir diseños personalizados sin salir de tu HTML.

## Uso de React Router

Esta aplicación utiliza React Router para la navegación. React Router es una biblioteca de enrutamiento para React. Te permite definir varias rutas para tu aplicación y renderizar diferentes componentes en función de la ruta actual.

## Persistencia de datos con localStorage

Esta aplicación utiliza localStorage para persistir el estado de las tareas. localStorage es una API web que permite guardar datos en el navegador del usuario. Los datos guardados en localStorage persisten incluso después de que el usuario cierra y vuelve a abrir el navegador.

## Capturas de Pantalla

![Captura de Pantalla 1](./screenshot1.png)
*Pantalla de Bienvenida.*

![Captura de Pantalla 2](./screenshot2.png)
*Pantalla de Tareas.*

## Deploy Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/5a180dd9-3a6c-44c2-8807-92fa74500ef3/deploy-status)] 
Aquí se encuentra el deploy en Netlify [link](https://tp-utn.netlify.app/app)


## Instalación

1. Clona este repositorio: `git clone https://github.com/tuusuario/tu-proyecto.git`
2. Navega al directorio del proyecto: `cd tu-proyecto`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`

## Contribuir

¡Siéntete libre de contribuir! Abre un problema o envía un pull request para sugerencias, correcciones de errores o nuevas características.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---
**Nota:** Este proyecto es parte de un ejercicio práctico y puede no estar destinado a su uso en entornos de producción.

