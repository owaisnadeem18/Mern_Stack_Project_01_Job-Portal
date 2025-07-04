import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bookmark } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Job = () => {

    const jobId = "jfmkdgeofelsfmsdmgsdmgklfd"

  return (
    <div className='border p-3 rounded-lg' >
    
        <div className='flex items-center justify-between' >
            <p className='text-gray-200 text-sm font-semibold' >2 days ago</p>

            <Button variant={"outline"} className={"rounded-full"} size={"icon"} > <Bookmark/> </Button>
        </div>
      
      <div className='flex items-center gap-4 my-2' >

      <Button variant={"outline"} className={"p-1"} size={"icon"} >

        <Avatar>

            <AvatarImage src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUApzo4eHxKJuQNV_Gi_BVYGYjR_hcMrhqQ&s"}  />

        </Avatar>

      </Button>

        <div className='flex flex-col' >
            <h6 className='text-white font-semibold' >
                Company name
            </h6>
            <p className='text-[#f0f0f0ba] font-semibold' >
                company location
            </p>
        </div>

      </div>

      <div>
        <h4 className='text-white font-medium' >
            Title
        </h4>
        <p className='text-white' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sapiente.
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-3">
            <Badge variant={"ghost"} className= "text-[#8aebffd3]" >
                Positions 34
            </Badge>
            <Badge variant={"ghost"} className= " text-yellow-300" >
                2,00,000/ PKR
            </Badge>
            <Badge variant={"ghost"} className= "bg-white text-red-600" >
                Job Type Full Time
            </Badge>
      </div>
        
        <div className='flex gap-2 flex-wrap' >

        <Button variant={"outline"} className="mt-4 text-[12px] cursor-pointer py-1 px-4 rounded-lg">
            <Link to={`/description/${jobId}`} >
                Details 
            </Link>
        </Button>

        <Button className="mt-4 text-[12px] bg-purple-700 hover:bg-purple-800 cursor-pointer text-white py-1 px-4 rounded-lg">
            Apply Now
        </Button>
        
        </div>


    
    </div>
  )
}

export default Job
