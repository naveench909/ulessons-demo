import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react';
import ExamDetails from '../../component/ExamDetails'
import { examObjs } from '../../data/examObject';

export default function SingleExamDetails() {
    const router = useRouter();
    // const[examObject , setExamObject] = useState();
    const {exam_id} = router.query;
    // console.log(exam_id);

    // setExamObject(examObjs.find((exam) => exam._id === exam_id))
    let examObject = examObjs.find((exam) => exam._id === exam_id)
    // console.log("Naveen First",examObject);
    // useEffect(() => {
    //     examObject = examObjs.find((exam) => exam._id === exam_id);
    //     console.log("Naveen First",examObject);
    // },[])
    // console.log("Exam Object that we get ",examObject)
    return (
        <div>
            <ExamDetails examObject={examObject}/>
        </div>
        // <div>
        //     {
        //         examObject ? 
        //         (
        //             <div>
        //                 <ExamDetails examObject={examObject}/>
        //             </div>
        //         )
        //         :
        //         null
        //     }
        // </div>
        
    )
}


// export async function getStaticPaths() {

//     const paths = examObjs.map((exam) => ({
//         params : { id: exam._id}
//     }))

//     console.log("get static paths paths" , paths)

//     return {paths , fallback: false}
// }

// export async function getStaticProps({params}) {
//     console.log("Naveen Kumar" , params)
//     const examObject = examObjs.find((exam) => exam._id === params.id);
//     console.log("Naveen First",examObject);

//     return {props: {examObject}}
// }



