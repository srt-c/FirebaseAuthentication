# Firebase Authentication using Vite-ReactJs

## Overview

This project is a React application set up with Vite and integrated with Firebase for authentication. It includes a `.env.development` file for environment variables, making it easy to manage your Firebase configuration securely.

## Features

- **React Setup**: Initialized with Vite for fast development.
- **Firebase Integration**: Configured Firebase for authentication.
- **Environment Variables**: Managed using a `.env.development` file.
- **Form Handling**: Basic user registration form.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/srt-c/FirebaseAuthentication.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd your-repository
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

1. **Start the development server:**
   ```sh
   npm run dev
   ```

## Environment Variables

Create a `.env.development` file in the root directory and add your Firebase configuration:

```plaintext
# .env.development
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```
