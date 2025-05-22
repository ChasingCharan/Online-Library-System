import { Link } from "react-router-dom";

function Header(){

    return(
        <div className="flex justify-between border-b-2 border-slate-200" >
            <img src="https://i.pinimg.com/474x/f8/a6/91/f8a6918cc87e710e9fef60d2dd670dc3.jpg" 
                alt=""
                width= "100px"
                height = "90px"
                className=""
            />

            <ul className="flex items-center gap-6" >
                <Link to = "/">
                    <li>Home</li>
                </Link>
                <Link to = "/browser-book">
                    <li>Browse Books</li>
                </Link>
                <Link to = "/add-book">
                    <li>Add Book</li>
                </Link>
                
                
                
            </ul>

        </div>
    )
}

export default Header;