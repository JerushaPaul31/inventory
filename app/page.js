/*'use client'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {firestore} from '../firebase'
import {Box, Typography} from '@mui/material'
import {collection, doc, getDocs, query} from firebase/firestore"

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')

  const updateInventory = async () => {
    const snapshot = query (collection(firestore,'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((docs) =>{
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })

    })
    setInventory(inventoryList)
  }
    */
// pages/index.js
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';
import { Button, TextField, Typography, List, ListItem } from '@mui/material';
import Auth from '../components/Auth';

export default function Home() {
  const [item, setItem] = useState('');
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    const fetchPantryItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'pantryItems'));
      const items = querySnapshot.docs.map((doc) => doc.data().name);
      setPantryItems(items);
    };
    fetchPantryItems();
  }, []);

  const handleAddItem = async () => {
    try {
      await addDoc(collection(db, 'pantryItems'), { name: item });
      setPantryItems([...pantryItems, item]);
      setItem('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <Auth />
      <Typography variant="h4">Pantry Tracker</Typography>
      <TextField
        label="Add Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        fullWidth
      />
      <Button onClick={handleAddItem} variant="contained">Add</Button>
      <List>
        {pantryItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </div>
  );
}



/*return (
  <Box>
    <Typography variant = "h1">Inventory Management</Typography>
  </Box>
  )
  */

