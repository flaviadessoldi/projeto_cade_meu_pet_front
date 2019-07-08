// GET API

// fetch(`http://localhost:3000/cademeupet`)

//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             console.log(data)
//             data.forEach((api)=>{

//             })
            
//           })
//           .catch((erro) => {
//             console.log(erro)
//           })
           

//POST CADASTRAR USUARIO

const btnCadastro = document.querySelector('#btnCadastro')

btnCadastro.addEventListener("click", (fazerCadastro) => {
  fazerCadastro.preventDefault()

  const nome = document.querySelector("#nomeCadastro").value
  const telefone = document.querySelector("#telefoneCadastro").value
  const email = document.querySelector("#emailCadastro").value
  const senha = document.querySelector("#senhaCadastro").value
  const usuario = { nome, telefone, email, senha }

  fetch('http://localhost:3000/usuarios',
    {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((cadastro) => {
      console.log(cadastro)

      const textoSucesso = document.querySelector('h4')
        textoSucesso.innerHTML = ('Seu cadastro foi realizado com sucesso!')
       
    })

    .catch((erro) => {
      console.log(erro)
    })
})

//POST LOGIN USUARIO

const btnLogin = document.querySelector('#btn-login')

btnLogin.addEventListener("click", (fazerLogin) => {
  fazerLogin.preventDefault()

  const email = document.querySelector("#emailUsuario").value
  const senha = document.querySelector("#senhaUsuario").value
  const login = { email, senha }


  fetch('http://localhost:3000/usuarios/login',
    {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((usuarioLogin) => {
      console.log(usuarioLogin)

      //POST ADICIONAR PET
 const containerCadastrar = document.querySelector('#cadastroPet')

const usuarioId = usuarioLogin

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

  fetch(`http://localhost:3000/usuarios/adicionar-pet/${usuarioId}`,
    {
      method: 'POST',
      body: JSON.stringify(petCadastrado),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
        console.log(data)

        const textoSucesso = document.querySelector('h4')
        textoSucesso.innerHTML = ('O Pet foi cadastro foi cadastrado com sucesso!')

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

        containerCadastrar.appendChild('card')
      })
    })
    .catch((erro) => {
      console.log(erro)
    })

  })
  .catch((erro) => {
    console.log(erro)
  })
})


      // GET ENCONTRAR PET

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
      
        fetch(`http://localhost:3000/usuarios/encontrar-pet/${usuarioId}/pet/${petId}`)

          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.pets.forEach(pet => {
              console.log(data)
      
              // const cardBody = document.createElement('div');
              // cardBody.setAttribute('class', 'card-body');
              // containerBuscar.appendChild('cardBody')
      
              // const coluna = document.createElement('div')
              // coluna.setAttribute('class', 'col s12 m8 offset-m2 l6 offset-l3');
              // cardBody.appendChild('coluna')
      
              // const row = document.createElement('div')
              // row.setAttribute('class', 'row valign-wrapper');
              // coluna.appendChild('row')
      
              // const banner = document.createElement('div')
              // banner.setAttribute('class', 'col s2');
              // row.appendChild('banner')
      
              // const imagem = document.createElement('img')
              // imagem.setAttribute('src', 'img/Prancheta 1 cópia 6.jpg')
              // banner.appendChild('imagem')
      
              // const texto = document.createElement('h4')
              // texto.setAttribute('class', 'card-text center')
              // texto.innerHTML = ('Confira o resultado da busca:')
              // row.appendChild(texto)
      
              // const cardPet = document.createElement('div');
              // cardPet.setAttribute('class', 'col s12 m7');
              // row.appendChild('cardBody')
      
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
      
   

