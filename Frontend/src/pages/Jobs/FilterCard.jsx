import React from 'react'

const FilterCard = () => {

  // Now, filter jobs based on the categories of industry, location and salary package

  const filteredData = [
    {
      jobFilter: "location" ,
      filterArray: ["Karachi" , "Lahore" , "Islamabad" , "Faisalabad"]
    },
    {
      jobFilter: "industry" ,
      filterArray : ["Frontend Developer" , "Backend Developer" , "Devops" , "AI Engineer" , "Mobile App Developer" , "Graphic Designer" , "Wordpress" ]
    },
    {
      jobFilter: "salary" ,
      filterArray: [50000 , 70000 , 100000 , 150000 , 200000 ]
    },
  ]

  return (
    <div className=''>
      <h3 className='text-white' >
        Filter Jobs
      </h3>
    </div>
  )
}

export default FilterCard
