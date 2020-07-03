----------------------
BEFORE FINAL PRODUCTION

Change expiresIn in server/routes/api/users.js to 3600
---------------------------
TO RUN:

cd server
npm run server
--------------
Heroku push commands (To be done from server folder)

Heroku login
Git add .
Git commit -m ‘.’
Git remote add origin https://git.heroku.com/lit-atoll-87539.git
git push heroku HEAD:master

-----------
Github Push commands(To be done from sitemanagementsystem i.e. outside of server folder)
Git add .
Git status
Git commit -m ‘.’
Git remote add origin https://github.com/sahilvig22/SiteManagementSystem.git
Git push -f origin master 

------------------
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

4. GET CURRENT USER'S SITE BASED ON TOKEN
GET request to http://localhost:5000/api/site/me


5. ADD A SITE
PUT request to http://localhost:5000/api/users/sites
Header  :
Key     : Content-Type
Value   : application/json

Key     : x-auth-token
Value   : logged in user's token


and raw json in body, example :

{
  "location":"thesahilvig@gmail.com",
  "from":"10-02-2013",
  "to":"10-02-2020",
}

-----------------------------------
RANDOM PROJECT NOTES

When a user registers, they get logged in right away
lOGIN code goes into auth.js coz that's authentication
------------------------------

----------------------------------
JWT Notes

We send a payload(it's simply an object) to create a token. We generally only send the user's ID to create a token. We can send other data in the payload too if we want to.
Expiration is optional.
In the callback, we either get the "error" or the "token".
When the token is generated, we get a payload(Again, it's just an object). It consists of 3 major things. IssuedAt, ExpirationOn and userID ( i.e. payload that was passed to create the token). Using userID, we can get the entire user object from the database

Go to jwt.io and paste your token(that you can see in postman when you make a post request for registration) there, and you can see the decoded token
--------------------------------
BCRYPTJS Notes

It not only encrypts a password so that while registration encrypted password in entered into the database but it also decrypts a password from the database to match it with plain text during login
--------------------------------


