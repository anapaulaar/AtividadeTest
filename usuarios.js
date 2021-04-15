var usuarios = []
var novoUsuario

const cadastrarUsuarios = () => {
    novoUsuario = usuarios.push('pedro','joca','joão')
    console.log(`${novoUsuario} foram cadastrado`)
}

const exportUsuariosCadastrados = () => {
    console.log(usuarios)
}


module.exports = {exportUsuariosCadastrados, cadastrarUsuarios}