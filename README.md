# Buildr

![Buildr Logo]<img width="41" height="40" alt="image" src="https://github.com/user-attachments/assets/099bec03-1d2f-4f4e-901a-1c8119f7921d" />


## Introduction

Buildr is an innovative AI-powered platform that generates complete websites from simple text prompts. By leveraging advanced AI capabilities, Buildr allows users to describe their website needs in natural language, and the system automatically creates responsive, modern web designs with functional components.

Simply provide a prompt describing your desired website, and Buildr will handle the rest - from layout design and component creation to responsive styling and basic functionality. Whether you need a portfolio, business site, landing page, or e-commerce platform, Buildr streamlines the web development process, making website creation accessible to everyone regardless of their technical expertise.

Created by: adityarao3  
Last Updated: 2025-07-27

## Features

- 🤖 AI-powered website generation from text prompts
- 🎨 Modern UI with customizable design elements
- 📱 Responsive layouts that work on all devices
- 🔌 Built-in components for common website functionalities
- 🚀 Export options for deployment
- 💻 Built on Next.js for optimal performance

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open (https://buildr-delta.vercel.app/) with your browser to start building websites with AI.

## Environment Variables

To run this project locally, you'll need to set up the following environment variables in a `.env` file:

```
# Database Connection
DATABASE_URL="postgresql://username:password@localhost:5432/buildr"

# Authentication
NEXTAUTH_SECRET="your-secure-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OpenAI API for AI generation
OPENAI_API_KEY="your-openai-api-key"

```

Make sure to replace all placeholder values with your actual credentials. Never commit your `.env` file to version control.
