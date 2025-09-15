# Workshop Dashboard

워크샵 진행을 위한 대화형 점수 현황판 및 조 관리 시스템입니다.

![Workshop Dashboard](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
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

### 💾 데이터 백업 및 복원
- JSON 파일로 데이터 다운로드/업로드
- 브라우저 로컬 스토리지 자동 저장
- 페이지 종료 시 백업 알림
- 데이터 상태 실시간 표시

### 🎨 사용자 친화적 인터페이스
- 반응형 디자인 (모바일 지원)
- 직관적인 탭 기반 네비게이션
- 시각적 피드백 및 호버 효과
- 한국어 완전 지원

## 📱 사용법

### 1. 기본 설정
1. **설정** 탭으로 이동
2. 엑셀에서 참가자 이름을 복사하여 붙여넣기
3. **참가자 등록** 버튼 클릭
4. 조 수 설정 및 조 편성

### 2. 점수 관리
1. **대시보드** 탭에서 조 카드 클릭
2. 점수 조정 패널에서 원하는 점수 버튼 클릭
3. 실시간으로 점수판 업데이트 확인

### 3. 데이터 백업
1. **설정** 탭에서 **데이터 다운로드** 클릭
2. JSON 파일을 안전한 곳에 저장
3. 필요시 **데이터 업로드**로 복원

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: LocalStorage, File API
- **Design**: CSS Grid, Flexbox, Gradient
- **Compatibility**: 모든 모던 브라우저 지원

## 📋 시스템 요구사항

- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- JavaScript 활성화
- LocalStorage 지원

## 🚀 빠른 시작

1. **파일 다운로드**
   ```bash
   git clone https://github.com/jhcho1028/workshop-dashboard.git
   cd workshop-dashboard
   ```

2. **브라우저에서 열기**
   - `workshop-dashboard.html` 파일을 브라우저에서 열기
   - 또는 로컬 서버 실행

3. **사용 시작**
   - 설정 탭에서 참가자 등록
   - 대시보드에서 점수 관리 시작

## 📁 프로젝트 구조

```
workshop-dashboard/
├── workshop-dashboard.html    # 메인 HTML 파일
├── README.md                 # 프로젝트 문서
└── .gitignore               # Git 무시 파일
```

## 🔧 주요 기능 상세

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

- **로컬 저장**: 모든 데이터는 브라우저에만 저장
- **파일 백업**: JSON 형태로 안전한 백업
- **개인정보 보호**: 서버 전송 없음

## 🐛 알려진 이슈

- 일부 구형 브라우저에서 LocalStorage 제한
- 시크릿 모드에서 데이터 저장 불가
- 브라우저 캐시 정리 시 데이터 손실 가능

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
