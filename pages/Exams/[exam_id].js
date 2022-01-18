import { useRouter } from 'next/router'
import React from 'react'
import ExamDetails from '../../component/ExamDetails'
export default function examDetails() {

    const router = useRouter();
    const {exam_id} = router.query;
    console.log(exam_id);
    return (
        <div>
            <ExamDetails />
        </div>
    )
}
