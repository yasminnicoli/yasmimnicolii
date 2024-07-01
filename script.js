Scrip.js 
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [



enunciado: 1)
1- Como as redes sociais influenciam a formação da opinião pública na sociedade contemporânea?
A) As redes sociais promovem a disseminação rápida de informações corretas e falsas,
 impactando a opinião pública de forma significativa. 

B) As redes sociais não têm impacto na formação da opinião pública, pois são apenas plataformas de entretenimento. 


enunciado: 2) 
2- De que maneira a globalização tem afetado as culturas tradicionais ao redor do mundo?
A) A globalização facilita a troca cultural, mas também pode ameaçar a sobrevivência de tradições culturais locais. 

B) A globalização não afeta as culturas tradicionais, pois estas são imunes às influências externas. 


enunciado:: 3)
3. *Quais são os principais desafios enfrentados pelas sociedades modernas em relação à desigualdade econômica?*
    A) A desigualdade econômica pode levar a tensões sociais e políticas, dificultando a coesão social. 
   
B) A desigualdade econômica não tem impacto significativo nas sociedades modernas, pois a economia sempre se autorregula.

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();