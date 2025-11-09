import Link from "next/link";
export default function Week({weekNum, disabledStatus}){
  if(disabledStatus == false){
    return(
      <Link href={`/week-${weekNum}`}
            className="m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week {weekNum}
      </Link>
    )
  }else{
    return(
      <div className="m-2 p-2 px-4 bg-neutral-800 rounded hover:cursor-default text-neutral-400">
          week {weekNum}
      </div>
    )
  }
}