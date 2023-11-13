let $tabla_reservas = document.querySelector("#tabla_reservas")
let reservas = JSON.parse(localStorage.getItem("reservas"))

reservas.forEach(reserva => {
  $tabla_reservas.appendChild(crearReservas(reserva))
})


function crearReservas(reserva) {
  let $reserva = document.createElement("tr")

  let $cedula = document.createElement("td")
  $cedula.textContent = reserva.cedula
  $reserva.appendChild($cedula)

  let $id_pel = document.createElement("td")
  $id_pel.textContent = reserva.id_pel
  $reserva.appendChild($id_pel)

  let $nombre = document.createElement("td")
  $nombre.textContent = reserva.nombre
  $reserva.appendChild($nombre)

  let $horario = document.createElement("td")
  $horario.textContent = reserva.horario
  $reserva.appendChild($horario)

  let $acciones = document.createElement("td")
  $acciones.classList.add("acciones")
  let $btn_eliminar = document.createElement("button")
  $btn_eliminar.textContent = "❌"
  $btn_eliminar.onclick = function () {
    eliminarReserva(reserva)
  }
  $acciones.appendChild($btn_eliminar)
  $reserva.appendChild($acciones)

  return $reserva
}

function eliminarReserva(reserva) {
  let reservas = JSON.parse(localStorage.getItem("reservas"))
  let index = reservas.findIndex(r => r.cedula == reserva.cedula && r.id_pel == reserva.id_pel && r.horario == reserva.horario)
  reservas.splice(index, 1)
  localStorage.setItem("reservas", JSON.stringify(reservas))
  location.reload()
}