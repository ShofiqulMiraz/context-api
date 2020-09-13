import React, { createContext, useEffect, useState } from "react";

// Importing Firebase Things
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDesx3E18gVCSj8GeduM2f9dPLb7N6LhIU",
  authDomain: "fir-context-api.firebaseapp.com",
  databaseURL: "https://fir-context-api.firebaseio.com",
  projectId: "fir-context-api",
  storageBucket: "fir-context-api.appspot.com",
  messagingSenderId: "542759891769",
  appId: "1:542759891769:web:62a96f393a213029526ee8",
  measurementId: "G-JZXP0HLCFC",
};
firebase.initializeApp(firebaseConfig);

// Creating App Context

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  useEffect(() => {
    fetchMovies();
  }, []);
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    setMovies(data);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  return (
    <MovieContext.Provider
      value={{
        movieList: [movies, setMovies],
        isLoggedInStatus: [isLoggedIn, setIsLoggedIn],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export const LoginVerify = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      alert(err.message);
    });
};

export const LogOutFunction = () => {
  firebase.auth().signOut();
};
