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
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function loadContent() {
    const editableDiv = document.querySelector('.slate');
    const savedContent = localStorage.getItem('editableContent');
    if (savedContent) {
        editableDiv.innerHTML = savedContent;
    }
    if (localStorage.getItem('theme') === 'light') {
        toggleStyles();
    }

}

document.addEventListener('DOMContentLoaded', () => {
    loadContent()
    updateWordCount();


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
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
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


const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', downloadContent);

function downloadContent() {
    const content = slateElement.innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'your slate.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

function updateWordCount() {
    const content = slateElement.innerText;
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const wordCountElement = document.getElementById('wordCount');
    wordCountElement.textContent = `Words: ${words}`;
}

slateElement.addEventListener('input', updateWordCount);

