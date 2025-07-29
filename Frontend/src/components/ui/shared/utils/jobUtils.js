
export const JobPostedTotalTime = (mongoDBTime) => {
        // first store the current age of the job from mongoDB 
        
        const createdAt = new Date(mongoDBTime)
        console.log(createdAt)

        // secondly store the current date to find age diference 
        const currentDate = new Date()

        // Now simply find the age difference:

        const ageDifference = currentDate - createdAt
        return Math.floor(ageDifference/ (1000 * 24 * 60 * 60))

    }