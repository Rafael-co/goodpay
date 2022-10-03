/**
 * Trouxe o array do arquivo moduloDados.js
 * para o index.js
 */
import usuarios from "./modulosDados.js"

const btnEntrar = document.getElementById("btnEntrar")
const alertaLogin = new bootstrap.Modal("#alertaLogin")

btnEntrar.addEventListener('click',()=>{
const inputLogin = document.getElementById("login").value
const inputSenha = document.getElementById("senha").value
let usuarioValido;
    for(let usuario of usuarios){
        console.log(usuarioValido)
            if(usuario.nomeUsario == inputLogin){
                usuarioValido = usuario;
                break
            }
            
    }
    if (inputSenha == usuarioValido.senha){
 window.location.pathname = '/app.html'
    }else{
        alertaLogin.show()

    }
})
