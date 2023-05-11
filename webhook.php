<?php
// 로그 파일 경로
$log_file = '/var/www/html/webhook.log';

// 로그 메시지
$log_message = 'Webhook received at ' . date('Y-m-d H:i:s') . PHP_EOL;

// 로그 파일에 메시지 기록
file_put_contents($log_file, $log_message, FILE_APPEND);

// 깃허브에서 전송한 웹훅 데이터 수신
$data = file_get_contents('php://input');

// JSON 데이터를 파싱하여 배열로 변환
$json = json_decode($data, true);

// 레포지토리 경로 설정
$repo_path = '/var/www/html/MyToyProject';

// 레포지토리 최신화 명령어 실행
exec("cd $repo_path && sudo git pull && sudo systemctl restart apache2", $output);

// 결과 로그 기록
$log_message = 'Command result: ' . implode(PHP_EOL, $output) . PHP_EOL;
file_put_contents($log_file, $log_message, FILE_APPEND);

?>
