function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
<div class="card" style="animation-delay: ${delay}">
  <h2>${date} <span>${day} </span></h2>
    <ul>  
      ${games}
    </ul>
</div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("catar", "16:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "13:00", "irã") +
    createGame("senegal", "16:00", "holanda") +
    createGame("united-states", "19:00", "gales") 
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "10:00", "arabia-saudita") +
      createGame("dinamarca", "13:00", "tunisia") +
      createGame("méxico", "16:00", "polonia") +
      createGame("frança", "19:00", "austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "10:00", "croácia") +
      createGame("alemanha", "13:00", "japão") +
      createGame("espanha", "16:00", "costa-rica") +
      createGame("bélgica", "19:00", "canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "10:00", "camarões") +
      createGame("uruguai", "13:00", "coreia-do-sul") +
      createGame("portugal","16:00", "gana") +
      createGame("brazil", "19:00", "sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "10:00", "irã") +
      createGame("catar", "13:00", "senegal") +
      createGame("holanda", "16:00", "equador") +
      createGame("england", "19:00", "united-states")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "10:00", "austrália") +
      createGame("polônia", "13:00", "arábia-saudita") +
      createGame("frança", "16:00", "dinamarca") +
      createGame("argentina", "19:00", "méxico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "10:00", "costa-rica") +
      createGame("bélgica", "13:00", "marrocos") +
      createGame("croácia", "16:00", "canadá") +
      createGame("espanha", "19:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "10:00", "sérvia") +
      createGame("coreia-do-sul", "13:00", "gana") +
      createGame("brazil", "16:00", "suiça") +
      createGame("portugal", "19:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "15:00", "senegal") +
      createGame("holanda", "15:00", "catar") +
      createGame("irã", "19:00", "united-states") +
      createGame("gales", "19:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "15:00", "frança") +
      createGame("austrália", "15:00", "dinamarca") +
      createGame("polônia", "19:00", "argentina") +
      createGame("arábia-saudita", "19:00", "méxico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "15:00", "bélgica") +
      createGame("canadá", "15:00", "marrocos") +
      createGame("japão", "19:00", "espanha") +
      createGame("costa-rica", "19:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia-do-sul", "15:00", "portugal") +
      createGame("gana", "15:00", "uruguai") +
      createGame("sérvia", "19:00", "suiça") +
      createGame("camarões", "19:00", "brazil"))