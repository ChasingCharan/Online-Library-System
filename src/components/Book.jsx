import "./style.css";
import { useNavigate } from "react-router-dom";

function Book(props){

    const navigate = useNavigate();

    const handleViewMore =() =>{
        navigate(`/book/${props.book.id}`);
    }

    return(
        <div className="book-card">
            <img src={props.book.coverImage} 
            alt=""
            className="book-cover"
            />
            <div className="book-details">
                <h2 className="book-title">{props.book.title}</h2>
                <p className="book-author">{props.book.author}</p>
                <p className="book-description">{props.book.description}</p>
            </div>
            <button className="view-button" onClick={handleViewMore}>View More</button>
        </div>
    )
}

export default Book;