
--'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/migration.sql'


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
('BERSERK 1997', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/berserk-image.jpg'),
('KONOSUBA', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/konosuba-image.jpg'),
('KABANERI OF THE IRON FORTRESS', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/Kabaneri-image.jpg'),
('BERSERK OF GLUTTONY', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/Berserk-Of-Gluttony-image.jpg'),
('RURONI KENSHIN', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/Ruroni-image.jpg'),
('YUYU HAKUSHO', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/YYH-image.jpg'),
('MR. OSOMATSU', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/Oso-image.jpg'),
('ADVENT OF THE RED COMET', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/Advent-image.jpg'),
('JOJOS BIZARRE ADVENTURE', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/JJBA-image.jpg'),
('PARASYTE', 'C:/Users/joshj/OneDrive/Desktop/reactmvp/React-MVP/reactmvp/images/Parasyte-image.jpg');


