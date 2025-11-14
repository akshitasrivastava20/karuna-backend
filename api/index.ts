import express from 'express';
import cors from 'cors';
import diagnosisRoutes from "../src/routes/diagnosis.route";
import reportRoutes from "../src/routes/report.route";
import chatRouters from "../src/routes/chat.route";
import drugRoutes from "../src/routes/medicine.route";
import dataRoutes from "../src/routes/data.route";
import simpleCacheRoutes from "../src/routes/simpleCache.route";
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

// For local development or non-Vercel deployments (like Render)
if (process.env.VERCEL !== "1") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 Health check: http://0.0.0.0:${PORT}/`);
  });
}

export default app; 