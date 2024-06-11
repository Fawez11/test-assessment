CREATE SCHEMA IF NOT EXISTS `fitness_tracker`;
USE `fitness_tracker`;

-- Table: users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  height FLOAT,
  weight FLOAT,
  age INT,
  gender ENUM('Male', 'Female'),
  fitness_goal VARCHAR(255)
);

-- Table: workouts
CREATE TABLE workouts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration INT,
  intensity ENUM('Low', 'Moderate', 'High'),
  difficulty_level ENUM('Beginner', 'Intermediate', 'Advanced')
);

-- Insert sample data into workouts
INSERT INTO workouts (title, description, duration, intensity, difficulty_level)
VALUES 
  ('Morning Jog', 'A brisk jog to kickstart your day.', 30, 'Moderate', 'Beginner'),
  ('Full Body Workout', 'A comprehensive workout targeting all major muscle groups.', 60, 'High', 'Intermediate'),
  ('Yoga Session', 'Relaxing yoga session to improve flexibility and reduce stress.', 45, 'Low', 'Beginner'),
  ('HIIT Workout', 'High-intensity interval training for maximum calorie burn.', 20, 'High', 'Advanced'),
  ('Cycling Challenge', 'An endurance-focused cycling workout.', 45, 'Moderate', 'Intermediate');

-- Insert sample data into users
INSERT INTO users (username, email, password, height, weight, age, gender, fitness_goal)
VALUES
  ('john_doe', 'john@example.com', 'password123', 175.5, 70.0, 30, 'Male', 'Build Muscle'),
  ('jane_smith', 'jane@example.com', 'password456', 165.0, 60.0, 25, 'Female', 'Lose Weight'),
  ('alice_jones', 'alice@example.com', 'password789', 160.0, 55.0, 28, 'Female', 'Maintain Fitness'),
  ('bob_brown', 'bob@example.com', 'password101', 180.0, 85.0, 35, 'Male', 'Increase Stamina');
