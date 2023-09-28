import React, { useState } from 'react'

const Array = () => {
    const [tags, setTags] = useState(['happy', 'cheerful']);

    const handleClick = () => {
        // Add
        setTags([...tags, 'exciting']);
        // Remove
        setTags(tags.filter(tag => tag !== 'happy'));
        //update
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' :tag))
    }
   
  return (
    <div>
        <h1>{tags}</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Array