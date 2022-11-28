-- schema/02_create_restaurants.sql
DROP TABLE IF EXISTS restaurants CASCADE;
-- CREATE RESTAURANTS
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  owner_id integer REFERENCES owners(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  img TEXT,
  spot_available boolean NOT NULL DEFAULT false
);