import React, { useState } from 'react'
interface props{
    children:string,
    maxChars?:number,
}
const ExpandableText = ({children,maxChars = 100}:props) => {
    const [isExpanded,setExpanded] = useState(false)
    
    if(children.length <= maxChars) return <p>{children}</p>
    const text = isExpanded ? children : children.substring(0,maxChars)
  return <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'less' : 'More'}</button></p>
}

export default ExpandableText 