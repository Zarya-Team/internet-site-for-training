'use client'
import { useFavourites, useVerifiedUser } from "@/utils/hooks"
import { useGetFavouritesFavouritesGet } from "@/queries/openApIComponents"
import { useMemo } from "react"

export default function Favourites(){
    const {curUser,loading: userLoading} = useVerifiedUser()
    const {data,isLoading,error} = useGetFavouritesFavouritesGet({})

    const info = useMemo(() => {
        const infoArr: React.JSX.Element[] = [];
        console.log(data?.forEach((element) => {
            infoArr.push(
                <a href={`/recipes/${element.id}`} className="bg-[#F1E1D0] m-4 p-4 text-black">
                    <div className="text-center">{element.title}</div>
                    <div className="max-md:text-[14px]">{element.desc}</div>
                </a>
            )
        }))
        return (<ul className="list-none gap-5 ">{infoArr}</ul>)
    },[data])

    return(
        <>
            <div className="h-[66.5vh] overflow-y-scroll">{info}</div>
        </>
    )
}
