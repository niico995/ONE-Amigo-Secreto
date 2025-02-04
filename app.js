// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Lista para ir guardando el grupo de amigos
const friends = []

//Obtenemos el valor del nombre ingresado
const friendName = document.getElementById('amigo')


const result = document.getElementById('resultado')
const friendList = document.getElementById('listaAmigos')

function agregarAmigo() {

    if(friendName.value.trim() !== "" ){
        friends.push(friendName.value)
        friendName.value = ' '
        friendList.innerHTML += `
                <h3>${friends[friends.length -1]}</h3>
            `
    } else {
        alert('Por favor ingrese un nombre valido')
    }

    console.log(friends);
}


function sortearAmigo() {
    if (friends.length == 0 ) {
        alert('Parece que no has agregado a ningun amigo 😢')
    }else if(friends.length == 1 ){
        alert(`Es bueno que al menos tengas un amigo verdadero como ${friends[0]}`)
    }else {
        let maxRange = friends.length
        let randomFriend = Math.floor(Math.random() * maxRange)
        let friendSelected = friends[randomFriend]

        result.innerHTML = `
            <h2>El amigo secreto sorteado es: ${friendSelected}</h2>
        `
    }


}