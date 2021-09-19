import React from 'react'
import styled from 'styled-components'
import ImageCard from './ImageCard'

const StyledImageList = styled.section`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

const ImageList = ({ photos }) => {
  console.log(photos)
  return (
    <StyledImageList>
      {photos
        .filter(photo => photo.media_type === 'image')
        .map(photo => {
          return <ImageCard key={photo.title} photo={photo} />
        })}
    </StyledImageList>
  )
}

export default ImageList
