'use strict';//Uso Estrito;

//Background aleatóro da página ao atualizar_
const body = document.querySelector('.body');
let obj_back = ["one","two","three"];
let random_body_back = Math.floor(Math.random()*obj_back.length);
window.addEventListener('load',() => body.classList.add("body_"+obj_back[random_body_back]));

//Array de elementos(categorias - palavra_secretas)_
const words = [
    {
        nome: "IRLANDA",
        categoria:"LUGARES",
        dica: 'É um país do norte da Europa, com capital em Dublin. Apelidado de "Ilha Esmeralda".'
    },
    {
        nome: "EQUADOR",
        categoria:"LUGARES",
        dica: 'Pais sul-americano localizada na america andina, sua capital é a cidade de QUITO.'
    },
    {
        nome: "CHILE",
        categoria:"LUGARES",
        dica: 'pais pertencente a america, sendo o pais com mais vulcoes no mundo, com capital em santiago.'
    },
    {
        nome: "INDONESIA",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "MALDIVAS",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "INGLATERRA",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "GROELANDIA",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "UZBEQUISTAO",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "INDONESIA",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "CREGUENHEM",
        categoria:"LUGARES",
        dica: ''
    },
    {
        nome: "BICICLETA",
        categoria:"TRANSPORTE",
        dica: 'Veículo de duas rodas presas a um quadro, movido pelo esforço do próprio usuário.'
    },
    {
        nome: "LANCHA",
        categoria:"TRANSPORTE",
        dica: 'É um tipo de embarcação a motor, usado para lazer, pesca, prática de esportes aquáticos, ou para serviço de navios ou fiscalização.'
    },
    {
        nome: "NAVIO",
        categoria:"TRANSPORTE",
        dica: 'Grande embarcação, geralmente dotada de um ou mais conveses.'
    },
    {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE",
        dica: 'Transporte aéreo por cabo, de pessoas ou materiais, utilizando um cabo, ou cabos, para a sustentação e a tracção.'
    },
    {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE",
        dica: 'É um veículo motorizado de duas rodas.'
    },
    {
        nome: "BARCO",
        categoria:"TRANSPORTE",
        dica: 'Um artefato construído por um ser humano, capaz de flutuar e se deslocar sobre a água que envolve vários princípios da física e da geometria.'
    },
    {
        nome: "AERONAVE",
        categoria:"TRANSPORTE",
        dica: 'É qualquer máquina capaz de sustentar voo, e a grande maioria também é capaz de alçar voo por meios próprios.'
    },
    {
        nome: "TREM",
        categoria:"TRANSPORTE",
        dica: 'Transporte ferroviário que consiste num ou vários veículos.'
    },
    {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE",
        dica: 'É uma pequena embarcação a remos utilizada para lazer, transporte e competições.'
    },
    {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE",
        dica: 'Um tipo especial de caminho de ferro utilizado para subir grandes pendentes.'
    },
    {
        nome: "XICARA",
        categoria:"OBJETOS",
        dica: 'É um recipiente ou utensílio doméstico, usado para bebidas quentes ou frias.'
    },
    {
        nome: "MOEDA",
        categoria:"OBJETOS",
        dica: 'É um meio de troca pelo qual são efetuadas transações monetárias'
    },
    {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS",
        dica: 'É uma fita flexível, com uma de suas superfícies coberta por uma substância colante que adere à superfície da pele, utilizado em primeiros socorros ou cirurgia.'
    },
    {
        nome: "SINO",
        categoria:"OBJETOS",
        dica: 'A sua forma é aproximadamente um cone oco que ressoa ao ser golpeado.'
    },
    {
        nome: "CHUVEIRO",
        categoria:"OBJETOS",
        dica: 'É a terminação da rede de água numa residência, com orifícios pequenos que possibilitam sua dispersão e assim molhar uma maior área de modo uniforme.'
    },
    {
        nome: "TAMBORETE",
        categoria:"OBJETOS",
        dica: 'É um pequeno banco, geralmente em madeira, baixo e pequeno, sem braços nem encosto.'
    },
    {
        nome: "LAMPADA",
        categoria:"OBJETOS",
        dica: 'Objeto que tranforma energia eletrica em energia luminosa transmmitindo luz artificial para ambiente com puca luminosidade.'
    },
    {
        nome: "BOCAL",
        categoria:"OBJETOS",
        dica: 'É o objeto onde as lampadas sao inseridas para conecta-las a energia.'
    },
    {
        nome: "CORTINA",
        categoria:"OBJETOS",
        dica: 'Objeto utilizado em residencias para cobrir janelas e paredes.'
    },
    {
        nome: "LAPIS",
        categoria:"OBJETOS",
        dica: 'Objeto feito de gafite para escrever.'
    },
    {
        nome: "MELANCIA",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "GOROROBA",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "JANTAR",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "SABOROSO",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "DOCERIA",
        categoria:"ALIMENTOS",
        dica: ''
    },
    {
        nome: "DRAGAO",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "GALINHA",
        categoria:"ANIMAIS",
        dica: 'bixo que come milho'
    },
    {
        nome: "PAVAO",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "CAMELO",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "PERU",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "ZEBRA",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "CALANGO",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "SAGUI",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS",
        dica: ''
    },
    {
        nome: "A ERA DO GELO",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "HOMEM ARANHA",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "CASA MONSTRO",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "TELA QUENTE",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "STRANGER THINGS",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "O REI DO GADO",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "MULHER MARAVILHA",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "O INCRIVEL HULK",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "BOB ESPONJA",
        categoria:"TV E CINEMA",
        dica: ''
    },
    {
        nome: "PANICO NA TV",
        categoria:"TV E CINEMA",
        dica: ''
    }
];

