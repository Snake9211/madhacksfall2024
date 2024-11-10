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

const ScamCard = (prop: Scam) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{prop.title}</CardTitle>
        <CardDescription>
          {prop.communicationType}:{' '}
          {prop.communicationType === 'Email' ? prop.email : prop.phone}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">{prop.content}</div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default ScamCard;
