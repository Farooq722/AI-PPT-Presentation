import { BookTemplate, HomeIcon, Settings, Trash } from "lucide-react";

export const data = {
  user: {
    name: "Shadcn",
    email: "shadcn@gmail.com",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAABFRUXx8fHf39/ExMQ/Pz/t7e24uLg7Ozvl5eXq6urAwMAUFBTc3Nzi4uKGhoYgICAZGRlKSkr4+PgPDw8yMjLPz8+lpaWwsLBQUFAtLS2dnZ1zc3OTk5NjY2NZWVlra2vpYjhzAAAD8ElEQVR4nO2cbXOCMBCEDVQBX1G0KC3W/v8/2VqrRUnWHByzTIf9Tma7hLt7DGU0GjRo0CCqtvkxTdPDlO2jouh9bS76mLO9XJUH5k9pyLbzo/nOVHXqg6v5xtyr3LIt1T0Zs++hJ7MmRzWvW/pWzPW0tpoqmZ5yqyXuAxgvHKaCiOZp7PJENOXMyZiCdfvGO6cnWvmMLfXppgPHk+u5+9GOc/cO4N6x2gzMibTNY+gpoOxyd306a7JkeMI5JZR7h3MKODlBT6ScYC0IXhie8H6aUPrwGPUWUk722feW04ziyT77/qrg5AT3eNLHnFYUT7i3UH5uwTllFE9jZImUU9zDnPBMN6HscdyDC0otwD24jzllfcyJM6vguYAyq+DnLqHkdICeAsrs28ecnjAnhxHwHuewFJ7pesic2cCcvxqY009jONNxcnoy+w4sdfWEWYqTE6zjvcyJw3c9ZKl/zJzbcDoLtX5Mf5KT5x6f7T+L1yQrDyr9Ec8qnswZHW9XbN7bp/XkHMEvp6j6gon5bBsWnlUCv5yWyf1lWTtXKsw5Sx4vbPUugApzPuZ0VovXJlRYqp7Tt06NPakw5/LVenXTZvkkJz9GiGw5mcZn3CrMuXxzXJ828qTCnNPAtUAjUyrM6dhPTU2pnHO6czLmKPfUdU7G5GJPOc7Jrz6tQE7mTdyUVZgT5iR/mUOFOWFO8h9FVc45VzCnhXRHqTDnC8xpPZZ60mDOKcxJ7gkzgl9OS+Wc8Eznxy04p41yTn6elHNSYU6c007qCc++hUpO0lqgwpyRa3665CQdzVWYczlBi2zEOWkw5ww/d9J/vuiEOdvmhFZrzpxV7ZRzas6cfxL34O6Y80/S5w4zp+ePEXimM9KDpBzP457MCWvBQlyf4F/YljkvEj933TLnWfL61DlLaddxT0bAOS1065NKTvL61H1Oa2lOT1jKr46/4JlOl6UyDeaUMwLOSYM5xbOvyvmdNktBTyo5KXviMCfuwRyWiuCfyGHO0Xv/chptUYHiMCeefhMN5hT34G8d3cv5MqcuI5yVOpfzZSld5sSmOMyJTakwp2n4YQQHUnGY86qpdTlP5nSd3/2q+THshy0nv9kXNwMxc1ZkGaU8mROVkwbMeafaVp94vigwQ57Es++9wtPDvfONfQ88NatPVVdldbnC95xr+wk8tcvpZ/n9rSvv9t4veYRFdzldbMXlKQiK8iA45XLPKy33U0VhFMlesnIW8zXx6xph1nVODbQtrZ7ks6+qrG1TfC6lrND2CRmyJxtz8D3Vy2cPPNUewEUfPD10qIBZC+4UX9v52573RZu6Voc0TY85/yNXgwYN+mf6ApBAOkXBDkpcAAAAAElFTkSuQmCC",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
        title: "template",
        url: "/template",
        icon: BookTemplate
    },
    {
        title: "Trash",
        url: "/trash",
        icon: Trash
    },
    {
        title: "Setting",
        url: "/setting",
        icon: Settings
    }
  ],
};
