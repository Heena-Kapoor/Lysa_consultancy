const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active"
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "active"
  },
  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Services",
    link: "#",
    active: "",
    sub_menus: [
      {
        title: "Database Services",
        link: "/database-services",
        has_dropdown: true,
        sub_menus: [
          { link: "/remote-dba-support", title: "Remote DBA Support" },
          { link: "/upgrade-and-migration", title: "Upgrade & Migration" },
          { link: "/managed-cloud-database-service", title: "Managed Cloud Database Service" },
          { link: "/high-availability-database-service", title: "High Availibility" }
        ]
      },
      {
        title: "Cloud Services",
        link: "/cloud-services",
        has_dropdown: true,
        sub_menus: [
          { link: "/aws-cloud-service", title: "AWS" },
          { link: "/google-cloud-service", title: "Google Cloud" },
          { link: "/cloud-migration-service", title: "Cloud Migration" }
        ]
      },
      {
        title: "DevOps",
        link: "/devops-consulting-services",
        has_dropdown: false
      }
    ]
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "FAQ",
    link: "/faq",
    active: ""
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: ""
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: ""
  }
];

export default menu_data;
