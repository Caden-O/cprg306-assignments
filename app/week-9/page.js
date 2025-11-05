"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Header from "../utilities/header";

// Sign in to Firebase with GitHub authentication
// await gitHubSignIn();

// Sign out of Firebase
// await firebaseSignOut();

// Display some of the user's information
export default function Page(){
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  if(user == null){
    return(
      <section>
        <Header week={9} />
        <section>
          <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        </section>
      </section>
    );
  }else{
    return(
      <section>
        <Header week={9} />
        <section>
          <h1>
            Welcome, {user.displayName} ({user.email})
          </h1>
          <button onClick={firebaseSignOut}>Sign out</button>
        </section>
      </section>
    );
  }
};