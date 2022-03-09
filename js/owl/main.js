var escolha = document.querySelector('#titulo').textContent; //variável para saber qual filme está sendo escolhido
console.log(escolha);
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})

function btnArcane(){

    escolha = 'arcane';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/arcane2.jpg')"

    document.querySelector('#descricao').innerHTML = "Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.";
    document.querySelector('#titulo').innerHTML = "Arcane"; 
}

function btnVikings(){

    escolha = 'vikings';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/vikings2.jpg')"

    document.querySelector('#descricao').innerHTML = "Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico.";
    document.querySelector('#titulo').innerHTML = "Vikings";
}

function btnLacasadepapel(){

    escolha = 'lacasadepapel';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/lacasadepapel2.jpg')"

    document.querySelector('#descricao').innerHTML = "Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros.";
    document.querySelector('#titulo').innerHTML = "La Casa de Papel";
}

function btnBreakingbad(){

    escolha = 'Breaking Bad';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/breakingbad2.jpg')"

    document.querySelector('#descricao').innerHTML = "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.";
    document.querySelector('#titulo').innerHTML = "Breaking Bad";
}

function btnLoki(){
    
    escolha = 'loki';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/loki2.jpg')"
    
    document.querySelector('#descricao').innerHTML = "Começando imediatamente depois que Loki rouba o Tesseract (de novo), ele se encontra diante da Autoridade de Variação Temporal, uma organização burocrática que existe fora do tempo e espaço.";
    document.querySelector('#titulo').innerHTML = "Loki";
}

function btnTWD(){
    
    escolha = 'twd';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/twd2.jpg')"

    document.querySelector('#descricao').innerHTML = "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.";
    document.querySelector('#titulo').innerHTML = "The Walking Dead";
}

function btnThewitcher(){

    escolha = 'thewitcher';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/thewitcher2.jpg')"

    document.querySelector('#descricao').innerHTML = "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens.";
    document.querySelector('#titulo').innerHTML = "The Witcher";
}

function btnPB(){

    escolha = 'peakyblinders';
    document.querySelector('#image').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/peaky2.jpg')"

    document.querySelector('#descricao').innerHTML = "Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham.";
    document.querySelector('#titulo').innerHTML = "Peaky Blinders";
}

function btnDemonslayer(){

    escolha = 'demonslayer';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/demonslayer2.jpg')"

    document.querySelector('#descricao').innerHTML = "Tanjiro Kamado, junto com Inosuke Hashibira, um garoto criado por javalis que usa uma cabeça de javali, e Zenitsu Agatsuma, um garoto assustado que revela seu verdadeiro poder quando dorme, embarca no Trem Infinito em uma nova missão com o Hashira de Fogo, Kyojuro Rengoku, para derrotar um demônio que tem atormentado o povo e matado os caçadores de oni que se opõem a ele!";
    document.querySelector('#titulo').innerHTML = "Demon Slayer";
}

