# Social Media API

This project is a simple Express API that checks whether the app can connect to a MongoDB database. It exposes a single root endpoint that attempts a database connection and returns a success or failure message.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Move into the project directory:

   ```bash
   cd social-media-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

This project uses environment variables. Create a `.env` file in the project root before starting the server.

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

### Required variable

- `MONGODB_URI`: MongoDB connection string used by the application to connect to the database.

> Do not commit the `.env` file to GitHub. Keep your real MongoDB credentials local only.

## Running the Application

This project does not include a `dev` script in `package.json`, so use:

```bash
node server.js
```

The server listens on port `3001`.

Local URL:

```text
http://localhost:3001
```

## Testing / Usage

This project is a minimal API used to verify the MongoDB connection.

### Endpoint

- `GET /`
  - Attempts to connect to MongoDB and returns:
    - `200` with a success message if the connection works
    - `500` with an error message if the connection fails

### Example request

```bash
curl http://localhost:3001/
```

### Using Postman

1. Open Postman.
2. Create a new `GET` request.
3. Enter the URL:
   - `http://localhost:3001/`
4. Click `Send`.
5. Check the response body to see whether the database connection succeeded.

## Important Notes

- This app requires MongoDB to be available and the `MONGODB_URI` environment variable to be configured correctly.
- The server runs on port `3001` and does not expose additional route files or API features.
- The app uses `dotenv` to load environment values from the `.env` file.
- This is a backend API used for database connectivity testing rather than a full social media application.
