const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const { readSync } = require('fs');
const menu = require('./menu');
const fs = require ('fs');
const { title } = require('process');

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadFile('index.html');
    require('electron').Menu.setApplicationMenu(menu);
});





ipcMain.on('editor-reply', (event, arg) => {
    console.log(`Received reply from web page: ${arg}`);
});
ipcMain.on('save', (event, arg) => {
    const window = BrowserWindow.getAllWindows()[0];
    const options = {
        title: 'Guardar Archivo MD',
        filters:[
            {name: 'Archivos MD', extensions: ['md'] }
        ]
    };

    dialog.showSaveDialog(window, options).then(result => {
        if (!result.canceled && result.filePath){
            try {
                fs.writeFileSync(result.filePath, arg);
                console.log(`¡Archivo guardado exitosamente en: ${result.filePath}!`);
            } catch (error){
                console.error("Hubo un error al guardar el archivo:", error);
            }
        }else{
            console.log("El usuario cancelo el guardado.");
        }
    }).catch(err =>{
console.error("Error en el diálogo de guardado:", err);
    });

});
