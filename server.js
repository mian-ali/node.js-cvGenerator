const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const UserResumeData = require('./models/userResumeSchema.js');
const app = express();

app.use(cors());
require('dotenv').config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected');
  });

app.use(express.json());

// set the data to DB

app.post('/api', async (req, res) => {
  const data = await UserResumeData.create(req.body);
  res.send({ success: true, resumeData: data });
});

app.get('/api/:id', async (req, res) => {
  const data = await UserResumeData.findById(req.params.id);
  res.send({ success: true, resumeData: data });
});

// Serve Static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 9999, () => {
  console.log(
    `server is listening at port ${process.env.PORT} in ${process.env.NODE_ENV} environment`
  );
});
