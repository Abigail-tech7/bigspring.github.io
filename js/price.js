const tabContainer = document.querySelector('.AllFAQTab');
// console.log(tabContainer)

tabContainer.addEventListener('click', function(e){
// console.log(e.target)
// const tabClicked = e.target.classList.contains('FAQtab');
const tab = e.target.closest(".FAQtab");
if(!tab) return;
tab.classList.toggle('open');
tab.classList.toggle('showAns');


const showTab = tab.querySelector('.FAQANSContainner');
if(showTab.style.maxHeight) showTab.style.maxHeight = null;
else{
    showTab.style.maxHeight = showTab.scrollHeight + 'px';
    
}

})
