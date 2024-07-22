const tabs = document.getElementsByClassName('tab');
const tabsContent = document.getElementsByClassName('tab__content');
let tabIndex = 0;

for (let i = 0; i < tabs.length; i++) {
    tabs[i].index = i;
    tabsContent[i].index = i;
    tabs[i].addEventListener('click', function() {
      selectTab(this.index);
    })
}

const selectTab = (newIndex) => {
  if(tabIndex === newIndex)
    return;
  tabs[tabIndex].classList.remove('tab_active');
  tabsContent[tabIndex].classList.remove('tab__content_active');
  tabs[newIndex].classList.add('tab_active');
  tabsContent[newIndex].classList.add('tab__content_active');
  tabIndex = newIndex;
}
