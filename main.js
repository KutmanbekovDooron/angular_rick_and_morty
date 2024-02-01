const {
    app,
    BrowserWindow
} = require('electron')
const url = require('url')
const path = require('path')

let appWindow

function onReady() {
    win = new BrowserWindow({ width: 2900, height: 6700});

    win.loadURL(
      url.format({
        pathname: path.join(
          __dirname,
          "dist/rick_and_morty/index.html"
        ),
        protocol: "file:",
        slashes: true,
      })
    );
    win.webContents.openDevTools()
  }

// function createWindow() {
//     appWindow = new BrowserWindow({
//         width: 1000,
//         height: 800
// })

// appWindow.loadFile('dist/rick_and_morty/index.html')

// appWindow.on('closed', function(){
//     appWindow = null
// })

// }


app.on("ready", onReady);


// app.whenReady().then(() => {
//     onReady()
// })