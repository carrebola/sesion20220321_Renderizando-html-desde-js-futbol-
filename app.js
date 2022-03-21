var jugador = document.querySelector(".jugadores");
jugador.addEventListener("click", (elemento) => {
	var nombre = elemento.target.dataset.nombre;
	var foto = elemento.target.dataset.foto;
	if (elemento.target.classList.contains("jugador")) {
		document.querySelector(".nombre-jugador").innerHTML = nombre;

		document.querySelector(".foto-jugador").innerHTML = `
                    <img class=""
							src="${foto}"
							alt=""
						/>
                    `;
	}
});

//funcion que devuelve un ul con jugadores
function getJugadores(equipo = 'local', jornada = 0, partido = 0) {
	const nombreEquipoLocal = eval(` 
		datos.jornadas[jornada].partidos[partido].${equipo}.nombre;`)

	const nombreEquipoVisitante = eval(` 
		datos.jornadas[jornada].partidos[partido].${equipo}.nombre;`)

	const arrayJugadoresLocal =
		datos.jornadas[jornada].partidos[partido].local.jugadores;
	const arrayJugadoresVisitante =
		datos.jornadas[jornada].partidos[partido].visitante.jugadores;

	var listaJugadoresLocalHTML = `<ul>`;
	arrayJugadoresLocal.forEach((item) => {
		console.log(item.nombre);
		listaJugadoresLocalHTML += `
            <li class='jugador' data-nombre='${item.nombre}' data-foto = '${item.imagen}'>${item.nombre}</li>
            `;
	});
	listaJugadoresLocalHTML += "<ul>";

	var listaJugadoresVisitanteHTML = `<ul>`;
	arrayJugadoresVisitante.forEach((item) => {
		console.log(item.nombre);
		listaJugadoresVisitanteHTML += `
            <li class='jugador' data-nombre='${item.nombre}' data-foto = '${item.imagen}'>${item.nombre}</li>
            `;
	});
	listaJugadoresVisitanteHTML += "<ul>";

	console.log(listaJugadoresVisitanteHTML);
	document.querySelector("ul.local").innerHTML = listaJugadoresLocalHTML;
	document.querySelector("ul.visitante").innerHTML =
		listaJugadoresvisitanteHTML;
}
getJugadores();
