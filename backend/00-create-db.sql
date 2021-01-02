CREATE DATABASE bit;
 \connect bit;
CREATE USER bit_user WITH PASSWORD 'password';

GRANT CONNECT ON DATABASE bit TO bit_user;
GRANT USAGE ON SCHEMA bit TO bit_user;


CREATE SCHEMA bit;
CREATE ROLE bit_admin WITH
    PASSWORD 'password';
GRANT SELECT ON ALL TABLES IN SCHEMA bit TO bit_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA bit TO bit_admin;
COMMIT;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA bit TO bit_user;


ALTER ROLE "bit_admin" WITH LOGIN;

-- Database: bit

-- DROP DATABASE "bit";

CREATE DATABASE "bit"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;

DROP TABLE IF EXISTS "bit"."user";

CREATE SCHEMA "bit";

-- ************************************** "bit"."user"

CREATE TABLE "bit"."user"
(
 "id"       uuid NOT NULL,
 role     text NULL,
 email    text NOT NULL,
 username text NULL,
 CONSTRAINT PK_user PRIMARY KEY ( "id" )
);

-- ************************************** "bit".system

DROP TABLE IF EXISTS "bit".system;

CREATE TABLE "bit".system
(
 "id"   integer NOT NULL,
 name text NOT NULL,
 CONSTRAINT PK_system PRIMARY KEY ( "id" )
);

-- ************************************** "bit".game_profile

DROP TABLE IF EXISTS "bit".game_profile;

CREATE TABLE "bit".game_profile
(
 "id"                    uuid NOT NULL,
 user_id               uuid NOT NULL,
 system_id             integer NOT NULL,
 game_profile_username text NOT NULL,
 CONSTRAINT PK_game_profile PRIMARY KEY ( "id" ),
 CONSTRAINT FK_14 FOREIGN KEY ( user_id ) REFERENCES "bit"."user" ( "id" ),
 CONSTRAINT FK_40 FOREIGN KEY ( system_id ) REFERENCES "bit".system ( "id" )
);

CREATE INDEX fkIdx_15 ON "bit".game_profile
(
 user_id
);

CREATE INDEX fkIdx_41 ON "bit".game_profile
(
 system_id
);


DROP TABLE IF EXISTS "bit".gun;

-- ************************************** "bit".gun

CREATE TABLE "bit".gun
(
 "id"       integer NOT NULL,
 gun_name text NOT NULL,
 CONSTRAINT PK_gun PRIMARY KEY ( "id" )
);

-- ************************************** "bit".skin_status

DROP TABLE IF EXISTS "bit".skin_status;

CREATE TABLE "bit".skin_status
(
 "id"              uuid NOT NULL,
 game_profile_id uuid NOT NULL,
 gun_id          integer NOT NULL,
 status          text NULL,
 CONSTRAINT PK_owned_skins PRIMARY KEY ( "id" ),
 CONSTRAINT FK_24 FOREIGN KEY ( game_profile_id ) REFERENCES "bit".game_profile ( "id" ),
 CONSTRAINT FK_27 FOREIGN KEY ( gun_id ) REFERENCES "bit".gun ( "id" )
);

CREATE INDEX fkIdx_25 ON "bit".skin_status
(
 game_profile_id
);

CREATE INDEX fkIdx_28 ON "bit".skin_status
(
 gun_id
);