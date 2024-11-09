import { collection, getDocs, query } from 'firebase/firestore';
import  { useEffect, useState } from 'react';

import { db } from "../firebaseConfig";

function Compare() {
  const [scamMessages, setScamMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, 'Scam Report');
        const q = query(messagesRef);

        const querySnapshot = await getDocs(q);
        const messages = querySnapshot.docs.map(doc => doc.data().content); 
        setScamMessages(messages); 
      } catch (error) {
        console.error('Error fetching messages: ', error); 
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Scam Message Checker</h1>
      <h2>Submitted Scam Messages:</h2>
      <ul>
        {scamMessages.map((msg, index) => (
          <h5 key={index}>{msg}</h5>
        ))}
      </ul>
    </div>
  );
}

export default Compare;