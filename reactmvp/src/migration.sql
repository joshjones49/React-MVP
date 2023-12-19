
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
    summary VARCHAR(1000),
    image VARCHAR(255)
);

INSERT INTO show (name, summary, image) VALUES 
('BERSERK 1997', 'Berserk is a dark fantasy manga and anime series that follows the story of a mercenary named Guts who is seeking revenge against his former friend and leader, Griffith, who betrayed and sacrificed their comrades to become a powerful demon.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/berserk-image.jpg?raw=true'),
('KONOSUBA', 'Following an untimely and embarrassing death, Kazuma Satou, a Japanese teenage shut-in NEET, meets a goddess named Aqua, who offers to reincarnate him in a parallel world with MMORPG elements, where he can go on adventures and battle monsters.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/konosuba-image.jpg?raw=true'),
('KABANERI OF THE IRON FORTRESS', 'A large group of survivors seek shelter while travelling on a train after their station was attacked by aggressive, undead creatures called Kabane. As the world is in the middle of an industrial revolution, a monster appears that cannot be defeated unless its heart, which is protected by a layer of iron, is pierced.', NULL),
('BERSERK OF GLUTTONY', 'Born into a world with two kinds of people—those with superior skills and those without—he has been shunned his entire life. Fate has the skill of Gluttony, a curse that leaves him constantly hungry… until he awakens its terrible potential. When he kills someone, he can devour their skills and feed his insatiable appetite.', NULL),
('RURONI KENSHIN', 'Rurouni Kenshin tells the story of a wanderer named Kenshin, who used to be called Hitokiri Battousai during the Japanese civil war. His tale is about redemption of his past and all his murders by helping those in trouble with his reverse-blade sword, the sakabato.', NULL),
('YUYU HAKUSHO', 'The story revolves around Yusuke Urameshi, a delinquent junior high school student who spends his days getting into fights. He dies after saving a child in a car accident, and gets resurrected to serve as an investigator of the supernatural.', NULL),
('MR. OSOMATSU', 'Mr. Osomatsu is a comedy anime series about identical sextuplets, the Matsuno brothers, and their mischievous misadventures. The series is based on the gag manga series Osomatsu-kun by Fujio Akatsuka, which ran from 1962 to 1969.', NULL),
('ADVENT OF THE RED COMET', 'The tragic story of Char Aznable, the ace pilot known as the Red Comet, and his sister Sayla Mass unfolds against the backdrop of the events leading to the One Year War, centering around the childhood and early adulthood of Char.', NULL),
('JOJOS BIZARRE ADVENTURE', 'The story follows the Joestar family, who have intense psychic strength and discover they are destined to defeat supernatural foes. The series is divided into eight story arcs, each following a new protagonist named "JoJo". The story takes place in a variety of settings and eras, including the Victorian era, Japan, Italy, and the World War 2 era.', NULL),
('PARASYTE', '17-year-old Shinichi Izumi is partially infected by a Parasyte, monsters that butcher and consume humans. He must learn to co-exist with the creature if he is to survive both the life of a Parasyte and a human as part monster, part person.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Parasyte-image.jpg?raw=true');


