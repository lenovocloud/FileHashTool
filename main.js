const {app,BrowserWindow} = require('electron')
const {ipcMain} = require('electron')
let win
function createWindow () {
    win = new BrowserWindow({width:800,height:600})
    win.loadFile('index.html')
    win.webContents.openDevTools()

    win.on('closed',()=> {
        // print('window 关闭了')
        console.log('window 关闭了')
        win = null
    })
    win.webContents.on('did-finish-load',()=> {    
        console.log('加载完成')
        win.webContents.send('main-process-messages','webContents event "did-finish-load" called')
    })
}
app.on('ready',createWindow)

app.on('window-all-closed',()=> {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', ()=> {
    if (win === null) {
        createWindow()
    }
})

let self = this

ipcMain.on('sub-process-messages',(event,message) => {
    console.log(message)
    console.log(event)
    event.sender.send('mian-process-messages','messages from main process')
})


// ipcMain.on('ondragstart',(event,filePath) => {
//     event.sender.startDrag({
//         file:filePath,
//         icon:'/path/to/icon.png'
//     })
//     console.log(event,filePath)
// })
