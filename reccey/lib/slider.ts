import { StaticImageData } from "next/image";
import sam from '@/app/images/sam.svg';
import lola from '@/app/images/lola.svg';
import abdul from '@/app/images/abdul.svg';

export interface Slider {
    name: string;
    picture: StaticImageData;
    info: string;
    position: string;
    id: number;
}

export const slider: Slider[] = [
    {
        id: 1,
        name: "Lola Oluwasusi",
        picture: lola,
        info: "Conalle has completely transformed how I run my fashion brand! The platform made it so easy for me to set up a storefront that reflects my personal style and aesthetics. Uploading digital fashion guides, styling tutorials, and even launching my custom fashion courses was seamless. The integrated payment options also made the purchasing process smooth for my clients. It's like having a full digital studio at my fingertips!",
        position: 'Founder and CEO, ZOKBEL '
    },
    {
        id: 2,
        name: "Abdul Dawodu",
        picture: sam,
        info: "As an entrepreneur, Conalle has been a game-changer. I was able to set up my digital storefront and start selling my e-books and courses in no time! The membership feature has allowed me to build a loyal community while automating my income streams.The best part?The user-friendly interface and integrated payment systems have saved me tons of time and hassle.",
        position: 'Entreprenuer'
    },
    {
        id: 3,
        name: "Samuel Sawyerr",
        picture: abdul,
        info: "Conalle helped me turn my passion for fitness into a thriving business! I now offer fitness programs, nutritional guides, and even live virtual training sessions, all through my custom storefront. The seamless integration with social media allows me to promote and sell my courses directly to my followers. Plus, the easy payment gateway makes managing my sales stress-free. It's the all-in-one platform I didn’t know I needed.",
        position: 'Fitness Coach'
    }
];



