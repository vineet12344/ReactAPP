import React from 'react'
import { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import DropdownIcon from "/home/vineetsalve/Desktop/ReactAPP/huggex/src/assets/DropDown.svg";



function FaqQuestion ({question,answer}) {
    const [activateQuestion,setActiveQuestion] = useState(false);

  return (
    <>
      <motion.div
      initial={false}
      transition={{duration: 0.3}}
        className="FaqQuestionBox    hover:cursor-pointer p-1   border border-solid border-t-[1px] border-r-1 border-b-1 border-l-1 rounded-xl border-[#217EEC] "
        onClick={() => {
          setActiveQuestion(!activateQuestion);
        }}
      >
        <div className="FaqQuestion  ml-[8px] flex justify-between items-center  ">
          <p className='font-[Inter]  font-[600] text-[16px] leading-[43px]'>{question}</p>
          <motion.img
           className={` mr-[8px] ${
             activateQuestion ? "rotate-180" : "rotate-0"
            }`}
            animate={{ rotate: activateQuestion ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            src={DropdownIcon}
            alt="DropDown"
          />
        </div>

        <motion.div
          initial={false}
          animate={{ height: activateQuestion ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className={`FaqAnswer overflow-hidden ml-[8px]  my-1 ${
            activateQuestion ? "min-h-min" : "max-h-0"
          } max-w-[90%]`}
        >
          <p className='font-[Inter] mb-2 font-[400]'>
          {answer}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default FaqQuestion