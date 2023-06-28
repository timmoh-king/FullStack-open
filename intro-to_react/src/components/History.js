import React from 'react'

const History = ({good, neutral, bad, average, positive, all}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
            No feedback given
            </div>
        )
        }
        return (
        <div>
            <table>
                <tr>
                    <td>Status</td>
                    <td>Value</td>
                </tr>
                <tr>
                    <td>good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive}</td>
                </tr>
            </table>
        </div>
        )
}

export default History
