//Buscar um PET entre os pets dos usuarios

const botaoBuscar = document.querySelector('#botaoBuscarPet')

botaoBuscar.addEventListener("click", (buscarPet) => {
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
  const petBuscar = {
    nomeBuscar, especieBuscar, racaBuscar, generoBuscar, porteBuscar, corBuscar, outrasCaracteristicasBuscar, dataBuscar, localBuscar, porteBuscar
  }


  fetch(`http://localhost:3000/busca/pets/?especie=${especieBuscar}&raca=${racaBuscar}&genero=${generoBuscar}&${porteBuscar}&cor=${corBuscar}&data=${dataBuscar}&local=${localBuscar}`)

    .then((response) => {
      return response.json();
    })
    .then((usuarios) => {
      console.log(usuarios)
           
      if (petBuscar) {
        return usuarios
      }

      usuarios.forEach(pet =>{

      const cardBody = document.querySelector('#buscarPet')

        const card = document.createElement('div')
        card.setAttribute('class', 'card horizontal')
        
        const cardImage = document.createElement('div')
        card.setAttribute('class', 'card-image')

        const img = document.createElement('img')
        card.setAttribute('src', usuarios.pets.foto)

        const cardStacked = document.createElement('div')
        cardStacked.setAttribute('class', 'card-stacked')

        const cardContent = document.createElement('div')
        card.setAttribute('class', 'card-content')

        const p = document.createElement('p')
        p.innerHTML=`Nome: ${pet.nome}, 
        Especie: ${pet.especie},
  Gênero: ${pet.genero},
  Porte:${usuarios.pets.porte}
  Cor do pêlo: ${usuarios.pets.pelo},
  Outras Caracteristicas: ${usuarios.pets.outrasCaracteristicas},
  Visto por último na data: ${usuarios.pets.data},
  Visto por último no local:${usuarios.pets.local},
  Dados de quem cadasrou o Pet:
  Nome:${usuarios.nome},
  Email:${usuarios.email},
  Telefone ${usuarios.telefone}`
        

        cardBody.appendChild(card)
        card.appendChild(cardImage)
        cardImage.appendChild(img)
        cardStacked.appendChild(cardContent)
        cardContent.appendChild(p)

      })
    })
 })
  .catch((erro) => {
    console.log(erro)
  })

  




