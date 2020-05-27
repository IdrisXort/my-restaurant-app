import Firebase from "firebase";
const config = {
  apiKey: "AIzaSyB8ehav1MusBGD-k_jw5jMrxz85LHu0J8c",
  authDomain: "ilovevue-4cad7.firebaseapp.com",
  databaseURL: "https://ilovevue-4cad7.firebaseio.com",
  storageBucket: "ilovevue-4cad7.appspot.com"
};
//  let fireBaseApp = Firebase.initializeApp(config);
const app = Firebase.initializeApp(config);
const storage = app.storage();
const db = app.database();
const foodsRef = db.ref("foods");
const inActiveItemsRef = db.ref("inActiveItems");

export { app, storage, db, foodsRef, inActiveItemsRef };
export default app;
