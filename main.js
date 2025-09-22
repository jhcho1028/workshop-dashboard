const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// 데이터베이스 파일 경로
const DATA_FILE = path.join(__dirname, 'workshop-data.json');

let mainWindow;

function createWindow() {
  // 메인 윈도우 생성
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title: '워크샵 대시보드',
    show: false
  });

  // HTML 파일 로드
  mainWindow.loadFile('index.html');

  // 윈도우가 준비되면 표시
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 개발자 도구 (개발 시에만)
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // 윈도우가 닫힐 때
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 앱이 준비되면 윈도우 생성
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 모든 윈도우가 닫히면 앱 종료 (macOS 제외)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 데이터 파일 읽기
ipcMain.handle('read-data', async () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('데이터 파일 읽기 오류:', error);
    return null;
  }
});

// 데이터 파일 쓰기
ipcMain.handle('write-data', async (event, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(DATA_FILE, jsonData, 'utf8');
    return true;
  } catch (error) {
    console.error('데이터 파일 쓰기 오류:', error);
    return false;
  }
});

// 데이터 파일 존재 여부 확인
ipcMain.handle('data-file-exists', async () => {
  return fs.existsSync(DATA_FILE);
});

// 백업 파일 저장
ipcMain.handle('save-backup', async () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const timestamp = new Date().toISOString().split('T')[0];
      const backupFile = path.join(__dirname, `workshop-backup-${timestamp}.json`);
      
      fs.copyFileSync(DATA_FILE, backupFile);
      return backupFile;
    }
    return null;
  } catch (error) {
    console.error('백업 파일 저장 오류:', error);
    return null;
  }
});

// 파일 선택 대화상자
ipcMain.handle('select-file', async () => {
  try {
    const result = await dialog.showOpenDialog(mainWindow, {
      title: '데이터 파일 선택',
      filters: [
        { name: 'JSON 파일', extensions: ['json'] },
        { name: '모든 파일', extensions: ['*'] }
      ],
      properties: ['openFile']
    });

    if (!result.canceled && result.filePaths.length > 0) {
      const filePath = result.filePaths[0];
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('파일 선택 오류:', error);
    return null;
  }
});

// 파일 저장 대화상자
ipcMain.handle('save-file-as', async (event, data) => {
  try {
    const result = await dialog.showSaveDialog(mainWindow, {
      title: '데이터 파일 저장',
      defaultPath: 'workshop-data.json',
      filters: [
        { name: 'JSON 파일', extensions: ['json'] },
        { name: '모든 파일', extensions: ['*'] }
      ]
    });

    if (!result.canceled && result.filePath) {
      const jsonData = JSON.stringify(data, null, 2);
      fs.writeFileSync(result.filePath, jsonData, 'utf8');
      return result.filePath;
    }
    return null;
  } catch (error) {
    console.error('파일 저장 오류:', error);
    return null;
  }
});
