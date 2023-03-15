import React from "react";
import AdviceFetch from "../../services/dataServices";
import { useState } from "react";


let response;


export default function AdviceGenerator() {
    const [advice, setAdvice] = useState("Roll the Die")
    const [Id, setId] = useState('')
   
    return (
        <>
            <div className=" flex items-center justify-center h-screen  rounded-full">
                <div className="bg-gray-800 rounded-3xl p-8 text-center mx-20 lg:w-2/5 ">
                    <p className="text-sm md:text-2xl text-cyan-200 mt-4 mb-8 font-display">A D V I C E #{Id}</p>
                    <p className="text-3xl md:text-5xl text-cyan-200 font-display px-6">"{advice} "</p>

                    <div><svg className="mt-16 mb-10 mx-auto hidden md:block" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></div>
                    <div><svg className="mt-10 mb-10 md:hidden" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg></div>

                    <div className="absolute  left-1/2  -translate-x-1/2 flex justify-center items-center">
                    <button className=" mx-auto bg-green-400 rounded-full  h-20 w-20 hover:bg-green-300" onClick={async () => {
                        response = await AdviceFetch();
                        setAdvice(response.slip.advice)
                        setId(response.slip.id)
                    }} ><svg className="mx-auto my-auto scale-150 " width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
                    </div>


                   
                </div>
            </div>

        </>

    );
}