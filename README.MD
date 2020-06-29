TO run:
cd server
npm run server

When a user registers, they get logged in right away
Change expiresIn in server/routes/api/users.js to 3600
------------------------------

JWT NOTES
We send a payload(it's simply an object) to create a token. We generally only send the user's ID to create a token. We can send other data in the payload too if we want to.
Expiration is optional.
In the callback, we either get the "error" or the "token".
When the token is generated, we get a payload(Again, it's just an object). It consists of 3 major things. IssuedAt, ExpirationOn and userID ( i.e. payload that was passed to create the token). Using userID, we can get the entire user object from the database

Go to jwt.io and paste your token(that you can see in postman when you make a post request for registration) there, and you can see the decoded token

--------------------------------


