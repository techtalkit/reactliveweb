import React, { useState } from 'react'
import './accordian.css'
import { questions } from './api';
import MyAccordian from './MyAccordian'

const Accordian = () => {
    const [data, setdata] = useState(questions);
    return (
        <>
            <section className="main-div">
            <h1>React Interview Questions</h1>
                {
                    data.map((currElem) => {
                        const { id } = currElem;
                        return <MyAccordian key={id} {...currElem} />
                    })
                }
            </section>
        </>
    )
}

export default Accordian
