import { Books } from "../utils/mockData";
import { useState, useEffect } from "react";
import Book from "./Book";
import "./style.css";

function HomePage(){

    const [filteredBooks, setFilteredBooks] = useState(Books);


    useEffect(() => {
        const popularBooks = Books.filter(book => book.rating > 4.5);
        setFilteredBooks(popularBooks);
      }, []);

      console.log(filteredBooks);

    return(
        <div className="bookList">
            <h1 className="text-gray-600 text-6xl font-bold  text-center !mb-4 !mt-3">Popular Books</h1>
            <div className="bookList">
                {filteredBooks.map((data)=>(
                    <Book key={data.id} book={data}/>
                ))}
            </div>

        </div>
    )

}

export default HomePage;