const nomeArquivo = 'json/dat.json';

function aparecer(){
	const box = document.createElement("div");
  
    function extrairDados() {
        fetch(nomeArquivo)
            .then(response => response.json())
            .then(attbox => {
            const largura = attbox.largura + attbox.unidade;
            const altura = attbox.altura + attbox.unidade;
			const cor = attbox.cor;
			const border = `${attbox.borderWidth}${attbox.unidade} ${attbox.borderColor} ${attbox.borderStyle}`;

			box.style.width = largura;
			box.style.height = altura;
			box.style.backgroundColor = cor;
			box.style.border = border;

			// box.style.position = math.random();
    
            document.body.appendChild(box);
            })
            .catch(error => {
                console.error('Erro ao ler o arquivo JSON:', error);
            });
    } 
    
    extrairDados();

}
  