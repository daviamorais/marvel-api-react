import './App.css';
import Header from './components/Header'
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Search from './components/Search'


  const publicKey = "4598b8ef459b161801ebbab743c93741"
  const hash = "48d368367b04a8df955619cb2ec44593"

function App() {
  const [items, setItems] = useState([])
  const [isloading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    
    const fecth= async()=>{
      if(query===''){
        const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`)  
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setLoading(false)
      }else{
        const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStarstWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`)  
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setLoading(false)
      }
    }
    fecth()
  },[query])

  return (
    <div className="container">
      <Header/>
      <Search search={(q) => setQuery(q)}></Search>
      <CharacterTable items = {items} isloading ={isloading} />
    </div>
  );
}

export default App;
