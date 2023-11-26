import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6560ccc883aba11d99d188e8.mockapi.io'; 

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newUser);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (index, thunkAPI) => {
    // console.log(index);
    try {
      const response = await axios.delete(`/contacts/${index}`);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
); 