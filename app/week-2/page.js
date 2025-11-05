import Header from "../utilities/header"
import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main>
      <Header week={2}/>
      <h1>Shopping List</h1>
      <StudentInfo></StudentInfo>
    </main>
  );
}