function btnHxh(){

    escolha = 'hxh';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/hxh2.jpg')"

    document.querySelector('#descricao').innerHTML = "Esse é um remake da série original. Gon é um jovem que vive em uma pequena ilha. Seu sonho é tornar-se um Hunter como o pai, para procurar tesouros, artefatos e criaturas míticas. Determinado a se tornar um Hunter profissional e a colocar sua vida em risco ao desafiar o desconhecido, ele parte em uma jornada e encontra pessoas que se acham caçadores: Killua, Kurapika e Leorio.";
    document.querySelector('#titulo').innerHTML = "Hunter x Hunter";
}
function btnNaruto(){

    escolha = 'naruto';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/naruto2.jpg')"

    document.querySelector('#descricao').innerHTML = "Naruto Shippuden ocorre 2 anos e meio após Naruto ter ficado para treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos shinobi's o superaram na classificação, e ele caiu para trás. No entanto, com apenas 6 meses para resgatar Sasuke, Naruto tem de enfrentar inimigos ainda mais perigosos. O plano da Akatsuki se revela lentamente e os perigos surgem mais do que nunca!";
    document.querySelector('#titulo').innerHTML = "Naruto";
}
function btnAot(){

    escolha = 'Attack on Titan';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/aot2.jpg')"

    document.querySelector('#descricao').innerHTML = "Titãs estão quase exterminando a raça humana. Porém alguns estão dispostos a formar um exército de ataque aos seres assassinos. O jovem Eren, após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa.";
    document.querySelector('#titulo').innerHTML = "Attack on Titan";
}
function btnJujutsu(){

    escolha = 'jujutsu';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/jujutsu2.jpg')"

    document.querySelector('#descricao').innerHTML = "Jujutsu Kaisen Yuji é um gênio do atletismo, mas não tem interesse algum em ficar correndo em círculos. Ele é feliz como membro no Clube de Estudo de Fenômenos Psíquicos. Apesar de estar no clube apenas por diversão, tudo fica sério quando um espírito de verdade aparece na escola! A vida está prestes a se tornar muito interessante na Escola Sugisawa…";
    document.querySelector('#titulo').innerHTML = "Jujutsu Kaisen";
}
function btnAbyss(){

    escolha = 'abyss';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/abyss2.jpg')"

    document.querySelector('#descricao').innerHTML = "O enorme sistema de cavernas, conhecido como Abyss, é o único lugar inexplorado no mundo. Ninguém sabe até que ponto este poço titânico está habitado por criaturas estranhas e maravilhosas e cheio de misteriosas relíquias antigas cujo propósito é desconhecido para o homem moderno. Gerações de aventureiros arrojados foram desenhadas pelas profundidades crípticas do abismo.";
    document.querySelector('#titulo').innerHTML = "Made in Abyss";
}
function btnFma(){

    escolha = 'fma';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/fma2.jpg')"

    document.querySelector('#descricao').innerHTML = "Depois de perderem sua mãe, Alphonse e Edward Elric tentam trazê-la de volta usando uma técnica de alquimia proíbida. Contudo, o princípio básico da alquimia é a 'troca equivalente', e tentar ressucitar alguém custa muito alto. Ed perde sua perna, e Al perde seu corpo. Ed consegue selar a alma de Al dentro de uma grande armadura metálica, dando em troca seu braço.";
    document.querySelector('#titulo').innerHTML = "Full Metal Alchemist";
}

function btnDbz(){

    escolha = 'dbz';
    document.querySelector('#image-anime').style.backgroundImage = "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.50)100%), url('/img/dbz2.jpg')"

    document.querySelector('#descricao').innerHTML = "Cinco anos após vencer o Torneio Mundial de Artes Marciais, Goku tem uma vida pacífica com sua esposa e filho. No entanto, isso muda com a chegada de um misterioso inimigo chamado Raditz, que se apresenta como o irmão perdido de Goku e revela que ele é um guerreiro da raça Saiyan, e que originalmente foi enviado à Terra para conquista-la.";
    document.querySelector('#titulo').innerHTML = "Dragon Ball Z";
}



