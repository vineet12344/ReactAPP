import React from 'react'
import { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import DropdownIcon from "/home/vineetsalve/Desktop/ReactAPP/huggex/src/assets/DropDown.svg";


function FaqQuestion () {
    const [activateQuestion,setActiveQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "Can education flashcards be used for all age groups?",
            answer: "Yes Education lorem alkfsalkn lkaskl a a lkasj flk jaslkf asjf alksj lkfajslfk askfj alk"
        },
        {
            id: 2,
            question: "How do Education FlashCards Work?",
            answer: "Yes Education lorem alkfsalkn lkaskl a a lkasj flk jaslkf asjf alksj lkfajslfk askfj alk"
        },
        {
            id: 3,
            question: "Can Gaming flashcards be used to test preparation?",
            answer: "Yes Education lorem alkfsalkn lkaskl a a lkasj flk jaslkf asjf alksj lkfajslfk askfj alk"
        }
    ];
  return (
    <div className="FaqQuestion w-[80%] m-auto bg-slate-600 p-8 rounded-lg shadow-md ">
      <h2>{questions.map((q) =>{
        <div key={q.id} className='mb-4 last:mb-0'>
            {q.question}
        </div>
      })}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio
        blanditiis aut libero expedita nesciunt praesentium beatae. At
        cupiditate blanditiis tempore fugit harum odio, fuga dolores qui omnis!
        Reprehenderit, deserunt?
      </p>
    </div>
  );
}

export default FaqQuestion