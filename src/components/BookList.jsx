import Book from "./Book";
import "./style.css";

function BookList(props){
    console.log(props)
    return(
        <div className="bookList">
            {props.booksData.map((data)=>(
                <Book key={data.id} bookDetails={data}></Book>
            ))}
            
        </div>
    )
}

export default BookList;