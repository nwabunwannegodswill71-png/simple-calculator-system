# Standard Calculator System

Course: Software Engineering (SEN)

## 1. Project Overview
The Standard Calculator System is a simple web-based application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The system was developed following the Software Development Life Cycle (SDLC) to ensure a structured and systematic approach to software development.

## 2. Software Development Life Cycle (SDLC)

### 2.1 Requirements Analysis

#### Functional Requirements
- The system shall accept numeric inputs (0–9)
- The system shall perform arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)
- The system shall display calculation results
- The system shall clear all inputs using the clear (C) button
- The system shall delete the last input using the delete (DEL) button
- The system shall handle invalid expressions by displaying an error message

#### Non-Functional Requirements
- The system shall have a simple and user-friendly interface
- The system shall respond quickly to user input
- The system shall run on standard web browsers

### 2.2 System Design
The Standard Calculator System follows a three-layer architectural design:

- Presentation Layer: Implemented using index.html. This layer contains the calculator display and buttons used for user interaction.
- Styling Layer: Implemented using style.css. This layer defines the visual appearance and layout of the calculator components.
- Logic Layer: Implemented using script.js. This layer contains the JavaScript functions that handle input processing and arithmetic operations.

All names and nomenclatures used in the design are consistent with those used in the implementation.

### 2.3 Implementation
The system was implemented using the following technologies:
- HTML for structuring the calculator interface
- CSS for styling and layout
- JavaScript for implementing calculator logic

Key functions implemented in script.js include:
- appendValue() – Appends numbers and operators to the display
- calculateResult() – Evaluates the mathematical expression and displays the result
- clearDisplay() – Clears the calculator screen
- deleteLast() – Deletes the last entered character

### 2.4 Testing
Testing was carried out to ensure correct system behavior:
- Button click testing
- Arithmetic operation testing
- Error handling testing
- User interface usability testing

All detected issues were resolved during the testing phase.

### 2.5 Deployment
The system was deployed as a static web application and hosted on GitHub. Users can run the system by opening the index.html file in any modern web browser.

### 2.6 Maintenance
Future improvements may include:
- Keyboard input support
- Advanced calculator functions
- Improved user interface design

## 3. How to Run the Project
1. Download or clone the repository
2. Open the index.html file in a web browser
3. Use the calculator buttons to perform calculations

## 4. Author
Name: Godswill
Project Title: Standard Calculator System
