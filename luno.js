const { json } = require('express');
const express = require('express');
const fetch = require('node-fetch');

Luno_Get();


app.get('/LUNOAPI', async(request, response) => {
            const luno_url = "https://api.luno.com/api/1/ticker?pair=XBTZAR";
            const luno_response = await fetch(api_url);
            const luno_json = await luno_response.json();
            console.log(json);
            response.json(luno_json);
        }

        //module.exports = (json)