\connect bit;

DELETE FROM bit.system;

INSERT INTO bit.system (id, name) VALUES (1, 'Playstation');
INSERT INTO bit.system (id, name) VALUES (2, 'Xbox');
INSERT INTO bit.system (id, name) VALUES (3, 'PC');

commit;