const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;


minimizebtn.addEventListener('click', function (event) {
    ipc.send('minimizeapp');
});
maximizebtn.addEventListener('click', function (event) {
    ipc.send('maximizeapp');
});
closebtn.addEventListener('click', function (event) {
    ipc.send('closeapp');
});
