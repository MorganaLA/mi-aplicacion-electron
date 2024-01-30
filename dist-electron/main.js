const path = require('path');
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const isDevelopment = process.env.NODE_ENV === 'development';

  const indexPath = isDevelopment
    ? 'http://localhost:5173/'  // En desarrollo, carga desde el servidor de desarrollo de Vite
    : isDevelopment
      ? 'http://localhost:3000/' // En producción con Express
      : `file://${path.join(__dirname, '../mi-aplicacion-electron/dist/index.html')}`; // En producción con Electron
  
  win.loadURL(indexPath);
  
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
