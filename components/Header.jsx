import Image from "next/image"; // Image tag is built in tag in Next.js and it's automatically loaded as lazy. Only the images in the viewport is loaded.
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

function Header() {
  const headerItems = [
    {
      title : "HOME",
      Icon:HomeIcon
    },
    {
      title : "TRENDING",
      Icon:LightningBoltIcon
    },
    {
      title : "VERIFIED",
      Icon:BadgeCheckIcon
    },
    {
      title : "COLLECTIONS",
      Icon:CollectionIcon
    },
    {
      title : "SEARCH",
      Icon:SearchIcon
    },
    {
      title : "ACCOUNT",
      Icon:UserIcon
    }
  ]
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        {/* <h1>This is the header!</h1> */}
        <div className="flex flex-grow justify-evenly max-w-2xl">
          {
            headerItems.map((item, index) => (
              <HeaderItem 
              title={item.title} 
              Icon={item.Icon} 
              key={index} />
            ))
          }
        </div>
        <Image 
        className="object-contain"
        src='/movieLogo.png'
        width={200}
        height={100}
        /> 
    </header>
  )
};

export default Header;