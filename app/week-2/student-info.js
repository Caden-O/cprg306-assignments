import Link from 'next/link'

function StudentInfo(){
  return(
    <main>
      <h1>Student Info</h1>
      <p>Name: Caden</p>
      <p>Github: <Link href="https://github.com/Caden-O/cprg306-assignments">https://github.com/Caden-O/cprg306-assignments</Link></p> 
    </main>
  )
}

export default StudentInfo;