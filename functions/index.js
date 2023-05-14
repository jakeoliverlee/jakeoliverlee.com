const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const app = express();

app.get('/download', (req, res) => {
      const filePath = path.join(__dirname, '../src/pages/home/assets/resume/Jake Lee Resume.docx');
      res.download(filePath, 'Jake Lee Resume.docx',);
});

exports.app = functions.https.onRequest(app);
