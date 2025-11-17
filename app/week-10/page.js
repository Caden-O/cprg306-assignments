"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Header from "../utilities/header";
import Link from "next/link";

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
        <Header week={10} />
        <section>
          <button onClick={gitHubSignIn} className="rounded-lg bg-blue-500 mx-3 p-3 cursor-pointer hover:bg-blue-400">
            Sign in with GitHub
          </button>
        </section>
      </section>
    );
  }else{
    return(
      <section>
        <Header week={10} />
        <section>
          <div className="flex w-full justify-between">
            <div>
              <h1 className="text-4xl px-5 font-bold">
                Welcome, {user.displayName}!
              </h1>
              <p className="px-5 font-bold">email: ({user.email})</p>
            </div>
            <div className="m-3">
              <button onClick={firebaseSignOut} className="rounded-2xl bg-red-900 mx-3 p-5 cursor-pointer hover:bg-red-800 text-red-300 text-2xl">Sign out</button>
            </div>
          </div>
          <div>
            <Link href={`./week-10/shopping-list`} className="m-4 p-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">Continue to shopping list</Link>
          </div>
        </section>
      </section>
    );
  }
};