import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";


const BookItem = ({ books }) => {
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap">

                {books.map(({ Id, Title, Author, Rating, pageCount, imageUrl }) =>
                    <Card key={Id} className="mx-3" style={{ width: "22rem" }}>
                        <Card.Body>
                            <Card.Title>{Title}</Card.Title>
                            <Card.Subtitle>{Author}</Card.Subtitle>
                            <div>{Rating.length} estrellas</div>
                            <p>{pageCount} páginas</p>
                            <Card.Img height={400} variant="top" src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}/>
                            <hr></hr>
                        </Card.Body>
                    </Card>
                )}



            </div>
        </>
    )
}

BookItem.propTypes = {
    Id: PropTypes.number,
    Title: PropTypes.string,
    Author: PropTypes.string,
    pageCount: PropTypes.number,
    Rating: PropTypes.array,
};


export default BookItem

