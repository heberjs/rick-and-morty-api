import { Link } from "react-router-dom"
import paths from "../Routers/paths/paths.js"


const Header = () => {

    return (

        <Link to={paths.home}><h1 className='flex align-middle justify-center text-white font-semibold font-helvetica text-3xl ml-24 my-16 md:my-20 md:text-6xl'>Rick and Morty App</h1>
        </Link>


    )
}

export default Header
