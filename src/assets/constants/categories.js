import { TbCategoryFilled } from "react-icons/tb";
import { LuMonitor } from "react-icons/lu";
import { MdLaptopMac } from "react-icons/md";
import { LuPcCase } from "react-icons/lu";
import { FiCpu } from "react-icons/fi";
import { CiDesktopMouse2 } from "react-icons/ci";

const categories=[
    {
        name: 'All',
        icon:  TbCategoryFilled
    },
    {
        name: 'Disktops',
        icon: LuMonitor 
    },
    {
        name: 'Laptops',
        icon: MdLaptopMac 
    },
    {
        name: 'Custom PCs',
        icon: LuPcCase 

    },
    {
        name: 'CPU',
        icon: FiCpu 
    },
    {
        name: 'Accessories',
        icon: CiDesktopMouse2 
    },
]

export default categories;