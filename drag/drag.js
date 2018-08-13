const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
// const dragFileLink = document.getElementById('drag-file-link')

// ipcRenderer.on('main-process-messages',(event,message)=>{
//   console.log('message from main process:',message)
// })
var a = 100
ipcRenderer.on('mian-process-messages',(event,message)=>{
  console.log(message)
})
ipcRenderer.send('sub-process-messages','message from sub process')
// dragFileLink.addEventListener('dragstart', (event) => {
//   event.preventDefault()
//   ipcRenderer.send('ondragstart', __filename)
// })

// // 监听webContents.send主动传递的消息。
// ipcRenderer.on('main-process-messages', (event, message) => {
//   console.log('message from Main Process: ' , message);  // Prints Main Process Message.
// });
//
// // 使用ipcRenderer触发同步消息
// console.log('synchronous-message: ', ipcRenderer.sendSync('synchronous-message', 'ping'));
//
// // 使用ipcRenderer触发异步消息，消息结果使用监听来完成。
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log('asynchronous-reply: %O %O', event, arg);
// });
// console.log('asynchronous-reply return value: ', ipcRenderer.send('asynchronous-message', 'ping'));