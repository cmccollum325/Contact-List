import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList.jsx'



export default function App() {
 const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <div> Selected Contact View </div>
    ): (
      <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  );
}


