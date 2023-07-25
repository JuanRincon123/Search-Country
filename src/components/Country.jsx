/* eslint-disable react/prop-types */
const Country = ({ country }) => {
    return (
        <div>
            <img src={country.flags?.png} alt="" />
            <h1><b>{country.name?.common}</b></h1>

                <h2><b>Population:</b> {country?.population}</h2>
                <h2><b>Capital:</b> {country?.capital}</h2>
                <h2><b>Area:</b> {country?.area}</h2>

        </div>
    )
}

export default Country