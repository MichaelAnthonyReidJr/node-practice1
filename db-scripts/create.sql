CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  age INT,
  followers INT,
  verified BOOLEAN,
  country VARCHAR(50)
);

INSERT INTO users (name, age, followers, verified, country)
VALUES
  ('Rahul Patel', 33, 450, true, 'India'),
  ('Andrew Martin', 26, 400, false, 'USA'),
  ('Michael Johnson', 41, 200, false, 'Canada'),
  ('Mohammed Rahman', 35, 250, false, 'Bangladesh'),
  ('Emily Brown', 28, 800, true, 'Australia'),
  ('Carlos Hernandez', 36, 550, true, 'Mexico'),
  ('David Lee', 37, 350, false, 'USA'),
  ('Kim Park', 27, 300, true, 'South Korea'),
  ('Sarah Wilson', 29, 600, true, 'UK'),
  ('Sophia Anderson', 30, 700, true, 'UK');