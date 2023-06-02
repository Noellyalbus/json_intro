const nomeArquivo = 'dados/dat.json';

function mostrarDados(){
    const nomeDiv = document.getElementById('nome');
    const idadeDiv = document.getElementById('idade');

    function extrairDados() {
        fetch(nomeArquivo)
            .then(response => response.json())
            .then(pessoa => {
            const nome = pessoa.nome;
            const idade = pessoa.idade;

            // nomeDiv.innerHTML = "Nome: "+nome;
            // idadeDiv.innerHTML = "Idade: "+idade;
    
            nomeDiv.innerHTML = `Nome: ${nome}`;
            idadeDiv.innerHTML = `Idade: ${idade}`;
            })
            .catch(error => {
                console.error('Erro ao ler o arquivo JSON:', error);
            });
    } 
    
    extrairDados();

}
  