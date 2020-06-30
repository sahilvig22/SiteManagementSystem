TO run:
cd server
npm run server
-----------
ROUTES

1. REGISTER
POST request to http://localhost:5000/api/users
Headers :
Key     : Content-Type
Value   : application/json

and raw json in body, example :

{
"name" : "Sahil",
"email":"thesahilvig@gmail.com",
"password":"123456"
}

2. AUTHENTICATE
GET request to http://localhost:5000/api/auth 
Headers :
Key     : x-auth token
Value   : token value that was generated on the user being registered

3. LOGIN
POST request to http://localhost:5000/api/auth 
Headers :
Key     : Content-Type
Value   : application/json

and raw json in body, example :

{
"email":"thesahilvig@gmail.com",
"password":"123456"
}

4. GET CURRENT PROFILE BASED ON TOKEN
GET request to http://localhost:5000/api/profile/me






-----------------------------------
When a user registers, they get logged in right away
Change expiresIn in server/routes/api/users.js to 3600
------------------------------

lOGIN code goes into auth.js coz that's authentication

JWT Notes
We send a payload(it's simply an object) to create a token. We generally only send the user's ID to create a token. We can send other data in the payload too if we want to.
Expiration is optional.
In the callback, we either get the "error" or the "token".
When the token is generated, we get a payload(Again, it's just an object). It consists of 3 major things. IssuedAt, ExpirationOn and userID ( i.e. payload that was passed to create the token). Using userID, we can get the entire user object from the database

Go to jwt.io and paste your token(that you can see in postman when you make a post request for registration) there, and you can see the decoded token

BCRYPTJS Notes
It not only encrypts a password so that while registration encrypted password in entered into the database but it also decrypts a password from the database to match it with plain text during login
--------------------------------


