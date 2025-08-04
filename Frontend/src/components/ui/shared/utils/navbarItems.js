export const navbarItems = (role) => {
  const allItems = [
    { name: "Home", roles: ["student"] },
    { name: "Jobs", roles: ["student"] },
    { name: "Browse", roles: ["student"] },
    { name: "Companies", roles: ["recruiter"] },
    { name: "JobPosts", roles: ["recruiter"] }
  ];

  return allItems.filter(item => item.roles.includes(role)).map((navItems) => navItems.name)

};