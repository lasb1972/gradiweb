1) Se solicito la informacion de la API publica con exito
2) Se realizo la maquetacion de una ficha de producto
segun los datos obtenidos de la API  (nombre, precio, color, talla, descripcion, galeria de imagenes, variantes del producto)
3) Se realizo un carusel animado basico con las imagenes obtenidas de la API
4) Se realizo el diseño responsive
5) La seleccion de la variante del producto se debe realizar segun los siguintes pasos:

7.1) Se hace click en la opcion "Inicar Sesion" (parte superior de la pagina)

5.2) Se debe ingresar la direcion de correo y contraseña siguiente (datos de prueba):
	       Correo electronico: lasb72@hotmail.com
		   Contraseña: 1
		   
5.3)  Al ingresa el usuario y la contraseña incorrectamente el sistema indicara con un mensaje de alerta de usuario no registrado (para el ejecicio estoy simulando           que se ha hecho un llamado a una base de datos que me ha retornado la tabla de usuarios registrados en el sistema)

5.4)    Se muestra la pagina donde el usuario debe seleccionar Color del producto, la talla haciendo click sobre una de las variantes de talla de calzado                       (7,7.5,8,8.5,9,9.5,10,10.5,11,11.5). Una vez hecho click sobre una de las variantes, este valor se reflejara en el recuadro en amarillo al lado del item               talla.

5.5)  Sedebe indicar la cantidad de unidades que se desea comprar haciendo click en el boton mas(+) o menos(-) en el caso que se desee reducir la cantidad de                 unidades solicitadas. Esta accion ira generando un total de precio a pagar.

5.6)  Por ultimo se debe hacer click en el boton: "Agregar al carrito". Esto abrira un modal donde se mostraran todos los datos de la variante seleccionada. Esta             data viene de la API que acceso desde la aplicacion.

5.7) El usuario podras ver mediante el carrusel las diversas imagenes traidas de la API mediante el boton "Sigiente" y "Anterior".	
