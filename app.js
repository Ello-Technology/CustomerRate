(function () {
// Initialize Firebase
    var config = {
    apiKey: "AIzaSyDNy5TZzKlvMPYQ9z9ER7s2A-GV1VyhsiI",
    authDomain: "customerrating-95674.firebaseapp.com",
    databaseURL: "https://customerrating-95674.firebaseio.com",
    projectId: "customerrating-95674",
    storageBucket: "customerrating-95674.appspot.com",
    messagingSenderId: "581072608517"

    };
    firebase.initializeApp(config);

    const preObject = document.getElementById('object');

    const dbRefObject = firebase.database().ref().child('object');

    dbRefObject.on('value', snap => console.log(snap.val()));

}());