import React from 'react';
import { useState } from 'react';
import{motion} from 'framer-motion';
import '../Components/'


const CardFront = () => {
    const [isFlipped,setIsFlipped] = useState(false);       
    const [isAnimating,setAnimating] = useState(false);     

    function handleFlip(){
        if (!isAnimating) {
            setAnimating(true);
            setIsFlipped(!isFlipped);
        }
    }
  return (
    <div>

    </div>
  )
}

export default CardFront