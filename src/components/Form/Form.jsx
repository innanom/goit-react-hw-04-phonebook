import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormContacts, LabelForm, InputForm, BtnForm } from './Form.styled';

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
   }
   
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
          <FormContacts onSubmit={handleSubmit}>
            <LabelForm>Name
            <InputForm
              type="text"
              name="name"
              placeholder='Enter your name'
              value={name}
              onChange={handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           </LabelForm>
           <LabelForm>Number
              <InputForm
                type="tel"
                name="number"
                placeholder='Enter your telephone number'
                value={number}
                onChange={handleChangeNumber}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
           </LabelForm>
          <BtnForm type='submit'>Add contact</BtnForm>
         </FormContacts>
        );
}


Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;