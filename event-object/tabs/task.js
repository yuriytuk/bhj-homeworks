const tabs = document.getElementsByClassName('tab'),
    tabsContent = document.getElementsByClassName('tab__content');

handler();
function handler() {
    for (let i=0; i<tabs.length; i++) {
        tabs[i].addEventListener('click', handler1);
    }
}

function handler1() {
    for (let i=0; i<tabs.length; i++) {
        if (event.target == tabs[i]) {
            tabs[i].classList.add('tab_active');
            tabsContent[i].classList.add('tab__content_active'); 
        } else {
            tabs[i].classList.remove('tab_active');
            tabsContent[i].classList.remove('tab__content_active');
        }
    }
}