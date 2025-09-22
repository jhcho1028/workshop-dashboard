#!/bin/bash

echo "========================================"
echo "   워크샵 대시보드 설치 및 실행"
echo "========================================"
echo

echo "Node.js 설치 상태 확인 중..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되지 않았습니다."
    echo
    echo "📥 Node.js 설치 방법:"
    echo "1. https://nodejs.org/ 에서 다운로드"
    echo "2. 또는 패키지 매니저 사용:"
    echo "   - macOS: brew install node"
    echo "   - Ubuntu: sudo apt install nodejs npm"
    echo "   - CentOS: sudo yum install nodejs npm"
    echo
    exit 1
fi

echo "✅ Node.js가 설치되어 있습니다."
echo

echo "📦 의존성 설치 중..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ 의존성 설치에 실패했습니다."
    exit 1
fi

echo "✅ 설치 완료!"
echo
echo "🚀 워크샵 대시보드를 시작합니다..."
echo

npm start
