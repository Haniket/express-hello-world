
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const crawlerService = require('./services/crawler.services');
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('server is active'));
app.get('/makeMap', crawlerService.getLinks);
app.get('/resetMap', crawlerService.resetMap);
app.get('/getUrlCount', crawlerService.getUrlCounts);
app.get('/getLinkedUrls', crawlerService.getLinkedUrls);
app.get('/getAllDomain', crawlerService.getAllDomain);
// app.get("/makeMap",(req,res)=>{
//   console.log(req);
// })
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
