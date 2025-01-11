//Criando um alert 
document.addEventListener("DOMContentLoaded", function() 
{
    setTimeout(function()
    {
       alert('Gostou do site? Me siga no Github :)');
    }, 20000)
})


//Criando variavel
let numeroUsuario = document.querySelector('.UserNum');
let resultado = document.querySelector('.conteudoResultado');
let conteudo = document.querySelector('.conteudo')
let random = numRandom();
let jogador = 0;
let maquina = 0;
let empate = 0;

//Criando função
function cpuRandom()
{
 let  randomNumber = Math.floor(Math.random() * 5) + 1; 
 return randomNumber;
}

function numRandom()
{
 let  randomNumber = Math.floor(Math.random() * 5) + 1; 
 return randomNumber;
}

function placar()
{
    resultado.innerHTML = `Vitorias do Jogador: ${jogador}<br>Vitorias da maquina: ${maquina}<br>Empate entre ambos: ${empate}`;
}


function sorteia()
{
 let numeroCpu = cpuRandom();
 let nUser = Number(numeroUsuario.value);

   //Verificação
    if(nUser < 1 || nUser > 5)
    {
    alert('Invalido! Números validos são apenas de 1 a 5');
    return;
    }

   if (numeroCpu === random && nUser === random) {
         resultado.innerHTML = `Ambos acertaram! O número correto era: ${random}`;
         empate++
     }
     else if (nUser === random) {
         resultado.innerHTML = `O usuário venceu! O número correto era: ${random}`;
         jogador++;
     }

     else if (numeroCpu === random) {
         resultado.innerHTML = `A CPU venceu! O número correto era: ${random}`;
         maquina++;
     }
     else {
         resultado.innerHTML = `Ambos erraram! O número correto era: ${random}`;
         empate++;
     }

     //Conteudo Final
     random = numRandom();
     conteudo.classList.add('expandido');
    }