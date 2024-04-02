import {
  MdBalance,
  MdDashboard,
  MdSavings,
  MdSend,
  MdWallet,
} from 'react-icons/md';
export const menuItems = [
  {
    id: 1,
    title: 'AddBreakfast',
    icon: <MdDashboard size={25} />,
    link: '/addbreakfast',
  },
  {
    id: 2,
    title: 'AddLaunch',
    icon: <MdSend size={25} />,
    link: '/addlaunch',
  },
  {
    id: 3,
    title: 'AddDinner',
    icon: <MdBalance size={25} />,
    link: '/adddinner',
  },
  {
    id: 4,
    title: 'AddSmallChop',
    icon: <MdWallet size={25} />,
    link: '/addsmallchop',
  },
  {
    id: 5,
    title: 'AllFood',
    icon: <MdSavings size={25} />,
    link: '/allfood',
  },
];
