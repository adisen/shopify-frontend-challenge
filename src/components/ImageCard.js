import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledImageCard = styled.div`
  width: 20%;
  max-width: 300px;
  border: 1px solid #fff;
  border-radius: 0 0 10px 10px;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  /* background-color: #fff; */
  /* color: #0e0e0e; */
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: none;
    animation: like-heart-animation;
    animation-timing-function: ease-in-out;
  }

  .icons {
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
  }

  .like-icon {
    animation: like-heart-animation;
    animation-timing-function: ease-in-out;
  }

  @keyframes like-heart-animation {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    15% {
      opacity: 0.9;
      transform: scale(1.2);
    }
    30% {
      transform: scale(0.95);
    }
    45%,
    80% {
      opacity: 0.9;
      transform: scale(1);
    }
  }
`

const StyledImageCardDetails = styled.div`
  width: 90%;
  margin: 0 auto;
`

const ImageCard = ({ photo }) => {
  const [liked, setLiked] = useState(false)
  const { date, explanation, url, title } = photo

  const updateLike = () => {
    setLiked(prevState => {
      return !prevState
    })
  }
  return (
    <StyledImageCard>
      <img src={url} alt={title} />
      <StyledImageCardDetails>
        <h2>{title}</h2>
        <h5>Capture Data: {date}</h5>
        <p>{explanation.slice(0, 500)}...</p>

        <button onClick={updateLike}>
          {liked ? (
            <FontAwesomeIcon
              className='icons like-icon'
              icon={faHeart}
              color='red'
              size='2x'
            />
          ) : (
            <FontAwesomeIcon
              className='icons like-icon'
              icon={fasHeart}
              color='white'
              size='2x'
            />
          )}
        </button>
        <TwitterShareButton url={url}>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FontAwesomeIcon className='icons' icon={faFacebook} size='2x' />
        </FacebookShareButton>
      </StyledImageCardDetails>
    </StyledImageCard>
  )
}

export default ImageCard
