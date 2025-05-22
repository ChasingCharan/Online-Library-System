import { Books } from "../utils/mockData";
import { useState, useEffect } from "react";
import {categories } from "../utils/categoriesData"
import { useSelector } from "react-redux";
import Book from "./Book";
import { useParams } from "react-router";
import "./style.css";
import { useNavigate } from "react-router";

function BrowserBooks(){
    const { category } = useParams();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const books = useSelector((state)=>state.books);

    const selectedCategory = category && categories.includes(category)
    ? category
    : "All";

    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        if (selected === "All") {
        navigate("/browser-book");
        } else {
        navigate(`/browser-book/${selected}`);
        }
    };
    

    // Filter logic
    const filteredBooks = books.filter((book) => {
        const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;

        const matchesSearch =
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    



    return(
        <div>
            <h1 className="text-gray-600 text-6xl font-bold  text-center !mb-4 !mt-3">Browse Books</h1>

            <div className="search-filter !ml-4">
                <select
                    className="p-2 border border-gray-300 rounded-md gap-1.5"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                        {cat}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Search by title or author..."
                    className="p-2 border border-gray-300 rounded-md w-64"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <div className="bookList grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => <Book key={book.id} book={book} />)
                ) : (
                <p className="text-red-600 text-2xl font-bold text-center col-span-full flex justify-center items-center h-64">
                    No books found.
                </p>
                )}
            </div>
        </div>
    );
}

export default BrowserBooks;