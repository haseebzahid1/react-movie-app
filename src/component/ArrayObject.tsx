import React, { useState } from 'react'
import produce from 'immer'
const ArrayObject = () => {
    const [bugs, setBugs] = useState([
        {id:1, title:'Bug 1',fixed:false},
        {id:2, title:'Bug 2',fixed:false}
    ])
    const handleClick = () => {
        // setBugs(bugs.map(bug =>  bug.id === 1 ? '1' : '2'))
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1);
            if(bug) bug.fixed = true
        }))
    }
  return (
    <div>
        {bugs.map(bug => <p key={bug.id}>{bug.title}{bug.fixed ? 'Fixed': 'Error'}</p>)}
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ArrayObject