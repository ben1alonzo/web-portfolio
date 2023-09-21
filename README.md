# Welcome to my website
After years of web dev side projects for businesses, individual clients, friends and family, I am excited to have my own platform where I can showcase my passions, skills, and creativity.


### React + Vite template
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Bug Log
<ins>ONGOING</ins>
- Minor runtime issues with 3D object rendering
- Lighting needs work; spotLight not affecting the object at all and dimensionality of the card is not always apparent.

<ins>FIXED</ins>
- Components imports are not recognized. *Updated components folder location and used "./components" within the import*
- Tailwindcss styling not being applied. *Basic Vite issue; Reinstalled tailwindcss with postcss config and autoprefixer included*
