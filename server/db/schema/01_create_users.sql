-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(12),
  is_owner BOOLEAN DEFAULT TRUE
);