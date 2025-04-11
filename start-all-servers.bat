@echo off
echo Starting all servers...

echo Starting authentication server...
start cmd /k "cd server && npm start"

echo Starting dashboard...
start cmd /k "cd dashboard && npm start"

echo Starting frontend...
start cmd /k "cd frontend && npm start"

echo All servers started!
echo.
echo Server: http://localhost:4000
echo Dashboard: http://localhost:3000
echo Frontend: http://localhost:3001
echo.
echo Please wait a moment for all servers to initialize.
echo.
echo INSTRUCTIONS:
echo 1. Go to the frontend at http://localhost:3001
echo 2. Sign up for a new account
echo 3. You'll be redirected to the dashboard login page
echo 4. Log in with the credentials you just created
echo 5. You'll see the dashboard home page
