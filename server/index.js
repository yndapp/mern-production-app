require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// Global Middlewares
app.use(helmet()); // Security headers
app.use(express.json({ limit: '10kb' })); // Body parser with size limit
app.use(cookieParser());
app.use(cors({
  origin: 'http://locahost:5000', // adjust as needed
  credentials: true
}));

// Rate Limiting (example for login route)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.'
});

app.use(limiter);

// Global error handler (simplified)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
