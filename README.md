# black-ice-tracker

## Release one of black ice tracker. MVP:

* Users will be able to create account and log in
* Users will be able to record which weapons they have black ice skin for, and which they want (on a given game profile) and see these selections on subsequent logins
* Users will be able to have many game profiles associated with them

## Local Dev Setup 

The whole application (postgres db, node backend, and react frontend) can be spun up and torn down locally using docker-compose. The docker-compose method is the preferred approach. Each component of the application can also be run locally individually.

> ### Docker Compose method
> 
> 1. Install Docker Desktop locally
> 2. Open bash / terminal at `/black-ice-tracker`
> 3. run `docker-compose build`
> 4. run `docker-compose up -d`
> 5. That's all! node backend should be running on port 5001 and frontend on [localhost:3000](https:localhost:3000)
 
 

> ### Individual components method
> #### Frontend Project Setup
> 
> 1. Install [node.js](https://nodejs.org/en/)
> 2. Open bash / terminal at `/black-ice-tracker/bit-fe`
> 3. run `npm install`
> 4. run `npm start`, project should run locally at [localhost:3000](https:localhost:3000)
> 
> #### DB Setup
> 
> (Docker)
> 1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) locally
> 2. Open bash / terminal at `/black-ice-tracker/bit-db`
> 3. Run `docker build -t bit-db ./`
> 4. Run `docker run -d --name bit-db-container -p 5432:5432 bit-db`
>     - to stop: `docker stop bit-db-container`
>     - to restart: `docker restart bit-db-container`
>     
> 
> (non-docker)
> 1. Install [postgresql](https://www.postgresql.org/download/) locally
> 2. Install [pgadmin](https://www.pgadmin.org/download/) locally
> 3. Open bash / terminal at `/black-ice-tracker/bit-db`
> 4. Run `psql -f 00-create-db.sql` 
> <br> (note: if you run into error: `<user> is not a database`, <br>run `createdb <your-user-name>` [stackoverflow help](https://stackoverflow.com/questions/17633422/psql-fatal-database-user-does-not-exist)) 
> 
> #### bit-db / Web API Setup
> 
> 1. Install [.NET Core v 3.1](https://dotnet.microsoft.com/download) locally
> 2. Install [VSCode](https://code.visualstudio.com/) + [Visual Studio Solution Explorer](https://marketplace.visualstudio.com/items?itemName=fernandoescolar.vscode-solution-explorer) or your IDE of choice
> 3. Open `black-ice-tracker/bit-api/` in IDE or VS Code
> 4. In Solution: Explorer Pane, right click `bit-api` to build project
> 5. Click Run > Start debugging (wait for Select Environment dropdown)
> 6. Select ```.NET Core``` from Select Environment dropdown and then default configuration (whatever pops up on the screen)
> 7. Swagger for the Api should load on [localhost:5000](http://localhost:5000/index.html) If nothing happens, try step 5 + 6 again


## DB Model

![db model diagram](./repo-assets/images/db-model.png)

``Architecture Draw.io Diagram``

![Application Map in progress](./repo-assets/images/architecture-diagram.png)

To update:
- edit ```./repo-assets/architecture-diagram.drawio``` 
- save draw.io file 
- save new PNG file
- replace ```./repo-assets/images/architecture-diagram.png```

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
```
## Low Fidelity Mockup 
![low fidelity screen with many rectangles](./repo-assets/images/low-fidelity-mockup.png)