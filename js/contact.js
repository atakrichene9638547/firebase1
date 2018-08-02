  var config = {
    apiKey: "AIzaSyAHEchu9ha-L--tXkJGxyWtTRB91V_foAg",
    authDomain: "project-6cc7c.firebaseapp.com",
    databaseURL: "https://project-6cc7c.firebaseio.com",
    projectId: "project-6cc7c",
    storageBucket: "project-6cc7c.appspot.com",
    messagingSenderId: "183698491328"
  };
  firebase.initializeApp(config);

document.getElementById('contactForm').addEventListener('submit', submitForm);

function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
  saveMessage(name,company,email,phone);
  // Clear form
document.getElementById('contactForm').reset();
// Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
}
var messagesRef=firebase.database().ref('messages')
function saveMessage(name, company, email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
  });
}
