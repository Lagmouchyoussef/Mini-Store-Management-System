<div align="center">

# Mini Store Management System

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

*A console-based JavaScript application built as a complete solution to a structured lab exercise, demonstrating core programming principles and problem-solving skills.*

</div>

## 📋 Table of Contents

- [🎯 The Lab Exercise](#-the-lab-exercise)
- [✨ Solution & Features](#-solution--features)
- [🏗️ Project Architecture](#️-project-architecture)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [🛠️ Skills Demonstrated](#️-skills-demonstrated)
- [👤 Author](#-author)
- [📄 License](#-license)

---

## 🎯 The Lab Exercise

This project was developed as a practical solution to a multi-level lab assignment. The objective was to progressively build a JavaScript program from basic variable manipulation to a full-fledged interactive console application.

<details>
<summary><strong>Level 1 — Product Discovery (Core Concepts)</strong></summary>

**Objective**: Understand variables, types, and operators.

**Instructions**:
1.  Declare variables: `productName`, `price`, `quantity`, `category`.
2.  Calculate total stock value (`price * quantity`).
3.  Display a descriptive sentence.
4.  Apply a 10% discount if `price > 5000`.
5.  Check stock level: "Sufficient Stock" if `quantity > 10`, otherwise "Low Stock".
6.  Display a warning if total stock value `> 20,000`.

</details>

<details>
<summary><strong>Level 2 — Dynamic Interaction (Loops & Input)</strong></summary>

**Objective**: Work with logic using loops and user input.

**Instructions**:
1.  Use `prompt()` to get product name, price, and quantity from the user.
2.  Calculate and display the total stock value.
3.  Display "This product's stock is valuable" if total `> 10,000`, otherwise "Moderate stock."
4.  Ask the user if they want to add another product. If "yes", repeat the process; if "no", exit the program.

</details>

<details>
<summary><strong>Level 3 — Interactive Menu (System Simulation)</strong></summary>

**Objective**: Simulate a small management system with nested conditions.

**Instructions**:
1.  Display a menu with options: Add product, Calculate value, Check status, Quit.
2.  Handle user input to navigate the menu.
3.  Implement logic for each menu choice.
4.  Provide detailed stock status: "Out of Stock", "Low Stock", or "Stock Available".
5.  Use a `while(true)` loop to keep the menu running until the user chooses to quit.
6.  Validate user input for menu choices.

</details>

---

## ✨ Solution & Features

This application successfully implements all requirements from the lab exercise, evolving through each level of complexity.

-   ✅ **Progressive Implementation**: The codebase is structured to reflect the three learning stages of the lab.
-   ✅ **Dynamic Product Management**: Allows for the addition of products with user-defined attributes via `prompt()`.
-   ✅ **Automated Calculations**: Instantly calculates stock value and applies conditional discounts.
-   ✅ **Intelligent Stock Status**: Provides real-time feedback on stock levels based on predefined business rules.
-   ✅ **Interactive Menu System**: A robust, menu-driven interface that provides a clear and intuitive user experience.
-   ✅ **Robust Control Flow**: Employs loops and conditional statements to manage program state and user interactions effectively.

---

## 🏗️ Project Architecture

The solution is structured in three progressive levels, directly mirroring the lab's pedagogical approach. This architecture demonstrates a clear understanding of how to build complexity incrementally.

-   **Level 1**: Focuses on static data and foundational `if/else` logic.
-   **Level 2**: Introduces user interaction with `prompt()` and loop control for repetitive tasks.
-   **Level 3**: Culminates in a stateful application with a persistent menu system, showcasing advanced control flow and user experience design in a console environment.

---

## 🚀 Getting Started

Follow these instructions to run the application locally.

### Prerequisites

-   **Node.js** (Recommended) - [Download & Install Node.js](https://nodejs.org/)
-   A modern web browser (alternative method).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Lagmouchyoussef/Mini-Store-Management-System.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Mini-Store-Management-System
    ```

### Usage

#### Using Node.js (Recommended)

Run the main script from your terminal:

```bash
node index.js
```

#### Using a Web Browser

1.  Open the `index.html` file.
2.  Open the Developer Console (`F12`).
3.  Interact with the application via the `prompt()` dialogs.

---

## 🛠️ Skills Demonstrated

This project serves as a practical demonstration of the following technical skills:

-   **JavaScript Fundamentals**: Variables, data types, arithmetic operators.
-   **Control Flow**: Advanced use of `if/else`, `switch`, and `while` loops.
-   **User Interaction**: Handling input and output in a non-graphical environment.
-   **Problem-Solving**: Deconstructing a complex problem into manageable, logical steps.
-   **Incremental Development**: Building a project in stages, adding functionality layer by layer.
-   **Code Organization**: Structuring code to be readable, maintainable, and logical.

---

## 👤 Author

**Youssef Lagmouch**

-   GitHub: [@Lagmouchyoussef](https://github.com/Lagmouchyoussef)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
