<?php
// 깃허브에서 전송한 웹훅 데이터 수신
$data = file_get_contents('php://input');

// JSON 데이터를 파싱하여 배열로 변환
$json = json_decode($data, true);

// 레포지토리 경로 설정
$repo_path = '/var/www/html/MyToyProject';

// 레포지토리 최신화 명령어 실행
exec("cd $repo_path && sudo git pull && sudo systemctl restart apache2");
?>
