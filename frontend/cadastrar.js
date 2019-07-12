//Adiciona um pet ao usuario

const params = location.search.split('?', 3)
const email = params[1]
const token = params[2]

fetch('http://localhost:3000/usuarios')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)

    const usuarioId = data.find(usuario => {
      return usuario.email == email
    })
    console.log(usuarioId)

    const form = document.querySelector('#form-cadastrar')
    form.addEventListener("submit", (criarPet) => {
      criarPet.preventDefault()

      const nome = document.querySelector("#nomePet").value.toLowerCase()
      const especie = document.querySelector("#especiePet").value.toLowerCase()
      const raca = document.querySelector("#racaPet").value.toLowerCase()
      const genero = document.querySelector("#generoPet").value.toLowerCase()
      const porte = document.querySelector("#portePet").value.toLowerCase()
      const cor = document.querySelector("#corPet").value.toLowerCase()
      const outrasCaracteristicas = document.querySelector("#caracteristicasPet").value.toLowerCase()
      const foto = document.querySelector("#fotoPet").value.toLowerCase()
      const data = document.querySelector("#calendario2").value 
      const local = document.querySelector("#localPet").value.toLowerCase()
      const petCadastrado = {
        nome, especie, raca, genero, porte, cor, outrasCaracteristicas, foto, data, local, porte
      }


      fetch(`http://localhost:3000/usuarios/adicionar-pet/${usuarioId._id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(petCadastrado)
      })

        .then((response) => {
          return response.json();
        })
        .then((usuario) => {

          const pet = usuario.pets[0]

          console.log(usuario)
          console.log(pet)

          const textoSucesso = document.querySelector('h4')
          textoSucesso.innerHTML = ('O PET FOI CADASTRADO COM SUCESSO!')

          const formContainer = document.querySelector('#div-cadastro')
          formContainer.innerHTML = ''

        })
        .catch((erro) => {
          console.log(erro)
        })

    })

  })
  .catch((erro) => {
    console.log(erro)
  })







