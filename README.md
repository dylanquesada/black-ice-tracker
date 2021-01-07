# black-ice-tracker

``Architecture Draw.io Diagram``

![Application Map in progress](./repo-assets/images/architecture-diagram.png)

To update:
- edit ```./repo-assets/architecture-diagram.drawio``` 
- save draw.io file 
- save new PNG file
- replace ```./repo-assets/images/architecture-diagram.png````

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
