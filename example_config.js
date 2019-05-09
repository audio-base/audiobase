const SC_KEY = 'ENTER_API_HERE';
let firebaseConfig = {};
let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
module.exports = { SC_KEY, db, firebaseConfig };