//Sorteio_
const random_words = Math.floor(Math.random()*words.length);

let empty_spaces = {};
//funcao que ira exibir os caracter na tela ao ser chamada_
const words_exib = () => {
    //Elementos de manipulação do DOM_
    const secret_word = document.querySelector('.secret_word');
    const category = document.querySelector('.category');

    //manipulando o DOM_
    secret_word.innerHTML = '';
    category.textContent = words[random_words].categoria;

    for(let i = 0; i < words[random_words].nome.length; i++){  

        //Undefined: A expressao nao tem um valor correto, alem de exibir o undefined na tela;
        //Ambas as estrutuas condicionais dentro desse IF irá exibir apenas os traços_
        if(empty_spaces[i] == undefined){
            if (words[random_words].nome[i] == " ") {
                empty_spaces[i] = " ";
                secret_word.innerHTML += "<div class='letter_space'>" + empty_spaces[i] + "</div>"
            }
            else{
                empty_spaces[i] = "&nbsp;"
                secret_word.innerHTML += "<div class='secret_letter'>" + empty_spaces[i] + "</div>"
            }
        }
        else{
            if (words[random_words].nome[i] == " ") {
                empty_spaces[i] = " ";
                secret_word.innerHTML += "<div class='letter_space'>" + empty_spaces[i] + "</div>"
            }
            else{
                secret_word.innerHTML += "<div class='secret_letter'>" + empty_spaces[i] + "</div>"
            }
        }
    }   
}
words_exib();

//Função para mudar o style dos botoes ao serem clicados_
const mudar_styles = (value,back) => {
    document.querySelector(value).disabled = true;
    document.querySelector(value).style.background = back;
    document.querySelector(value).style.color = "#ffffff";
}

let tentativas = 7;
let pos = 0;
let element_Num = 0;

//Funçao que é chamada quando clico em qualquer botão_
const click_btn = (value) => {
    compara_listas(value);

    if(pos > -1 && tentativas > 0) words_exib();//sendo chamada duas vezes;
}

//Funçao que vai comparar as listas_
const compara_listas = (value) => {
    pos = words[random_words].nome.indexOf(value);

    // -----------------------------------------------------------------
    if(pos > -1 && tentativas > 0){
        if(tentativas > 0){
            mudar_styles('.btn_'+value,"#070");

            for(let i = 0;i < words[random_words].nome.length;i++)
                if(value == words[random_words].nome[i]) empty_spaces[i] = value;        
        }  
    }

    else{
        tentativas--;
        mudar_styles('.btn_'+value,"#900");
        puppet_image();

        if(tentativas == 0) msg_model_derrota();
        if(element_Num == 1) tentativas = 0;
    }

    // -----------------------------------------------------------------
    let vitory = true;
    for(let i = 0;i < words[random_words].nome.length;i++)
        if(words[random_words].nome[i] != empty_spaces[i]) vitory = false;

    if((vitory == true) && (element_Num == 0)){
        element_Num = 1;
        puppet_image();
        msg_model_vitory();
    }
}

const puppet = document.querySelector('.puppet');
const puppet_image = () => {
    if(element_Num == 1) puppet.classList.add('puppet_vitory');//Vitoria 
    if(tentativas == 6) puppet.classList.add('puppet_one');//Cabeça
    if(tentativas == 5) puppet.classList.add('puppet_two');//cabeca
    if(tentativas == 4) puppet.classList.add('puppet_three');//torax
    if(tentativas == 3) puppet.classList.add('puppet_four');//Braco esquerdo
    if(tentativas == 2) puppet.classList.add('puppet_five');//Braco direito
    if(tentativas == 1) puppet.classList.add('puppet_six');//perna esquerda
    if(tentativas == 0) puppet.classList.add('puppet_derrota');//Perna direita - Derrota
}// ---------------------------------------------------------------------------


//Models_

const smaill_vit_msg = document.querySelector('.smaill_vit_msg');
const smaill_der_msg = document.querySelector('.smaill_der_msg');

const modal_vitory = document.querySelector('.modal_vitory');
const msg_model_vitory = () => {
     modal_vitory.style.display = 'block';
     smaill_vit_msg.textContent = words[random_words].nome;
};

const modal_derrota = document.querySelector('.modal_derrota');
const msg_model_derrota = () => {
    modal_derrota.style.display = 'block';
    smaill_der_msg.textContent = words[random_words].nome;
};

const close_modal = () => {
    modal_vitory.style.display = 'none';
    modal_derrota.style.display = 'none';
}

const btn_dica_modal = document.querySelector('.btn_dica_modal');
const btn_close_dica = document.querySelector('.btn_close_dica');
const modal_dica = document.querySelector('.modal_dica');
const smaill_dica_msg = document.querySelector('.smaill_dica_msg');
btn_dica_modal.addEventListener('click',() => {
    modal_dica.classList.add("dica");
    smaill_dica_msg.textContent = words[random_words].dica;
});
btn_close_dica.addEventListener('click',() => modal_dica.classList.remove("dica"));