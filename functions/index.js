const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'resume', 'Jake Lee Resume.docx');
  res.download(filePath, 'Jake Lee Resume.docx');
});

exports.app = functions.https.onRequest(app);
