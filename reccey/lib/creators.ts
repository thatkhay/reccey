import { StaticImageData } from "next/image";
import founderImg from '@/app/images/founder.svg';
import fitnessImg from '@/app/images/fitness.svg';
import entreprenuerImg from '@/app/images/entreprenuer.svg';

export interface Creators {
  name: string;
  picture: StaticImageData;
  socialAddress: string;
  id: number;
  followers: string;
  profession: string;
}

export const creators: Creators[] = [
  {
    id: 1,
    name: "Lola Oluwasusi",
    picture: founderImg,
    socialAddress: "@1lolaoluwasusi",
    followers: '71k+',
    profession: 'Founder, ZOKBEL'
  },
  {
    id: 2,
    name: "Abdul Dawodu",
    picture: fitnessImg,
    socialAddress: "@abdul_dawodu",
    followers: '50k+',
    profession: 'Fitness Coach'
  },
  {
    id: 3,
    name: "Samuel Sawyerr",
    picture: entreprenuerImg,
    socialAddress: "@the_sawyerr",
    followers: '1M',
    profession: 'Entrepreneur'
  }
];



