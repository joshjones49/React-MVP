
--'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/src/migration.sql'


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
('BERSERK 1997', 'reactmvp/src/images/berserk-image.jpg'),
('KONOSUBA', 'reactmvp/src/images/konosuba-image.jpg'),
('KABANERI OF THE IRON FORTRESS', 'reactmvp/src/images/Kabaneri-image.jpg'),
('BERSERK OF GLUTTONY', 'reactmvp/src/images/Berserk-Of-Gluttony-image.jpg'),
('RURONI KENSHIN', 'reactmvp/src/images/Ruroni-image.jpg'),
('YUYU HAKUSHO', 'reactmvp/publi/images/YYH-image.jpg'),
('MR. OSOMATSU', 'reactmvp/src/images/Oso-image.jpg'),
('ADVENT OF THE RED COMET', 'reactmvp/sr/images/Advent-image.jpg'),
('JOJOS BIZARRE ADVENTURE', 'reactmvp/src/images/JJBA-image.jpg'),
('PARASYTE', 'reactmvp/src/images/Parasyte-image.jpg');


