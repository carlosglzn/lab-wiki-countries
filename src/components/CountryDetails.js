import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    useParams,
    Link
} from 'react-router-dom'

export default function CountryDetails() {

    const [ data, setData ] = useState({})
    
    const { country } = useParams()

    useEffect(() => {

        const getDetails = async (code) => {
            const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
            const data = res.data


            setData(data)

        }

        getDetails(country)

    }, [country])


    return (
        <>  
            <div>
                <h1>{data.name}</h1>
                <p><b>Capital:</b> {data.capital}</p>
                <p><b>Area:</b> {data.area} km2</p>
                <p><b>Borders:</b></p>
                <ul>
                    {
                        data.borders.map((element, index) => (
                            <li>
                            <Link to={`/${element}`}>{element}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
