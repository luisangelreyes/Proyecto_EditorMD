const { type } = require('node:os');
const fs = require ('fs');
const { app, Menu, shell, BrowserWindow, globalShortcut,dialog } = require('electron');


function saveFile() {
    console.log('Guardando Archivo');
    const window = BrowserWindow.getFocusedWindow();
    if (window) {
        window.webContents.send('editor-event', 'save');
    }
}

function loadFile() {
    const window = BrowserWindow.getFocusedWindow();
    const options = {
        title: 'Elegir un archivo Markdown',
        filters: [
            { name: 'Archivos Markdown', extensions: ['md'] },
            { name: 'Archivos de texto', extensions: ['txt'] }
        ]
    };

    dialog.showOpenDialog(window, options).then(result => {
        if (!result.canceled && result.filePaths.length > 0) {
            try {
                const content = fs.readFileSync(result.filePaths[0]).toString();
                window.webContents.send('load', content);
            } catch (error) {
                console.error("Error al leer el archivo:", error);
            }
        }
    }).catch(err => {
        console.error("Error en el diálogo de apertura:", err);
    });
}

const template = [
    {
        label: 'Archivo',
        submenu: [
            {
                label: 'Abrir',
                accelerator: 'Ctrl+O',
                click() { loadFile(); }
            },
            {
                label: 'Guardar',
                accelerator: 'Ctrl+S',
                click() { saveFile(); }
            }
        ]
    },
    {
        label: 'Ayuda',
        role: 'help',
        submenu: [
            {
                label: 'Acerca del componente Editor',
                click() {
                    shell.openExternal('https://simplemde.com');
                }
            }
        ]
    },
    {
        label: 'Formato',
        submenu: [
            {
                label: 'Toggle Bold',
                click() {
                    const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0];
                    if (window) {
                        window.webContents.send(
                            'editor-event',
                            'toggle-bold'
                        );
                    }
                }
            }
        ]
    }
];

if (process.platform === 'win32') {
    template.unshift({
        label: app.getName(),
        submenu: [
            { label: 'Acerca de', role: 'about' },
            { type: 'separator' },
            { label: 'Salir', role: 'quit' }
        ]
    });
}

if (process.env.DEBUG) {
    template.push({

        label: 'Depurador',
        submenu: [
            {
                label: 'Herramientas de Desarrollador',
                role: 'toggleDevTools'
            },
            {
                type: 'separator'
            },
            {
                label: 'Recarga',
                role: 'reload',
                accelerator: 'Ctrl+R'
            }
        ]

    });
}

app.on('ready', () => {
    globalShortcut.register('Ctrl+S', () => {
        console.log('Guardando Archivo');
        const window = BrowserWindow.getFocusedWindow();
        window.webContents.send('editor-event', 'save');
    });
    globalShortcut.register('Ctrl+O', () => { loadFile(); });

});

const menu = Menu.buildFromTemplate(template);

module.exports = menu;


