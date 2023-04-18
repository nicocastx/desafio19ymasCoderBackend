import {
  Req,
  Res,
  Router,
  WebApp,
} from "https://deno.land/x/denorest@v4.2/mod.ts";



const app = new WebApp();
const router = new Router();

app.headers({
  "Content-Type":"text/html"
})

const colores: Array<String> = []

function addColor(color){
  if(!color){
    return ''
  }
  colores.push(color)
  let coloresHTML = ''
  colores.forEach(c => {
    coloresHTML += `<li><p style="color:${c};">${c}</p></li>`
  });
  return coloresHTML
}

router.get("/", (req: Req, res: Res) => {
  let color = ""
  if(req.url.search != undefined){
    color = req.url.search.split('=')[1]
  }
  const html = `
  <h1>Hola</h1>
  <p>Ingrese un color para cambiar al html de este texto</p>
  <form action="/" method="GET">
    <label for="textc">Ingrese el color de la letra:</label><br>
    <input type="text" id="textc" name="textc"><br>
    <input type="submit" value="Submit">
  </form>
  <ul>
  ${addColor(color)}
  </ul>
  `
  res.reply = html
});


app.set(router)
app.listen(8080);