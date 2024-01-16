'use client'
import { useCountriesGetAllCountriesGet,useCountriesRecipesGetAllCountriesRecipesGet } from "@/queries/openApIComponents";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

export default function Country(){
    const {data,error,isLoading} = useCountriesGetAllCountriesGet({})
    const pathName = usePathname()
    const countryId:number = Number(pathName.split('/')?.pop())
    const country = data?.[countryId-1]
    const [page,changePage] = useState(1)
    
    const recipesPage = useCountriesRecipesGetAllCountriesRecipesGet({queryParams:{countries_id:countryId,page:page}})

    const recipes = useMemo(() => {
            const recipesData: React.JSX.Element[] = [];
            recipesPage.data?.forEach(
                e =>  {
                recipesData.push(
                    <a className='w-[250px] h-[250px] bg-[#F1E1D0] text-center  shrink-0' href={`/recipes/${e.id}`}>
                        <Image src='/Ramen.png' width={250} height={200} alt='Блюдо' className='h-[200px]'></Image>
                        <p className='text-[15px]' style={{fontFamily:'IBM Plex Serif', fontWeight:'400'}}>{e.title}</p>
                    </a>
                )
                }
            )
            return recipesData;
            
    },[recipesPage])


    if(!isLoading && error){
        return(
            <div>
                Ошиблися
            </div>
        )
    }

    if(isLoading){
        return <></>
    }

    if(!isLoading && data){
        return(
            <div className="container mx-auto items-center justify-center">
                <div className="card bg-[#F1E1D0] m-16 p-4 text-black text-center">
                    {country?.history}
                </div>
                <div className="card bg-[#F1E1D0] m-16 p-4 text-black flex flex-row items-center justify-center">
                    {recipes}
                </div>
                <div className="flex gap-4 justify-center items-center mb-16 w-[282px]">
                    <a className="btn bg-[#F1E1D0] border-none" onClick={() => {changePage(1)}}>1</a>
                    <a className="btn bg-[#F1E1D0] border-none" onClick={() => {changePage(2)}}>2</a>
                    <a className="btn bg-[#F1E1D0] border-none" onClick={() => {changePage(3)}}>3</a>
                </div>
            </div>
        )
    }
}