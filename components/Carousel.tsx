import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <div>
          <Image className='h-[200px] md:h-auto' src="/SellCampBanner_3.png" width="1400" height="500" alt='car banner' />
        </div>
        <div>
          <Image className='h-[200px] md:h-auto' src="/SellCampBanner_4.png" width="1400" height="500" alt='car banner' />
        </div>
        <div>
          <Image className='h-[200px] md:h-auto' src="/SellCampBanner_5.png" width="1400" height="500" alt='car banner' />
        </div>
      </Carousel>
    </div>
  )
}