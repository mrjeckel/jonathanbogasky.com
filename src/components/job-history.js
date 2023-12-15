import * as React from 'react'
import { historyBox } from './job-history.module.css'

export default function JobHistory() {
    return (
        <div className={historyBox}>
            <details>
                <summary>CV</summary>
                <ul>
                    <li>rawr</li>
                </ul>
            </details>
        </div>
    )
}
