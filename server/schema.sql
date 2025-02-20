DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `id` int NOT NULL,
  `title` varchar(200),
  `author` varchar(100) NULL,
  `url` varchar(5000) NULL,
  `quote` varchar (5000) NULL,
  `rating` int NULL,
  `status` varchar(200),
  PRIMARY KEY (`id`)
);

CREATE INDEX idx_title ON book(title);
CREATE INDEX idx_author ON book(author);
CREATE INDEX idx_rating ON book(rating);
CREATE INDEX idx_status ON book(status);

--to create table run:
-- source .path/schema.sql
-- in the terminal
