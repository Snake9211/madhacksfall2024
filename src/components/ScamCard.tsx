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
import PhishingIcon from '@mui/icons-material/Phishing';
import WorkIcon from '@mui/icons-material/Work';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const iconMap: Record<string, React.ReactNode> = {
  Phishing: <PhishingIcon />,
  'Identity Theft': <AccountBoxIcon />,
  work: <WorkIcon />,
  housing: <OtherHousesIcon />,
  Other: <LightbulbIcon />,
};

interface ScamCardProps {
  scam: Scam; // Define the expected prop as a Scam object
}

const ScamCard: React.FC<ScamCardProps> = ({ scam }) => {
  return (
    <Card className="w-full h-5/6">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div>{scam.title}</div>
          <div className="text-red-600 font-bold">
            {iconMap[scam.category] || <PhishingIcon />}
          </div>
        </CardTitle>
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
