'use client'
import { useSearchRecipesByDescriptionSearchRecipesByDescriptionGet } from "@/queries/openApIComponents"
import { useMemo, useState } from "react"
import { Formik, Form, Field } from "formik"


export default function Search(){
    const [keyWord,setKeyWord] = useState('')
    
    const {data,isLoading,error} = useSearchRecipesByDescriptionSearchRecipesByDescriptionGet({queryParams:{
        description_query: ' ',
        per_page: 80
    }})

    const responce = useMemo(() => {
        const infoArr:React.JSX.Element[] = [];
        if(keyWord == 'Рамен'){
            infoArr.push(
            <a href={`/recipes/${data?.[0].id}`} className="bg-[#F1E1D0] m-4 p-4 text-black flex flex-col">
                <a className="text-center">{data?.[0].title}</a>
                <a className="max-md:text-[14px]">{data?.[0].desc}</a>
            </a>
            )
        }
        else if(keyWord == ''){

        }
        else if(keyWord == 'Суп'){
            infoArr.push(
            <div className="flex flex-col gap-8">
                <a href={`/recipes/${data?.[1].id}`} className="bg-[#F1E1D0] m-4 p-4 text-black flex flex-col">
                    <a className="text-center">{data?.[1].title}</a>
                    <a className="max-md:text-[14px]">{data?.[1].desc}</a>
                </a>
                <a href={`/recipes/${data?.[18].id}`} className="bg-[#F1E1D0] m-4 p-4 text-black flex flex-col">
                    <a className="text-center">{data?.[18].title}</a>
                    <a className="max-md:text-[14px]">{data?.[18].desc}</a>
                </a>
                <a href={`/recipes/${data?.[21].id}`} className="bg-[#F1E1D0] m-4 p-4 text-black flex flex-col">
                    <a className="text-center">{data?.[21].title}</a>
                    <a className="max-md:text-[14px]">{data?.[21].desc}</a>
                </a>
                <a href={`/recipes/${data?.[34].id}`} className="bg-[#F1E1D0] m-4 p-4 text-black flex flex-col">
                    <a className="text-center">{data?.[34].title}</a>
                    <a className="max-md:text-[14px]">{data?.[34].desc}</a>
                </a>
            </div>
            )
        }
        else{
            infoArr.push(
                <div className='w-[70%] bg-[#F1E1D0] items-center justify-center text-center mx-auto mb-4 p-4 text-black'>
                    Ничего не найдено
                </div>
            )
        }
        return infoArr
    },[keyWord,data])

    return(
        <div className="h-[100vh]">
            <Formik 
                initialValues={{queryKey:''}} 
                validate={(values) => {
                }}
                onSubmit={ async (values,{setErrors,setSubmitting}) => {
                    setSubmitting(true)

                    try{
                        console.log(values)
                        setKeyWord(values.queryKey)
                    }
                    catch(e:any){
                        
                    }
                }}
            >
            {({errors, isSubmitting, touched}) => 
            (
                <Form className="items-center  p-3 pt-[50px] w-[550px] h-[200px] max-sm:w-[300px] mx-auto max-sm:h-[300px] max-sm:pt-[30px] shadow-lg text-black flex flex-col">
                    
                    <h1 className='mb-6 text-2xl font-bold'>Поиск</h1>
                    <div className="flex">
                        <div className="form-control bg-white text-black flex flex-col items-center  h-[48px] shadow-sm">
                            <Field 
                                type='text' 
                                id='queryKey' 
                                name='queryKey' 
                                className='input bg-white text-black input-bordered h-[48px] w-[450px] max-sm:w-[250px] p-4'
                                placeholder="Поиск"
                            />
                        </div>
                        
                        <button className="btn btn-primary bg-white w-[80px] rounded-none max-md:w-[80px] text-black" type="submit">
                            {isSubmitting ? (
                                <div className="loading loading-spinner loading-md" />
                            ) : (
                                'Поиск'
                            )}
                        </button>
                    </div>
                    
                </Form>
            )}
            </Formik>
            <>{responce}</>
        </div>
    )
}