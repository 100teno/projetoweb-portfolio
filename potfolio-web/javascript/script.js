// menu superior responsivo (menu hamburguer adaptavel para telas menores)
// fixando a barra de navegacao sempre no topo, independente da scrollagem 

let iconeMenu = document.querySelector('#icone-menu');
let navegacao = document.querySelector('.navegacao');

iconeMenu.onclick = () => {
    iconeMenu.classList.toggle('bx-x');
    navegacao.classList.toggle('active');
}

let linksNavegacao = document.querySelector('header nav a')
let section = document.querySelector('section')

window.onscroll = () => {
    section.foreach(segundo => {
        let top = window.scrollY;
        let desvio = segundo.desvioTop - 150;
        let altura = segundo.desvioAltura;
        let getId = segundo.getAttribute('id');

        if (top >= desvio && top < desvio + altura) {
            linksNavegacao.foreach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
                classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('fixado', window.scrollY > 100);

    navegacao.classList.remove('active');
    iconeMenu.classList.remove('bx-x');
}