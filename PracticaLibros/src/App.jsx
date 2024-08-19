import './App.css'
import BookItem from './componentes/bookItem/BookItem'
import books from './componentes/books/books'


function App() {

  return (
    <>
      <BookItem books = {books}/>
    </>
  )
}

export default App
