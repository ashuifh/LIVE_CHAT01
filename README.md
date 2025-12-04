# 💬 ChitChat Express - Real-Time Messenger

A full-featured real-time chat application built with modern web technologies and fully Dockerized for easy deployment. Supports instant messaging, private rooms, user authentication, and online status tracking.

![Docker](https://img.shields.io/badge/Docker-✔-blue)
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![React](https://img.shields.io/badge/React-Latest-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-orange)

## 🚀 Key Features

### 💬 Real-Time Communication
- Instant message delivery using Socket.io
- Live typing indicators
- Online/offline status tracking
- Message read receipts

### 👤 User Management
- JWT authentication & authorization
- Profile customization
- Friend system with requests
- Secure password hashing with bcrypt

### 💭 Chat Features
- Private 1:1 conversations
- Group chat rooms
- Emoji and file sharing support
- Chat history preservation
- Message search functionality

### 🐳 Docker Integration
- Complete containerization with Docker Compose
- Production-ready Nginx reverse proxy
- Isolated development environments
- Easy deployment and scaling

## 🛠 Tech Stack

### Frontend
- **React.js** with Hooks and Context API
- **Socket.io-client** for real-time communication
- **Material-UI** for modern UI components
- **Axios** for API calls
- **Vite** for fast builds and development

### Backend
- **Node.js & Express** server
- **Socket.io** for WebSocket communication
- **MongoDB Atlas** for cloud database storage
- **JWT** for secure authentication
- **Mongoose** for database modeling

### Infrastructure
- **Docker** for containerization
- **Docker Compose** for multi-service orchestration
- **Nginx** as reverse proxy and static file server
- **MongoDB Atlas** for managed database

## 🐳 Dockerized Installation (Recommended)

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

### Quick Start with Docker
```bash
# 1. Clone the repository
git clone https://github.com/ashuifh/LIVE_CHAT01.git
cd LIVE_CHAT01

# 2. Configure environment variables
cp .env.example .env
# Edit .env file with your MongoDB Atlas credentials

# 3. Start the application with Docker
docker-compose up --build

# 4. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5001
