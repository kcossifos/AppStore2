# AppStore2

```
route /api/
```

## Install Dependencies
```
npm install
```
## Root Page
```
GET : http://localhost:3000/
Response: Hello World
```
## Status Page
```
GET : http://localhost:3000/status
Response:  Healthy: true
```
## All Apps Page
```
GET : http://localhost:3000/api/v1/apps
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
```
 GET : http://localhost:3000/api/v1/apps/1
 Response:
 {"apps":[{"id":"1"}]}
```
## All Users Page

```
GET : http://localhost:3000/api/v1/users

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
```
 GET : http://localhost:3000/api/v1/users/1
 Response:
 {"user":{"id":"1"}}
```
