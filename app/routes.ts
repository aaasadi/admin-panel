import {
  type RouteConfig,
  route,
  layout,
  prefix,
  index,
} from "@react-router/dev/routes";

export default [
  // redirect to /dashboard/default
  index("routes/index.tsx"),

  layout("layouts/main/index.tsx", [
    ...prefix("dashboard", [
      route("default", "routes/dashboard/default/index.tsx"),
      route("crm", "routes/dashboard/crm/index.tsx"),
      route("finance", "routes/dashboard/finance/index.tsx"),
      route("analytics", "routes/dashboard/analytics/index.tsx"),
      route("productivity", "routes/dashboard/productivity/index.tsx"),
    ]),
    ...prefix("users",[
      index("routes/users/index.tsx")
    ]),
      // route("users", "routes/users/index.tsx"),
    route("users/:id", "routes/users/components/details.tsx", [
      route("profile", "routes/users/components/profile.tsx"),
      route("access", "routes/users/components/access.tsx"),
    ]),
    ...prefix("settings", [index("routes/settings/index.tsx")]),
    route("profile", "routes/profile/index.tsx", [
      route("account", "routes/profile/components/account.tsx"),
      route("password", "routes/profile/components/password.tsx"),
    ]),
    route("access","routes/accessManager/index.tsx")
  ]),
] satisfies RouteConfig;
