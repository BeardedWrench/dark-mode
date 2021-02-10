import useLocalStorage from './useLocalStorage';


const useDarkMode = () => {
    const [ darkMode, setDarkMode ]= useLocalStorage( "darkModeOn" );
    return [ darkMode, setDarkMode ];
}

export default useDarkMode;