/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Country from './components/Country'




function App() {

  const [country, setCountry] = useState([])
  const [inputValue, setInputValue] = useState('deutschland')
  const [hasError, setHasError] = useState('false')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/name/${inputValue}`
    setLoading(true)
    axios.get(URL)
      .then(res => {
        setCountry(res.data[0])
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
      .finally(() => setLoading(false))
  }, [inputValue])

  const handleValue = e => {
    e.preventDefault()
    setInputValue(e.target.name.value.trim())
    e.target.name.value = ' '
  }

  console.log(inputValue)

  console.log(country)
  return (
    <div className='country'>
      <form onSubmit={handleValue}>
        <input  type="text" id='name' placeholder='Find your favorite country...' />
        <button className='btn'>Search</button>
      </form>
      {
        loading
          ? <h2 style={{ color: "darkblue"}}>Loading...</h2>
          : hasError
            ? <h2> This is country <span>{inputValue}</span>  is not valid.</h2>
            : <Country country={country} />
      }


    </div>
  )
}
export default App
