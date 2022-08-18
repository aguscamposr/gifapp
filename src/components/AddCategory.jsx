import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState( '' );

    const onInputChange = ({target}) => {
        setInputValue( target.value )
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; //con esto no dejo que se escriban espacios vacios
        //setCategories (categories => [inputValue, ...categories]);
        setInputValue( '' );
        onNewCategory( inputValue.trim() );//TRIM es para que no tenga espacios en blanco
};
  return (
      <form onSubmit={onSubmit}>
        <input 
            type= 'text'
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange }
        />
    </form>
  );
};
