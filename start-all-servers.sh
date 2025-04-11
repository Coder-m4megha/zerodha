#!/bin/bash
echo "Starting all servers..."

echo "Starting authentication server..."
cd server && npm start &
SERVER_PID=$!

echo "Starting dashboard..."
cd dashboard && npm start &
DASHBOARD_PID=$!

echo "Starting frontend..."
cd frontend && npm start &
FRONTEND_PID=$!

echo "All servers started!"
echo
echo "Server: http://localhost:4000"
echo "Dashboard: http://localhost:3000"
echo "Frontend: http://localhost:3001"
echo
echo "Please wait a moment for all servers to initialize."
echo
echo "INSTRUCTIONS:"
echo "1. Go to the frontend at http://localhost:3001"
echo "2. Sign up for a new account"
echo "3. You'll be redirected to the dashboard login page"
echo "4. Log in with the credentials you just created"
echo "5. You'll see the dashboard home page"

# Keep the script running
wait $SERVER_PID $DASHBOARD_PID $FRONTEND_PID
