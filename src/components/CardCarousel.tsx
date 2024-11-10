import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel.tsx';
import { Scam } from '../types/Scam';
import ScamCard from './ScamCard.tsx';

interface CardCarouselProps {
  scamList: Scam[]; // Define the expected prop as a Scam object
}

const CardCarousel: React.FC<CardCarouselProps> = ({ scamList }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {scamList.map((scam, index) => (
          <CarouselItem key={index} className=" flex">
            <div className="flex aspect-square items-center justify-center p-6 w-full">
              <ScamCard scam={scam} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CardCarousel;
