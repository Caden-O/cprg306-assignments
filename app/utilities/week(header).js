import Link from "next/link";
export default function Week({weekNum}){
  return(
    <Link href={`./week-${weekNum}`} className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week {weekNum}
    </Link>
  )
}