
const firebaseConfig = {
  apiKey: "AIzaSyDtstGU7zddjPcI2BzvM6AJGTTaomnsWZo",
  authDomain: "fir-5852d.firebaseapp.com",
  databaseURL: "https://fir-5852d-default-rtdb.firebaseio.com",
  projectId: "fir-5852d",
  storageBucket: "fir-5852d.appspot.com",
  messagingSenderId: "933506295172",
  appId: "1:933506295172:web:fcafb6d72452953972e9d1"
};

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


