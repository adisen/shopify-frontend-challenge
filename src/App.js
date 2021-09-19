import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

import './App.css'
import ImageList from './components/ImageList'

const StyledApp = styled.div`
  background-color: #0e0e0e;
  color: #fff;
  min-height: 100vh;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3px;
  }
`

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 5rem;
`

function App() {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const result = await axios.get(
      'https://api.nasa.gov/planetary/apod?start_date=2021-09-01&api_key=9s8Se0oWsPfz03zc8354qGq94VcBrGqgtxZcxmc1'
    )

    setData(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <StyledApp>
      <Wrapper>
        <h1>spacestagram.</h1>
        <p>
          Image-sharing from the final frontier. Making Commerce Better for
          Everyone by including the whole entire universe
        </p>
        {data === null ? (
          <Loader type='Rings' height={400} width={400} />
        ) : (
          <ImageList photos={data} />
        )}
      </Wrapper>
    </StyledApp>
  )
}

export default App
