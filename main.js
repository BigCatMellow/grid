const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 220,
        height: 250,
        frame: false,
        alwaysOnTop: true,
        resizable: true,
        skipTaskbar: false,
        webPreferences: {
            nodeIntegration: false
        }
    });
    
    win.loadFile('sudoku_discreet.html');
    
    // Drag window by clicking anywhere
    win.setMovable(true);
});

app.on('window-all-closed', () => {
    app.quit();
});
