const titleElement = document.getElementById('title');


function hideTitle() {
            titleElement.style.opacity = '0%';
        }


setTimeout(hideTitle, 4000); 

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







