Prueba tecnica de Camilo Cuevas

## 1. Decisiones técnicas clave

En este proyecyo, utilice una arquitectura basada en componentes reutilizables usando Next y TypeScript, ya que esto hace que tenga una mejor organización de mi código, una mayor escalabilidad y un tipado fuerte que reduce errores. También utilicé Tailwind como sistema de estilos porque permite mantener un diseño responsive y accesible, editando todo desde el mismo archivo del componente, ahorrandome tiempo en crear nuevos archivos como los haría usando Styled.Components o CSS puro. Además, creé un custom hook para manejar la sincronización con localStorage, manteniendo el código más limpio y fácil de leer.

## 2. Qué mejorarías si tuvieras más tiempo

Mejoraria la experiencia de usuario, siento que faltaron ciertos detalles, como aprovechar los espacios de la página, más animaciones o retroalimentación de las acciones que realiza el usuario, también agregar mayor información de las peliculas como: director, actores, duración, etc. Y poder crear un filtro de peliculas más robusto. Ademas con más tiempo hubiera implementado por completo la edición de las peliculas, ya que tuve un acercamiento, pero al ver que no lo iba a tener a tiempo, preferi darle prioridad a otras cosas que aún no habia hecho, como el diseño de la página.

## 3. Sigue los siguientes pasos para ejecutar el proyecto en tu computador

1. Primero asegurate de que tienes npm y git instalado.
   Para instalarlos te vas a los siguientes links:

   https://nodejs.org/es

   https://git-scm.com/

2. Clonar el repositorio

   Puedes clonar el repositorio mediante el comando: git clone https://github.com/camilo520/movies-app.git o pulsando el botón verde de "<> Code". Se te desplegara un menu al que puede escoger si quieres clonar el repositorio usando GitHub Desktop o descargar el archivo .zip.

3. Cuando tengas el repositorio clonado o descargado, vas a ir al archivo y abriras la terminal del sistema (cmd) e ingresaras el siguiente comando: "npm install". Se te descargaran los archivos necesario para ejecutar la aplicación.

4. Cuando se instalen todos los archivos ingresaras ahora el siguiente comando: "npm run dev". Cuando lo hagas en el mismo terminal se te mostrara en que puerto se te ha desplegado la aplicación, por defecto se ejecuta aquí: http://localhost:3000. Vas a ese puerto y encontraras la aplicación ejecutandose.

## 4. Pregunta de reflexión

Una de las limitaciones que encontré fue al trabajar con el componente Image de next/image, ya que requiere configuración especial cuando se cargan imágenes desde object URLs. Me estaba dando varios problemas para que las imágenes se mantuvieran con un tamaño uniforme sin dañar el contenedor de la card.
También otra limitacion al trabajar con Next.js fue la necesidad de manejar localStorage, ya que su uso está limitado al entorno del navegador. Esto obligó a encapsular la lógica dentro de un hook personalizado con useEffect y al hacerlo me dio un problema de "Hydration", que lo resolví agregandole una validación para que solo se ejecute del lado del cliente.

Me resultó muy útil separar el proyecto por componentes. Por ejemplo, tengo el componente MovieForm dedicado al manejo y creación del formulario, un componente MovieList, que renderiza todos los componentes hijos y un componente MovieItem que solo se encarga de representar una película. Esto me permitió mantener el código limpio, reutilizable y fácil de escalar.
También usé manejo controlado del estado y props bien tipadas con TypeScript, lo cual fue clave para mantener el control del flujo de datos en la aplicación y evitar errores.

## 5. Herramientas externas

Para este proyecto utilice la herramienta de ChatGPT en la función de sortedMovies en page.tsx para poder ordenar las peliculas y también use la misma herramienta para resolver el error de "Hydration" del useLocalStorage.
