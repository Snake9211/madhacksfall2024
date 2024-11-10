import React from 'react';
import { Scam } from '../types/Scam';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

interface ScamCardProps {
  scam: Scam; // Define the expected prop as a Scam object
}

const ScamCard: React.FC<ScamCardProps> = ({ scam }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{scam.title}</CardTitle>
        <CardDescription>
          {scam.communicationType}:{' '}
          {scam.communicationType === 'Email' ? scam.email : scam.phone}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">{scam.content}</div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default ScamCard;
