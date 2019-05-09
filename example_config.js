const SC_KEY = 'ENTER_API_HERE';
import Firebase from 'firebase';
let firebaseConfig = {
  apiKey: 'ENTER_API_HERE',
  authDomain: 'audiobase-playlist.firebaseapp.com',
  databaseURL: 'https://audiobase-playlist.firebaseio.com',
  projectId: 'audiobase-playlist',
  storageBucket: 'audiobase-playlist.appspot.com',
  messagingSenderId: '492271283471',
  appId: ''
};
let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
module.exports = { SC_KEY, db };
export default SC_KEY;
