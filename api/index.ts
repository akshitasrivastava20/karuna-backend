import express from 'express';
import cors from 'cors';
import diagnosisRoutes from "../src/routes/diagnosis.route.js";
import reportRoutes from "../src/routes/report.route.js";
import chatRouters from "../src/routes/chat.route.js";
import drugRoutes from "../src/routes/medicine.route.js";
import dataRoutes from "../src/routes/data.route.js";

import simpleCacheRoutes from "../src/routes/simpleCache.route.js";
import path from 'path';

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/diagnosis", diagnosisRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/chat", chatRouters);
app.use("/api/medicine", drugRoutes);
app.use("/api/data", dataRoutes);

app.use("/api/cache", simpleCacheRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'src', 'templates', 'index.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'templates', 'chat.html'));
});

const PORT = parseInt(process.env.PORT || '6969', 10);
const HOST = process.env.HOST || '0.0.0.0';

// For local development or non-Vercel deployments (like Render)
if (process.env.VERCEL !== "1") {
  app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT}`);
    console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Health check: http://${HOST}:${PORT}/`);
  });
}

export default app; 