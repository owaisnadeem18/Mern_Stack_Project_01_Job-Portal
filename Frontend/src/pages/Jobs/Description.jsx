import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
  const isApplied = false; // Change this to true to show "Already Applied"

  return (
    <div className="max-w-4xl mx-auto px-6 py-30 shadow-md rounded-lg" style={{minHeight: "calc(100vh - 56px)" }} >
      <div className='border p-8 bg-gray-50 rounded-lg shadow-2xl' >
        
      <div className=" flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">2 days ago</p>
          <h2 className="text-xl font-semibold text-gray-800">Company name</h2>
          <p className="text-gray-600">company location</p>
        </div>


            <Button variant={"outline"} className={"w-18 h-18"} size={"icon"} >
              <Avatar className={"w-16 h-16"} >

                <AvatarImage
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUApzo4eHxKJuQNV_Gi_BVYGYjR_hcMrhqQ&s"} // Add logo image path here if needed
                  alt="Company Logo"
                  className="rounded-full object-cover"
                  />
              
              </Avatar>
            </Button>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Title</h3>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sapiente.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Badge className="font-semibold bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          Positions: 34
        </Badge>
        <Badge className="font-semibold bg-yellow-200 text-yellow-900 text-sm px-3 py-1 rounded-full">
          2,00,000 PKR
        </Badge>
        <Badge className="font-semibold bg-gray-500 text-white text-sm px-3 py-1 rounded-full">
          Job Type: Full Time
        </Badge>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {!isApplied ? (
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition">
            Apply Now
          </Button>
        ) : (
          <Button disabled={true} className="bg-gray-300 text-gray-600 px-6 py-2 rounded-lg cursor-not-allowed">
            Already Applied
          </Button>
        )}

        <Button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition">
          <Link to={"/jobs"} >
            Back to Listings
          </Link>
        </Button>
      </div>
      
      </div>
    </div>
  );
};

export default Description;
