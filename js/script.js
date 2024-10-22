window.onload = function () {
    alert("Сторінка повністю завантажена!");
};

window.onunload = function () {
    alert("Користувач залишає сторінку.");
};

window.onafterprint = function () {
    alert("Сторінка була надрукована.");
};

window.onbeforeprint = function () {
    alert("Сторінка буде надрукована.");
};

window.onbeforeunload = function () {
    return "Ви дійсно хочете залишити сторінку?";
};

window.onblur = function () {
    console.log("Вікно втратило фокус.");
};

window.onerror = function (message) {
    console.log("Сталася помилка: " + message);
};

window.onfocus = function () {
    console.log("Вікно отримало фокус.");
};

window.onhaschange = function () {
    console.log("Стан історії браузера змінився.");
};

window.onmessage = function (event) {
    console.log("Отримано повідомлення: " + event.data);
};

window.onoffline = function () {
    alert("Документ перейшов в автономний режим.");
};

window.ononline = function () {
    alert("Документ тепер в мережі.");
};

window.onpagehide = function () {
    console.log("Сторінка приховується.");
};

window.onpageshow = function () {
    console.log("Сторінка відображається.");
};

window.onpopstate = function (event) {
    console.log("Спрацьовування події popstate: " + event.state);
};

window.onredo = function () {
    console.log("Операцію повторено.");
};

window.onresize = function () {
    console.log("Розмір вікна змінено.");
};

window.onstorage = function (event) {
    console.log("Подія зберігання: " + event.key + " змінено на " + event.newValue);
};

window.onundo = function () {
    console.log("Операцію скасовано.");
};

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, b, i');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            alert(`${element.tagName} натиснуто!`);
            element.style.color = "blue";
        });

        element.addEventListener('dblclick', () => {
            alert(`${element.tagName} двічі натиснуто!`);
            element.style.color = "green";
        });

        element.addEventListener('drag', () => {
            console.log(`${element.tagName} перетягується`);
        });

        element.addEventListener('dragend', () => {
            alert(`${element.tagName} перетягування завершено!`);
            element.style.opacity = "1";
        });

        element.addEventListener('dragenter', () => {
            alert(`${element.tagName} увійшов в зону скидання!`);
            element.style.border = "2px solid green";
        });

        element.addEventListener('dragleave', () => {
            alert(`${element.tagName} залишив зону скидання!`);
            element.style.border = "none";
        });

        element.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        element.setAttribute('draggable', true);

        element.addEventListener('dragstart', () => {
            alert(`${element.tagName} перетягування розпочато!`);
            element.style.opacity = "0.5";
        });

        element.addEventListener('drop', (event) => {
            event.preventDefault();
            alert(`${element.tagName} елемент скинуто!`);
        });

        element.addEventListener('mousedown', () => {
            element.style.fontWeight = "bold";
        });

        element.addEventListener('mousemove', () => {
            element.style.border = "1px dashed red";
        });

        element.addEventListener('mouseout', () => {
            element.style.backgroundColor = "";
        });

        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = "lightgray";
        });

        element.addEventListener('mouseup', () => {
            element.style.fontWeight = "normal";
        });

        if (element.tagName === 'P') {
            element.addEventListener('scroll', () => {
                alert(`${element.tagName} прокручується!`);
            });
        }
    });

    window.addEventListener('mousewheel', () => {
        alert('Колесо миші переміщено!');
    });
});
