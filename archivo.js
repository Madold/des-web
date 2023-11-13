var peliculas = [
    {
        id: 1,
        titulo: "La probabilidad estadistica del amor a primera vista",
        imagenPrincipal: "https://infoliteraria.com/wp-content/uploads/2022/05/la-probabilidad-estaditica.jpg.webp",
        descripcion: "Hadley y Oliver comienzan a enamorarse lentamente en un vuelo de Nueva York a Londres, pero se ven obligados a separarse en la aduana.",
        rating: [
            { src: "img/star.png", height: undefined },
            { src: "img/star.png", height: 24 },
            { src: "img/star.png", height: 24 },
            {
                src: "img/star.png", height: 24
            },
            { src: "img/star.png", height: 24 }
        ],

    },
    {
        id: 2,
        titulo: "Star Wars: El ascenso de Skywalker",
        imagenPrincipal: "https://hips.hearstapps.com/hmg-prod/images/poster-star-wars-el-ascenso-de-skywalker-1571727372.jpg",
        descripcion: "La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.",
        rating: [
            { src: "img/star.png", height: undefined },
            { src: "img/star.png", height: 24 },
            { src: "img/star.png", height: 24 },
            {
                src: "img/star.png", height: 24
            },
            { src: "img/star.png", height: 24 }
        ],

    },
    {
        id: 3,
        titulo: "No Countries for Old Men",
        imagenPrincipal: "https://i.ebayimg.com/images/g/Q9wAAOSwUEVYCrhg/s-l1200.webp",
        descripcion: "Un cazador de antílopes encuentra una escena de crimen en el desierto de Texas, con dos millones de dólares y varios cadáveres. El cazador decide quedarse con el dinero, pero pronto se da cuenta de que está siendo perseguido por un asesino psicópata.",
        rating: [
            { src: "img/star.png", height: undefined },
            { src: "img/star.png", height: 24 },

            {
                src: "img/star.png", height: 24
            },
            { src: "img/star.png", height: 24 }
        ],

    }
];

var $lista_catalogo = document.querySelector("#lista_catalogo")

peliculas.forEach(pelicula => {
    $lista_catalogo.appendChild(crearPeliculas(pelicula))
})

function crearPeliculas(pelicula) {
    let $pelicula = document.createElement("li")
    $pelicula.className = "movie_item"

    let $imagen = document.createElement("img")
    $imagen.src = pelicula.imagenPrincipal
    $imagen.alt = pelicula.titulo
    $pelicula.appendChild($imagen)

    let $titulo = document.createElement("h3")
    $titulo.textContent = pelicula.titulo
    $pelicula.appendChild($titulo)

    let $descripcion = document.createElement("p")
    $descripcion.textContent = pelicula.descripcion
    $pelicula.appendChild($descripcion)

    let $rating = document.createElement("div")
    $rating.className = "rating"
    pelicula.rating.forEach(estrella => {
        let $estrella = document.createElement("img")
        $estrella.src = estrella.src
        $estrella.height = estrella.height
        $rating.appendChild($estrella)
    })
    $pelicula.appendChild($rating)

    return $pelicula
}

var proximasPeliculas = [
    {
        img: "https://archivos-cms.cinecolombia.com/images/1/1/6/3/43611-2-esl-CO/cf1a918e2882-warner_thenun_cinecol_480x670.jpg",
        label: "Fecha de estreno: 2/10/2023"
    },
    {
        img: "https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-257260163-large.jpg",
        label: "Fecha de estreno: 13/10/2023"
    }

]

var $upcoming_movies = document.querySelector("#upcoming_movies")

proximasPeliculas.forEach(pelicula => {
    $upcoming_movies.appendChild(crearProximasPeliculas(pelicula))
})

function crearProximasPeliculas(pelicula) {
    let $pelicula = document.createElement("li")

    let $imagen = document.createElement("img")
    $imagen.className = "next_movie"

    $imagen.src = pelicula.img
    $imagen.alt = pelicula.label
    $pelicula.appendChild($imagen)

    let $label = document.createElement("p")
    $label.textContent = pelicula.label
    $pelicula.appendChild($label)

    return $pelicula
}

let $select_pelicula = document.querySelector("#pelicula")

peliculas.forEach(pelicula => {
    let $option = document.createElement("option")
    $option.value = pelicula.id
    $option.textContent = pelicula.titulo
    $select_pelicula.appendChild($option)
})

let reservas = localStorage.getItem("reservas") ? JSON.parse(localStorage.getItem("reservas")) : []

let $submit = document.querySelector("#submit")

$submit.onclick = function (event) {
    event.preventDefault()

    let cedula = document.querySelector("#cedula").value
    let id_pel = document.querySelector("#pelicula").value
    let horario = document.querySelector("#hora").value
    
    if (cedula === "") {
        alert("Ingrese su cedula")
        return
    }

    if (cedula.length < 6) {
        alert("Ingrese una cedula valida")
        return
    }

    let reserva = {
        cedula: cedula,
        id_pel: id_pel,
        nombre: peliculas[id_pel - 1].titulo,
        horario: horario
    }
    // console.log(reserva)
    // console.log(cedula);
    reservas.push(reserva)
    localStorage.setItem("reservas", JSON.stringify(reservas))

    alert("Reserva exitosa")
    document.querySelector("#cedula").value = ""
}







