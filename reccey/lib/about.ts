import grocerystore from '@/app/images/grocerystore.svg';
import Inbox from '@/app/images/inbox.svg';
import entreprenuerImg from '@/app/images/integrated-payment.svg';
import classroom from '@/app/images/classroom.svg'
import vip from '@/app/images/vip-card.svg';
import Tickets from '@/app/images/tickets.svg';

import { StaticImageData } from "next/image";
export interface About {
    tittle: string;
    picture: StaticImageData;
    info: string;
    id: number;

}

export const about: About[] = [
    {
        id: 1,
        tittle: "Storefront",
        picture: grocerystore,
        info: "Easily build and customize your own online store with a unique URL, giving your brand a home that stands out.",

    },
    {
        id: 2,
        tittle: "Digital Products",
        picture: Inbox,
        info: "Upload and sell digital products like e-books, music, software, and more, directly to your audience.",

    },
    {
        id: 3,
        tittle: "Payment Integration",
        picture: entreprenuerImg,
        info: "Seamless integration with trusted local (Paystack, Flutterwave) and global (Stripe) payment gateways to process transactions securely.",

    },
    {
        id: 4,
        tittle: "Courses & Trainings",
        picture: classroom,
        info: "Offer online courses and training sessions, equipping your audience with valuable knowledge while expanding your revenue streams.",

    },
    {
        id: 5,
        tittle: "Memberships",
        picture: vip,
        info: "Monetize exclusive content by offering subscription-based memberships, giving your community access to premium material.",

    },
    {
        id: 6,
        tittle: "Event Tickets",
        picture: Tickets,
        info: "Sell tickets to virtual or in-person events directly from your storefront, simplifying your event management process.",

    }
];
