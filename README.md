# Meower - Twitter for Cats

A basic twitter clone built to demonstrate the full stack 🥞 (client, server, database).

With the following features:

* Cats can send a mew 😸✉️


## Objectives

* [ ] 📝 Diagram the Full Stack
* [ ] 🔎 Differentiate between Client and Server
* [ ] ⌨️ Get user input on the Client
* [ ] ➡️ Send user input from the client with fetch to the server
* [ ] 🗃 Store data in a database
* [ ] 🔍 Retrieve data from a database on the Server
* [ ] ⬅️ Retrieve data from a server on the client using Fetch
* [ ] 🙈 Hide/Show elements on the client
* [ ] ✨ Add elements to the page on the client
* [ ] 🚀 Deploy the client with now.sh
* [ ] 🚀 Deploy the database with mongo atlas
* [ ] 🚀 Deploy the server with now.sh

## Front-end

* [x] Create client folder
* [x] Setup index.html
* [x] Bring in Skeleton CSS
  * http://getskeleton.com/
  * https://cdnjs.cloudflare.com/aja/libs/skeleton/2.0.4/skeleton.min.css
* [x] Create Header
* [x] Create form
  * [x] Name
  * [x] Content
  * [x] u-full-width to both inputs
* [x] Listen for form submit
* [x] Hide the form
* [x] Show loading spinner
* [x] Get data from form and log it
* [x] Get user input on the Client
* [x] Hide/Show elements on the client

## Back-end

* [x] Create server folder
* [x] npm init -y
* [x] npm install express morgan
* [x] Setup index.js
* [x] Change package.json  scripts.start: "node index.js"
* [x] npm i --save-dev nodemon      (refresh the server when the index.js is safe)
* [x] Change package.json  scripts.dev: "nodemon index.js"
* [x] npm run dev
* [x] Add GET / route
* [x] Add POST /mews route
  * [x] log out req.body



## Front-end

* [x] fetch POST /mews with form data
* [x] npm i cors      because of the browser error 'no-cors'
* [x] Send user input from the client with fetch to the server

## Back-end

* [x] npm install cors
* [x] Make sure the server is recieving the data
* [x] Add JSON body parser middleware
* [x] Validate name and content
  * [x] Must be a string
  * [x] Cannot be empty
* [x] If not valid
  * [x] Error code 422
  * [x] Invalid mew, must contain name and content
* [x] Setup DB Connection
  * [x] > mongod      start mongobd in new terminal, test with robo3t
  * [x] npm install monk
  * [x] connect to db
  * [x] create document collection (mews)
* [x] If Valid
  * [x] Create mew object with
    * [x] name, content, created_date
  * [x] Insert into DB
  * [x] Respond with created mew object
* [x] Store data in a database

## Front-end

* [x] Log out created Mew after POST request
* [x] Show the form
* [x] Hide loading spinner

## Back-end

* [x] GET /mews
  * [x] Respond with mews from DB
* [x] Retrieve data from a database on the Server

## Front-end

* [x] fetch GET /mews
  * [x] Iterate over array
  * [x] Append each to page
  * [x] Reverse before appending
  * [x] Show the form
  * [x] Hide loading spinner
* [x] fetch GET /mews after creating a mew
* [x] Retrieve data from a server on the client using Fetch
* [x] Hide/Show elements on the client
* [x] Add elements to the page on the client

## Back-end

* [x] npm install bad-words
  * [x] Use filter before inserting into DB
* [x] npm install express-rate-limit
  * [x] Limit to 1 request every 30 seconds

## Deploy

* [x] Deploy server with now
  * [x] Setup environment variables
    * [x] Database connection
      * process.env.MONGO_URI
  * [x] Show mlab
  * [ ] Deploy with environment variable
    * now -e MONGO_URI=@meower-db
  * [ ] Add alias
* [] Deploy client folder with now
  * [ ] Set API_URL based on hostname

## What's net?

* Add comments/replies to a mew
* User Accounts
  * Don't just have the user enter their name
  * Sign up/Login
* User Profiles
  - Only show mews from a given user
* Search Mews
* Hashtags
* User @mentions
* Realtime feed of mews


## next
* server
* [x] pagination
  * [x] skip,limit,sort from query

* client
* [x] skip and limit variables
* [x] Load more button
* [x] Scroll page to lasted mew 
