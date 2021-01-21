\connect bit;
DELETE FROM bit.skin_status;
INSERT INTO bit.skin_status (game_profile_id, gun_id, status)
SELECT id, 33, 'owned'
    from bit.game_profile
WHERE bit.game_profile.game_profile_username = 'sjiltin';
INSERT INTO bit.skin_status (game_profile_id, gun_id, status)
SELECT id, 22, 'owned'
    from bit.game_profile
WHERE bit.game_profile.game_profile_username = 'b-rey';
INSERT INTO bit.skin_status (game_profile_id, gun_id, status)
SELECT id, 21, 'owned'
    from bit.game_profile
WHERE bit.game_profile.game_profile_username = '-winky-twinker68';
INSERT INTO bit.skin_status (game_profile_id, gun_id, status)
SELECT id, 1, 'owned'
    from bit.game_profile
WHERE bit.game_profile.game_profile_username = 'KAY-Six';

commit;