



DROP TABLE IF EXISTS  watchlist;
DROP TABLE IF EXISTS  show;

CREATE TABLE watchlist (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255),
    text VARCHAR(100000)
);

CREATE TABLE show (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image BYTEA
);

INSERT INTO show (name, image) VALUES 
('BERSERK 1997', 'React-MVP/images/berserk-image.jpg'),
('KONOSUBA', 'React-MVP/images/konosuba-image.jpg'),
('KABANERI OF THE IRON FORTRESS', 'React-MVP/images/Kabaneri-image.jpg'),
('BERSERK OF GLUTTONY', 'React-MVP/images/Berserk-Of-Gluttony-image.jpg'),
('RURONI KENSHIN', 'React-MVP/images/Ruroni-image.jpg'),
('YUYU HAKUSHO', 'React-MVP/images/YYH-image.jpg'),
('MR. OSOMATSU', 'React-MVP/images/Oso-image.jpg'),
('ADVENT OF THE RED COMET', 'React-MVP/images/Advent-image.jpg'),
('JOJOS BIZARRE ADVENTURE', 'React-MVP/images/JJBA-image.jpg'),
('PARASYTE', 'React-MVP/images/Parasyte-image.jpg');