function btnAssistir(){
    
    if(escolha === 'arcane'){
        window.open('https://www.netflix.com/br/title/81435684');
    }
    if(escolha === 'vikings'){
        window.open('https://www.netflix.com/br/title/70301870');
    }
    if(escolha === 'lacasadepapel'){
        window.open('https://www.netflix.com/br/title/80192098');
    }
    if(escolha === 'Breaking Bad'){
        window.open('https://www.netflix.com/br/title/70143836');
    }
    if(escolha === 'loki'){
        window.open('https://disney.com.br/disneyplus/loki');
    }
    if(escolha === 'twd'){
        window.open('https://www.netflix.com/br/title/70177057');
    }
    if(escolha === 'thewitcher'){
        window.open('https://www.netflix.com/br/title/80189685');
    }
    if(escolha === 'peakyblinders'){
        window.open('https://www.netflix.com/br/title/80002479');
    }
    if(escolha === 'demonslayer'){
        window.open('https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba/episode-1-flame-hashira-kyojuro-rengoku-819856');
    }
    if(escolha === 'hxh'){
        window.open('https://www.crunchyroll.com/pt-br/hunter-x-hunter/episode-1-departure-x-and-x-friends-584886');
    }
    if(escolha === 'naruto'){
        window.open('https://www.netflix.com/br/title/80000603');
    }
    if(escolha === 'Attack on Titan'){
        window.open('https://www.crunchyroll.com/pt-br/attack-on-titan-dubs/episode-1-to-you-2000-years-in-the-future-the-fall-of-zhiganshina-1-822886');
    }
    if(escolha === 'jujutsu'){
        window.open('https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-1-ryoumen-sukuna-799069');
    }
    if(escolha === 'abyss'){
        window.open('https://www.anitube.site/43064/');
    }
    if(escolha === 'fma'){
        window.open('https://www.crunchyroll.com/pt-br/fullmetal-alchemist-brotherhood/episode-1-fullmetal-alchemist-718473');
    }
    if(escolha === 'dbz'){
        window.open('https://www.oldflix.com.br/Account/Login?ReturnUrl=%2Fwatch%2F5906801e66b25f137444ae5a%3Fm%3D590b40bcf6783d10c87f4d96%26tk%3D58e394539d67292ee0064081');
    }
}

function btnInformacoes(){
    
    if(escolha === 'arcane'){
        window.open('https://www.themoviedb.org/tv/94605-arcane?language=pt-BR');
    }
    if(escolha === 'vikings'){
        window.open('https://www.themoviedb.org/tv/44217-vikings?language=pt-BR');
    }
    if(escolha === 'lacasadepapel'){
        window.open('https://www.themoviedb.org/tv/71446-la-casa-de-papel?language=pt-BR');
    }
    if(escolha === 'Breaking Bad'){
        window.open('https://www.themoviedb.org/tv/1396-breaking-bad?language=pt-BR');
    }
    if(escolha === 'loki'){
        window.open('https://www.themoviedb.org/tv/84958-loki?language=pt-BR');
    }
    if(escolha === 'twd'){
        window.open('https://www.themoviedb.org/tv/1402-the-walking-dead?language=pt-BR');
    }
    if(escolha === 'thewitcher'){
        window.open('https://www.themoviedb.org/tv/71912-the-witcher?language=pt-BR');
    }
    if(escolha === 'peakyblinders'){
        window.open('https://www.themoviedb.org/tv/60574-peaky-blinders?language=pt-BR');
    }
    if(escolha === 'demonslayer'){
        window.open('https://www.themoviedb.org/movie/635302/watch?language=pt-BR');
    }
    if(escolha === 'hxh'){
        window.open('https://www.themoviedb.org/tv/46298-hunter-x-hunter?language=pt-BR');
    }
    if(escolha === 'naruto'){
        window.open('https://www.themoviedb.org/tv/31910-naruto-shipp-den?language=pt-BR');
    }
    if(escolha === 'jujutsu'){
        window.open('https://www.themoviedb.org/tv/95479?language=pt-BR');
    }
    if(escolha === 'abyss'){
        window.open('https://www.themoviedb.org/tv/72636-made-in-abyss?language=pt-BR');
    }
    if(escolha === 'fma'){
        window.open('https://www.themoviedb.org/tv/31911-fullmetal-alchemist/watch?language=pt-BR');
    }
    if(escolha === 'dbz'){
        window.open('https://www.themoviedb.org/tv/12971?language=pt-BR');
    }
    if(escolha === 'Attack on Titan'){
        window.open('https://www.themoviedb.org/tv/1429?language=pt-BR');
    }
}


    