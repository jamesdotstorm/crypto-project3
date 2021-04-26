const { json, request, response } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const Datastore = require('nedb');

const app = express();

const port = process.env.PORT || 3000
app.listen(port, () =>
    console.log("starting server at" + port)
);


//test change 

//app.listen(3000, () =>
// console.log('Listening at port 3000')
//);

//this is my test change HHHHHHshshhshshsh


app.use(express.static('public')); //send the files to the public folder 
app.use(express.json({ limit: '1mb' })); // tels the server to acceopt and recoginse JSON

const database = new Datastore('database.db');
database.loadDatabase();








// app.get('/BTCAPI', async(request, response) => {
//     const api_url = "https://www.bitstamp.net/api/v2/ticker/ethusd/";
//     const fetch_response = await fetch(api_url);
//     const json = await fetch_response.json();
//     response.json(json);
//     //database.push(json);
//     //console.log(json);

// })


// app.get('/LUNOAPI', async(request, response) => {
//     const luno_url = "https://api.luno.com/api/1/ticker?pair=ETHZAR";
//     const luno_response = await fetch(luno_url);
//     const luno_json = await luno_response.json();
//     console.log(json);
//     response.json(luno_json);
//     //database.push(luno_json);
// })

app.get('/CURRENCYAPI', async(request, response) => {
    const currency_url = "https://data.fixer.io/api/latest?access_key=e1e62c233c37f4abfdcd28aa5a6b74ff&base=USD&symbols=ZAR";
    const currency_response = await fetch(currency_url);
    const currency_json = await currency_response.json();
    //console.log(currency_json);
    response.json(currency_json)
})

app.post('/BTAPI2', async(request, response) => {
    const api_url = "https://www.bitstamp.net/api/v2/ticker/" + (request.body.pair);
    //console.log(api_url);
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
    //database.insert(request.body.pair);
    //console.log(json)
    //console.log(json);
    //response.json({ url: api_url });
})




app.post('/LUNOAPI2', async(request, response) => {
    const api_url = "https://api.luno.com/api/1/ticker?pair=" + (request.body.pair);
    //console.log(api_url);
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
    //console.log(api_url)
    //console.log(json);

})


app.post('/arb_api', async(request, response) => {
    console.log(request.body)
    database.insert(request.body);
})




// Luno_Get();
// app.get('/LUNOAPI', async(request, response) => {
//             const luno_url = "https://api.luno.com/api/1/ticker?pair=XBTZAR";
//             const luno_response = await fetch(api_url);
//             const luno_json = await luno_response.json();
//             response.json(luno_json)
//         }



// BS_Get();

// async function BS_Get() {

//     const api_url = "https://www.bitstamp.net/api/v2/ticker/btcusd/";
//     const response = await fetch(api_url);
//     const json = await response.json();
//     console.log(json)
//     database.insert(json)
// }