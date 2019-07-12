//Buscar um PET entre os pets dos usuarios

const formBuscar = document.querySelector('#form-buscar')

formBuscar.addEventListener("submit", (buscarPet) => {
  buscarPet.preventDefault()

  const nomeBuscar = document.querySelector("#nomePetBuscar").value.toLowerCase()
  const especieBuscar = document.querySelector("#especiePetBuscar").value.toLowerCase()
  const racaBuscar = document.querySelector("#racaPetBuscar").value.toLowerCase()
  const generoBuscar = document.querySelector("#generoPetBuscar").value.toLowerCase()
  const porteBuscar = document.querySelector("#portePetBuscar").value.toLowerCase()
  const corBuscar = document.querySelector("#corPetBuscar").value.toLowerCase()
  const outrasCaracteristicasBuscar = document.querySelector("#caracteristicasPetBuscar").value.toLowerCase()
  const dataBuscar = document.querySelector("#calendario").value.toLowerCase()
  const localBuscar = document.querySelector("#localPet2").value.toLowerCase()

  fetch(`https://cademeupetback.herokuapp.com/busca/pets/?especie=${especieBuscar}&raca=${racaBuscar}&genero=${generoBuscar}&${porteBuscar}&cor=${corBuscar}&data=${dataBuscar}&local=${localBuscar}`)

    .then((response) => {
      return response.json();
    })
    .then((usuarios) => {
      console.log(usuarios)

      usuarios.forEach(user => {

        console.log(user.nome)
        console.log(user.email)
        console.log(user.telefone)

        user.pets.forEach(pet => {

          const cardBody = document.querySelector('#buscarPet')

          const card = document.createElement('div')
          card.setAttribute('class', 'card')

          const cardImage = document.createElement('div')
          cardImage.setAttribute('class', 'card-image')

          const img = document.createElement('img')
          img.setAttribute('src', pet.foto)
          
          const cardStacked = document.createElement('div')
          cardStacked.setAttribute('class', 'card-stacked')

          const cardContent = document.createElement('div')
          cardContent.setAttribute('class', 'card-content')

          const titulo = document.createElement('h6')
          titulo.innerHTML = 'Dados do Pet'

          const p1 = document.createElement('p')
          p1.innerHTML = `Nome: ${pet.nome}`

          const p2 = document.createElement('p')
          p2.innerHTML = `Espécie: ${pet.especie}`

          const p3 = document.createElement('p')
          p3.innerHTML = `Gênero: ${pet.genero}`

          const p4 = document.createElement('p')
          p4.innerHTML = `Cor do pêlo: ${pet.cor}`

          const p5 = document.createElement('p')
          p5.innerHTML = `Outras Características: ${pet.outrasCaracteristicas}`

          const p7 = document.createElement('p')
          p7.innerHTML = `Visto por último na data: ${pet.data}`

          const p8 = document.createElement('p')
          p8.innerHTML = `Visto por último no local: ${pet.local}`

          const tituloUser = document.createElement('h6')
          tituloUser.innerHTML = 'Quem encontrou esse Pet:'

          const p1User = document.createElement('p')
          p1User.innerHTML = `Nome: ${user.nome}`

          const p2User = document.createElement('p')
          p2User.innerHTML = `Email: ${user.email}`

          const p3User = document.createElement('p')
          p3User.innerHTML = `Telefone: ${user.telefone}`

          cardBody.appendChild(card)
          card.appendChild(cardImage)
          cardImage.appendChild(img)
          card.appendChild(cardStacked)
          cardStacked.appendChild(cardContent)
          cardContent.appendChild(titulo)
          cardContent.appendChild(p1)
          cardContent.appendChild(p2)
          cardContent.appendChild(p3)
          cardContent.appendChild(p4)
          cardContent.appendChild(p5)
          cardContent.appendChild(p7)
          cardContent.appendChild(p8)
          cardContent.appendChild(tituloUser)
          cardContent.appendChild(p1User)
          cardContent.appendChild(p2User)
          cardContent.appendChild(p3User)

          const texto = document.querySelector('h4')
          texto.innerHTML = ('CONFIRA OS PETS ENCONTRADOS:')

          const formBusca = document.querySelector('#buscarPetForm')
          formBusca.innerHTML = ''

        })


      })
    })
})
  .catch((erro) => {
    console.log(erro)
  })










