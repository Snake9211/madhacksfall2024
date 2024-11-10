import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import React from 'react';

interface ScammerCardProps {
  scammer: string; // Scammer's email or phone
  count: number; // Number of times this scammer appeared
}

const ScammerCard: React.FC<ScammerCardProps> = ({ scammer, count }) => {
  return (
    <Card className="h-5/6 ">
      <CardHeader>
        <CardTitle className="flex items-center">
          <div className="text-red-600 font-bold pr-2">
            <NoAccountsIcon />
          </div>
          <div className="break-words text-wrap">{scammer}</div>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="overflow-y-scroll">
        <div className="text-red-700">
          {count > 1 ? `Times Reported (Last 7 days): ${count}` : 'Report'}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default ScammerCard;
