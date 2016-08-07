# AppStore2
Dynamic API that allows you to create, update, and delete using Node and Express.

## Getting Started
```
First make sure you have node installed on your computer.
If you do not run open up your terminal and run the command brew install node.
If you already have node on your computer make sure it is up to date by running the command node-v.
If you do not have the latest update run the command brew update.
Now clone this repository to get started by typing git clone https://github.com/kcossifos/AppStore2.git
```
## Install Dependencies
To install dependencies needed for this dynamic api use
```
npm install
```
## Install all Command line tools
```
npm install -g mocha
```
## Create your Database
This dynamic api is using MySQL
```
1) Make sure you have MySQL installed, if not in your terminal run the command brew install mysql
2) Once that is installed to run MySQL server, run the command mysql.server start in your terminal
3) Create a database
```

## Database configuration
Create a .env file and insert the information
to connect to your database
```
DB_NAME =
DB_USER =
DB_PASS =
DB_HOST =
DB_SCHEMA =
DB_PORT =
```
## Start Server
To start the server on port 3000 use
```
npm start
```

## Root Page

| Method | URL | Response |
|----|----|----|
| GET | / | Check out this dynamic api|

## Status Page

| Method | URL | Response |
|----|----|----|
| GET | /status | Healthy: true

## Create an App
To create an app
```
Method: POST
URL: /v1/apps
Response:
{
  "id": 20,
  "userId": null,
  "title": "Best New Test App",
  "description": "none",
  "artAssets": null,
  "releaseDate": null,
  "createdAt": "2016-08-07T21:09:00.000Z",
  "updatedAt": "2016-08-07T21:09:00.000Z"
}
```
## Read all Apps
To get all apps
```
Method: GET
URL: /api/v1/apps
Response:
  {
           "apps": [
               {
                 "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
                 "title": "Best App-Store in Florida",
                 "description": "A fast paced app",
                 "artAssets": [
                   { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
                   { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
                 ],
                 "releaseDate": "2016-06-15T22:29:20.000Z",
                 "createdAt": "2016-05-15T22:29:20.000Z",
                 "updatedAt": "2016-05-15T22:29:20.000Z",
                 "user": {
                   "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
                   "name": "Kelsey"
                 }
               },
               {
                 "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
                 "title": "Best App-Store in the World",
                 "description": "A fast paced app store on the east",
                 "artAssets": [
                   { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
                   { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
                 ],
                 "releaseDate": "2016-06-15T22:29:20.000Z",
                 "createdAt": "2016-05-15T22:29:20.000Z",
                 "updatedAt": "2016-05-15T22:29:20.000Z",
                 "user": {
                   "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
                   "name": "Shrub"
                 }
               },
               {
                 "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
                 "title": "Best App-Store in the Universe",
                 "description": "A fast paced side scrolling shooter",
                 "artAssets": [
                   { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
                   { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
                 ],
                 "releaseDate": "2016-06-15T22:29:20.000Z",
                 "createdAt": "2016-05-15T22:29:20.000Z",
                 "updatedAt": "2016-05-15T22:29:20.000Z",
                 "user": {
                   "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
                   "name": "Kah"
                 }
               }
           ]
 }

```
## Read a Single App
To get a single app
```
Method: GET
URL: /api/v1/apps/1
Response:
{ "app": { "id": "1",
"title": "Best App-Store in the Universe",
"description": "A fast paced side scrolling shooter",
"releaseDate": "2016-06-15T22:29:20.000Z"}}
```
## Update an App
To update a specific app by id that was previously created
```
Method: POST
URL: /v1/apps/:id
Response:
{
  "id": 20,
  "userId": 10,
  "title": "Test App has been updated"
  "description": "Dynamic API",
  "artAssets": www.linkunknown.idk,
  "releaseDate": "2016-08-07T21:09:00.000",
  "createdAt": "2016-08-07T21:09:00.000Z",
  "updatedAt": "2016-08-07T21:09:00.000Z"
}
```
## Delete an App
To delete a specific app by id that was previously created
```
Method: DELETE
URL: /v1/apps/:id
Response: 1 (which means the app was successfully deleted)
Getting the response of a zero means the app was not deleted
or their is no app by that id number
```

## Create a User
To create a user
```
Method: POST
URL: /v1/users
Response:
{
  "id": 22,
  "updatedAt": "2016-08-07T21:26:43.000Z",
  "createdAt": "2016-08-07T21:26:43.000Z"
}
```
## Update a User
To update a user by id that was previously created
```
Method: POST
URL: /v1/users/:id
Response:
{
  "id": 22,
  "name": Kelsey,
  "createdAt": "2016-08-07T21:26:43.000Z",
  "updatedAt": "2016-08-07T21:26:43.000Z",
  "apps": []
}
(the "apps" returns an empty array because
this user has no apps associated with its userId)
```
## Read all Users
To get all users
```
Method: GET
URL: /api/v1/users
Response:
 {
       "users": [
         {
           "id": "1",
           "name": "Kelsey"
         },
         {
           "id": "2",
           "name": "Shrub"
         },
         {
           "id": "3",
           "name": "Kah"
         },
         {
           "id": "4",
           "name": "Kev"
         }
       ]
 }

```
## Read a Single User
To get a single user
```
Method: GET
URL: /api/v1/users/1
Response: { "user": { "id":"1", "name":"Kelsey" }}
```

## Delete a User
To delete a user by id that was previously created
```
Method: DELETE
URL: /v1/users/:id
Response: 1 (which means the user was successfully deleted)
Getting the response of a zero means the user was not deleted
or their is no user by that id number
```

## Read all of a Users Apps
To get the relationship between the user id
and the apps associated with their id number
```
Method: GET
URL: /v1/users/:id/apps
Response:
[
  {
    "id": 2,
    "userId": 2,
    "title": "new app",
    "description": "api",
    "artAssets": "www",
    "releaseDate": 2016,
    "createdAt": "2016-08-07T21:26:43.000Z",
    "updatedAt": "2016-08-07T21:26:43.000Z"
  },
  {
    "id": 3,
    "userId": 2,
    "title": "new",
    "description": "none",
    "artAssets": "hi",
    "releaseDate": 2222,
    "createdAt": null,
    "updatedAt": null
  }
]
```
