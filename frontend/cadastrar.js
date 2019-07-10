  //Pega Id Usuarios

  const containerCadastrar = document.querySelector('#div-cadastro')
  fetch('http://localhost:3000/usuarios')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      data.forEach(usuario=> {
        const usuarioId = usuario._id
        console.log(usuarioId)  
        
        const dataId = document.querySelector('#div-cadastro')
        dataId.setAttribute('data-id', usuarioId)
        
      })
    })
    .catch((erro) => {
      console.log(erro)
    })


    //Adiciona um pet ao usuario
    
    const botao = document.querySelector('#botaoPet')
    botao.addEventListener("click", (criarPet) => {
      criarPet.preventDefault()
      
      const nome = document.querySelector("#nomePet").value
      const especie = document.querySelector("#especiePet").value
      const raca = document.querySelector("#racaPet").value
      const genero = document.querySelector("#generoPet").value
      const porte = document.querySelector("#portePet").value
      const cor = document.querySelector("#corPet").value
      const outrasCaracteristicas = document.querySelector("#caracteristicasPet").value
      const foto = document.querySelector("#fotoPet").value
      const data = document.querySelector("#calendario2").value
      const local = document.querySelector("#mapa").value
      const petCadastrado = {
        nome, especie, raca, genero, porte, cor, outrasCaracteristicas, foto, data, local, porte
      }

      
    fetch(`http://localhost:3000/adicionar-pet/${usuarioId}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petCadastrado)
    })
    
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      data.forEach((cadastrar)=>{

        cadastrar.usuarioId.petCadastrado
      
        console.log(data)

           
        const textoSucesso = document.querySelector('h4')
        textoSucesso.innerHTML = ('O Pet foi cadastro foi cadastrado com sucesso!')

       
})
      })
      .catch((erro) => {
        console.log(erro)
      })

  })


    //Get PET Cadastrado
    

    
   
    
  //       const card = document.createElement('div')
  //       card.setAttribute('class', 'card horizontal')
  //       card.innerHTML = `
  //     <div class="card-image">
       
  //     </div>
  //     <div class="card-stacked">
  //       <div class="card-content">
  //         <p>Nome: ${pet.nome} 
  //         Especie: ${pet.espécie},
  //   Gênero: ${pet.genero},
  //   Porte:${pet.porte}
  //   Cor do pêlo: ${pet.pelo},
  //   Outras Caracteristicas: ${pet.outrasCaracteristicas},
  //   Visto por último na data: ${pet.data},
  //   Visto por último no local:${pet.local}
  // </p>
  //       </div>`

  //       containerCadastrar.appendChild('card')
    
      
     
    
      
       
          
     