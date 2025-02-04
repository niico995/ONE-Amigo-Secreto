# ONE-Amigo-Secreto


Descripción

Este programa permite ingresar una lista de nombres de amigos y luego seleccionar aleatoriamente a uno de ellos como "amigo secreto".

⭕Funcionalidades 

*️⃣Permite agregar nombres a una lista de amigos.

*️⃣Muestra en pantalla los amigos agregados.

*️⃣Sortea aleatoriamente un amigo de la lista.

*️⃣Muestra el nombre del amigo seleccionado.


Cómo usar 🖥️

1️⃣Ingresa el nombre de un amigo en el campo de entrada.

2️⃣Presiona el botón "Añadir" para añadirlo a la lista.

3️⃣Cuando hayas agregado amigos, presiona "Sortear Amigo".

4️⃣Se mostrará en pantalla el nombre del amigo seleccionado al azar.


Estructura del Código 🏗️

⭕Variables principales:

*️⃣friends: Array donde se almacenan los nombres ingresados.

*️⃣friendName: Referencia al campo de entrada del usuario.

*️⃣result: Elemento HTML donde se muestra el amigo seleccionado.

*️⃣friendList: Contenedor donde se listan los amigos agregados.



⭕Funciones:

*️⃣agregarAmigo()

  Verifica que el usuario ingrese un nombre válido.

  Agrega el nombre al array friends.

  Muestra el nombre agregado en la lista de amigos.

*️⃣sortearAmigo()

  Verifica que haya al menos un amigo en la lista.

  Si hay solo un amigo, muestra un mensaje especial.

  Si hay varios amigos, selecciona uno al azar y lo muestra en pantalla.
