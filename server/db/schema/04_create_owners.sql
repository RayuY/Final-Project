-- schema/04_create_owners.sql
DROP TABLE IF EXISTS owners CASCADE;
-- CREATE owners
CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(12),
  is_owner BOOLEAN DEFAULT TRUE
);