
      // GET buscar PET

      // const containerBuscar = document.querySelector('#buscarPet')

      const botaoBuscar = document.querySelector('#botaoBuscarPet')
      
      botaoBuscar.addEventListener("click", (buscarPet) => {
        buscarPet.preventDefault()
      
        const nomeBuscar = document.querySelector("#nomePetBuscar").value
        const especieBuscar = document.querySelector("#especieBuscarPetBuscar").value
        const racaBuscar = document.querySelector("#racaPetBuscar").value
        const generoBuscar = document.querySelector("#generoPetBuscar").value
        const porteBuscar = document.querySelector("#portePetBuscar").value
        const corBuscar = document.querySelector("#corPetBuscar").value
        const outrasCaracteristicasBuscar = document.querySelector("#caracteristicasPetBuscar").value
        const fotoBuscar = document.querySelector("#fotoPetBuscar").value
        const dataBuscar = document.querySelector("#calendarioBuscar").value
        const localBuscar = document.querySelector("#mapa2").value
        // const petBuscar = {
        //   nomeBuscar, especieBuscar, racaBuscar, generoBuscar, porteBuscar, corBuscar, outrasCaracteristicasBuscar, fotoBuscar, dataBuscar, localBuscar, porteBuscar
        // }
      
        fetch(`http://localhost:3000/usuarios/buscar-pet/${usuarioId}/pet/${petId}`)

          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.pets.forEach(pet => {
              console.log(data)
      
              const card = document.createElement('div')
              card.setAttribute('class', 'card horizontal')
              card.innerHTML = `
            <div class="card-image">
             
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>Nome: ${pet.nome} 
                Especie: ${pet.espécie},
          Gênero: ${pet.genero},
          Porte:${pet.porte}
          Cor do pêlo: ${pet.pelo},
          Outras Caracteristicas: ${pet.outrasCaracteristicas},
          Visto por último na data: ${pet.data},
          Visto por último no local:${pet.local}
        </p>
              </div>`
      
              cardPet.appendChild('card')
            })
          })
          .catch((erro) => {
            console.log(erro)
          })
      
      })
      
   

