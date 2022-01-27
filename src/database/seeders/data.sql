use Mellowdyne;

INSERT INTO genres VALUES (1,'Rock'),(2,'Metal'),(3,'Pop'),
(4,'Funk'),(5,'Música clásica'),(6,'Blues'),(7,'Jazz'),(8,'Soul'),
(9,'Punk'),(10,'Country'),(11,'Ska'),(12,'Reggae'),(13,'Salsa'),
(14,'Otros');

INSERT INTO categories VALUES (1,'top'),(2,'popular'),(3,'moreSale');

INSERT INTO artists VALUES (1,'Dream Theater'),(2,'Maná'),
(3,'Michael Jackson'),(4,'Metallica'),(5,'Nirvana'),(6,'The Beatles')
,(7,'José José'),(8,'AC/DC'),(9,'Aerosmith'),(10,'Muse');

insert into users (id_users, full_name, email, password, politic, avatar, admin) values 
(1, 'Roddy Enstone', 'renstone0@berkeley.edu', 'ZXIQ9Ard', true, 'https://robohash.org/exutaliquid.png?size=50x50&set=set1', true);

insert into users (id_users, full_name, email, password, politic, avatar, admin) values 
(2, 'Nikaniki Bubb', 'nbubb1@chicagotribune.com', 'm68A31dHF7PX', false, 'https://robohash.org/essequiid.png?size=50x50&set=set1', false),
(3, 'Bonni Seer', 'bseer2@live.com', 'LQOBN954vk', false, 'https://robohash.org/quodquiaasperiores.png?size=50x50&set=set1', true),
(4, 'Aguistin Telega', 'atelega3@desdev.cn', 'FMjIarGXcd', false, 'https://robohash.org/quiatemporerem.png?size=50x50&set=set1', true),
(5, 'Frederico Graveney', 'fgraveney4@mac.com', 'EES4l5', false, 'https://robohash.org/ullamveroet.png?size=50x50&set=set1', false),
(6, 'Berenice Erlam', 'berlam5@nba.com', 'dIfvNmKPA', false, 'https://robohash.org/sintrepudiandaeveniam.png?size=50x50&set=set1', true),
(7, 'Addi Schule', 'aschule6@tinyurl.com', '4NTbf8Nhfb', true, 'https://robohash.org/nihiletsit.png?size=50x50&set=set1', true),
(8, 'Claudetta Edington', 'cedington7@constantcontact.com', 'S8bvwZ', false, 'https://robohash.org/quidolorespraesentium.png?size=50x50&set=set1', true),
(9, 'Bamby Jerzykiewicz', 'bjerzykiewicz8@epa.gov', '13rc9gZHE', true, 'https://robohash.org/veroveritatisvoluptatem.png?size=50x50&set=set1', true),
(10, 'Roselia Syder', 'rsyder9@rambler.ru', 'ScISAubT2Z', true, 'https://robohash.org/culpalaboredeleniti.png?size=50x50&set=set1', false),
(11, 'Gusta Brydie', 'gbrydiea@omniture.com', 'tlmn2JS', false, 'https://robohash.org/quidoloresiste.png?size=50x50&set=set1', true),
(12, 'Fredia Mc Queen', 'fmcb@china.com.cn', 'WGuDost', false, 'https://robohash.org/sedconsequatursit.png?size=50x50&set=set1', true),
(13, 'Stormi Westberg', 'swestbergc@bloglovin.com', '7PC55Eeyxte9', true, 'https://robohash.org/quiamodivel.png?size=50x50&set=set1', false);

