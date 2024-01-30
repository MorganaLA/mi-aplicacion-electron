const { ipcRenderer, contextBridge } = require('electron');

// Exponer ipcRenderer al contexto de la ventana de renderización de forma segura
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  receive: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});

// Exponer una función de utilidad
window.myUtilityFunction = () => {
  // Lógica de la función de utilidad
  console.log('Esta es una función de utilidad desde preload.js');
};
