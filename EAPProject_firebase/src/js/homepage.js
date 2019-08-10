
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA69YqN5YjYQTSsMmJBUdKu6aAK6GXlLEM",
    authDomain: "eap-2019.firebaseapp.com",
    databaseURL: "https://eap-2019.firebaseio.com",
    projectId: "eap-2019",
    storageBucket: "",
    messagingSenderId: "801881703655",
    appId: "1:801881703655:web:70043001e57e0c6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var entryRef = firebase.database().ref('Entries');

// This is the place where we give event action to submit button.
document.getElementById('submitform').addEventListener('submit', submitform);
function submitform(e) {
  e.preventDefault();
  var name = getValueById("name");
  var empid = getValueById("empid");
  var email = getValueById("email");
  var team = getValueById("team");
  var designation = getValueById("designation");
  var manager = getValueById("manager");
  var manager_email = getValueById("manager_email");
  var program = getValueById("program");
  var agency = getValueById("agency");
  var address = getValueById("address");
  var comment1 = getValueById("comment1");
  var comment2 = getValueById("comment2");
  var comment3 = getValueById("comment3");
  var aproover_dropdown = getValueById("aproover_dropdown");
  var aproover_comment = getValueById("aproover_comment");
  var hr_dropdown = getValueById("hr_dropdown");
  var hr_comment = getValueById("hr_comment");

  saveEntries(name,empid,email,team,designation,manager,manager_email,program,agency,comment1,comment2,comment3,aproover_dropdown,aproover_comment,hr_dropdown,hr_comment);
}


//This function will return the values entered in the textfields
function getValueById(id) {
  return document.getElementById(id).value;
}

// save the Entry
function saveEntries(name,empid,email,team,designation,manager,manager_email,program,agency,comment1,comment2,comment3,aproover_dropdown,aproover_comment,hr_dropdown,hr_comment) {
  var newEntryRef = entryRef.push();
  newEntryRef.set({
    name:name,
    empid:empid,
    email:email,
    team:team,
    designation:designation,
    manager:manager,
    manager_email:manager_email,
    program:program,
    agency:agency,
    comment1:comment1,
    comment2:comment2,
    comment3:comment3,
    aproover_dropdown:aproover_dropdown,
    aproover_comment:aproover_comment,
    hr_dropdown:hr_dropdown,
    hr_comment:hr_comment
  })
}