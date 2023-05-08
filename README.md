# Farm Produce Tracking System

This repository contains the frontend code for the Supply Chain Tracker app. The application is built using Next.js, React, Redux, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Building the App for Production](#building-the-app-for-production)
- [Docker Deployment](#docker-deployment)

## Features

- Track the status history of farm produce shipments
- Responsive design for improved user experience on various screen sizes

## Prerequisites

- Node.js 16.8.0 or higher
- Yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/supply-chain-tracker-frontend.git
```

2. Change into the project directory:

```bash
cd supply-chain-tracker-frontend
```

## Environment Variables
The application requires certain environment variables to function correctly. You can create a .env file in the root folder of the project to configure these variables for development.
```sh
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

3. Install dependencies:

```bash
yarn install
```

## Running the App

To start the development server, run:

```bash
yarn dev
```

The app will be accessible at `http://localhost:3000`.

## Building the App for Production

To build the app for production, run:

```bash
yarn build
```

This will generate an optimized build in the `.next` folder.

To start the production server, run:

```bash
yarn start
```

The app will be accessible at `http://localhost:3000`.

## Docker Deployment

The app can also be deployed using Docker. Make sure Docker is installed on your machine.

1. Build the Docker image:

```bash
docker build -t your-image-name .
```

2. Run the Docker container:

```bash
docker run -p 3001:3001 your-image-name
```

The app will be accessible at `http://localhost:3001`.
