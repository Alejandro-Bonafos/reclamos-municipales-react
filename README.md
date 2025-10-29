# Voz Ciudadana – Frontend
Voz Ciudadana, una pagina React desarrollada con Vite que permite a los vecinos registrarse, iniciar sesión, cargar reclamos municipales sobre residuos, responder una encuesta y hacer seguimiento de sus reclamos.

## Tecnologías utilizadas
React

Vite

React Router DOM

Axios

Bootstrap

React Bootstrap

React Icons


## Scripts disponibles
`npm run dev`      # Inicia el servidor de desarrollo en http://localhost:5173
`npm run build`     # Compila la aplicación para producción
`npm run preview`   # Previsualiza la versión de producción localmente


##  Requisitos técnicos
- Node.js 

- npm 

##  Instalación y ejecución

### Clonar el repositorio
`git clone https://github.com/mariapaulaveram/reclamos-front.git`

### Ir al directorio del frontend
`cd reclamos-front`

### Instalar dependencias
`npm install`

### Ejecutar en modo desarrollo
`npm run dev`



## Conexión con el backend
Las solicitudes HTTP se realizan con Axios. Ejemplo de uso:

```jsx
const response = await axios.post('http://localhost:3000/reclamos', datos);
```

- Asegurate de que el backend tenga habilitado CORS para permitir solicitudes desde http://localhost:5173.


## Estructura del proyecto
```
src/
├── componentes/
│   ├── layouts/
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   └── Footer.jsx
│   ├── AcordeonComoFunciona.jsx
│   ├── CarouselVecinos.jsx
│   ├── Contacto.jsx
│   ├── Encuesta.jsx
│   ├── ListaUtil.jsx
│   ├── LoginForm.jsx
│   ├── NuevoReclamoForm.jsx
│   ├── ReclamosVecino.jsx
│   └── RegistroForm.jsx
├── hooks/
│   └── useScrollToHash.js
├── paginas/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Registro.jsx
│   ├── VecinosLogueados.jsx
│   ├── ReclamosDelVecino.jsx
│   └── NuevoReclamo.jsx
├── App.jsx
└── main.jsx 
```


## Hooks personalizados
useScrollToHash.js: Permite hacer scroll automático a secciones específicas de la página cuando se accede con un hash en la URL. Ideal para navegación interna.

## Navegación de rutas
La aplicación utiliza React Router DOM para manejar las rutas:
```jsx
<Route index element={<Home />} />
<Route path="login" element={<Login />} />
<Route path="registro" element={<Registro />} />
<Route path="logueados" element={<VecinosLogueados />} />
<Route path="reclamos" element={<ReclamosDelVecino />} />
<Route path="nuevo-reclamo" element={<NuevoReclamo />} />
<Route path="recuperar" element={<RecuperarContraseña />} />
<Route path="restablecer/:token" element={<RestablecerContraseña />} />

```


## Recuperación de contraseña
La aplicación permite a los vecinos recuperar su contraseña mediante un formulario accesible desde la ruta:
```jsx
<Route path="recuperar" element={<RecuperarContraseña />} />
<Route path="restablecer/:token" element={<RestablecerContraseña />} />
```

- El componente RecuperarContraseña.jsx solicita el correo del vecino y envía una solicitud al backend.

- Si el correo es válido, se envía un enlace de restablecimiento.

- El componente RestablecerContraseña.jsx permite establecer una nueva contraseña usando el token recibido. El token recibido en el enlace se utiliza para validar la solicitud y permitir el cambio de contraseña.

- El correo se envía desde vozciudadana.municipio@gmail.com.

- La nueva contraseña se envía al backend y se guarda encriptada con md5.


## Seguimiento de reclamos y notificación visual
La aplicación permite a los vecinos hacer seguimiento del estado de sus reclamos y visualizar cualquier comentario agregado por el municipio.


### Componentes involucrados

- **ReclamosDelVecino.jsx**: página principal asociada a la ruta `/reclamos`. Presenta el título, instrucciones y contiene el componente de listado.
- **ReclamosVecino.jsx**: componente que realiza la consulta al backend y muestra la tabla con los reclamos del vecino logueado.


### Flujo de actualización
Cuando el municipal modifica un reclamo desde el panel de administración, el backend:

Actualiza el estado y/o comentario.

Envía un correo al vecino notificando el cambio.

Guarda una alerta en sesión para que el municipal vea la confirmación en pantalla.

### Visualización en el frontend
El vecino accede a la ruta /reclamos, que renderiza ReclamosDelVecino.jsx.

Este incluye el componente ReclamosVecino, que realiza una solicitud GET al backend:

```js
    axios.get('http://localhost:3000/api/vecinos/reclamos', {params: { vecino_id }});
```

El vecino_id se obtiene desde localStorage, guardado previamente en el login.

La respuesta incluye todos los reclamos del vecino, con los campos actualizados.

Se renderiza una tabla con:

- Tipo de residuos  
- Descripción  
- Dirección  
- Fecha del reclamo  
- Imagen (si fue cargada)  
- Estado actual  
- Comentario del municipio


Si no se encuentra el vecino_id, se muestra un mensaje de error.

Si no hay reclamos, se informa al usuario.

Si hay reclamos, se muestran en una tabla con estilos personalizados
