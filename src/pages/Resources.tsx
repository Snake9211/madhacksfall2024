/*import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../firebaseConfig';*/

import ResourceSection from '../components/ResourceSection';

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
    <div className="max-w-screen-lg mx-auto my-1 min-h-screen flex flex-col px-4 py-8 space-y-6">
      <div className="space-y-4">
        <h1 className="underline">What to Do If You Have Been Scammed</h1>
        <div>
          <h2>Step 1: Protect Yourself Immediately</h2>
          <p>
            Freeze all bank accounts, change passwords, and contact all payment
            services potentially affected.
          </p>
        </div>
        <div>
          <h2>Step 2: Report the Scam</h2>
          <p>
            First, report the scam email, phone number, or whatever platform you
            recieved it on. Then, contact all fraud organizations such as the
            <a href=""> FTC</a>,<a href=""> Better Business Bureau</a>, and
            submit a report
            <a href=""> here!</a>
          </p>
        </div>
        <h2>Step 3: Future Prevention</h2>
      </div>
      <div className="space-y-4">
        <h1 className="underline">
          Identifying <span className="text-red-700">Scams</span>
        </h1>
        <p>
          In general, whenever you are asked for{' '}
          <span className="underline">personal information</span>, be wary of
          the message. Some specific personal information not to share is:
          address, SSN, credit card number, and any other government issued
          identification details. When an email or message is received from a
          bank, be sure to check the message. If verifiable, proceed safely. If
          not, contact bank and verify with agent.
        </p>
        <p>Below are a few examples: </p>
        <ResourceSection />
      </div>
    </div>
  );
}

export default Resources;
