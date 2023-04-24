#!/bin/bash

# 레포지토리 경로, 브랜치 이름, 서버 경로, 아파치 서비스 이름 설정
REPO_PATH="https://github.com/KittyPark/MyToyProject.git"
BRANCH_NAME="main"
SERVER_PATH="/var/www/html/MyToyProject"
SERVICE_NAME="apache2"

# 변경 사항 감지하여 업데이트 및 아파치 서비스 재시작 함수 정의
update_and_restart() {
    cd $SERVER_PATH
    git fetch --all
    git reset --hard origin/$BRANCH_NAME
    service $SERVICE_NAME restart
}

# 깃허브 웹훅으로부터 POST 요청 받기
if [ $_POST ]
then
    # POST 요청을 받았을 때
    # 푸시 이벤트인 경우 변경 사항 업데이트 및 아파치 서비스 재시작 수행
    if [ $_POST['X-GitHub-Event'] == "push" ]
    then
        update_and_restart
    fi
else
    # POST 요청을 받지 않았을 때
    echo "This script is designed to be used as a GitHub webhook handler."
fi