INSERT INTO albums VALUES (1, 'Scenes from a memory', 1,'Scenes From a Memory es un álbum conceptual que narra una única historia 
de corte shakespearianna ubicada en el año 1928 acerca de un joven que descubre su pasado, el cual está 
relacionado con el amor, asesinato e infidelidad de Victoria Page. Como el nombre puede sugerir, Metropolis 
Pt. 2: Scenes From a Memory es una secuela que sigue la historia de Metropolis Pt. 1: The Miracle 
And The Sleeper, la quinta canción del segundo álbum de la banda: Images and Words.', 2, '1999-10-26', 500, 1, 'Scenes-from-a-memory.jpg', 1);

INSERT INTO albums VALUES (2, 'Sueños Líquidos', 2, 'Sueños líquidos es el título del quinto álbum de estudio (noveno en general) grabado 
por la banda de rock en español mexicana Maná. Fue lanzado al mercado por la compañía discográfica WEA Latina el 14 de octubre de 1997.1
Después de su lanzamiento por primera vez en más de 36 países de todo el mundo, la banda comenzó a recibir atención internacional fuerte, 
especialmente en España y los Estados Unidos, donde el álbum vendió más de 1 000 000 de copias. 
Fue grabado en la ciudad costera de Puerto Vallarta.', 1, '1997-10-14', 350, 2, 'Suenos-liquidos.jpg', 2), 
(3, 'Immortal', 3, 'Immortal” se publicó el 21 de noviembre de 2011, sus grabaciones corresponden a temas originales realizados entre los 
years 1969 hasta el 2009, por Michael Jackson.', 3, '2011-11-21', 300, 1, 'Immortal.jpg', 3), 
(4, 'Master of puppets', 4, 'Master Of Puppets, se publicó en marzo del year 1986, es el tercer disco 
de estudio de la banda Metallica, se editó bajo el sello discográfico Elektra Records.', 2, '1986-03-03', 250, 2, 'Master-of-puppets.jpg', 3),
(5, 'Nevermind', 5, 'Nevermind es el segundo álbum de estudio de la banda estadounidense de grunge Nirvana, publicado el 24 de septiembre de 
1991, al igual que Badmotorfinger, el segundo álbum de estudio de Soundgarden. Producido por Butch Vig, Nevermind fue el primer lanzamiento de 
la banda con DGC Records.', 1, '1991-09-24', 250, 3, 'Nevermind.jpg', 4), 
(6, 'Revolver', 6, 'Revolver es el séptimo disco de estudio de la agrupación inglesa de rock, The Beatles, el cual fue lanzado el 5 de agosto 
de 1966 por el sello discográfico Parlophone Record.', 1, '1966-08-05', 400, 1, 'Revolver.jpg', 5), 
(7, 'Promesas', 7, 'Promesas es el título del 21°. álbum de estudio grabado por el intérprete mexicano José José, Fue lanzado al mercado bajo 
el sello discográfico RCA Ariola a finales de 1985. De nueva cuenta el compositor de todos los temas es el espyearl Rafael Pérez-Botija, 
además de que él es quien funge como arreglista, director y productor del disco.', 14, '1985-10-29', 350, 2, 'Promesas.jpg', 6),
 (8, 'Back In Black', 8, 'Back in Black es el séptimo álbum de estudio de la banda australiana de hard rock AC/DC, lanzado en 1980. Fue grabado 
 en Bahamas y, por segunda vez, producido por Robert Mutt Lange, siendo Highway to Hell la primera ocasión.', 1, '1980-07-25', 420, 3, 'Back-in-black.jpg', 7), 
 (9, 'Train of Thought', 1, 'Train of Thought es el séptimo álbum de duración completa del grupo de metal progresivo Dream Theater. Fue publicado 
 en 2003 y se trata probablemente del álbum más pesado de la banda.', 2, '2003-11-11', 550, 1, 'Train_of_Thought.jpg', 1 ), 
 (10, 'Six Degrees of Inner Turbulence', 1, 'Six Degrees of Inner Turbulence (con frecuencia abreviado SDOIT o 6DOIT) es el sexto álbum de 
 larga duración de la banda de metal progresivo Dream Theater. Es un CD doble lanzado el 29 de enero de 2002 mediante la discográfica 
 Elektra Records.', 2, '2002-01-29', 450, 2, 'Six_Degrees_of_Inner_Turbulence.jpg', 1), 
 (11, 'Get a Grip', 9, 'Get A Grip es el nombre del undécimo álbum de estudio de la banda estadounidense de hard rock Aerosmith. Fue lanzado al 
 mercado el 20 de abril de 1993 por la discográfica Geffen Records.', 1, '1993-04-20', 260, 3, 'Get-a-grip.jpg', 8), 
 (12, '¿Donde jugaran los niños?', 2, '¿Dónde jugarán los niños? es el nombre del tercer álbum de estudio de la banda de rock mexicana Maná, 
 lanzado al mercado el 27 de octubre de 1992, dos años después de su anterior disco Falta amor (1990).',1, '1992-10-27', 220, 3, '1640623837770_img_.jpg', 2), 
 (13, 'The Resitance', 10, 'The Resistance (La Resistencia) es el nombre del quinto álbum de estudio de la banda británica Muse, publicado en Europa el 
 14 de septiembre de 2009 y en América del Norte el 15 de septiembre de 2009. El álbum fue producido por la banda y mezclado por Mark Stent. 
 Fue grabado en el estudio privado de la banda, en la residencia del vocalista Matt Bellamy en el Lago Como y en Milán, Italia.', 1, '2009-09-14', 340, 1, '1642028433659_img_.jpg', 9);
 
 
 INSERT INTO songs VALUES (1,'Scene One: Regression',1),(2,'Scene Two: I. Overture 1928',1),(3,'Scene Two: II. Strange Deja-vù',1),
 (4,'Scene Three: I. Through My Words',1),(5,'Scene Three: II. Fatal Tragedy',1),(6,'Scene Four: Beyond This Life',1),(7,'Scene Five: Through Her Eyes',1),
 (8,'Scene Six: Home',1),(9,'Scene Seven: I. The Dance of Eternity',1),(10,'Scene Seven: II. One Last Time',1),(11,'Scene Eight: The Spirit Carries On',1),(12,'Scene Nine: Finally Free',1),
 (13,'Hechicera',2),(14,'Un lobo por tu amor',2),(15,'Cómo dueles en los labios',2),(16,'Chamán',2),(17,'Tú tienes lo que quiero',2),(18,'Clavado en un bar',2),
 (19,'Róbame el alma',2),(20,'En el muelle de San Blás',2),(21,'La sirena ',2),(22,'Me voy a convertir en un ave',2),(23,'Cómo te extraño corazón',2),(24,'Ámame hasta que me muera',2),
 (25,'Workin\' Day and Night',3),(26,'The Immortal Intro',3),(27,'Childhood',3),(28,'Wanna Be Startin\' Somethin\'',3),(29,'Dancing Machine/Blame It on the Boogie',3),(30,'This Place Hotel ',3),
 (31,'Smooth Criminal',3),(32,'Dangerous',3),(33,'The Jackson 5 Medley',3),(34,'Speechless/Human Nature',3),(35,'Is It Scary/Threatened',3),(36,'Thriller',3),
 (37,'Battery',4),(38,'Master of Puppets',4),(39,'The Thing That Should Not Be',4),(40,'Welcome Home (Sanitarium)',4),(41,'Disposable Heroes',4),(42,'Leper Messiah',4),(43,'Orion',4),(44,'Damage, Inc.',4),
 (45,'Smells Like Teen Spirit',5),(46,'In Bloom',5),(47,'Come as You Are',5),(48,'Breed',5),(49,'Lithium',5),(50,'Polly',5),(51,'Territorial Pissings',5),(52,'Drain You',5),
 (53,'Lounge Act',5),(54,'Stay Away',5),(55,'On a Plain',5),(56,'Something in the Way',5),(57,'Endless, Nameless',5),
 (86,'Taxman',6),(87,'Eleanor Rigby',6),(88,'I\'m Only Sleeping',6),(89,'Love You To',6),(90,'Here, There and Everywhere',6),(91,'Yellow Submarine',6),(92,'She Said She Said',6),
 (93,'Amantes',7),(94,'Me vas a echar de menos',7),(95,'Más',7),(96,'Pruébame',7),(97,'Muchacho',7),(98,'Sólo tú',7),(99,'Tú me estás volviendo loco',7),(100,'Promesas',7),(101,'Lástima',7),(102,'Yo',7),
 (103,'Hells Bells',8),(104,'Shoot to Thrill',8),(105,'What Do You Do for Money Honey',8),(106,'Givin the Dog a Bone',8),(107,'Let Me Put My Love Into You',8),
 (108,'Back in Black',8),(109,'You Shook Me All Night Long',8),(110,'Have a Drink on Me',8),(111,'Shake a Leg',8),(112,'Rock \'n\' Roll Ain\'t Noise Pollution',8),
 (113,'As I Am',9),(114,'This Dying Soul',9),(115,'Endless Sacrifice',9),(116,'Honor Thy Father',9),(117,'Vacant',9),(118,'Stream of Consciousness',9),(119,'In the Name of God',9),
 (120,'Overture',10),(121,'About to Crash',10),(122,'War Inside My Head',10),(123,'The Test That Stumped Them All',10),(124,'Goodnight Kiss',10),(125,'Solitary Shell',10),
 (126,'About to Crash (Reprise)',10),(127,'Losing Time»/«Grand Finale',10),(128,'Intro',11),(129,'Eat the Rich',11),(130,'Get a Grip',11),(131,'Fever',11),(132,'Livin\' on the Edge',11),(133,'Flesh',11),
 (134,'Walk on Down',11),(135,'Shut Up and Dance',11),(136,'Cryin\'',11),(137,'Gotta Love It',11),(138,'Crazy',11),(139,'Line Up',11),(140,'Amazing',11),(141,'Boogie Man',11),
 (142,'De pies a cabeza',12),(143,'Oye mi amor',12),(144,'Cachito',12),(145,'Vivir sin aire',12),(146,'¿Dónde jugarán los niños?',12),(147,'El desierto',12),(148,'La chula',12),(149,'Cómo te deseo',12),
 (150,'Te lloré un río',12),(151,'Cómo diablos',12),(152,'Huele a tristeza',12),(153,'Me vale',12),(154,'Uprising',13),(155,'Resistance',13),(156,'Undisclosed Desires',13),(157,'United States of Eurasia',13),
 (158,'Guiding Light',13),(159,'Unnatural Selection',13),(160,'MK Ultra',13),(161,'I Belong to You',13),(162,'Exogenesis: Symphony Part 1 (Overture)',13),(163,'Exogenesis: Symphony Part 2 (Cross-Pollination)',13),
 (164,'Exogenesis: Symphony Part 3 (Redemption)',13);