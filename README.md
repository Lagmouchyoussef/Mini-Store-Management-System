<div align="center">

# Mini Store Management System - Interactive Web Version

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**Copyright © 2024 Youssef Lagmouch**

An interactive, web-based application that brings the JavaScript Mini Store Management lab to life with a modern UI and a visual console simulator.

</div>

## 🎯 Project Overview

This project transforms the original console-based JavaScript lab into a user-friendly web application. While the core logic and the three-level structure remain the same, the interaction is now handled through a graphical interface. The output is displayed in a simulated on-screen console, providing a more engaging and visually appealing experience without losing the essence of the original exercise.

---

## 📜 Lab Exercise Statement

This application is a direct implementation of the following multi-level lab assignment. The goal was to progressively build a JavaScript program from basic variable manipulation to a full-fledged interactive console application.

<details>
<summary><strong>📘 Click to expand the full exercise details</strong></summary>

### **General Objective**
Design a small JavaScript program executed in the console that simulates the management of a mini-store, with automatic calculations, conditional tests, and logical repetitions.

---

### **Level 1 — Product Discovery**

**Objective**: Understand variables, types, and operators.

**Instructions**
1.  Declare the following variables:
    a. `productName`
    b. `price`
    c. `quantity`
    d. `category`
2.  Calculate the total stock value → `price * quantity`
3.  Display a complete descriptive sentence:
    `The product [name] costs [price] MAD and there are [quantity] in stock (category: [category]).`
4.  If the `price > 5000`, apply a 10% discount and display the new price.
5.  If the `quantity > 10`, display "Sufficient Stock", otherwise "Low Stock".
6.  If the total stock value `> 20,000`, display "Warning! High-value stock."

---

### **Level 2 — Dynamic Interaction and Calculations**

**Objective**: Work with logic using loops and user input.

**Instructions**
1.  Ask the user to enter the following via `prompt()`:
    a. The product name,
    b. The price,
    c. The quantity.
2.  Calculate the total stock value and display:
    `The product X costs Y MAD. Total stock value: Z MAD.`
3.  If the total `> 10,000`, display "This product's stock is valuable."
    Otherwise, display "Moderate stock."
4.  Ask the user if they want to add another product:
    a. if "yes" → restart the input process,
    b. if "no" → display "End of program", and exit with `break`.

---

### **Level 3 — Interactive Menu**

**Objective**: Simulate a small management system with nested conditions.

**Instructions**
1.  The program displays this menu:
    ```
    === Mini Store ===
    1. Add a product
    2. Calculate the stock value
    3. Check the stock status
    4. Quit
    ```
2.  The user enters a choice number via `prompt()`.
3.  Based on the choice:
    a. **1** → Ask for name, price, quantity and display the added product.
    b. **2** → Calculate and display the total stock value (`price * quantity`).
    c. **3** → Check the stock status:
        i. `quantity == 0` → "Out of Stock"
        ii. `quantity < 5` → "Low Stock"
        iii. `quantity >= 5` → "Stock Available"
    d. **4** → Exit the program with a farewell message.
4.  If the input does not match any choice, display:
    `"Invalid choice, try again."`
5.  The menu repeats as long as the user does not quit (using `while(true)`).

</details>

---

## ✨ Key Features

-   ✅ **Modern UI/UX**: A clean, responsive, and professional interface built with HTML5 and CSS3.
-   ✅ **Visual Console Simulator**: Instead of the browser's developer console, output is displayed in a custom-styled `div` that mimics a real terminal.
-   ✅ **Level-Based Execution**: Users can run each of the three lab levels independently with the click of a button.
-   ✅ **Interactive Controls**: Simple button-based UI to trigger different parts of the program and clear the console output.
-   ✅ **Responsive Design**: The layout adapts to different screen sizes, ensuring a good experience on both desktop and mobile devices.
-   ✅ **Color-Coded Output**: Log messages are styled with different colors (info, success, warning, error) for better readability.

---

## 🛠️ Technology Stack

This project is built with standard, core web technologies:

-   **HTML5**: For the semantic structure and content of the page.
-   **CSS3**: For styling, layout (using Grid and Flexbox), animations, and responsive design.
-   **Vanilla JavaScript**: For all application logic, DOM manipulation, and event handling. No external libraries or frameworks are used.

---

## 🚀 Getting Started

No installation or build process is required! This is a client-side application that runs directly in the browser.

### Prerequisites

-   A modern web browser (e.g., Chrome, Firefox, Safari, Edge).

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Lagmouchyoussef/Mini-Store-Management-System.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Mini-Store-Management-System
    ```

3.  **Open the application:**
    Simply double-click the `index.html` file, or open it with your web browser from the command line:
    ```bash
    # On macOS
    open index.html

    # On Windows
    start index.html

    # On Linux
    xdg-open index.html
    ```

---

## 📖 How to Use

1.  Open `index.html` in your web browser. The interface will load immediately.
2.  The "Management Console" on the left will display a welcome message.
3.  On the right, use the "Run Levels" buttons to execute the different parts of the lab exercise:
    -   **Level 1**: Runs the script with predefined variables and displays the results.
    -   **Level 2**: Prompts will appear in your browser asking for input (product name, price, etc.). The results will be displayed in the visual console.
    -   **Level 3**: Starts the interactive menu. Use the browser prompts to navigate the menu options.
4.  Click the **"Clear Console"** button at any time to reset the output area.

---

## 📁 Project Structure

```
.
├── index.html          # The main HTML file, contains the UI structure
├── styles.css          # The stylesheet for all visual presentation
├── script.js           # The core JavaScript logic for all three levels
├── README.md           # This file
└── LICENSE             # The MIT License file
```

---

## 🛠️ Skills Demonstrated

This project showcases a blend of front-end development and core programming skills:

-   **DOM Manipulation**: Dynamically creating, updating, and deleting HTML elements based on user interaction and program logic.
-   **Event Handling**: Responding to user clicks to trigger specific functions.
-   **Asynchronous User Interaction**: Using `prompt()` and `confirm()` to pause execution and gather user input.
-   **Responsive Web Design**: Implementing a modern, flexible layout using CSS Grid and Flexbox.
-   **UI/UX Design Principles**: Creating an intuitive, clean, and visually appealing user interface.
-   **JavaScript Fundamentals**: Strong foundation in variables, control flow, loops, and functions.

---

## 👤 Author

**Youssef Lagmouch**

-   GitHub: [@Lagmouchyoussef](https://github.com/Lagmouchyoussef)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
