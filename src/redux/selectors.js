import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.select;

export const selectVisibleContacts = createSelector( 
  [selectContacts, selectFilter],
  (items, select) => {
    if (select !== null) {
      return items.filter(item => item.name.toLowerCase().includes(select));
    }
    return items;
  }
); 

