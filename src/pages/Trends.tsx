import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { Scam } from '../types/Scam';
//import ScamCard from '../components/ScamCard';
import CardCarousel from '../components/CardCarousel';

const Trends = () => {
  const [last7DaysScams, setLast7DaysScams] = useState<Scam[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, 'Scam Report');

        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        const last7Days = currentTime - 7 * 24 * 60 * 60; // 7 days in seconds

        // Query for last 7 days
        const q7Days = query(messagesRef, where('time', '>=', last7Days));
        const snapshot7Days = await getDocs(q7Days);
        const messages7Days: Scam[] = snapshot7Days.docs.map(
          (doc) => doc.data() as Scam
        );

        setLast7DaysScams(messages7Days);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setError('Failed to fetch scam messages.');
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-1 min-h-screen flex flex-col px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Scams in the Last 7 Days</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            {last7DaysScams.length > 0 ? (
              <CardCarousel scamList={last7DaysScams} />
            ) : (
              <p>No scams reported in the last 7 days.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trends;
