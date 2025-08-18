import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { carosuelArrayItems } from '@/components/ui/shared/utils/carosuelItems'
import { setSearchQuery } from '@/features/jobs/jobSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CategoryCarosuel = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const searchJobHandler = (query) => {
        dispatch(setSearchQuery(query))
        navigate("/browse")
    }

    return (
    <div>
        <Carousel className="w-full max-w-4xl mx-auto py-15 flex items-center justify-center " >

            <CarouselContent>
                {
                carosuelArrayItems.map((item , indx) =>
                    <CarouselItem key={indx} className="flex justify-center items-center basis-full md:basis-1/2 lg:basis-1/3">
                        <Button onClick = {() => searchJobHandler(item) } variant="outline" className= "rounded-full cursor-pointer" >
                            {item}
                        </Button>
                    </CarouselItem>
                )
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>

        </Carousel>
    </div>
  )
}

export default CategoryCarosuel
