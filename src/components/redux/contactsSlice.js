import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.push(action.payload);
    // },
    // addContact: (state, action) => {
    //   const { id, name, number } = action.payload;
    //   const duplicateContact = state.contacts.find(
    //     (contact) => contact.name === name && contact.number === number
    //   );
    //   if (!duplicateContact) {
    //     state.contacts.push({ id, name, number });
    //   } 
    // },
    addContact: (state, action) => {
      const { id, name, number } = action.payload;

      if (!name || !number) {
        return;
      }  

      const duplicateContact = state.contacts.find(
        (contact) => contact.number === number
      );
      if (duplicateContact) {
        alert(`Контакт з номером телефону ${number} вже є в списку`);
        return;
      }
      state.contacts.push({ id, name, number });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
