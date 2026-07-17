import react from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarMenu } from "@/data";
import Button from "@mui/material/Button";

const Sidebar = () => {
  return (
    <aside className="sidebar w-[18%] h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3 border-r-[1px] border-[rgba(0,0,0,0.1)] fixed top-0 left-0">
        <Link href="/">
            <Image src="/bwin-logo.png" alt="Logo" width={130} height={43} />
        </Link>
        <div className='sidebarMenu mt-4'>
            {
                sidebarMenu?.length !==0 && 
                <ul className='w-full'>
                    {
                        sidebarMenu?.map((menu, index) => {
                            return (
                                <li className='w-full' key={index}>
                                    <Button variant="text" className='w-full capitalize text-left justify-start! text-gray-800! gap-2 font-bold! text-[13px]! p-3! dark:text-white!'>
                                        {menu.icon} {menu.title}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    </aside>
  );
};

export default Sidebar;