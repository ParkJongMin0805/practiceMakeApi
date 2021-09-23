const express = require('express');
const app = express();
const uuidAPIkey = require('uuid-apikey');

const server = app.listen(3000, ()=>{
    console.log('Start Server');
});

const key = {
    apiKey: 'SPPZ76T-XPXMYAZ-N77DRTT-46MXSDG',
    uuid: 'cdadf39b-edbb-4f2b-a9ce-dc6b21a9dcb6' 
};

app.get('/api/users/:apikey/:type', async (req, res)=>{
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIkey.isAPIKey(apikey) || !uuidAPIkey.check(apikey, key.uuid)){
        res.send('apikey is not valid')
    }else{
    if(type == 'ParkMint'){
        let data = [
            {
                favoriteFood: "Mint Chocolate",
                height : "Tall"
            },
            {
                symbolColor: "Mint",
                score: "3.141592",
            },
        ];
        res.send(data);
    }else if(type == 'KimKaru'){
        let data = [
            {
                favoriteFood: "Seaweed Powder",
                height : "Short"
            },
            {
                symbolColor: "Black",
                score: "653589",
            },
        ];
        res.send(data);
    }else {
        res.send("Type is not corret");
     }
    }
});