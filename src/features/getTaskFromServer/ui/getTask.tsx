import React from 'react'
import { GetTaskApi } from '../api/get'

const GetTask = () => {
    console.log(GetTaskApi())
    return (
        <div>GetTask</div>
    )
}

export default GetTask