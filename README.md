# Personal Portfolio

A personal portfolio website showcasing skills, projects, and contact information.

## How it Works

This portfolio website is served using a Node.js Express server. Here's how the setup works:

### Serving Static Files

The application uses Express.js to serve static HTML, CSS, and JavaScript files:

```javascript
// In server.js
app.use(express.static(path.join(__dirname)));
```

This middleware function serves all static files (HTML, CSS, JS, images) from the root directory. When a request comes in for a file like `/assets/css/style.css`, Express automatically looks for this file in the filesystem and sends it to the client.

### Main HTML File

The main `index.html` file is served through a specific route:

```javascript
// In server.js
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
```

This ensures that when users visit the root URL, they are served the main HTML file which then loads all the necessary CSS and JavaScript files.

## File Structure

- `index.html` - The main HTML file
- `assets/css/` - CSS stylesheets
- `assets/js/` - JavaScript files
- `assets/images/` - Image files
- `server.js` - Express server configuration

## Running the Application

### Using Node.js

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The server will start on port 3001 by default (with fallback to port 3002 if 3001 is already in use).

### Using Docker

```bash
# Build and start the container
docker-compose up -d
```

This will build the Docker image and start the container, exposing the application on port 3001.

## Technologies Used

- Node.js
- Express.js
- Docker

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.
* [Docker & Docker Compose](https://www.docker.com/products/docker-desktop/ "Download Docker") must also be installed.

## Installation and Run
1. Clone the repository `git clone https://github.com/JZYNX/personal-portfolio.git`.
2. Run this docker command `docker compose up -d`
3. Open [https://localhost:3888](https://localhost:3888) to view in your local browser.
4. Run this command to stop the container `docker compose down`

## License

MIT
