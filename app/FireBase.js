import firebase from "firebase"

class FireBase {
    constructor() {
      this.init();
      this.observeAuth();
    } 

    init = () =>
      firebase.initializeApp({
        apiKey: "AIzaSyCrt8SKl2lCQrQgpq6aalFszgLBYEG7fJA",
        authDomain: "pruebas-57846.firebaseapp.com",
        databaseURL: "https://pruebas-57846.firebaseio.com",
        projectId: "pruebas-57846",
        storageBucket: "pruebas-57846.appspot.com",
        messagingSenderId: "673920671461",
        appId: "1:673920671461:web:4b05b7f54d13c688ffbe0c",
        measurementId: "G-PY72N5MN58"
      });

    observeAuth = () =>
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };

    get ref() {
        return firebase.database().ref('messages');
    }

    on = callback =>
        this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };

        return message;
    }

    off() {
        this.ref.off();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };

            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    get user() {  // Return our name and our UID for GiftedChat to parse
        return {
            name: this.props.navigation.state.params.name,
            _id: FireBase.shared.uid,
        };
    }
}

FireBase.shared = new FireBase();
export default FireBase;
