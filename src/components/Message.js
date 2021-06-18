import React from 'react'


const Message = ({children }) => {
    return (
        <div
            className='alert alert-info my-2'>
            { children}
        </div>
    )
}

export default Message