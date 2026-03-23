const {app, BrowserWindow, Menu} = require ('electron');
const { readSync } = require('fs');
const menu = require ('./menu');

let window; 

app.on('ready', () => {
    window = new BrowserWindow ({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile('index.html');
});

Menu.setApplicationMenu(menu);