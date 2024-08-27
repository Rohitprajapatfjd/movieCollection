import { FaHome } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiInformation2Fill } from "react-icons/ri"
const Content = [
    {label: 'Home',
        href: '/',
        icon: <FaHome />
    },
    {label: 'Tv Shows',
        href: '/tv',
        icon: <PiTelevisionFill />
    },
    {label: 'Movies',
        href: '/movie',
        icon: <BiSolidMoviePlay />
    },
    {label: 'About',
        href: '/about',
        icon: <RiInformation2Fill />
    }
]

export default Content;