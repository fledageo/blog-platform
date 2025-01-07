# B'logoo (Blog platform)

## Project Description
B'logoo (Blog platform) is a blog platform that allows users to view, create, edit, and delete blog posts. Registered users can write their own posts, while everyone can read the posts shared by others.

## Features
- Display short descriptions of all blog posts.
- Clicking "Read" shows the full post.
- Posts have an author, timestamp, title, and content.
- Blog posts are stored in a database.
- Users can sign up and log in.
- Create, read, update, and delete blog posts.

## Tech Stack
- React
- TypeScript
- Redux Toolkit
- React Router
- Node.js
- Express
- MongoDB
- SCSS

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) on your machine.

### Installation Steps
1. Navigate to the server folder and install dependencies: cd server , npm install, npm run dev
2. Navigate to the client folder and install dependencies: cd client , npm install, npm run dev

## Usage
- **Creating a Blog Post**:
- User clicks "New Post," enters a title and content, and clicks "Share."
- The post appears on the homepage with its title and a short summary.
- **Viewing a Blog Post**:
- User clicks "Read" on a post on the homepage.
- The app displays the full content of the selected post.
- **Editing a Blog Post**:
- User clicks "Edit" for a post, modifies the title/content, and clicks "Edit."
- The changes are reflected immediately.
- **Deleting a Blog Post**:
- User clicks "Delete" for a post, and the post is removed from the homepage.
