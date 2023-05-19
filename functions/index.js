const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const app = express();
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.countVisit = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const doc = admin.firestore().doc('pages/main');
    const page = await doc.get();
    const pageData = page.data();
    const currentCount = pageData ? pageData.count : 0;
    const newCount = (currentCount || 0) + 1;
    await doc.set({ count: newCount });
    res.json({ count: newCount });
  });
});


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'resume', 'Jake Lee Resume.docx');
  res.download(filePath, 'Jake Lee Resume.docx');
});

exports.app = functions.https.onRequest(app);
