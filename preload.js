const { contextBridge, ipcRenderer } = require('electron');

// 안전한 API를 렌더러 프로세스에 노출
contextBridge.exposeInMainWorld('electronAPI', {
  // 데이터 파일 읽기
  readData: () => ipcRenderer.invoke('read-data'),
  
  // 데이터 파일 쓰기
  writeData: (data) => ipcRenderer.invoke('write-data', data),
  
  // 데이터 파일 존재 여부 확인
  dataFileExists: () => ipcRenderer.invoke('data-file-exists'),
  
  // 백업 파일 저장
  saveBackup: () => ipcRenderer.invoke('save-backup'),
  
  // 파일 선택
  selectFile: () => ipcRenderer.invoke('select-file'),
  
  // 파일 저장
  saveFileAs: (data) => ipcRenderer.invoke('save-file-as', data)
});
