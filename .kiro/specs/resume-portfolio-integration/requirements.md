# Requirements Document

## Introduction

This feature integrates Om Mapari's complete resume information into the existing personal portfolio website. The portfolio currently has basic information but needs to be updated with comprehensive details from the resume including updated experience, projects, skills, certifications, achievements, and coding profiles.

## Glossary

- **Portfolio**: The personal website showcasing Om Mapari's professional profile
- **Resume Section**: The page/article displaying work experience, education, and skills
- **About Section**: The introductory page with summary and services
- **Portfolio Section**: The page displaying projects with filtering capability
- **Sidebar**: The left panel containing contact info and social links

## Requirements

### Requirement 1

**User Story:** As a visitor, I want to see Om Mapari's complete and updated professional summary, so that I can understand his expertise and value proposition.

#### Acceptance Criteria

1. WHEN a visitor views the About section THEN the Portfolio SHALL display the updated summary highlighting DevSecOps, Backend, Frontend, and AI expertise
2. WHEN a visitor views the About section THEN the Portfolio SHALL display the current role as "Software Engineer SDE 2 - BA4" at Barclays
3. WHEN a visitor views the sidebar THEN the Portfolio SHALL display the title "Full Stack Engineer" reflecting the resume headline
4. WHEN a visitor views the sidebar THEN the Portfolio SHALL display location as "Pune, Maharashtra, India"

### Requirement 2

**User Story:** As a visitor, I want to see Om Mapari's complete work experience with detailed responsibilities, so that I can evaluate his professional background.

#### Acceptance Criteria

1. WHEN a visitor views the Resume section THEN the Portfolio SHALL display Barclays experience with two distinct roles: SDE 2 (March 2025 - Present) and SDE 1 (July 2023 - March 2025)
2. WHEN a visitor views the Barclays SDE 2 experience THEN the Portfolio SHALL display the total tenure of 2 years 6 months
3. WHEN a visitor views the Barclays experience THEN the Portfolio SHALL display key achievements including Amazon Arrow Card work, multi-region AWS deployment, and automation accomplishments
4. WHEN a visitor views the Finarkein Analytics experience THEN the Portfolio SHALL display the role as Backend Developer with FIP and Kafka queue responsibilities

### Requirement 3

**User Story:** As a visitor, I want to see Om Mapari's complete education details, so that I can understand his academic background.

#### Acceptance Criteria

1. WHEN a visitor views the Resume section THEN the Portfolio SHALL display PICT Pune with GPA 9.1 and dates 2019-2023
2. WHEN a visitor views the Resume section THEN the Portfolio SHALL display Vidya Vikas College with 84.92% and dates 2016-2018
3. WHEN a visitor views the education section THEN the Portfolio SHALL display the MH-CET achievement of 99.57 percentile

### Requirement 4

**User Story:** As a visitor, I want to see Om Mapari's comprehensive technical skills, so that I can assess his technical capabilities.

#### Acceptance Criteria

1. WHEN a visitor views the Resume section THEN the Portfolio SHALL display programming languages: C, C++, Java, JavaScript, Python, Go
2. WHEN a visitor views the Resume section THEN the Portfolio SHALL display backend technologies: Node.js, Express.js, Quarkus, Spring, Spring Boot, FastAPI, Kafka, Keycloak, Docker
3. WHEN a visitor views the Resume section THEN the Portfolio SHALL display databases: MySQL, PostgreSQL, MongoDB
4. WHEN a visitor views the Resume section THEN the Portfolio SHALL display frontend technologies: HTML, CSS, JavaScript ES6+, React, Tailwind, ShadCN
5. WHEN a visitor views the Resume section THEN the Portfolio SHALL display DevOps/Cloud tools: AWS (ECS, Lambda, Step Functions, EventBridge, VPC), Terraform IaC, Jenkins, GitLab CI/CD

### Requirement 5

**User Story:** As a visitor, I want to see all of Om Mapari's projects with proper categorization, so that I can explore his work portfolio.

#### Acceptance Criteria

1. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Shello CLI project with AI, Gemini, AWS CLI technologies
2. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Proctor Vision Chrome Extension with Node.js, Express.js, MongoDB stack
3. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Career Corner project with HTML, CSS, JS, Bootstrap
4. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Wireless Cursor Controller with Python, OpenCV, MediaPipe
5. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Movie Recommender System with Python, pandas, NumPy, scikit-learn, Streamlit
6. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Meme Editor with React JS
7. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display SmartLink URL shortener project
8. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display EatExpress Swiggy-like app
9. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Task-List REST API project
10. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Sorting Visualizer project
11. WHEN a visitor views the Portfolio section THEN the Portfolio SHALL display Store-API e-commerce project

### Requirement 6

**User Story:** As a visitor, I want to see Om Mapari's certifications, so that I can verify his professional credentials.

#### Acceptance Criteria

1. WHEN a visitor views the Resume section THEN the Portfolio SHALL display "Complete Python Bootcamp From Zero to Hero" certification
2. WHEN a visitor views the Resume section THEN the Portfolio SHALL display "Programming Foundations with JavaScript, HTML and CSS" certification
3. WHEN a visitor views the Resume section THEN the Portfolio SHALL display "AWS Certified Solutions Architect – Associate" certification

### Requirement 7

**User Story:** As a visitor, I want to see Om Mapari's achievements and coding profiles, so that I can assess his competitive programming skills.

#### Acceptance Criteria

1. WHEN a visitor views the Resume section THEN the Portfolio SHALL display LeetCode profile link (leetcode.com/om-mapari)
2. WHEN a visitor views the Resume section THEN the Portfolio SHALL display GeeksforGeeks profile link (geeksforgeeks.org/ommapari)
3. WHEN a visitor views the Resume section THEN the Portfolio SHALL display achievement of 600+ DSA problems solved
4. WHEN a visitor views the Resume section THEN the Portfolio SHALL display LeetCode weekly contest rank #1551 in contest #326
5. WHEN a visitor views the Resume section THEN the Portfolio SHALL display MH-CET Math score of 99.95/100
6. WHEN a visitor views the Resume section THEN the Portfolio SHALL display typing speed of 70 WPM

### Requirement 8

**User Story:** As a visitor, I want to see Om Mapari's "What I'm doing" services updated to reflect current expertise, so that I understand his current focus areas.

#### Acceptance Criteria

1. WHEN a visitor views the About section THEN the Portfolio SHALL display Backend Development service with FastAPI, Node.js, Spring Boot
2. WHEN a visitor views the About section THEN the Portfolio SHALL display Frontend Development service with React, Tailwind, ShadCN
3. WHEN a visitor views the About section THEN the Portfolio SHALL display CI/CD Pipelines service with GitLab, Jenkins
4. WHEN a visitor views the About section THEN the Portfolio SHALL display Cloud-native AWS solutions service with ECS, Lambda, Step Functions
5. WHEN a visitor views the About section THEN the Portfolio SHALL display Infrastructure as Code service with Terraform, EventBridge, VPC
