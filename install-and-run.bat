@echo off
echo ========================================
echo    워크샵 대시보드 설치 및 실행
echo ========================================
echo.

echo Node.js 설치 상태 확인 중...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js가 설치되지 않았습니다.
    echo.
    echo 📥 Node.js 설치 방법:
    echo 1. https://nodejs.org/ 에서 다운로드
    echo 2. 설치 프로그램 실행
    echo 3. 이 스크립트를 다시 실행하세요
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js가 설치되어 있습니다.
echo.

echo 📦 의존성 설치 중...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 의존성 설치에 실패했습니다.
    pause
    exit /b 1
)

echo ✅ 설치 완료!
echo.
echo 🚀 워크샵 대시보드를 시작합니다...
echo.

call npm start
