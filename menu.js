//const { app, Menu, shell } = require('electron');
//const {BrowserWindow} = require('electron');
//const {globalShortcut} = require('electron');
// const { type } = require('node:os');
// const { app, Menu, shell, ipcMain, BrowserWindow, globalShortcut, dialog } = require('electron');

const { app, Menu, shell, BrowserWindow, globalShortcut } = require('electron');

const template = [
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
            {
                label: 'Acerca de',
                role: 'about'
            },
            { type: 'separator' },
            {
                label: 'Salir',
                role: 'quit',
            }
        ]
    })
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
        const window = BrowserWindow.getAllWindows()[0];
        window.webContents.send('editor-event', 'save');

    });
});

const menu = Menu.buildFromTemplate(template);

module.exports = menu;


