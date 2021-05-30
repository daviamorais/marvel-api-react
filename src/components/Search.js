import React, {useState} from 'react'

//busca imagem pelo nome - não consegui colocar pra funcionar
const Search = ({search}) => {
  const [text, setText] = useState('')
  const onSearch = (q) => {
    setText(q)
    search(q)
  }
  
  //Formulário dee texto para campo de pesquisa
  return (
    <section className="search">
      <form>
        <input type="text" 
        className="form-control" 
        placeholder="Encontre o Personagem" 
        autoFocus 
        onChange={(e)=> onSearch(e.target.value)}
        value={text}/>
      </form>
    </section>
  )
}

export default Search
