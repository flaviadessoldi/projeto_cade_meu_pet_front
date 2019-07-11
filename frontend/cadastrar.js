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
      const local = document.querySelector("#localPet").value
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
          textoSucesso.innerHTML = ('O Pet foi cadastrado com sucesso!')


        })
        .catch((erro) => {
          console.log(erro)
        })

    })

  })
  .catch((erro) => {
    console.log(erro)
  })







