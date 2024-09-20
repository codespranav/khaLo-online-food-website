import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import { Phone, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
const Navbar = () => {
    return (
        <header className='bg-white'>
            <nav className='max-w-6xl py-5 mx-auto flex justify-between'>

                <div className="logo flex items-center space-x-4">
                    <h1 className=' text-xl font-bold'>khaLo</h1>
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mfp">Muzaffarpur</SelectItem>
                            <SelectItem value="smp">Samastipur</SelectItem>
                            <SelectItem value="beg">Begusarai</SelectItem>
                        </SelectContent>
                    </Select>

                </div>

                <div className="navigationllinks flex items-center">
                    <ul className='flex items-center space-x-4 font-medium '>
                        <li>
                            <Link href='/' className='hover:text-primary'>Menu</Link>
                        </li>
                        <li>
                            <Link href='/' className='hover:text-primary'>Orders</Link>
                        </li>
                        <div className="cart">
                        </div>
                    </ul>

                    <div className='relative'>
                        <Link href="/cart">
                            <ShoppingCart className='hover:text-primary' />
                            <div className='w-5 h-5 bg-primary rounded-full absolute -top-3 -right-4 text-center flex justify-center items-center text-white text-[14px] font-bold'>4</div>
                        </Link>
                    </div>
                    {/* phone number */}
                    <div className='flex justify-between items-center ml-16 text-sm'>
                        <Phone />
                        <span className='mr-3'>+91 7643067263</span>
                    </div>
                    <Button size={"sm"}>Logout</Button>
                </div>



            </nav>
        </header>
    )
}

export default Navbar
