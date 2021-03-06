import Image from 'next/image';
import React from 'react';
import styles from '../styles/LessonVideos.module.css'
import img from '../public/Lesson/image2.png'

function LessonVideos() {
    return(
        <div className={styles.container}>
            <div className={styles.lessonImage} style={{backgroundImage:`url(${img})`}}>
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <mask id="mask0_137_2396" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="49">
                    <path d="M0 0.724609H47.0763V48.4996H0V0.724609Z" fill="#C4C4C4"/>
                    </mask> */}
                    <g mask="url(#mask0_137_2396)">
                    <path d="M6.13902 38.7471L6.138 38.7461C1.17709 34.2728 0.400526 25.8245 2.9273 18.0107C5.44849 10.2142 11.1276 3.47242 18.5456 2.3084C25.6985 1.20669 33.5886 6.00974 39.0294 12.8989C41.7318 16.3207 43.779 20.2 44.7924 24.0001C45.8067 27.8037 45.7731 31.4756 44.3944 34.5381C41.5894 40.7692 35.1865 44.6534 27.8461 45.5557C20.5133 46.4571 12.3441 44.3628 6.13902 38.7471Z" fill="white" stroke="#FCFBF9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.7471 29.047C19.7403 30.2098 21.002 30.9377 22.0053 30.3499L28.2129 26.7127C29.1969 26.1362 29.203 24.7159 28.2241 24.1309L22.0588 20.4467C21.0623 19.8512 19.7961 20.5648 19.7894 21.7256L19.7471 29.047Z" fill="#EA7052"/>
                    </g>
                </svg>
            </div>

            <div className={styles.lessonDetails}>
                <div className={styles.lessonName}>Numbers And its Multiplication Law</div>
                <div className={styles.topic}>Natural Number</div>
            </div>
        </div>
    )
}

export default LessonVideos;
