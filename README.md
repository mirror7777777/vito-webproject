# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Simple E-Commerce Website

This is a lightweight e-commerce web application built with React, powered by Vite for blazing-fast development, styled using Tailwind CSS, and backed by a Node.js server for handling form submissions and cart logic.

---

## Project Overview

### Homepage
- Features an **Order Form** where users can submit custom order details.
- Form inputs are validated and sent to the backend for processing.

### Product Page
- Displays a list of products.
- Each product includes:
  - Add to Cart button.
  - Increase Item and Decrease Item buttons to manage quantity.
- Cart updates dynamically using React state management.

###  Contact Page
- Contains a Contact Form with:
  - **Name**
  - **Email**
  - **Message**
- Submits inquiries to the Node.js backend for storage or email forwarding.

---

##  Tech Stack

| Layer        | Technology        |
|--------------|-------------------|
| Frontend     | React + Vite      |
| Styling      | Tailwind CSS      |
| Backend      | Node.js + Express |
| Form Handling| REST API          |

---

##  Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mirror7777777/vito-webproject-portfolio.git