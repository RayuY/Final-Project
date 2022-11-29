-- schema/04_create_reservations.sql
DROP TABLE IF EXISTS reservations CASCADE;
-- CREATE RESERVATIONS
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  restaurant_id integer REFERENCES restaurants(id) on DELETE CASCADE NOT NULL,
  party_size INT
);