import { carosuelArrayItems } from '@/components/ui/shared/utils/carosuelItems'
import React from 'react'

const CategoryCarosuel = () => {
  return (
    <div className='flex ' >
        {
            carosuelArrayItems.map((item) => <h1>
                {item}
            </h1>)
        }
    </div>
  )
}

export default CategoryCarosuel
