export const navbarItems = (role) => {
   const allItems = [
    { name: "Home", roles: ["student"] },
    { name: "Jobs", roles: ["student"] },
    { name: "Browse", roles: ["student"] },
    { name: "Companies", roles: ["recruiter"] },
    { name: "JobPosts", roles: ["recruiter"] }
  ];

  return allItems.filter(item => item.roles.includes(role)).map((navItem) => navItem.name )
 
}

export const routesMap = {
  Home: "/",
  Companies: "/admin/companies",
  JobPosts: "/jobposts"
};