import './App.css'
import BookItem from './componentes/bookItem/BookItem'
import books from './componentes/books/books'


function App() {

  return (
    <>
      <h1>Books Champion App</h1>
      <p>¡Quiero leer Libros!</p>
      <BookItem books = {books}/>
    </>
  )
}

export default App
