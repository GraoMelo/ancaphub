import Dashboard from '../pages/dashboard';
import Library from '../pages/library';
import Users from '../pages/users';
import Invites from '../pages/invites';
import Categories from '../pages/categories';
import Settings from '../pages/settings';
import Error404 from '../pages/errors/404'

export default [
  {
    exact: true,
    path: "/",
    component: Dashboard
  },
  {
    exact: true,
    path: "/library",
    component: Library
  },
  {
    exact: true,
    path: "/categories",
    component: Categories
  },
  {
    exact: true,
    path: "/users",
    component: Users
  },
  {
    exact: true,
    path: "/invites",
    component: Invites
  },
  {
    exact: true,
    path: "/settings",
    component: Settings
  },
  {
    path: "*",
    component: Error404
  }
]