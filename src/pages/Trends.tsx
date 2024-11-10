import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { Scam } from '../types/Scam';
//import ScamCard from '../components/ScamCard';
import CardCarousel from '../components/CardCarousel';
import ScammerCard from '../components/ScammerCard';

const Trends = () => {
  const [last7DaysScams, setLast7DaysScams] = useState<Scam[]>([]);
  const [trendingScammers, setTrendingScammers] = useState<
    { scammer: string; count: number }[]
  >([]);
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

        // Sort messages by time in descending order
        const sortedMessages = messages7Days.sort((a, b) => b.time - a.time);

        setLast7DaysScams(sortedMessages);

        const scammerCounts: Record<string, number> = {};
        messages7Days.forEach((scam) => {
          const scammer = scam.email || scam.phone;
          if (scammer) {
            scammerCounts[scammer] = (scammerCounts[scammer] || 0) + 1;
          }
        });

        // Extract scammers appearing at least twice and sort by count
        const trending = Object.entries(scammerCounts)
          .filter(([, count]) => count >= 2) // At least twice
          .map(([scammer, count]) => ({ scammer, count }))
          .sort((a, b) => b.count - a.count); // Sort by count descending

        setTrendingScammers(trending);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setError('Failed to fetch scam messages.');
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-1 min-h-screen flex flex-col px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h1>Scams in the Last 7 Days &#128198;</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            {last7DaysScams.length > 0 ? (
              <div className="flex items-center justify-center">
                <CardCarousel scamList={last7DaysScams} />
              </div>
            ) : (
              <p>No scams reported in the last 7 days.</p>
            )}
          </div>
        )}
      </div>
      <div className="space-y-4">
        <h1>Trending Scammers&#128293;</h1>
        <div className="flex justify-center items-center flex-wrap space-x-4">
          {trendingScammers.map((scammer) => (
            <div className="flex-grow">
              <ScammerCard scammer={scammer.scammer} count={scammer.count} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
