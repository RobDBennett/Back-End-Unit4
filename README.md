# <center>Saltiest Hacker News Trolls Backend Unit 4</center>
README will be updated occasionally

Deployed heroku backend: COMING SOON

#### Description

Build an app that uses Hacker News comment data to rank commenters based on comment sentiment (saltiness/negativity).

#### MVP

App rates and ranks hacker news commenters by negativity of comment sentiment (limited to commenters who have made x number of posts). Allows users to search by username to view comments and sentiment levels of specific users.


##### Example of correct Authorization header:
```
Authorization: 'Bearer token'
```


## Authentication Endpoints

### /api/register - POST

#### Expected data in request body:
```
{
    "username": "user",
    "password": "password"
}
```

#### Expected return data:
```
{
    "created_user": {
        "id": 1,
        "username": "user"
    },
    "token": "[token]"
}
```


### /api/login - POST

#### Expected data in request body:
```
{
    "username": "user",
    "password": "password"
}
```

#### Expected return data:

```
{
    "user": {
        "id": 1,
        "username": "user"
    },
    "token": "[token]"
}
```

### /api/users GET - AUTH REQUIRED

#### Expected Headers:
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Return Data
```
[
    {
        "id": 1,
        "username": "user_01"
    },
    {
        "id": 2,
        "username": "user_02"
    },
    {
        "id": 3,
        "username": "user_03"
    },
]
```


### /api/users PUT - AUTH REQUIRED

#### Expected Headers:
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Request Body:
```
{
    "username": "updated_user"
}
```

#### Expected Return Data:
```
{
    "id": 1,
    "username": "updated_user"
}
```

### /api/users DELETE - AUTH REQUIRED

#### Expected Headers:
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Return Data:
```
{
    "message": "User has been successfully deleted.",
    "users": [
    {
        "id": 2,
        "username": "user_01"
    },
    {
        "id": 3,
        "username": "user_03"
    },
    ]
}
```


### /api/save GET - AUTH REQUIRED

#### Expected Headers:
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Return Data
```
[
    {
        "id": 1,
        "users_id": 1,
        "troll": "TrollMaster",
        "toxicity": 0.1,
        "comment": "Never gonna give you up, never gonna let you down."
    },
    {
        "id": 4,
        "users_id": 1,
        "troll": "TrollRollRick",
        "toxicity": 0.5,
        "comment": "Never gonna give you up, never gonna let you down."
    },
    {
       "id": 5,
       "users_id": 2,
        "troll": "RickRollTroll",
        "toxicity": 0.9,
        "comment": "Never gonna give you up, never gonna let you down."
    },
]
```


### /api/save POST - AUTH REQUIRED

#### Expected Headers:
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Request Body:
```
{
	"troll": "XXX",
	"toxicity": 0.5,
	"comment": "YYY",
    "users_id": 1
}
```

#### Expected Return Data
```
[
    {
        "id": 1,
        "users_id": 1,
        "troll": "TrollMaster",
        "toxicity": 0.1,
        "comment": "Never gonna give you up, never gonna let you down."
    },
    {
        "id": 4,
        "users_id": 1,
        "troll": "TrollRollRick",
        "toxicity": 0.5,
        "comment": "Never gonna give you up, never gonna let you down."
    },
    {
       "id": 5,
       "users_id": 1,
        "troll": "RickRollTroll",
        "toxicity": 0.9,
        "comment": "Never gonna give you up, never gonna let you down."
    },
    {
        "id": 6,
        "users_id": 1,
        "troll": "XXX",
        "toxicity": 0.4,
        "comment": "YYY"
    }
]
```


### /api/save/:id DELETE - AUTH REQUIRED

#### Expected Headers:
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Return Data
```
[
    {
        Row deleted
    }
]
```
### /api/dash/:id - AUTH REQUIRED

#### Exprected Headers: 
```
Content-Type: application/json
Authorization: 'Bearer token'
```

#### Expected Return Data

user's saved comments