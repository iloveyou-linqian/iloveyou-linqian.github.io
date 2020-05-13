@echo off
cd ..
set /p commit_msg=Commit message:

git add .
git commit -m "%commit_msg%"
git push origin source:source

cd .\bin