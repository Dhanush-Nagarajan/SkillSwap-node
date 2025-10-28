import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true ,limit: '50mb'}));
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false,
}));

// apiRoutes(app);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "SkillSwap is feeling good!",
  });
});

export default app;