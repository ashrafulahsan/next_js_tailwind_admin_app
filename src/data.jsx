import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import CategoryIcon from '@mui/icons-material/Category';
import { FaProductHunt } from "react-icons/fa";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


export const sidebarMenu = [
    {
        title: "Dashboard",
        href: "/",
        icon: <GridViewTwoToneIcon size={20}/>
    },
    {
        title: "Category",
        href: "/category/list",
        icon: <CategoryIcon size={20}/>
    },
    {
        title: "Products",
        href: "/products/list",
        icon: <FaProductHunt size={22}/>
    },
    {
        title: "Customers",
        href: "/customers/list",
        icon: <PeopleAltIcon size={22}/>
    },
    {
        title: "Orders",
        href: "/orders/list",
        icon: <ShoppingCartIcon size={20}/>
    },
    {
        title: "Email",
        href: "/email/list",
        icon: <EmailIcon size={20}/>
    },
    {
        title: "Chat",
        href: "/chat/list",
        icon: <ChatIcon size={20}/>
    }
]