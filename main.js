const titleElement = document.getElementById('title');
const slate = document.querySelector('.slate')
const btns = document.querySelector('.btn-div')


function hideTitle() {
            titleElement.style.opacity = '0%';
        }

function showSlateAndBtn() {
            slate.style.opacity = '100%'
            btns.style.opacity = '100%'

}

setTimeout(showSlateAndBtn, 3200)

setTimeout(hideTitle, 3000); 

function saveContent() {
    const editableDiv = document.querySelector('.slate');
    const content = editableDiv.innerHTML;
    localStorage.setItem('editableContent', content);
}

function loadContent() {
    const editableDiv = document.querySelector('.slate');
    const savedContent = localStorage.getItem('editableContent');
    if (savedContent) {
        editableDiv.innerHTML = savedContent;
    }
}

document.addEventListener('DOMContentLoaded', loadContent);


setInterval(saveContent, 3000);

let isLight = false;

function toggleStyles() {
    const siteTheme = document.querySelector('body');
    
    if (!isLight) {
        siteTheme.style.backgroundColor = 'white';
        siteTheme.style.color = 'black';
    } else {
        
        siteTheme.style.backgroundColor = '#18181a'; 
        siteTheme.style.color = 'rgb(231, 231, 231)'; 
    }

    isLight = !isLight;
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', toggleStyles);






