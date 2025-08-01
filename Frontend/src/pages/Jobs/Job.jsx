import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { JobPostedTotalTime } from '@/components/ui/shared/utils/jobUtils'
import { Bookmark, MapIcon, MapPinIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Job = ({job}) => {

  return (
    <div className='border border-gray-400 p-3 rounded-lg' >
    
        <div className='flex items-center justify-between'>
            <p className='text-gray-200 font-semibold' > <span > Job Posted: </span> <Badge variant={"ghost"} className='text-sm font-bold bg-gray-700' > {JobPostedTotalTime(job?.createdAt) === 0 ? "Today" : `${JobPostedTotalTime(job?.createdAt)} days ago` } </Badge> </p>

            <Button variant={"outline"} className={"rounded-full"} size={"icon"} > <Bookmark/> </Button>
        </div>
      
      <div className='flex items-center gap-4 my-2' >

      <Button variant={"outline"} size={"icon"} >

        <Avatar>

            <AvatarImage src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUApzo4eHxKJuQNV_Gi_BVYGYjR_hcMrhqQ&s"}  />

        </Avatar>

      </Button>

        <div className='flex justify-between gap-3 items-center flex-wrap' >
            <div>

                { job?.company?.name ?  
            <h6 className='text-white font-semibold' >
                    <Badge variant={"ghost"}>

                {job?.company?.name }
                </Badge> 
            </h6> : ""  }
            </div>
            <div>

            <p className='text-[#f0f0f0ba] flex gap-1 font-semibold' >
                <MapPinIcon /> {job?.location}
            </p>
            </div>
        </div>

      </div>

      <div>
        <h4 className='text-white text-lg font-bold' >
            {job?.title}
        </h4>
        <p className='text-white' >
            {job?.description}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-3">
            <Badge variant={"ghost"} className= "text-[#8aebffd3]" >
                Positions: {job?.position}
            </Badge>
            <Badge variant={"ghost"} className= " text-yellow-300" >
                {job?.salary?.toLocaleString("en-IN")} / PKR
            </Badge>
            <Badge variant={"ghost"} className= "bg-white text-red-600" >
                Job Type: {job?.jobType}
            </Badge>
      </div>
        
        <div className='flex gap-2 flex-wrap' >

        <Button variant={"outline"} className="mt-4 text-[12px] cursor-pointer py-1 px-4 rounded-lg">
            <Link to={`/description/${job._id}`}>
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
