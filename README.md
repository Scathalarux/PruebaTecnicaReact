# Prueba técnica React - Midudev

Proyecto de React realizado para la consecución de pasos indicada en una prueba técnica aportada en el canal de Midudev ([vídeo](https://www.youtube.com/watch?v=XYpadB4VadY&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=3)).


## Pasos a realizar para la configuración base
1. Creación del proyecto e instalación de dependencias

- `npm create vite@latest (Framework: Vanilla, Variant: JS)`
- `npm install @vitejs/plugin-react -E`
- `npm install react react-dom -E`


2. Configuración de *vite.config.js*
```
    import {defineConfig} from 'vite';
    import react from '@vitejs/plugin-react';;

    export default defineConfig({
        plugins: [react()]
    });
```

3. Configuración de *main.js*
```
    import {createRoot} from 'react-dom/client'

    const root = createRoot(document.getElementById('app'));

    root.render(<h1>Hola mundo</h1>);
```

4. Activación de *JSX*
- Cambio en el nombre de *main.js* por *main.jsx*
- Cambio en el punto de entrada de *index.html*
> <script type="module" src="/src/main.jsx"></script>

5. Asegurarnos de que tenemos los datos mínimos en *package.json*
```
    {
      "name": "prueba-tecnica",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
      "dependencies": {
        "@vitejs/plugin-react": "5.1.1",
        "react": "19.2.0",
        "react-dom": "19.2.0"
      }
    }
```

---

 ⚠️ ***No olvidar*** 👀 
* Mucha atención a la ubicación en la que estamos
* Recomendable hacer uso de ESLint

---

## Datos de la prueba técnica
#### Prueba técnica para Juniors y Trainees de React en Live Coding

1. APIs:
- Facts Random: https://catfact.ninja/fact
- Imagen Random: https://cataas.com/cat/says/hello

2. Enunciado
> Recupera un hecho aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API

3. Tareas
- Recuperar un hecho aleatorio de gatos de Facts Random
- Recuperar la primera palabra del hecho
- Mostrar una imagen de un gato de Imagen Random