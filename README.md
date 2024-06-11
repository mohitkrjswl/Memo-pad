# Memo-Pad

Memo-Pad is a web application designed to help users manage their notes and tasks efficiently. Users can sign up, log in, and perform CRUD operations on their notes. Notes can be pinned based on their priorities. The application leverages MongoDB Atlas for the database and uses JWT tokens for secure authentication.

## Features

- **User Authentication**: Sign up and log in with secure JWT tokens.
- **CRUD Operations**: Create, read, update, and delete notes.
- **Priority Pinning**: Pin tasks/notes according to their priorities.
- **State Management**: Learnings on state management integrated.
- **Secure Storage**: Notes and user data stored securely using MongoDB Atlas.

## Tech Stack

- **Frontend**: React + vite, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT tokens
-  React Toast , react icons
## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mohitkrjswl/Memo-pad.git
    cd memo-pad
    ```

2. Install dependencies for both client and server:
    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd frontend/memo-pad
    nom install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `server` directory and add your MongoDB Atlas URI and JWT secret.
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application:
    - Open two terminals: one for the backend and one for the frontend.
    ```bash
    # In the server directory
    - cd backend
    - node index.js

    # In the client directory
    - cd frontend/memo-pad
    -npm run dev
    ```

5. Open your browser and go to `http://localhost:8000`.

## Usage

1. **Sign Up**: Create a new account.
2. **Log In**: Use your credentials to log in.
3. **Add Notes**: Create new notes/tasks.
4. **Manage Notes**: Edit, update, and delete your notes.
5. **Pin Notes**: Pin notes based on priority to keep them at the top.

## Screenshots

### Sign Up Page

![Screenshot 2024-06-12 003055](https://github.com/mohitkrjswl/Memo-pad/assets/119107584/21e4dff4-7129-40f3-9bdf-27da93089561)

### Notes Dashboard interface
![Screenshot 2024-06-12 001814](https://github.com/mohitkrjswl/Memo-pad/assets/119107584/149e684c-5393-4105-98c0-f3737c7911da)

### Login

![Screenshot 2024-06-12 001729](https://github.com/mohitkrjswl/Memo-pad/assets/119107584/783d891b-8ee7-4865-91e9-968eb95251a7)

### New Note
![Screenshot 2024-06-12 001841](https://github.com/mohitkrjswl/Memo-pad/assets/119107584/d3e0c4b3-33d1-4f71-9187-d9adba1b61ff)

## Demo Video Edit and Delete

Watch the video demonstration 

https://github.com/mohitkrjswl/Memo-pad/assets/119107584/60583023-795d-47f0-bd03-3d008340288c

---

**Thank you for checking out Memo-Pad! Happy note-taking!**
