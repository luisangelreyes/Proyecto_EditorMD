const {app, BrowserWindow, Menu} = require ('electron');
const { readSync } = require('fs');
const menu = require ('./menu');
const { ipcMain } = require('electron');



ipcMain.on('editor-reply', (event,arg)=> {
    console.log(`Received reply from web page: ${arg}`);
})


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
