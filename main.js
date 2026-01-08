const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 250,
        height: 280,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        resizable: true
    });
    win.loadFile('sudoku_discreet.html');
});