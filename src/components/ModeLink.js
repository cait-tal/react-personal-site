import { DarkModeContext } from '../App';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useContext } from 'react';



export default function ModeLink() {



    const {darkTheme, setDarkTheme} = useContext(DarkModeContext);





    function toggleTheme() {
        setDarkTheme(!darkTheme);
        document.body.classList.toggle('dark-theme');
    }
    return (
        <span onClick={toggleTheme} className='nav-link'>
            {!darkTheme ? (
                <>
                    <FaSun />
                    <span className='link-text'>Light Mode</span>
                </>
            ) : (
                <>
                    <FaMoon />
                    <span className='link-text'>Dark Mode</span>
                </>
            )}
        </span>
    )
}