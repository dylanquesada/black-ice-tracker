\connect bit;
DELETE FROM bit.game_profile;
INSERT INTO bit.game_profile (user_id, system_id, game_profile_username)
SELECT id, 1, 'sjiltin'
    from bit.user
WHERE bit.user.username = 'stayjillin';
INSERT INTO bit.game_profile (user_id, system_id, game_profile_username)
SELECT id, 1, 'b-rey'
    from bit.user
WHERE bit.user.username = 'B-Ray';
INSERT INTO bit.game_profile (user_id, system_id, game_profile_username)
SELECT id, 1, '-winky-twinker68'
    from bit.user
WHERE bit.user.username = 'WinkyWonky68';
INSERT INTO bit.game_profile (user_id, system_id, game_profile_username)
SELECT id, 1, 'KAY-Six'
    from bit.user
WHERE bit.user.username = 'KAYSIX';
INSERT INTO bit.game_profile (user_id, system_id, game_profile_username)
SELECT id, 2, 'KAY-Six'
    from bit.user
WHERE bit.user.username = 'KAYSIX';
commit;