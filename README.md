# User Registration and Login System

This project is a simple system for registering users, logging in, and viewing a dashboard. It’s built using HTML, CSS, JavaScript, and AWS services (Lambda, API Gateway, DynamoDB) for the backend.

## Project Structure

### Frontend Files

1. **HTML Pages**
   - `login.html`: For users to log in with a username and password.
   - `index.html`: For users to register a new account.
   - `dashboard.html`: A welcome page for logged-in users with a logout button.

2. **JavaScript**
   - `scripts.js`: Contains the code that runs when a user registers, logs in, views the dashboard, or logs out.

3. **CSS**
   - `style.css`: Styles to make the pages look nice.

### Backend (AWS Services)

1. **Lambda Functions**
   - **Register User (`POST /register`)**: Saves new users in a DynamoDB table.
   - **Login User (`POST /login`)**: Checks if the username and password are correct.
   - **Dashboard Data (`GET /dashboard`)**: Gets the user's data for the dashboard.

2. **DynamoDB Table**
   - Stores user information like `username`, `email`, and `password`.

3. **API Gateway**
   - **Routes**:
      - `POST /register`: Connects to the `handle_register` Lambda function.
      - `POST /login`: Connects to the `handle_login` Lambda function.
      - `GET /dashboard`: Connects to the `handle_dashboard` Lambda function.

## Setup Steps

### Prerequisites

- An AWS account.
- Basic understanding of AWS Lambda, API Gateway, and DynamoDB.

### Steps to Set Up

1. **Set Up AWS Lambda and API Gateway**:
   - Create Lambda functions in AWS for `handle_register`, `handle_login`, and `handle_dashboard`.
   - Set up API Gateway to connect to these Lambda functions.
   - Deploy the API and copy the URL to `API_BASE_URL` in `scripts.js`.

2. **Create the DynamoDB Table**:
   - In AWS DynamoDB, create a table called `Users` with `username` as the primary key.

3. **Frontend Development**:
   - Open `index.html` to register, `login.html` to log in, and `dashboard.html` to view the dashboard.
   - Use `scripts.js` to handle the registration, login, and logout events.

## Usage

1. **Register a New User**:
   - Go to `index.html`.
   - Enter a username, email, and password, then submit the form.

2. **Login**:
   - Go to `login.html`, enter your username and password, and click `Login`.
   - Successful login redirects you to `dashboard.html`.

3. **Logout**:
   - Click `Logout` on the dashboard page to return to the login page.

## Troubleshooting Tips

- **404 Errors**: Check that the routes `/register`, `/login`, and `/dashboard` are set up in API Gateway.
- **DynamoDB Issues**: Confirm the `Users` table exists and Lambda has permission to access it.
- **Debugging**: Use `console.log()` in `scripts.js` to see what's happening in the browser console. You can also check AWS CloudWatch for Lambda logs.

