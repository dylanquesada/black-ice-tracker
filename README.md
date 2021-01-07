# black-ice-tracker

 ``DB Model``

![db model diagram](./repo-assets/images/db-model.png)


``Web API``

``` 
GET 
url - api/guns

response: 

{
    "data": [
        {
            "id": number,
            "name": string
        }
    ]
}
```

```
GET
url - api/skins/{id} <-- game profile id

response: 

{
    skins: [
        {
            "id": number,
            "status": string
        }
    ]
}
