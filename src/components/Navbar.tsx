import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Navbar = () => {
    return (
        <header className='bg-white'>
            <nav className='max-w-6xl py-5 mx-auto'>
                <div className="logo flex items-center space-x-4">
                    <h1 className=' text-xl font-bold'>khaLo</h1>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mfp">Muzaffarpur</SelectItem>
                            <SelectItem value="smp">Samastipur</SelectItem>
                            <SelectItem value="beg">Begusarai</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
            </nav>
        </header>
    )
}

export default Navbar
