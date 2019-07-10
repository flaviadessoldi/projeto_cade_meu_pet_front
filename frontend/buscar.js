
      // GET buscar Usuarios ID

      fetch('http://localhost:3000/usuarios')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      data.forEach(usuario=> {
        const usuarioId = usuario._id
        console.log(usuarioId)  
        
        const dataId = document.querySelector('#buscarPet')
        dataId.setAttribute('data-id', usuarioId)
        
      })
    })
    .catch((erro) => {
      console.log(erro)
    })


    //Buscar um PET entre os pets dos usuarios

      // const containerBuscar = document.querySelector('#buscarPet')
     
      const botaoBuscar = document.querySelector('#botaoBuscarPet')
      
      botaoBuscar.addEventListener("click", (buscarPet) => {
        buscarPet.preventDefault()
      
        const nomeBuscar = document.querySelector("#nomePetBuscar").value
        const especieBuscar = document.querySelector("#especiePetBuscar").value
        const racaBuscar = document.querySelector("#racaPetBuscar").value
        const generoBuscar = document.querySelector("#generoPetBuscar").value
        const porteBuscar = document.querySelector("#portePetBuscar").value
        const corBuscar = document.querySelector("#corPetBuscar").value
        const outrasCaracteristicasBuscar = document.querySelector("#caracteristicasPetBuscar").value
        const fotoBuscar = document.querySelector("#fotoPetBuscar").value
        const dataBuscar = document.querySelector("#calendario").value
        const localBuscar = document.querySelector("#mapa2").value
        const petBuscar = {
          nomeBuscar, especieBuscar, racaBuscar, generoBuscar, porteBuscar, corBuscar, outrasCaracteristicasBuscar, fotoBuscar, dataBuscar, localBuscar, porteBuscar
        }

        const usuarioId = document.querySelector('#data-id')
        const petId = usuarioId.pets._id
      
        fetch(`http://localhost:3000/usuarios/buscar-pet/${usuarioId}/pet/${petId}`)

          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.forEach((pet) => {

                if(petBuscar){
                    return pet
                }

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
          Visto por último no local:${pet.local},
          Dados de quem cadasrou o Pet:${usuario.nome, usuario.email, usuario.telefone}
        </p>
              </div>`
      
              cardPet.appendChild('card')
            })
          })
          .catch((erro) => {
            console.log(erro)
          })
      
      })
      
   

