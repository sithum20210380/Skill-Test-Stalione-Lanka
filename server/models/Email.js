const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('emails.db');

exports.createEmail = (to, subject, message) => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO emails (to_email, subject, message) VALUES (?, ?, ?)',
      [to, subject, message],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, to, subject, message });
        }
      }
    );
  });
};

exports.getAllEmails = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM emails', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};