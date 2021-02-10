
import { useState } from 'react';


const useLocalStorage = ( key, invitialValue ) =>{
    const [ storedValue, setStoredValue ] = useState( () =>{
        const k = window.localStorage.getItem( key );
        return k ? JSON.parse( k ) : invitialValue;

    })


    const setValue = value => {
        setStoredValue( value );
        window.localStorage.setItem( key, JSON.stringify( value ) );
    }

    return [ storedValue, setValue ];
}

export default useLocalStorage;