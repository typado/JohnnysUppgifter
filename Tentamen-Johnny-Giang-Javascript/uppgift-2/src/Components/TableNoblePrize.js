import React, { useState, useEffect } from 'react'
import { CountryCodeOptions } from './CountryCodeOptions'
import { GenderOptions } from './GenderOptions'
import { TableData } from './TableData'



export const TableNoblePrize = () => {


    const [filteredFirstName, setFilteredFirstName] = useState([])
    const [filteredLastName, setFilteredLastName] = useState([])
    const [allData, setAllData] = useState([])
    const baseApi = "https://api.nobelprize.org/v1/laureate.json"

    const HandleFirstNameSearch = (event) => {
        const filtered = allData.filter(data => data.firstname.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredFirstName(filtered)
    }
    const HandleLastNameSearch = (event) => {
        const filtered = allData.filter(data => data.surname.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredLastName(filtered)
    }


        useEffect(() => {
            fetch(baseApi)
                .then(res => res.json())
                .then(data =>  setAllData(data.laureates))
        }, [])



        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                            <input 
                                onChange={setFilteredFirstName}
                                placeholder="First name" 
                            />
                        </th>
                        <th scope="col">
                            <input 
                                onChange={setFilteredLastName}
                                placeholder="Last name" 
                            />
                        </th>
                        <th scope="col">Born in</th>
                        <th scope="col">
                            <select>
                                <CountryCodeOptions choices={allData.bornCountryCode}/>
                            </select>
                        </th>
                        <th scope="col">
                            <select>
                                <GenderOptions choices={allData.gender}/>
                            </select>
                        </th>
                        <th scope="col">Number of prizes</th>
                    </tr>
                </thead>

                <tbody>
                {allData.map((dataInfo) => {
                    return ( 
                        <TableData 
                            id={dataInfo.id}
                            firstname={dataInfo.firstname}
                            surname={dataInfo.surname}
                            born={dataInfo.born}
                            bornCountryCode={dataInfo.bornCountryCode}
                            gender={dataInfo.gender}
                            prizes={dataInfo.prizes}
                        />
                        )
                    })}

                </tbody>
            </table>
        )
    }


// {allData.map((dataInfo) => {
//     return (
//         <tr>
//             <td>{dataInfo.id}</td>
//             <td>{dataInfo.firstname}</td>
//             <td>{dataInfo.surname}</td>
//             <td>{dataInfo.born}</td>
//             <td>{dataInfo.bornCountryCode}</td>
//             <td>{dataInfo.gender}</td>
//             <td>{dataInfo.prizes.share}</td>
//             {/* Vet inte hur jag ska få fram antalet priser men jag tänker mig att jag måste komma åt det nestlade objektet och på så sätt ta reda på hur många priser varje person har*/}
//         </tr>
//     )
// })}