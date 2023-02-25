from python:3.10-slim
run apt-get update
run apt-get install build-essential -y
workdir /usr/app
copy . .
run pip install --upgrade pip
run pip install -r requirements.txt
# ENV message_board_host 172.18.0.11
# ENV message_board_port 5432
# ENV message_board_user comp_user
# ENV message_board_password password
# ENV message_board_database message_board
expose 8000
# cmd ["python","app.py"]
cmd ["python3", "manage.py","runserver", "0.0.0.0:8000"]
