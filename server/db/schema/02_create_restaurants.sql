-- schema/02_create_restaurants.sql
DROP TABLE IF EXISTS restaurants CASCADE;
-- CREATE RESTAURANTS
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  owner_id integer REFERENCES owners(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(12) NOT NULL,
  description TEXT,
  img TEXT,
  review INT DEFAULT 0,
  avg_price INT DEFAULT 20,
  spot2 INT DEFAULT 0,
  spot4 INT DEFAULT 0,
  spot6 INT DEFAULT 0
);
