import React from 'react'
import { Toaster } from 'react-hot-toast'

function Toast() {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

export default Toast