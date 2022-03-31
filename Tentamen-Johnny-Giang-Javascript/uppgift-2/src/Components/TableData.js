import React from 'react'

export const TableData = (props) => {
    return (

        <tr>
            <td>{props.id}</td>
            <td>{props.firstname}</td>
            <td>{props.surname}</td>
            <td>{props.born}</td>
            <td>{props.bornCountryCode}</td>
            <td>{props.gender}</td>
            <td>{props.prizes.share}</td>
            {/* Vet inte hur jag ska få fram antalet priser men jag tänker mig att jag måste komma åt det nestlade objektet och på så sätt ta reda på hur många priser varje person har*/}
        </tr>


    )
}
