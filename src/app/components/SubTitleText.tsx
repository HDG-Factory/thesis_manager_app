"use client"
import { usePathname } from "next/navigation"

export default function SubTitleText(){
    const pathName: string = usePathname();

    const textFormat = () => {
        return pathName.charAt(1).toUpperCase() + pathName.slice(2);;
    }
    
    return(
        <h1 className="my-10 ml-14 text-2xl text-gray-800">
            {textFormat()}
        </h1>
    )    
}