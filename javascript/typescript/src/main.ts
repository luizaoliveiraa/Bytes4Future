import express, { Express, Request, Response } from "express";
const app: Express = express();
const PORT = 3033;
// app.use(express.json()); AÍ NA RES ESCREVE res.JSON({message: "Express BUM"})

app.get("/", (req: Request, res: Response) => {
  res.send("Express BUM");
});

app.listen(PORT, () => {
  console.log("Ligado na porta:3033");
});
