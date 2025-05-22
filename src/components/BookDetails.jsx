import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import { Books } from "../utils/mockData";
import { useSelector } from "react-redux";

function BookDetails(){
    const params = useParams();
    const navigate = useNavigate();
    const books = useSelector((state)=>state.books)


    const book = books.filter(book => book.id == params.id)
    return (
        <div className="book-details-page">
            {book.map((book)=>{
                return(
                    <div className="book-details-container"  key={book.id}>
                        <img src={book.coverImage} alt={book.title} className="book-details-image" />
                        <div className="book-info">
                            <h2 className=" text-2xl font-bold mb-2 text-center text-gray-700 !my-8">{book.title}</h2>
                            <p className="text-lg text-gray-500 !m-0.5">
                                <strong className="text-gray-700">Author:</strong>{' '}
                                <span className="text-gray-400 !font-serif">{book.author}</span>
                            </p>
                            <p className="text-lg text-gray-500 !m-0.5">
                                <strong className="text-gray-700">Published Date:</strong>{' '}
                                <span className="text-gray-400 !font-serif">{book.publishedDate}</span>
                            </p>
                            <p className="text-lg text-gray-500 !m-0.5">
                                <strong className="text-gray-700">Category:</strong>{' '}
                                <span className="text-gray-400 !font-serif">{book.category}</span>
                            </p>
                            <p className="text-lg text-gray-500 !m-0.5">
                                <strong className="text-gray-700">Rating:</strong>{' '}
                                <span className="text-gray-400 !font-serif">{book.rating}</span>
                            </p>
                            <p className="text-lg text-gray-500 !m-0.5">
                                <strong className="text-gray-700">Description:</strong>{' '}
                                <span className="text-gray-400 !font-serif">{book.description}</span>
                            </p>
                            
                        </div>
                    </div>
                )
            })}
            
            <div className="back-button-container">
                <button onClick={() => navigate(-1)} className="back-button">
                    ⬅️ Go Back
                </button>
            </div>
        </div>
    );
}

export default BookDetails;