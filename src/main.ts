import './style.css'
import { Replicache } from "replicache";

const app = document.querySelector<HTMLDivElement>('#app')!

const createRep = async () => {
  const rep = new Replicache({name: 'oops', mutators: {}, pushURL: '', pullURL: '', licenseKey: 'my-key'});
  await rep.query(async tx => { console.log(123) })
};
void createRep();

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
