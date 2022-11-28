-- schema/01_create_customers.sql
DROP TABLE IF EXISTS customers CASCADE;
-- CREATE CUSTOMERS
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(12)
);