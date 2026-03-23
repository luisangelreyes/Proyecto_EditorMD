const { Menu, shell } = require('electron'); 

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
            }
        ]
    }
];


 const menu = Menu.buildFromTemplate(template);

module.exports = menu;


