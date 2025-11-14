# Karuna Backend - Render Deployment

This Express.js backend is configured for deployment on Render.com

## Local Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Render Deployment

### Prerequisites
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Create a Render account at https://render.com

### Deployment Steps

1. **Connect Repository**
   - Go to Render Dashboard
   - Click "New" → "Web Service"
   - Connect your Git repository
   - Select the `karuna-backend` directory as root

2. **Configure Service**
   - **Name**: `karuna-backend` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm run render-build`
   - **Start Command**: `npm start`
   - **Node Version**: `18`

3. **Set Environment Variables**
   - `MONGODB_URI`: Your MongoDB connection string
   - `GEMINI_API_KEY`: Your Google Gemini API key
   - `NODE_ENV`: `production`

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

### Health Check
Once deployed, your service will be available at:
- `https://your-service-name.onrender.com`
- Health check endpoint: `https://your-service-name.onrender.com/`

### API Endpoints
- `GET /` - Health check & info page
- `GET /chat` - Chat interface
- `POST /api/chat/start` - Start chat session
- `POST /api/diagnosis` - Get diagnosis
- `POST /api/report` - Upload and analyze reports
- `GET /api/medicine` - Medicine information
- `GET /api/data` - Data endpoints

## Frontend Configuration

Update your frontend's `.env.local` to use the Render URL:

```bash
# For production
NEXT_PUBLIC_API_URL=https://your-service-name.onrender.com/api

# For local development
# NEXT_PUBLIC_API_URL=http://localhost:6969/api
```

## Troubleshooting

### Common Issues
1. **Build Fails**: Check that all dependencies are in `package.json`
2. **Port Issues**: Render automatically assigns PORT, no configuration needed
3. **Environment Variables**: Make sure all required env vars are set in Render dashboard

### Logs
- View logs in Render dashboard under "Logs" tab
- Check for startup errors and API request logs

## Features
- Express.js REST API
- MongoDB integration with Mongoose
- Google Gemini AI integration
- PDF processing for medical reports
- File upload with Multer
- CORS enabled for frontend integration
- Health check endpoints
