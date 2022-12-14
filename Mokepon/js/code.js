window.addEventListener("load", starGame)

let player_atack
let enemy_atack

function starGame() {
    let btn_pet_selection = document.getElementById("btn_pet_selection")
    btn_pet_selection.addEventListener("click", playerPetSelection)

    let btn_atack_A = document.getElementById("btn_atack_A")
    btn_atack_A.addEventListener("click", playerAtackA)

    let btn_atack_T = document.getElementById("btn_atack_T")
    btn_atack_T.addEventListener("click", playerAtackT)
    
    let btn_atack_F = document.getElementById("btn_atack_F")
    btn_atack_F.addEventListener("click", playerAtackF)
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

function playerPetSelection() {
    let inputCapipepo = document.getElementById("inputCapipepo")
    let inputHypodoge = document.getElementById("inputHypodoge")
    let inputRatigueya = document.getElementById("inputRatigueya")
    let spn_player_pet = document.getElementById("spn_player_pet")

    if (inputCapipepo.checked) {
        spn_player_pet.innerHTML = "Capipepo"
        enemyPetSelection()
    } else if (inputHypodoge.checked) {
        spn_player_pet.innerHTML = "Hypodogue"
        enemyPetSelection()
    } else if (inputRatigueya.checked) {
        spn_player_pet.innerHTML = "Ratigueya"       
        enemyPetSelection()
    } else {
        alert("Selecciona una mascota")
    }
}

function enemyPetSelection() {
    let enemy_random_pet = randomNum(1,3)
    let spn_enemy_pet = document.getElementById("spn_enemy_pet")

    if (enemy_random_pet == 1) {
        spn_enemy_pet.innerHTML = "Capipepo"
    } else if (enemy_random_pet == 2) {
        spn_enemy_pet.innerHTML = "Hypodogue"
    } else {
        spn_enemy_pet.innerHTML = "Ratigueya"
    }
}

function playerAtackA() {
    player_atack = "Agua 💧"
    enemyAtack()
}

function playerAtackT() {
    player_atack = "Tierra 🌱"
    enemyAtack()
}

function playerAtackF() {
    player_atack = "Fuego 🔥"
    enemyAtack()
}

function enemyAtack() {
    let enemy_random_atack = randomNum(1,3)

    if (enemy_random_atack == 1) {
        enemy_atack = "Agua 💧"
    } else if (enemy_random_atack == 2) {
        enemy_atack = "Tierra 🌱"
    } else {
        enemy_atack ="Fuego 🔥"
    }

    combate()
}

function combate() {
    if (player_atack == enemy_atack) {
        createMessage("EMPATE!!")
    } else if ((player_atack == "Agua 💧" && enemy_atack == "Fuego 🔥") || (player_atack == "Tierra 🌱" && enemy_atack == "Agua 💧") || (player_atack == "Fuego 🔥" && enemy_atack == "Tierra 🌱")) {
        createMessage("TU GANAS 🎉")   
    } else {
        createMessage("TU PIERDES 💀")
    }
}

function createMessage(resultado) {
    let monitorSection = document.getElementById("monitor")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + player_atack + ". La mascota del enemigo atacó con " + enemy_atack + ". " + resultado

    monitorSection.appendChild(parrafo)
}