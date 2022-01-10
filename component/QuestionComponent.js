import React from 'react';
import styles from '../styles/QuestionComponent.module.css'
import {useGlobalContext} from './context';
import OptionComponent from './OptionComponent';


function QuestionComponent() {
    const {questions, curDisplayQues , prevQuestion, nextQuestion } = useGlobalContext();

    return (
        <div className={styles.main_container}>
            <div className={styles.question_body}>
                <div className={styles.question_list_container}>
                    <div className={styles.ques_title}>
                        {curDisplayQues.questionTitle}
                    </div>

                    <div className={styles.option_list}>
                        {curDisplayQues.optionArray.map((optn) => {
                            const {oid , optionSN ,option} = optn;
                            return  <OptionComponent key={oid} option={option} option_id={oid} OSN={optionSN} />
                        })}

                    </div>
                </div> 

                <div className={styles.btn_cntr}>
                    {curDisplayQues.qid !== 1 ? 
                        (<div className={styles.previous_btn} onClick={prevQuestion}>
                            <svg width="97" height="16" viewBox="0 0 97 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.852 4.456H22.728C23.672 4.456 24.404 4.684 24.924 5.14C25.452 5.596 25.716 6.216 25.716 7C25.716 7.776 25.452 8.396 24.924 8.86C24.396 9.316 23.664 9.544 22.728 9.544H20.724V13H18.852V4.456ZM22.488 8.116C23.464 8.116 23.952 7.748 23.952 7.012C23.952 6.268 23.464 5.896 22.488 5.896H20.724V8.116H22.488ZM36.1617 13H34.1817L33.0897 10.156C33.0017 9.932 32.8657 9.776 32.6817 9.688C32.5057 9.6 32.2817 9.556 32.0097 9.556H30.7977V13H28.9497V4.456H32.7537C33.7457 4.456 34.4977 4.672 35.0097 5.104C35.5217 5.536 35.7777 6.156 35.7777 6.964C35.7777 7.532 35.6257 8.02 35.3217 8.428C35.0257 8.836 34.5977 9.128 34.0377 9.304C34.5417 9.408 34.9057 9.756 35.1297 10.348L36.1617 13ZM32.4777 8.128C33.0137 8.128 33.4057 8.04 33.6537 7.864C33.9017 7.68 34.0257 7.396 34.0257 7.012C34.0257 6.628 33.9017 6.348 33.6537 6.172C33.4057 5.988 33.0137 5.896 32.4777 5.896H30.7737V8.128H32.4777ZM39.4458 4.456H45.3378V5.908H41.2698V7.924H45.0858V9.388H41.2698V11.548H45.3378V13H39.4458V4.456ZM56.8242 4.456L52.9842 13H51.4842L47.6442 4.456H49.5882L52.2522 10.66L54.9402 4.456H56.8242ZM59.5004 4.456H61.3724V13H59.5004V4.456ZM69.0104 13.108C68.1624 13.108 67.4224 12.932 66.7904 12.58C66.1664 12.22 65.6824 11.708 65.3384 11.044C65.0024 10.38 64.8344 9.604 64.8344 8.716C64.8344 7.828 65.0024 7.056 65.3384 6.4C65.6824 5.744 66.1664 5.24 66.7904 4.888C67.4224 4.528 68.1624 4.348 69.0104 4.348C69.8584 4.348 70.5944 4.528 71.2184 4.888C71.8424 5.24 72.3224 5.744 72.6584 6.4C72.9944 7.056 73.1624 7.828 73.1624 8.716C73.1624 9.604 72.9944 10.38 72.6584 11.044C72.3224 11.708 71.8424 12.22 71.2184 12.58C70.5944 12.932 69.8584 13.108 69.0104 13.108ZM69.0104 11.644C69.7304 11.644 70.2904 11.392 70.6904 10.888C71.0984 10.384 71.3024 9.66 71.3024 8.716C71.3024 7.772 71.0984 7.052 70.6904 6.556C70.2904 6.06 69.7304 5.812 69.0104 5.812C68.2904 5.812 67.7264 6.06 67.3184 6.556C66.9184 7.052 66.7184 7.772 66.7184 8.716C66.7184 9.668 66.9184 10.396 67.3184 10.9C67.7264 11.396 68.2904 11.644 69.0104 11.644ZM80.2494 13.108C79.0494 13.108 78.1374 12.8 77.5134 12.184C76.8894 11.568 76.5774 10.664 76.5774 9.472V4.456H78.4134V9.556C78.4134 10.236 78.5694 10.756 78.8814 11.116C79.2014 11.468 79.6574 11.644 80.2494 11.644C80.8414 11.644 81.2934 11.468 81.6054 11.116C81.9174 10.756 82.0734 10.236 82.0734 9.556V4.456H83.9214V9.472C83.9214 10.656 83.6054 11.56 82.9734 12.184C82.3494 12.8 81.4414 13.108 80.2494 13.108ZM90.5666 13.108C89.9186 13.108 89.2946 13.024 88.6946 12.856C88.1026 12.68 87.6106 12.436 87.2186 12.124L87.8186 10.78C88.6426 11.356 89.5626 11.644 90.5786 11.644C91.1226 11.644 91.5386 11.56 91.8266 11.392C92.1226 11.216 92.2706 10.972 92.2706 10.66C92.2706 10.388 92.1346 10.176 91.8626 10.024C91.5986 9.864 91.1306 9.712 90.4586 9.568C89.7066 9.416 89.1066 9.232 88.6586 9.016C88.2186 8.792 87.8946 8.524 87.6866 8.212C87.4866 7.892 87.3866 7.496 87.3866 7.024C87.3866 6.512 87.5266 6.052 87.8066 5.644C88.0946 5.236 88.4946 4.92 89.0066 4.696C89.5186 4.464 90.1106 4.348 90.7826 4.348C91.3906 4.348 91.9746 4.436 92.5346 4.612C93.0946 4.788 93.5426 5.028 93.8786 5.332L93.2786 6.676C92.5266 6.1 91.6986 5.812 90.7946 5.812C90.3146 5.812 89.9306 5.908 89.6426 6.1C89.3546 6.292 89.2106 6.552 89.2106 6.88C89.2106 7.072 89.2626 7.232 89.3666 7.36C89.4786 7.488 89.6626 7.604 89.9186 7.708C90.1746 7.804 90.5386 7.9 91.0106 7.996C92.1066 8.236 92.8946 8.548 93.3746 8.932C93.8626 9.316 94.1066 9.84 94.1066 10.504C94.1066 11.304 93.7946 11.94 93.1706 12.412C92.5466 12.876 91.6786 13.108 90.5666 13.108Z" fill="#313848"/>
                                <path d="M7.21855 7.99999L10.5186 4.69999L9.57589 3.75732L5.33322 7.99999L9.57589 12.2427L10.5186 11.3L7.21855 7.99999Z" fill="#313848"/>
                            </svg>
                        </div>)
                        :
                        null
                    }
                    {curDisplayQues.qid == questions.length ?
                        null
                        :
                        (<div className={styles.next_btn} onClick={nextQuestion}>
                            <svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.256 3.456V12H6.864L2.604 6.552V12H0.852V3.456H2.232L6.492 8.892V3.456H8.256ZM11.9692 3.456H17.8612V4.908H13.7932V6.924H17.6092V8.388H13.7932V10.548H17.8612V12H11.9692V3.456ZM28.6422 12H26.4582L24.3222 9.048L22.1862 12H20.0022L23.2542 7.668L20.0982 3.456H22.2822L24.3222 6.3L26.3862 3.456H28.5702L25.3782 7.668L28.6422 12ZM33.2302 4.98H30.5542V3.456H37.8022V4.98H35.1262V12H33.2302V4.98Z" fill="#EA7052"/>
                                <path d="M49.7814 7.99999L46.4814 4.69999L47.4241 3.75732L51.6668 7.99999L47.4241 12.2427L46.4814 11.3L49.7814 7.99999Z" fill="#EA7052"/>
                            </svg>
                        </div>) 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default QuestionComponent;
