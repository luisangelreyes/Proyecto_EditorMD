const {app, Menu, shell } = require('electron'); 
const { type } = require('node:os');
const { BrowserWindow } = require('electron');

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
                    const window = BrowserWindow.getFocusedWindow();
                    window.webContents.send(
                        'editor-event',
                        'toggle-bold'
                    );
                }
            }
        ]
    }

];

if (process.platform === 'win32') {
    template.unshift({
        label: app.getName(),
        submenu:[
            {
                label:'Acerca de',
                role: 'about'},
            {type: 'separator'},
            {
                label: 'Salir',
                role: 'quit',
            }
        ]
    })
}

if (process.env.DEBUG){
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
 const menu = Menu.buildFromTemplate(template);

module.exports = menu;


