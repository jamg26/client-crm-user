export default {
  header: {
    self: {},
    items: []
  },
  aside: {
    self: {},
    items: [
      {
        title: 'Dashboard',
        root: true,
        icon: 'flaticon2-architecture-and-city',
        page: 'dashboard',
        translate: 'MENU.DASHBOARD',
        bullet: 'dot'
      },
      {
        title: 'Product & Services',
        root: true,
        icon: 'flaticon2-graph-2',
        page: 'products-services',
        translate: '',
        bullet: 'dot',
        submenu: [
          {
            title: 'Products',
            bullet: 'dot',
            page: 'product-list'
          },
          {
            title: 'Category',
            bullet: 'dot',
            page: 'product-category'
          },
          {
            title: 'POS',
            bullet: 'dot',
            page: 'pos'
          }
        ]
      },
      {
        title: 'Invite User',
        root: true,
        icon: 'flaticon2-analytics-1',
        page: 'invite-user',
        translate: '',
        bullet: 'dot'
      },
      {
        title: 'Leads',
        root: true,
        icon: 'flaticon-rocket',
        page: 'leads',
        translate: '',
        bullet: 'dot'
      },
      {
        title: 'Account',
        root: true,
        icon: 'flaticon2-user',
        page: 'account',
        translate: '',
        bullet: 'dot'
      },
      {
        title: 'Contacts',
        root: true,
        icon: 'flaticon2-phone',
        page: 'contacts',
        translate: '',
        bullet: 'dot'
      },
      {
        title: 'Business',
        root: true,
        icon: 'flaticon-business',
        page: 'business',
        translate: '',
        bullet: 'dot'
      },
      {
        title: 'Configuration',
        root: true,
        icon: 'flaticon-business',
        page: 'configuration',
        translate: '',
        bullet: 'dot',
        submenu: [
          {
            title: 'User Setup',
            bullet: 'dot',
            submenu: [
              // {
              //   title: "Users",
              //   bullet: "line",
              //   page: "google-material/layout/box"
              // },
              // {
              //   title: "Assign Rights",
              //   bullet: "line",
              //   page: "google-material/layout/container"
              // },
              {
                title: 'User Type',
                bullet: 'line',
                page: 'usertypes'
              }
            ]
          }
        ]
      },
      {
        title: 'Support',
        root: true,
        icon: 'flaticon2-phone',
        page: 'supports',
        translate: '',
        bullet: 'dot'
      }
    ]
  }
};
