
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

(`BERSERK '97`, `Berserk is a dark fantasy manga and anime series that follows the story of a mercenary named Guts who is seeking revenge against his former friend and leader, Griffith, who betrayed and sacrificed their comrades to become a powerful demon.`, 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/berserk-image.jpg?raw=true'),

('KONOSUBA', `After a traffic accident, Kazuma Sato's disappointingly brief life was supposed to be over, but he wakes up to see a beautiful girl before him. She claims to be a goddess, Aqua, and asks if he would like to go to another world and bring only one thing with him. Kazuma decides to bring the goddess herself, and they are transported to a fantasy world filled with adventure, ruled by a demon king. Now Kazuma only wants to live in peace, but Aqua wants to solve many of this world's problems, and the demon king will only turn a blind eye for so long...`, 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/konosuba-image.jpg?raw=true'),

('KABANERI OF THE IRON FORTRESS', `At a time when the industrial revolution was carrying the world into the modern age, a horde of undead monsters suddenly appeared. They could not be killed unless their hearts, which were protected by a layer of iron, were pierced. These undead, which would later be known as "Kabane," exploded in population until they finally overran the world. The people of Hinomoto, built fortresses known as "stations" that have allowed them to survive the threat of the Kabane. Ikoma is a young steamsmith living at Aragane Station, working on developing a unique anti-Kabane weapon called a "piercing gun".`, 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Kabaneri-image.jpg?raw=true'),

('BERSERK OF GLUTTONY', `Fate Graphite was born into a world where magical skills shape your destiny. His skill is Gluttony, a seemingly useless curse of unending hunger that has left him shunned and looked down upon. Until one day, after he takes the life of a thief, his true power awakens: he can devour the skill of anyone he kills to feed his appetite. Will he learn to control this gruesome ability for the better?`, 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Berserk-Of-Gluttony-image.jpg?raw=true'),

('RUROUNI KENSHIN', 'Rurouni Kenshin tells the story of a wanderer named Kenshin, who used to be called Hitokiri Battousai during the Japanese civil war. His tale is about redemption of his past and all his murders by helping those in trouble with his reverse-blade sword, the sakabato.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Ruroni-image.jpg?raw=true'),

('YUYU HAKUSHO', 'The story revolves around Yusuke Urameshi, a delinquent junior high school student who spends his days getting into fights. He dies after saving a child in a car accident, and gets resurrected to serve as an investigator of the supernatural.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/YYH-image.jpg?raw=true'),

('MR. OSOMATSU', 'Mr. Osomatsu is a comedy anime series about identical sextuplets, the Matsuno brothers, and their mischievous misadventures. The series is based on the gag manga series Osomatsu-kun by Fujio Akatsuka, which ran from 1962 to 1969.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Oso-image.jpg?raw=true'),

('ADVENT OF THE RED COMET', 'The tragic story of Char Aznable, the ace pilot known as the Red Comet, and his sister Sayla Mass unfolds against the backdrop of the events leading to the One Year War, centering around the childhood and early adulthood of Char.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Advent.jpg?raw=true'),

(`JOJO'S BIZARRE ADVENTURE`, 'The story follows the Joestar family, who have intense psychic strength and discover they are destined to defeat supernatural foes. The series is divided into eight story arcs, each following a new protagonist named "JoJo". The story takes place in a variety of settings and eras, including the Victorian era, Japan, Italy, and the World War 2 era.', 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/JJBA-image.jpg?raw=true'),

('PARASYTE', `They arrived in silence and darkness, descending from the skies with a hunger for human flesh. Parasites - alien creatures who must invade and take control of a human host to survive - have come to Earth. No one knows their secret except high school student, Shinichi Izumi, who's right hand has been invaded by an alien parasite. Shinichi and Migi, the parasite in his hand, begrudgingly form a friendship and find themselves caught in the middle of a war between humans and parasites.`, 'https://github.com/joshjones49/React-MVP/blob/main/reactmvp/public/images/Parasyte-image.jpg?raw=true');

('GINTAMA', `In a world where aliens have invaded Edo Period Japan, skyscrapers, trains and motor bikes have replaced the simple life of Earth inhabitants. One man however, still carries the soul of a samurai, Gintoki Sakata, otherwise known as Yorozuya Gin-san. As reckless as he is, Gintoki carries his own resolve and is ready to take on any challenge with his fellow companions.`, ''),

('HAJIME NO IPPO', 'Ippo Makunouchis gentle spirit and lack of confidence make him an easy target for the bullies at his high school. Rescued from a beating by Takamura, a professional boxer, Ippo aspires to learn the art of boxing, and attempts to join the Kamogawa Boxing Club. But, to find his fighters spirit, Ippo must first spar with Miyata, an extraordinarily talented and skilled boxer. Can Ippo even survive the first round?!', ''),

(`GRIMGAR`, `When Haruhiro awakens, he's in the dark surrounded by people who have no memory of where they came from or how they got there. As the darkness fades, a fantastic new world called “Grimgar” appears before them and their adventure begins—but first, they'll have to choose their guild, class, and special abilities.`, ''),

('GARO -VANISHING LINE-', 'Highly advanced town - Russel City. While people enjoy its prosperity in the town, there is a huge conspiracy secretly going on which will shake the world. Sword, a man who notices its movement determines to throw himself into battles and reveal the conspiracy, but only to find a clue - "Eldorado". At that time, Sword happens to meet a girl Sophie who has been looking for the meaning of "Eldorado", a message left by her missing brother. These two, attracted by the word "Eldorado", somehow feel invisible ties each other and start to act together. Their journey with mixed feelings now begins.', ''),

('REDO OF HEALER', 'In a world filled with magic and adventure, our protagonist, Keyaru, possesses a unique ability to heal wounds and ailments. With a heart full of optimism and a desire to make the world a better place, Keyaru embarks on a journey to help those in need and spread happiness.', ''),

(`HELL'S PARADISE`, `Gabimaru reigns as the strongest and most ruthless assassin in his village. But now finds himself on death row—with only one way out: retrieve the Elixir of Life from a sinister island. Longing for freedom, he accepts the challenge. But with fellow convicts vying for the same prize and demonic beasts lurking, how will Gabimaru survive this harrowing quest?`, ''),

(`MOB PSYCHO 100`, `Kageyama Shigeo, a.k.a. "Mob," is a boy who has trouble expressing himself, but who happens to be a powerful esper. Mob is determined to live a normal life and keeps his ESP suppressed, but when his emotions surge to a level of 100%, something terrible happens to him! As he's surrounded by false espers, evil spirits, and mysterious organizations, what will Mob think? What choices will he make?`, ''),

(`JIN ROH`, `In a very different Tokyo, the totalitarian government rules with an iron fist. But a group called "the Sect" is staging demonstrations and challenging the government's martial law. Constable Fuse of the Capital Police's Special Unit is on a mission to stop a Sect demonstration when he encounters a girl in the sewers under Tokyo. When he fails to shoot as ordered, he is put on trial, questioned, and "re-conditioned" as a soldier. The dead girl haunts him, both in his dreams and in the face of her sister, whom Fuse has befriended. But Fuse has made himself a target for some very powerful men.`, ''),

(`MISS KOBOYASHI'S DRAGON MAID`, `Miss Kobayashi is your average office worker who lives a boring life, alone in her small apartment-until she saves the life of a female dragon in distress. The dragon, named Tohru, has the ability to magically transform into an adorable human girl (albeit with horns and a long tail!), who will do anything to pay off her debt of gratitude, whether Miss Kobayashi likes it or not. With a very persistent and amorous dragon as a roommate, nothing comes easy, and Miss Kobayashi's normal life is about to go off the deep end!`, ''),

(`BLACK SUMMONER`, `Kelvin finds himself reincarnated into another world—with a goddess, Melfina, as his servant and guide. He no longer has memories from his previous life—because he's traded them for the advanced magic skills of a Summoner. But not so fast-first he must start his exciting new life as a common adventurer to avoid drawing too much attention to himself…for the time being!`, ''),

(`JUJUTSU KAISEN`, `Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses...and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back`, ''),

(`ATTACK ON TITAN`, `Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls - but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill - or be devoured!`, ''),

(`RANKING OF KINGS`, `How prosperous your nation is, how many powerful warriors it boasts, and how heroic and strong its king is. These are the criteria that factor into the system known as the Ranking of Kings.
The main character, Bojji, was born the first prince of the kingdom ruled by King Bossu, who is ranked number seven.
But Bojji was born unable to hear and is so powerless that he can't even swing a sword. In consequence, his own retainers and the public, look down upon him as completely unfit to be king.
It is then that Bojji finds his first friend, Kage, and Bojji's life takes a dramatic turn…`, ''),

(`BLOOD BLOCKADE BATTLEFRONT`, `A breach between Earth and the netherworld has opened up over the city of New York, trapping New Yorkers and creatures from other dimensions in an impenetrable bubble.`, ''),

(`SAILOR MOON`, `Based on Naoko Takeuchi’s legendary manga series, Sailor Moon Crystal retells the story of Sailor Moon as she searches for her fellow Sailor Guardians and the Legendary Silver Crystal to stop the dark forces of Queen Beryl.`, ''),

(`DRAGON BALL`, `Goku is a strange, bushy-tailed boy who spends his days hunting and eating—until he meets Bulma, a bossy beauty with boys on the brain. Together, they set out to find the seven magic Dragon Balls and make the wish that will change their lives forever.`, ''),

(`DRAGON BALL Z`, `Goku—the strongest fighter on the planet—is all that stands between humanity and villains from the darkest corners of space. Joined in battle by the Z-Fighters, Goku travels to distant realms in search of the magic powers of the seven Dragon Balls!`, ''),

(`FOOD WARS`, `Shokugeki no Soma centers on Yukihira Soma, a middle school student who is determined to surpass his father's culinary skills. One day, his father decides to close down their family restaurant and hone his skills in Europe. Before leaving he enrolls Soma in an elite culinary school that is extremely difficult to enter with a graduation rate of only 10 percent. Will Soma be able to improve his skills, or will the kitchen prove to be too hot?`, ''),

(`ISEKAI IZAKAYA`, `It is about a bar in Kyoto, Japan, called Nobu, that has a back entrance in modern day Japan and a front entrance in a medieval fantasy land.`, ''),

(`CELLS AT WORK`, `This is a story about you. A tale about the inside of your body…
According to a new study, the human body consists of approximately 37 trillion cells.These cells are hard at work every day within a world that is your body. From the oxygen carrying Red Blood Cells to the bacteria fighting White Blood Cells. Get to know the unsung heroes and the drama that unfolds inside of you!`, ''),

