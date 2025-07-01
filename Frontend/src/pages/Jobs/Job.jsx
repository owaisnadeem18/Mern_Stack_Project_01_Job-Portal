import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Bookmark } from 'lucide-react'
import React from 'react'

const Job = () => {
  return (
    <div>
    
      <p>2 days ago</p>
      <div className='flex items-center gap-1 my-2' >

      <Button variant={"outline"} className={"rounded-full"} size={"icon"} > <Bookmark/> </Button>

      <Button variant={"outline"} className={"p-1"} size={"icon"} >

        <Avatar>

            <AvatarImage src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUApzo4eHxKJuQNV_Gi_BVYGYjR_hcMrhqQ&s"}  />

        </Avatar>

      </Button>
      </div>
    
    </div>
  )
}

export default Job
