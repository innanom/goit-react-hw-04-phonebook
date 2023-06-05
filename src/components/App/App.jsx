import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';
import { Container, Title, TitleContacts } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
   
    }
    else {
         setContacts(prevContacts => ({
        contacts: [contact, ...prevContacts],
      }));
    }
      
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId)
    )
  };

   const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
      </Container>
  );

}


// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
    
//   }

//    componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
 
//   addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number
//     };

//     if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
//       alert(`${name} is already in contacts`);
   
//     }
//     else {
          
//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
      
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts:prevState.contacts.filter(contact => contact.id !== contactId)
//     }))
//   }

//   changeFilter = (event) => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   }
 
 
//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//      return (
//       <Container>
//         <Title>Phonebook</Title>
//         <Form onSubmit={this.addContact} />
//         <TitleContacts>Contacts</TitleContacts>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
//       </Container>
//   );
//   }
 
// };
