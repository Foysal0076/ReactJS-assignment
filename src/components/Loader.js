import React from 'react'

const Loader = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100' >
            <div
                className='spinner-border text-info p-4'
                role='status'
                style={{
                    height: '40px',
                    width: '40px',
                    margin: 'auto',
                    display: 'block',
                }}
            >
                <span className='sr-only' >Loading...</span>
            </div>
        </div>
    )
}

export default Loader