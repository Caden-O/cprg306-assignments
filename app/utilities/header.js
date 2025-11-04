import { Icon } from "@iconify/react";
import Week from "./week(header)"

function Header(){
  // function weeks(){
  //   for(let i = 0; i < 8; i++){
  //     <Week weekNum={i} />
  //     console.log("a!");
  //   }
  // }
  return(
    <header>
      <div className="h-full flex bg-neutral-900 mb-3">
        <a href="../" className=
            "m-2 ml-4 p-2 px-3 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          <Icon icon="material-symbols:home-outline-rounded" width={20} height={20}/>
        </a>
        {/* <a href="./week-2" className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week 2
        </a>
        <a href="./week-3" className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week 3
        </a>
        <a href="./week-4" className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week 4
        </a>
        <a href="./week-5" className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week 5
        </a>
        <a href="./week-6" className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week 6
        </a>
        <a href="./week-7" className=
            "m-2 p-2 px-4 bg-neutral-700 rounded hover:text-blue-400 hover:cursor-pointer hover:underline">
          week 7
        </a> */}
        <Week weekNum={2} />
        <Week weekNum={3} />
        <Week weekNum={4} />
        <Week weekNum={5} />
        <Week weekNum={6} />
        <Week weekNum={7} />
        <Week weekNum={8} />
        {/* {() => weeks()} */}
      </div>
    </header>
  )
}

export default Header;