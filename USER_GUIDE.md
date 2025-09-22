# 🎯 사용자 가이드

## 📋 **첫 사용자를 위한 단계별 가이드**

### 🚀 **가장 쉬운 방법 (웹 버전)**
1. `workshop-dashboard.html` 파일을 다운로드
2. 파일을 더블클릭하여 브라우저에서 열기
3. 바로 사용 시작!

### 💻 **데스크톱 앱 사용하기**

#### **Windows 사용자**
1. **Node.js 설치**
   - [https://nodejs.org/](https://nodejs.org/) 방문
   - "LTS" 버전 다운로드 및 설치
   
2. **프로젝트 실행**
   - `install-and-run.bat` 파일 더블클릭
   - 또는 `start.bat` 파일 더블클릭

#### **macOS 사용자**
1. **Node.js 설치**
   - [https://nodejs.org/](https://nodejs.org/) 방문
   - 또는 터미널에서: `brew install node`
   
2. **프로젝트 실행**
   - 터미널에서 `chmod +x install-and-run.sh`
   - `./install-and-run.sh` 실행

#### **Linux 사용자**
1. **Node.js 설치**
   - Ubuntu: `sudo apt install nodejs npm`
   - CentOS: `sudo yum install nodejs npm`
   
2. **프로젝트 실행**
   - 터미널에서 `chmod +x install-and-run.sh`
   - `./install-and-run.sh` 실행

## 🎮 **사용 방법**

### 1. **참가자 등록**
- 설정 탭 → 엑셀에서 이름 복사 → 붙여넣기 → 등록

### 2. **조 편성**
- 조 수 설정 → 조장 지정 → 조원 할당

### 3. **점수 관리**
- 대시보드 → 조 카드 클릭 → 점수 조정

### 4. **데이터 저장**
- **웹 버전**: 수동으로 JSON 파일 다운로드
- **데스크톱 앱**: 자동으로 `workshop-data.json`에 저장

## ❓ **문제 해결**

### **Node.js 관련 오류**
- Node.js가 설치되지 않음 → [https://nodejs.org/](https://nodejs.org/)에서 설치
- 권한 오류 → 관리자 권한으로 실행

### **앱이 실행되지 않음**
- `npm install` 먼저 실행
- 터미널에서 `npm start` 실행

### **데이터가 저장되지 않음**
- 파일 권한 확인
- 디스크 공간 확인

## 📞 **도움이 필요하신가요?**
- [Issues](https://github.com/jhcho1028/workshop-dashboard/issues)에서 질문
- [Discussions](https://github.com/jhcho1028/workshop-dashboard/discussions)에서 토론
