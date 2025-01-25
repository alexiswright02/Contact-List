import { useState } from "react";
import "./App.css";
import ContactList from "./components/contactList";
import SelectedContact from "./components/selectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact 
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}
