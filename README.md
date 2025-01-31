# Basic Information API

A simple REST API built with Node.js and Express that provides basic information including an email address, current datetime, and GitHub repository URL.

## Features

- Returns JSON response with personal information
- Automatic datetime generation in ISO 8601 format
- CORS enabled
- Error handling
- Fast response time

## Setup

1. Clone the repository:
   \\\`bash
   git clone https://github.com/BenAgada/hng-task-0.git
   cd (https://github.com/BenAgada/hng-tas-0.git)
   \\\`

2. Install dependencies:
   \\\`bash
   npm install
   \\\`

3. Run the application:
   \\\`bash

# Development mode

npm run dev

# Production mode

npm start
\\\`

The API will be available at \http://localhost:3000\

## API Documentation

### Endpoint

- URL: \GET /\
- Response Format: JSON

### Response Example

\\\`json
{
"email": "agadaakogwubenedict@gmail.com,
"current_datetime": "",
"github_url": "https://github.com/BenAgada/hng-task-0.git"
}
\\\`

### Status Codes

- 200: Successful response
- 500: Server error

## Deployment

This API can be deployed to various platforms such as:

- Heroku
- Railway
- DigitalOcean
- AWS

## Learn More

For more information about Node.js development, visit [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License

MIT