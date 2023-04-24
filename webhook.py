import json
import subprocess

# 웹훅 이벤트 수신하기
json_data = json.loads(request.data.decode('utf-8'))
event_type = json_data['type']
repo_name = json_data['repository']['name']

# 레포지토리 최신화하기
if event_type == 'push':
    subprocess.call(['sudo git', '-C', '/var/www/html/MyToyProject', 'pull'])
