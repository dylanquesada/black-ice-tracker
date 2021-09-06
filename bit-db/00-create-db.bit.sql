--DROP DATABASE IF EXISTS "bit";

-- CREATE DATABASE bit;
 \connect bit;
CREATE SCHEMA bit;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Database: bit

-- *************** SqlDBM: PostgreSQL ****************;
-- ***************************************************;

DROP TABLE IF EXISTS "bit"."user" CASCADE;

-- ************************************** "bit"."user"

CREATE TABLE "bit"."user"
(
 "id"       uuid DEFAULT uuid_generate_v1(),
 role     text NULL,
 email    text NOT NULL,
 username text NULL,
 CONSTRAINT PK_user PRIMARY KEY ( "id" )
);

-- ************************************** "bit".system

DROP TABLE IF EXISTS "bit".system CASCADE;

CREATE TABLE "bit".system
(
 "id"   integer NOT NULL,
 name text NOT NULL,
 CONSTRAINT PK_system PRIMARY KEY ( "id" )
);

-- ************************************** "bit".game_profile

DROP TABLE IF EXISTS "bit".game_profile CASCADE;

CREATE TABLE "bit".game_profile
(
 "id"                    uuid DEFAULT uuid_generate_v1(),
 user_id               uuid,
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


DROP TABLE IF EXISTS "bit".gun CASCADE;

-- ************************************** "bit".gun

CREATE TABLE "bit".gun
(
 "id"       integer NOT NULL,
 gun_name text NOT NULL,
 CONSTRAINT PK_gun PRIMARY KEY ( "id" )
);

-- ************************************** "bit".skin_status

DROP TABLE IF EXISTS "bit".skin_status CASCADE;

CREATE TABLE "bit".skin_status
(
 "id"              uuid DEFAULT uuid_generate_v1(),
 game_profile_id uuid,
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