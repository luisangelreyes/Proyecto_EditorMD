const {app, BrowserWindow} = require ('electron');
const { readSync } = require('fs');

let window; 

app.on('ready',    () => {
    window = new BrowserWindow ({
        width: 1920,
        height: 1200,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile('index.html');
})