/*import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../firebaseConfig';*/

function Resources() {
  /*const [scamMessages, setScamMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, 'Scam Report');
        const q = query(messagesRef);

        const querySnapshot = await getDocs(q);
        const messages = querySnapshot.docs.map((doc) => doc.data().content);
        setScamMessages(messages);
      } catch (error) {
        console.error('Error fetching messages: ', error);
      }
    };

    fetchMessages();
  }, []);*/

  return (
    <div>
      <h1>
        Identifying <span className="text-red-800">Spam</span> Messages
      </h1>
    </div>
  );
}

export default Resources;
