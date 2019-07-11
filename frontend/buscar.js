//Buscar um PET entre os pets dos usuarios

const botaoBuscar = document.querySelector('#botaoBuscarPet')

botaoBuscar.addEventListener("click", (buscarPet) => {
  buscarPet.preventDefault()

  const nomeBuscar = document.querySelector("#nomePetBuscar").value.toLowerCase()
  const especieBuscar = document.querySelector("#especiePetBuscar").value
  const racaBuscar = document.querySelector("#racaPetBuscar").value
  const generoBuscar = document.querySelector("#generoPetBuscar").value
  const porteBuscar = document.querySelector("#portePetBuscar").value
  const corBuscar = document.querySelector("#corPetBuscar").value
  const outrasCaracteristicasBuscar = document.querySelector("#caracteristicasPetBuscar").value
  const dataBuscar = document.querySelector("#calendario").value
  const localBuscar = document.querySelector("#localPet2").value
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


    })
 })
  .catch((erro) => {
    console.log(erro)
  })

  // const containerBuscar = document.querySelector('#buscarPet')
  //       const card = document.createElement('div')
  //       card.setAttribute('class', 'card horizontal')
  //       card.innerHTML = `
  //                         <div class="card-image">
                           
  //                         </div>
  //                         <div class="card-stacked">
  //                           <div class="card-content">
  //                             <p>Nome: ${usuario.pets.nome}, 
  //                             Especie: ${usuario.pets.especie},
  //                       Gênero: ${usuario.pets.genero},
  //                       Porte:${usuario.pets.porte}
  //                       Cor do pêlo: ${usuario.pets.pelo},
  //                       Outras Caracteristicas: ${usuario.pets.outrasCaracteristicas},
  //                       Visto por último na data: ${usuario.pets.data},
  //                       Visto por último no local:${usuario.pets.local},
  //                       Dados de quem cadasrou o Pet:
  //                       Nome:${usuario.nome},
  //                       Email:${usuario.email},
  //                       Telefone ${usuario.telefone}
  //                     </p>
  //                           </div>`

  //       containerBuscar.appendChild('card')





