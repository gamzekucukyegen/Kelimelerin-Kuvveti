import { useState } from 'react'
import './styles.css'
import wordsDataOne from './data/wordsDataOne'
import wordsDataTwo from './data/wordsDataTwo'
import Header from './components/Header'
import Word from './components/Word'
import NavButtons from './components/NavButtons'
import Footer from './components/Footer'

export default function App() {
  const [wordsDataArray, setWordsDataArray] = useState(wordsDataOne)
  const [currentWord, setCurrentWord] = useState(wordsDataArray[0])

  const wordData = {
    wordsDataArray,
    currentWord,
    setCurrentWord,
  };
  
  return (
    <div className='wrapper'>
      <Header />
  

      <NavButtons wordData={wordData} position='top' />
      <Word wordData={wordData} />
      <NavButtons wordData={wordData} position='bottom' />
  
      <Footer />
    </div>
  );
  }
