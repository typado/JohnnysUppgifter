import React, { useState } from 'react'
import MemesData from '../Data/MemesData.js'



export const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
  const [allMemeImages, setAllMemeImages] = useState(MemesData)

  function handleChange(event){
    const {name, value} = event.target

    setMeme(prevMeme => {
      return{
        ...prevMeme,
        [name]: value
      }
    })

  }
  function getMemeImage() {
    const memes = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memes.length)
    const url = memes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))


  }
  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        
        <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>

    </div>
  )
}
