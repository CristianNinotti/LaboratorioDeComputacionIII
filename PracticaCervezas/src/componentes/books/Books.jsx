

import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating?.length} estrellas</div>
        <p>{pageCount} páginas</p>
      </Card.Body>
    </Card>
  );
};
BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
  imageUrl: PropTypes.string,
};
export default BookItem;

import PropTypes from "prop-types"
import BookItem from "../bookItem/BookItem"


const Books = ({books}) => {
    return (
        <div>
            {books.map((book) => (
                <BookItem
                key={id}   // Se lo agregamos al objeto el ID y es la mejor practica
                title={book.title}
                author={book.author}
                rating={book.rating}
                pageCount={book.pageCount}
                imageUrl={book.imageUrl}
                
                />
            ))}
        </div>
    )
}

Books.PropTypes = {
    books: PropTypes.array

}

export default Books

// Esto va en el app
function App() {
    return (
        <div>
            <h2>Book</h2>
            <p>Libro asdasd</p>
            <Books books={bookData}/>
        </div>
    )
}

export default App