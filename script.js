'use strict';

const buttons = document.querySelector('.buttons');
const numOfDone = 1;
let submenuId;
let menuShowed = false;

for (let i = 1; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = `Лаба №${i}`;
    btn.className = 'btn';
    btn.onclick = () => showProtocol(i);
    btn.disabled = i > numOfDone;
    buttons.appendChild(btn);
}

function showProtocol(n) {
    const frame = document.querySelector('iframe');
    frame ? frame.remove() : '';

    const iframe = document.createElement('iframe');
    iframe.src = `labs/lab${n}.html`;
    iframe.width = '90%';
    iframe.height = '600px';
    document.body.appendChild(iframe);
}

function showSubmenu(id) {
    let submenu;

    if (submenuId) {
        submenu = document.querySelector(`#${submenuId}`);
        submenu.style.display = 'none';
    }

    if (submenuId === id) {
        submenuId = undefined;
        return;
    }

    submenuId = id;
    submenu = document.querySelector(`#${submenuId}`);
    submenu.style.display = 'block';
}

function openNav() {
    menuShowed = !menuShowed;
    const sidemenu = document.querySelector('.sidenav');
    const icon = document.querySelector('#icon');
    if (menuShowed) {
        icon.innerHTML = '&times;';
        icon.style.fontSize = '36px';
        icon.style.padding = '8px 0 0 25px';
        sidemenu.style.width = '300px';
    } else {
        icon.innerHTML = '&#9776;';
        icon.style.fontSize = '20px';
        icon.style.padding = '15px 0 0 25px';
        sidemenu.style.width = '0';
    }
}
