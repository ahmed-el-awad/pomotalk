const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL("https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app");
};

app.whenReady().then(() => {
  for (let i = 0; i <= 3; i++) {
    createWindow();
  }

  app.on("activate", () => {
    createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform != "win32") {
    console.log("lol bye");
    app.quit();
  }
});
