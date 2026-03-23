const {app, Menu, shell } = require('electron'); 
const { type } = require('node:os');

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
            accelerator: 'Alt+R'
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


 const menu = Menu.buildFromTemplate(template);

module.exports = menu;


