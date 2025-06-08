# Ben Fielder's Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-teal?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

This project is my personal portfolio website, designed to showcase my skills, experience, and projects as a software developer. Built with Next.js, TypeScript, and Tailwind CSS, it offers a clean, responsive, and interactive experience for visitors.

## Project Description

Welcome to my digital space! This portfolio serves as a comprehensive overview of my journey as a software developer. Here you'll find information about my education, work experience, skills, and a selection of projects I've worked on. The site is designed to be easy to navigate and provide a clear picture of my capabilities and interests.  It's built using modern web technologies to ensure a smooth and engaging user experience.

## Features

*   **Clean and Responsive Design:** Built with Tailwind CSS for a modern, mobile-first approach.
*   **Project Showcase:** Highlights featured projects with descriptions, technologies used, live demos, and GitHub links.
<!-- *   **Skills Overview:**  Categorized display of technical skills with proficiency levels. -->
*   **Experience Timeline:** Presents work experience with company details, roles, dates, and technologies used.
*   **Education Summary:** Details educational background, degrees, and relevant coursework.
*   **Contact Form:** A functional contact form powered by a Next.js API route and Nodemailer to send messages directly to my email.
*   **Space Worm:** A dedicated page showing games developed as part of Space Worm, my game developer brand.
*   **Puzzle Platformer:**  A web based game built with Phaser. It was initially developed as my A level project, but I have continued to maintain it to fix bugs. The game makes use of both my web development and game development abilities.

## File Structure

```
.
├── src
│   ├── data
│   │   ├── projects.ts     # Projects data
│   │   ├── games.ts        # Games data
│   │   ├── experience.ts   # Experience data
│   │   └── education.ts    # Education data
│   ├── components
│   │   ├── ProjectCard.tsx  # Project card component
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── ExperienceItem.tsx# Experience item component
│   │   ├── EducationItem.tsx # Education item component
│   │   └── ContactForm.tsx   # Contact form component
│   ├── app
│   │   ├── page.tsx         # Home page
│   │   ├── layout.tsx       # Root layout
│   │   ├── globals.css      # Global CSS styles
│   │   ├── api
│   │   │   └── contact
│   │   │       └── route.ts # Contact form API route
│   │   ├── spaceworm        # Page for space worm
│   │   │   └── page.tsx
│   │   ├── projects
│   │   │   ├── page.tsx     # Projects page
│   │   │   ├── puzzleplatformer
│   │   │   │   ├── page.tsx  # Puzzle platformer main component
│   │   │   │   ├── Game1.jsx # Phaser game component 1
│   │   │   │   ├── Game2.jsx # Phaser game component 2
│   │   │   │   └── saving
│   │   │   │       └── saving-system.js # saving game function
│   │   │   │   └── menus
│   │   │   │       └── main-menu.js # Menu screens
│   │   │   ├── planets
│   │   │   │   └── page.tsx     # Planets three.js sketch page
│   │   │   ├── birdsongidentifier
│   │   │   │   └── page.tsx     # Birdsong identifier page
│   │   │   └── snake
│   │   │       └── page.tsx     # Snake A* search page
│   │   ├── experience
│   │   │   └── page.tsx     # Experience page
│   │   ├── education
│   │   │   └── page.tsx     # Education page
│   │   ├── contact
│   │   │   └── page.tsx     # Contact page
│   │   └── about
│   │       └── page.tsx     # About page
├── README.md              # This README file
└── package.json           # project dependencies

```

## Installation

To run this project locally, you'll need to have Node.js and npm (or yarn) installed on your machine.

1.  Clone the repository:

    ```bash
    git clone https://github.com/BenFielder1/portfolio
    ```

2.  Navigate to the project directory:

    ```bash
    cd portfolio
    ```

3.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## API Reference

The project includes a single API route located at `src/app/api/contact/route.ts`:

### `/api/contact`

*   **Method:** `POST`
*   **Description:**  Handles form submissions from the contact page. Sends an email using Nodemailer.
*   **Request Body:**

    ```json
    {
        "name": "Your Name",
        "email": "your.email@example.com",
        "message": "Your message here"
    }
    ```

*   **Response:**

    *   **Success (200 OK):**

        ```json
        {
            "success": true
        }
        ```

    *   **Error (500 Internal Server Error):**

        ```json
        {
            "error": "Error sending email"
        }
        ```

<!-- ## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository. -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.