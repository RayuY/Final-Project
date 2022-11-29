-- schema/02_create_restaurants.sql
DROP TABLE IF EXISTS restaurants CASCADE;
-- CREATE RESTAURANTS
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  img TEXT,
  spot INT 
);