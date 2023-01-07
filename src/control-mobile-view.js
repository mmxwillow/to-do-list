const goBackBtn = document.querySelector('#go-back');
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu');
const cover = document.querySelector('.sidebar-cover');
const showPopup = document.querySelector('.add-project-popup');
let mediaQuery = window.matchMedia('(max-width: 700px)');

export function controlMobileView() {
    goBackBtn.addEventListener('click', () => {
        document.querySelector('.task-view').classList.remove('visible');
        document.querySelector('.content').classList.remove('hidden');
    })

    showMenuButton();

    mediaQuery.addEventListener('change', showMenuButton);

    menu.addEventListener('click', () => {
        sidebar.classList.remove('moved');
        cover.classList.remove('hidden');
        showPopup.classList.add('hidden');
    })

    cover.addEventListener('click', () => {
        sidebar.classList.add('moved');
        cover.classList.add('hidden')
    })
}

function showMenuButton(){
    if(mediaQuery.matches) {
        document.querySelector('header span').classList.add('hidden');
        document.querySelector('.menu').classList.remove('hidden');
    }
    else{
        document.querySelector('header span').classList.remove('hidden');
        document.querySelector('.menu').classList.add('hidden');
    }

}