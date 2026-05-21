
//Pra casa
//Reutilzar o MODAL para as mensagens de erro!!!


//Função anônima ou tradicional

// function (){
    
// }

// //Declaração da função
// function soma(){
//     console.log(2+2);
// }

// //Executando a função
// soma();

//Declaração da função
// function soma(a=0,b=0){
//     let resultado = a+b;
//     console.log(resultado);
//     return resultado;
// }
//Executando a função
// const resultado = soma();
// console.log(resultado);
// console.log(soma());

// const botaoTeste = document.querySelector("#teste");

// botaoTeste.addEventListener("click", function(){
//     soma("2",2);
//     console.log( typeof soma("2",2));
// });

//Arrow Function
// const soma = (a=0,b=0)=>a+b;

// const botaoTeste = document.querySelector("#teste");

// botaoTeste.addEventListener("click", function(){

//     console.log("SEM THIS: ",botaoTeste.textContent);
//     console.log("COM THIS: ",this.textContent);

//     soma("2",2);
//     console.log( typeof soma("2",2));
// });

// botaoTeste.addEventListener("click", ()=>{

//     console.log("SEM THIS: ",botaoTeste.textContent);
//     console.log("COM THIS: ",this.textContent);

//     soma("2",2);
//     console.log( typeof soma("2",2));
// });




// //Objeto INTERNO
// const usuarioDb = {
//     email:"email@email.com",
//     senha:"12345",
//     nome: "José Antonio",
//     avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
// }


//Lista de usuários
const usuarios = [
  {
    email: "zarak.vultos@exemplo.com",
    senha: "12345",
    nome: "Zarak dos Vultos",
    idade: 42,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "elara.astral@exemplo.com",
    senha: "12345",
    nome: "Elara Galáxia Astral",
    idade: 27,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "mordecai.bruma@exemplo.com",
    senha: "12345",
    nome: "Mordecai da Bruma",
    idade: 51,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "thallos.ferro@exemplo.com",
    senha: "12345",
    nome: "Thallos de Ferro",
    idade: 35,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "lyra.eco@exemplo.com",
    senha: "12345",
    nome: "Lyra Silvestre Eco",
    idade: 22,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "boros.fenda@exemplo.com",
    senha: "12345",
    nome: "Boros da Fenda Profunda",
    idade: 64,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "vaelin.nimbus@exemplo.com",
    senha: "12345",
    nome: "Vaelin Nimbus",
    idade: 30,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "selene.quartzo@exemplo.com",
    senha: "12345",
    nome: "Selene de Quartzo",
    idade: 29,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "kaelthas.sol@exemplo.com",
    senha: "12345",
    nome: "Kaelthas Brilho do Sol",
    idade: 47,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  },
  {
    email: "joric.martelo@exemplo.com",
    senha: "12345",
    nome: "Joric Martelo de Pedra",
    idade: 38,
    avatar: "https://placehold.co/100x100/e6e6e6/444444.png?text=usu%C3%A1rio&font=roboto"
  }
];


//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.

botaoEntrar.addEventListener("click", function(e){
    
    e.preventDefault();

    //Para casa:
    //Capturar os campos de email e senha.
    //Armazenar em variáveis.
    //Imprimir seus valores.
    const email = document.querySelector("#idEmail");
    const senha = document.querySelector("#idSenha");
    
    //Armazenar os dados que chegam do form em um objeto:
    const userForm = {
        email: email.value,
        senha: senha.value
    }

    //Capturar o dialog
    const modalDialog = document.querySelector("#meuModal");

    //Adicionar a mensagem de sucesso para o usuário no modal!
    //Vamos usar o innerHTML para injetar 2 <p> com o texto na div=msg.
    //Mas para isso necessitamos capturar a div=msg antes
    const divMsg = document.querySelector("#msg");
    
    //Capturar o botão do modal para atrelar nele o evento de click e assim colocar  neste botão a ação de fechar o modal.
    const botaoModal = document.querySelector("#btnFechar");
    botaoModal.addEventListener("click", function(){
        modalDialog.classList.remove();
        modalDialog.close();
    });

    //Validação
    try {

        if (usuarios) {

            for(let x = 0; x < usuarios.length; x++){
                
                if( (usuarios[x].email === userForm.email) && (usuarios[x].senha === userForm.senha)){
    
                    //Abrindo o dialog e deixando o fundo livre.
                    // modalDialog.show();
    
                    //Abrindo o dialog e travando o fundo.
                    modalDialog.showModal();
                    
                    let contador = 5;
    
                    //Injetando os 2 <p> com a mensagem de sucesso.
                    divMsg.innerHTML = `<p>Login realizado com Sucesso!</p><p>Você será redirecionado em ${contador} segundos...</p>`;
    
                    //Temporizador de redirecionamento com setInterval.
                    const intervalo = setInterval( function(){
                        
                        contador--;
                        divMsg.innerHTML = `<p>Login realizado com Sucesso!</p><p>Você será redirecionado em ${contador} segundos...</p>`;
                        
                        if(contador === 0){
                            clearInterval(intervalo);
                            //Redirecionamento do usuário para uma nova página!!
                            window.location.href = "../index.html";
                        }
    
                    }, 1000 );
                    return usuarios[x];
                }
            }
                throw Error("Email ou Senha incorretos.");
                            
        }else{
            throw Error("Ocorreu um erro no acesso as informações do usuário.");
        }

    } catch (error) {
        console.error(error);

            //Abrindo o dialog e travando o fundo.
            modalDialog.showModal();

            //Adiconando a classe css de erro aos elementos do modal
            modalDialog.classList.add("danger");
            botaoModal.classList.add("danger");

            //Injetando os 1 <p> com a mensagem de sucesso.
            divMsg.innerHTML = `<p>${error}</p>`;
    }
});

