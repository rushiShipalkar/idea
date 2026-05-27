import { onRequest as __api_contact_ts_onRequest } from "C:\\Users\\RushikeshShipalkar\\Desktop\\Project\\new project\\ideia-llc-website\\functions\\api\\contact.ts"
import { onRequest as __contact_ts_onRequest } from "C:\\Users\\RushikeshShipalkar\\Desktop\\Project\\new project\\ideia-llc-website\\functions\\contact.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_contact_ts_onRequest],
    },
  {
      routePath: "/contact",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__contact_ts_onRequest],
    },
  ]