import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import {importEntry} from "import-html-entry";
;(async ()=>{
  const { template, execScripts, assetPublicPath, getExternalScripts } = await importEntry("//localhost:7101");
  console.log("template", template);
  const externalScripts = await getExternalScripts();
  console.log("externalScripts", externalScripts);
  const module = await execScripts();
  console.log("module", module);
  console.log("assetPublicPath", assetPublicPath);
})()
