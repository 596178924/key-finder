import VueRouter from "@/router"
import piniaInstall from "@/store";
// import ElementPlus from "element-plus"
// import 'element-plus/dist/index.css'


export default function install(app) {
  app.use(VueRouter)
  app.use(piniaInstall);
//   app.use(ElementPlus);
}
