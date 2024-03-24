const contenedor = document.querySelector ('#contenedor');
const template = document.querySelector ('#template');
const footer = document.querySelector ('#footer');
const templateFooter = document.querySelector ('#templateFooter');
const fragment = document.createDocumentFragment ();

document.addEventListener ('click', (e) => {
    
    if (e.target.dataset.fruta === 'Frutilla 🍓') {
        crearProductoAgregar (e)
    }
    if (e.target.dataset.fruta === 'Pera 🍐') {
        crearProductoAgregar (e)
    }
    if (e.target.dataset.fruta === 'Naranja 🍊') {
        crearProductoAgregar (e)
    }
    if (e.target.matches('.list-group-item div .btn-success')) {
        btnAgregar(e);
    }
    if (e.target.matches('.list-group-item div .btn-danger')) {
        btnDisminuir(e);
    }
    
});

const btnAgregar = (e) => {
    agregarCarrito = agregarCarrito.map((item) =>{
        if(e.target.dataset.id === item.id){
            item.cantidad++;
        }
        return item;
    });
    mostrarCarrito();
};

const btnDisminuir = (e)=> {
    agregarCarrito = agregarCarrito.filter((item) =>{
        if (e.target.dataset.id === item.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                if (item.cantidad === 0) return;
                return item
            }
        }else {
            return item;
        }
    });
    mostrarCarrito();
};

const crearProductoAgregar = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.id,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }

    const position = agregarCarrito.findIndex((item) => item.titulo === producto.titulo);

    if (position === -1) {
        agregarCarrito.push (producto)
    }else {
        agregarCarrito[position].cantidad++;
    }

    mostrarCarrito ()
};

const mostrarCarrito = ()=> {
    contenedor.textContent = '';
    agregarCarrito.forEach ((item)=> {
        const clone = template.content.cloneNode (true);
        clone.querySelector ('.list-group-item .lead').textContent = item.titulo;
        clone.querySelector ('.badge').textContent = item.cantidad;
        clone.querySelector ('.lead span').textContent = item.precio * item.cantidad;

        clone.querySelector ('.btn-success').dataset.id = item.id;
        clone.querySelector ('.btn-danger').dataset.id = item.id;

        fragment.appendChild(clone);
    });

    contenedor.appendChild (fragment);
    mostrarFooter();
};
const mostrarFooter = () => {
    footer.textContent = '';

    const total = agregarCarrito.reduce ((acc, current) => {
        return acc + current.cantidad * current.precio;
    },0);
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector ('.lead span').textContent = total;

    footer.appendChild(clone);

};

let agregarCarrito = []

