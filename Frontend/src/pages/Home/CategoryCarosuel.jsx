import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { carosuelArrayItems } from '@/components/ui/shared/utils/carosuelItems'
import React from 'react'

const CategoryCarosuel = () => {
  return (
    <div>

        <Carousel className="w-full max-w-4xl mx-auto py-15 flex items-center justify-center " >

            <CarouselContent>
                {
                carosuelArrayItems.map((item , indx) =>
                    <CarouselItem key={indx} className="flex justify-center items-center basis-full md:basis-1/2 lg:basis-1/3">
                        <Button variant="outline" className= "rounded-full" >
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
