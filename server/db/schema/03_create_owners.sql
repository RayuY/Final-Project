-- schema/02_create_owners.sql
DROP TABLE IF EXISTS owners CASCADE;
-- CREATE OWNERS
CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  owner_name character varying(255) NOT NULL,
  owner_email character varying(255) NOT NULL,
  owner_password character varying(255) NOT NULL,
  owner_phone character varying(255) NOT NULL
);