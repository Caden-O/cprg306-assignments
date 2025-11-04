import Link from "next/link";
export default function Week({weekNum}){
  return(
    <li className="outline outline-white m-5 p-5 rounded-2xl bg-gray-900 text-xl text-blue-400  hover:outline-2 hover:font-bold ">
            <Link href={`/week-${weekNum}`}>Go to Week {weekNum} ➡️</Link>
    </li>
  )
}