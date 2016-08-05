# AppStore2

## Install Dependencies
To install dependencies needed for this static api use
```
npm install
```
## Install all Command line tools
```
npm install -g mocha
```
## Start Server
To start the server on port 3000 use
```
npm start
```

## Root Page

| Method | URL | Response |
|----|----|----|
| GET | / | Hello World |

## Status Page

| Method | URL | Response |
|----|----|----|
| GET | /status | Healthy: true

## All Apps Page

To get all apps in the static api
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
## Single App Page
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

## All Users Page

To get all users in the static api
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
## Single User Page
 To get a single user

| Method | URL | Response |
|----|----|----|
| GET | /api/v1/users/1 | {"user":{"id":"1","name":"Kelsey"}} |
