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

setTimeout(showSlateAndBtn, 2700)

setTimeout(hideTitle, 2500); 

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

document.addEventListener('DOMContentLoaded', () => {
    loadContent()


    btn1.addEventListener('click', toggleStyles);
    btn2.addEventListener('click', toggleMarkdownHtml);
});



setInterval(saveContent, 3000);

let isLight = false;

function toggleStyles() {
    const siteTheme = document.querySelector('body');
    const buttons = document.querySelector('button')
    
    if (!isLight) {
        siteTheme.style.backgroundColor = 'white';
        siteTheme.style.color = 'black';
        buttons.style.color = 'black'
    } else {
        
        siteTheme.style.backgroundColor = '#18181a'; 
        siteTheme.style.color = 'rgb(231, 231, 231)'; 
        buttons.style.color = 'white'
    }

    isLight = !isLight;
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', toggleStyles);

const converter = new showdown.Converter();
const slateElement = document.querySelector('.slate');
const btn2 = document.getElementById('btn2');

let isMarkdown = true;
let markdownContent = '';

function toggleMarkdownHtml() {
    const content = slateElement.innerText; 

    if (isMarkdown) {
        markdownContent = content;
        const htmlContent = converter.makeHtml(content);
        slateElement.innerHTML = '';
        slateElement.insertAdjacentHTML('beforeend', htmlContent);
    } else {
        const markdownText = markdownContent.replace(/\n/g, '<br>');
        slateElement.innerHTML = markdownText;

    }

    isMarkdown = !isMarkdown;
}




btn2.addEventListener('click', toggleMarkdownHtml);
