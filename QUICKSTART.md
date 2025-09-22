# 워크샵 대시보드

## 🚀 빠른 시작

### 웹 버전 (브라우저)
1. `workshop-dashboard.html` 파일을 브라우저에서 열기
2. 설정 탭에서 참가자 등록
3. 대시보드에서 점수 관리

### Electron 앱 (데스크톱)
1. Node.js 설치 (https://nodejs.org/)
2. 터미널에서 다음 명령어 실행:
   ```bash
   npm install
   npm start
   ```
3. 또는 `start.bat` 파일 더블클릭

## 📁 파일 구조
- `workshop-dashboard.html` - 웹 버전
- `index.html` - Electron 앱 버전
- `main.js` - Electron 메인 프로세스
- `preload.js` - Electron 보안 브리지
- `package.json` - 프로젝트 설정
- `start.bat` - Windows 실행 파일

## 💾 데이터 저장
- **웹 버전**: 브라우저 localStorage + 수동 JSON 다운로드
- **Electron 앱**: 자동으로 `workshop-data.json` 파일에 저장

## 🛠️ 개발
```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm start

# Windows 실행 파일 빌드
npm run build-win
```
