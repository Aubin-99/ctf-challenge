# CTF The lose password

A company has recently experienced a data breach, and it has been discovered that an attacker was able to gain access to their password database. The company is offering a bounty for anyone who can recover the lost passwords and identify the vulnerability that was exploited.

## API Server

The API server runs on port 8081

### Use the nodejs API server in build mode

```
cd nodejs_API
npm start

```

`

## Authentication Routes

POST /api/auth/signup
This route is used to create a new user account. It accepts a JSON object containing the following fields:

username: the desired username for the account
password: the desired password for the account
email: the email associated with the account
Upon successful signup, the server will return a JSON object containing the user's id and a message indicating that the account was created successfully.

POST /api/auth/signin
This route is used to sign in to an existing user account. It accepts a JSON object containing the following fields:

username: the username of the account
password: the password of the account it correspond of a password in user_password.txt in script-retrieve-password
Upon successful signin, the server will return a JSON object containing the user's id and a message indicating that the user is now logged in.

`

## Authorization Routes

Authorization Routes
GET /api/test/all
This route is accessible to all users, regardless of their role. It returns a JSON object containing a message indicating that the user has successfully accessed the route.

GET /api/test/user
This route is accessible to logged-in users with the role of "user", "ceo", or "admin". It returns a JSON object containing a message indicating that the user has successfully accessed the route.

GET /api/test/ceo
This route is only accessible to logged-in users with the role of "ceo". It returns a JSON object containing a message indicating that the user has successfully accessed the route.

GET /api/test/admin
This route is only accessible to logged-in users with the role of "admin". It returns a JSON object containing a message indicating that the user has successfully accessed the route.

Note: Before accessing these routes, the user must be logged in and the user's role must be verified by the server.
