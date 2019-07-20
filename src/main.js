import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import App from './App.svelte';

const firebaseConfig = {
	apiKey: "AIzaSyBh_wJbFrVuBkz7WN0yr2T3X6rV2ScCSHU",
	authDomain: "soshimi.firebaseapp.com",
	databaseURL: "https://soshimi.firebaseio.com",
	projectId: "soshimi",
	storageBucket: "",
	messagingSenderId: "120936177898",
	appId: "1:120936177898:web:a14cb1e945b4260c"
};

firebase.initializeApp(firebaseConfig);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;
