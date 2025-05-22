import { useState } from "react";
import { categories } from "../utils/mockData";
import { addBook } from "../utils/bookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddBook(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        coverImage: "",
        category: "",
        rating: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.author.trim()) newErrors.author = "Author is required";
        if (!formData.description.trim()) newErrors.description = "Description is required";
        if (!formData.coverImage.trim()) newErrors.coverImage = "Cover Image URL is required";
        if (!formData.category.trim()) newErrors.category = "Category is required";
        if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5)
        newErrors.rating = "Rating must be between 0 and 5";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!validateForm()) return;

        const newBook = {
            ...formData,
            id: uuidv4(),
            rating: parseFloat(formData.rating),
        }

        dispatch(addBook(newBook));
        navigate("/browser-book");

        
    }

    return(
        <div className="!max-w-xl !mx-auto !mt-10 !p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold !mb-6 text-center">Add New Book</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="!m-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="!w-full !p-2 border border-gray-300 rounded"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="!m-4">
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={formData.author}
                        onChange={handleChange}
                        className="!w-full !p-2 border border-gray-300 rounded"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="!m-4">
                    <input
                        type="text"
                        name="coverImage"
                        placeholder="Cover Image URL"
                        value={formData.coverImage}
                        onChange={handleChange}
                        className="!w-full !p-2 border border-gray-300 rounded"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="!m-4">
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full !p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Category</option>
                        {categories
                        .filter((cat) => cat !== "All")
                        .map((cat) => (
                            <option key={cat} value={cat}>
                            {cat}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                </div>
                <div className="!m-4">
                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (0 - 5)"
                        value={formData.rating}
                        onChange={handleChange}
                        className="!w-full !p-2 border border-gray-300 rounded"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="!m-4">
                    <textarea
                        name="description"
                        placeholder="Description........"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full !p-2 border border-gray-300 rounded"
                        style={{ height: "3cm" }}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">{errors.description}</p>
                    )}
                </div>

                <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-gray-600 text-white !py-2 !px-6 rounded hover:bg-blue-500 transition"
                >
                    Add Book
                </button>
                </div>
            </form>
        </div>
    )
}

export default AddBook;