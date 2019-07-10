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
         
    })
    .catch((erro) => {
      console.log(erro)
    })
})