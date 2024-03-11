import React, { useEffect, useState } from 'react'
import ArrowUp from '@mui/icons-material/North';
function ToTop() {
    const [toTop, setToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setToTop(window.scrollY>100 ? true:false)
        })
    },[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div>
        {toTop &&(<ArrowUp
            style={{
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                fontSize:"50px",
                color:"#64ffda"
            }}
            onClick={scrollUp}
        />)}
    </div>
  )
}

export default ToTop