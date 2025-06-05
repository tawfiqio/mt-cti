const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indicatorRoutes = require('./routes/indicators');
const actorRoutes = require('./routes/actors');
const logger = require('./utils/logger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/indicators', indicatorRoutes);
app.use('/api/actors', actorRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Mohamed Tawfeeq Cyber Threat Intelligence Platform — stay ahead of threats!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`🔥 MT-CTI Backend running on port ${PORT} — Mohamed Tawfeeq style!`);
});
