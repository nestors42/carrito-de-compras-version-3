/*
antes de todo declarar funciones de las etiquetas que voy a usar

paso 1: delegacion de eventos a botones
es decir le voy a dar evento a todo el dom
y con el matches le estoy diciendo que todo lo que tenga clase
btn-primary me devuelva true, en caso contrario devuelve false

paso- 2: quiero que al hacer click crear el producto 
entonces en este caso creé la funcion agregar carrito
dentro de esta funcion tengo que hacer la logica para crear
los productos para despues agregarlos al carrito.
    crearía:
        crear producto
            const producto = {
                nombre:
                precio: no olvidear de poner parseInt para convertir texto a numeros.
            } generalmente siempre son objetos
        agregar producto
        mostrar producto

paso 3: creo un array que será donde se agreguen esos productos.

paso 4: créo una funcion
agregar el producto que se creó al  const carrito []

paso 6: en la funcion mostrar carrito debo limpiar el contenedor
para que al hacer click no se repita los productos.
*/