let button = document.getElementById('cardapio-button');
button.addEventListener('click', function() {
    selectCards();
    
});

//arrays das imgs de comidas e textos
let array1 = ['/assets/agua.jpg', '/assets/carb.jpg', '/assets/lipideos.jpg', '/assets/sais.jpg', '/assets/vitaminas.jpg'];
let txt1 = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laborum reiciendis. Doloribus ullam illum iste, culpa asperiores recusandae quasi delectus necessitatibus blanditiis, dicta, consequuntur commodi? Eligendi quia nisi velit saepe.', 'b', 'c', 'd', 'e', 'f', 'g'];
let array2 = ['/assets/seg-img.png', '/assets/seg-img.png', '/assets/seg-img.png', '/assets/seg-img.png', '/assets/seg-img.png', '/assets/seg-img.png'];


function setCards(tipo, p) {
    let imgs = document.querySelectorAll('.img-card');
    imgs.forEach(function (img, i) {
        if (i <= tipo.length) {
            img.setAttribute('src', tipo[i]);
        }
    });

    let paragrafo = document.querySelectorAll('.p-card');
    paragrafo.forEach(function(pg, i2) {
        if(i2 <= p.length) {
            pg.innerHTML = p[i2];
        }
    });
}

function selectCards() {
    let input = document.getElementById('input-cardapio');
    let cards;
    let card = document.querySelector('.cards-cardapio');
    let msg = document.querySelector('#mensagem-erro');
    let rotinha = document.querySelector('.rotina');
    
    switch (input.value) {
        case 'opcao 1':
            cards = setCards(array1, txt1);
            card.style.display = 'grid';
            msg.style.display = 'none';
            rotinha.style.display = 'flex';
            button.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'opcao 2':
            cards = setCards(array2, 'aiiii meu sql');
            card.style.display = 'grid';
            msg.style.display = 'none';
            rotinha.style.display = 'flex';
            button.scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            card.style.display = 'none';
            msg.style.display = 'block';
            rotinha.style.display = 'none';
    }

    input.value = '';

    return cards;
}

let count_cafe = 0;
let count_almoco = 0;
let count_janta = 0;
let listNames = new Array();

$('.button-acao').click(function() {
    let nameFood = $(this).parent().find('p').text();
    
    switch(true) {
        case $(this).hasClass('cafe'):
            count_cafe = addFood(count_cafe, nameFood, '#ol-cafe-da-manha');
            break;
        case $(this).hasClass('almoco'):
            count_almoco = addFood(count_almoco, nameFood, '#ol-almoco');
            break;
        case $(this).hasClass('janta'):
            count_janta = addFood(count_janta, nameFood, '#ol-janta');
            break;
        default:
            console.error('Classe desconhecida');
    }
});

function addFood(count, name, type) {
    if (count < 3) {
        if (listNames.includes(name)) {
            alert('Elemento já inserido');
        } else {
            listNames.push(name);
            $(`<li>${name}</li>`).appendTo(type);
            count++;
        }
    } else {
        alert('Você atingiu o máximo de elementos');
    }
    return count;

}
