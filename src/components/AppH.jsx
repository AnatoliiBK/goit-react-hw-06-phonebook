import React, { useState, useEffect } from 'react';
import { ContactForm } from './form/Form';
import { ContactList } from './contact/ContactList';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export function App() {
    // state = {
    //   contacts: [],
    //   filter: ''
    // };
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

  
    // componentDidMount() {
    //   const storedContacts = localStorage.getItem('contacts');
    //   if (storedContacts) {
    //     this.setState({ contacts: JSON.parse(storedContacts) });
    //   }
    // }
    useEffect(() => {
        const storedContacts = localStorage.getItem('contacts');
        if (storedContacts) {
          setContacts(JSON.parse(storedContacts));
        }
      }, []);
      
  
    // handleChange = (e) => {
    //   this.setState({ filter: e.target.value });
    // };
    const handleChange = (e) => {
        setFilter(e.target.value);
      };
      
  
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   const { contacts } = this.state;
    //   const { name, number } = e.target.elements;
  
    //   const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  
    // if (!phoneRegex.test(number.value)) {
    //   alert("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +");
    //   return;
    // }
  
    //   const isDuplicateContact = contacts.some(
    //     (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
    //   );
  
    //   if (isDuplicateContact) {
    //     const duplicateContact = contacts.find(
    //       (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
    //     );
    //     alert(`${duplicateContact.name} is already in contacts.`);
    //     return;
    //   }
  
    //   const newContact = {
    //     id: nanoid(),
    //     name: name.value,
    //     number: number.value
    //   };
  
    //   this.setState(
    //     (prevState) => ({
    //       contacts: [...prevState.contacts, newContact]
    //     }),
    //     () => {
    //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    //   );
    //   // this.setState((prevState) => ({
    //   //   contacts: [...prevState.contacts, newContact]
    //   // }));
  
    //   name.value = '';
    //   number.value = '';
    // };
    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = e.target.elements;
    
      const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    
      if (!phoneRegex.test(number.value)) {
        alert("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +");
        return;
      }
    
      const isDuplicateContact = contacts.some(
        (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
      );
    
      if (isDuplicateContact) {
        const duplicateContact = contacts.find(
          (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
        );
        alert(`${duplicateContact.name} is already in contacts.`);
        return;
      }
    
      const newContact = {
        id: nanoid(),
        name: name.value,
        number: number.value
      };
    
      setContacts((prevContacts) => [...prevContacts, newContact]);
    
      name.value = '';
      number.value = '';
      
      localStorage.setItem(
        'contacts',
        JSON.stringify([...contacts, newContact])
      );
    };
    
    // handleDelete = (id) => {
    //   this.setState(
    //     (prevState) => ({
    //       contacts: prevState.contacts.filter((contact) => contact.id !== id)
    //     }),
    //     () => {
    //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    //   );
      
    //   // this.setState((prevState) => ({
    //   //   contacts: prevState.contacts.filter((contact) => contact.id !== id)
    //   // }));
    // };
    const handleDelete = (id) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };
     
  
    // render() {
    //   const { filter, contacts } = this.state;
    //   const filteredContacts = contacts.filter((contact) =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase())
    //   );
  
    //   return (
    //     <div>
    //       <h1 style={{marginLeft: "80px", fontSize: "40px"}}>Phonebook</h1>
  
    //       <ContactForm handleSubmit={this.handleSubmit} />
  
    //       <ContactList
    //         contacts={filteredContacts}
    //         filter={filter}
    //         handleChange={this.handleChange}
    //         handleDelete={this.handleDelete}
    //       />
    //     </div>
    //   );
    // }
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1 style={{ marginLeft: '80px', fontSize: '40px' }}>Phonebook</h1>

        <ContactForm handleSubmit={handleSubmit} />

        <ContactList
          contacts={filteredContacts}
          filter={filter}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      </div>
    );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func,
};