import { useState } from 'react'

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
}

export default function App({ title }) {
    const [status, setStatus] = useState(STATUS.NORMAL)

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED)
    }

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL)
    }
    return (
        <div
            className={status}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <h1>{title}</h1>
        </div>
    )
}
