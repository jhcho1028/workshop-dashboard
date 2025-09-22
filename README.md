# 워크샵 대시보드 (Electron 앱)

워크샵 진행을 위한 대화형 점수 현황판 및 조 관리 시스템입니다. Electron으로 제작되어 데스크톱 앱으로 실행됩니다.

![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🚀 주요 기능

### 📊 실시간 점수 관리
- 조별 점수 실시간 업데이트
- 점수 추가/차감 버튼 (-30 ~ +30점)
- 순위 자동 정렬 및 시각적 표시
- 점수 초기화 기능

### 👥 참가자 및 조 관리
- 엑셀 복사/붙여넣기로 참가자 일괄 등록
- 조 수 설정 (1~20개 조)
- 조장 및 조원 할당
- 커스텀 조 이름 설정
- 중복 할당 방지 시스템

### 💾 자동 파일 저장
- **자동 저장**: `workshop-data.json` 파일에 자동으로 저장
- **폴더 이동**: 앱과 같은 폴더를 옮기면 그대로 작동
- **오프라인 완전 지원**: 인터넷 연결 없이도 완전히 동작
- **백업 기능**: 수동 백업 파일 생성 가능

### 🎨 사용자 친화적 인터페이스
- 반응형 디자인 (모바일 지원)
- 직관적인 탭 기반 네비게이션
- 시각적 피드백 및 호버 효과
- 한국어 완전 지원

## 📱 사용법

### 1. 앱 실행
```bash
npm start
```

### 2. 기본 설정
1. **설정** 탭으로 이동
2. 엑셀에서 참가자 이름을 복사하여 붙여넣기
3. **참가자 등록** 버튼 클릭
4. 조 수 설정 및 조 편성

### 3. 점수 관리
1. **대시보드** 탭에서 조 카드 클릭
2. 점수 조정 패널에서 원하는 점수 버튼 클릭
3. 실시간으로 점수판 업데이트 확인

### 4. 파일 관리
- **자동 저장**: 데이터 변경 시 자동으로 `workshop-data.json`에 저장
- **외부 파일 가져오기**: 다른 JSON 파일에서 데이터 복원
- **백업 파일 저장**: 안전한 백업 파일 생성

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Desktop**: Electron
- **Storage**: 로컬 파일 시스템 (JSON)
- **Design**: CSS Grid, Flexbox, Gradient
- **Compatibility**: Windows, macOS, Linux

## 📋 시스템 요구사항

- Node.js 16.0.0 이상
- Windows 10/11, macOS 10.14+, 또는 Linux
- 최소 4GB RAM
- 100MB 여유 디스크 공간

## 🚀 설치 및 실행

### 📥 **방법 1: 간단한 실행** (추천)
1. **Node.js 설치**: [https://nodejs.org/](https://nodejs.org/)에서 다운로드
2. **프로젝트 다운로드**: 이 저장소를 ZIP으로 다운로드하거나 클론
3. **실행**: `start.bat` 파일 더블클릭 (Windows) 또는 터미널에서 `npm start`

### 💻 **방법 2: 터미널 사용**
```bash
# 저장소 클론
git clone https://github.com/jhcho1028/workshop-dashboard.git
cd workshop-dashboard

# 의존성 설치 (처음 한 번만)
npm install

# 앱 실행
npm start
```

### 🌐 **방법 3: 웹 버전** (가장 간단)
- `workshop-dashboard.html` 파일을 브라우저에서 열기
- 별도 설치 없이 바로 사용 가능

### 📦 **방법 4: 실행 파일 빌드**
```bash
# Windows 실행 파일 생성
npm run build-win

# macOS 실행 파일 생성
npm run build-mac

# Linux 실행 파일 생성
npm run build-linux
```

## 📁 프로젝트 구조

```
workshop-dashboard/
├── main.js              # Electron 메인 프로세스
├── preload.js           # 보안 통신 브리지
├── index.html           # 메인 HTML 파일
├── package.json         # 프로젝트 설정
├── workshop-data.json   # 데이터 파일 (자동 생성)
└── dist/                # 빌드된 실행 파일
```

## 🔧 주요 기능 상세

### 자동 파일 저장
- **위치**: 앱과 같은 폴더의 `workshop-data.json`
- **타이밍**: 데이터 변경 시마다 자동 저장
- **이식성**: 폴더 전체를 옮기면 그대로 작동

### 참가자 관리
- **엑셀 호환**: 탭으로 구분된 데이터 지원
- **중복 방지**: 동일한 이름 자동 감지
- **일괄 삭제**: 클릭으로 개별 참가자 삭제

### 조 편성
- **유연한 조 수**: 1~20개 조 설정 가능
- **조장 지정**: 각 조별 조장 설정
- **조원 할당**: 최대 6명까지 조원 할당
- **커스텀 이름**: 조 이름 커스터마이징

### 점수 시스템
- **실시간 업데이트**: 즉시 반영되는 점수 변경
- **순위 표시**: 금/은/동 메달 색상 구분
- **점수 범위**: -30점부터 +30점까지 조정 가능
- **초기화**: 전체 점수 일괄 리셋

## 🎯 사용 사례

- **기업 워크샵**: 팀 빌딩 및 협업 워크샵
- **교육 세미나**: 그룹 활동 및 점수 관리
- **게임 이벤트**: 팀 대항전 점수 현황판
- **회의실 활동**: 브레인스토밍 및 아이디어 경진

## 🔒 데이터 보안

- **로컬 저장**: 모든 데이터는 로컬 파일에만 저장
- **오프라인 동작**: 인터넷 연결 없이도 완전히 동작
- **개인정보 보호**: 서버 전송 없음
- **백업 지원**: 수동 백업 파일 생성 가능

## 🆚 웹 버전과의 차이점

| 기능 | 웹 버전 | Electron 앱 |
|------|---------|-------------|
| 파일 저장 | 다운로드 폴더 | 같은 폴더에 자동 저장 |
| 파일 로드 | 수동으로 파일 선택 | 자동으로 로드 |
| 폴더 이동 | 수동으로 파일 복사 | 폴더만 이동하면 됨 |
| 설치 | 브라우저에서 열기 | 실행 파일 설치 |
| 오프라인 | 완전 오프라인 | 완전 오프라인 |
| 성능 | 브라우저 의존 | 네이티브 성능 |

## 🐛 알려진 이슈

- 일부 구형 운영체제에서 호환성 문제 가능
- 대용량 데이터 처리 시 성능 저하 가능
- 파일 권한 문제로 저장 실패 가능

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 👨‍💻 개발자

**jhcho1028**
- GitHub: [@jhcho1028](https://github.com/jhcho1028)

## 📞 지원

문제가 발생하거나 기능 요청이 있으시면 [Issues](https://github.com/jhcho1028/workshop-dashboard/issues)를 통해 알려주세요.

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!