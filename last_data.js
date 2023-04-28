import lastData from "./models/last_data.mjs";
import company from "./models/company.mjs";

async function setLastData(Doc){
    
console.log("Set Value...", Doc);

await lastData.findOneAndUpdate({},{$set:Doc},{upsert: true});
// console.log("Set Value...", Doc);

}


async function getLastData(){
let lastDoc=await lastData.find({});
if (lastDoc.length == 0){
    let lastdata ={
        companiesLastData: '0',
        circuit_breaksLastData:'0',
        idxLastData: '0',
        manLastData: '0',
        mkistatLastData: '0',
        trdLastData: '0',
        price_earningsLastData:'0'
    }
    // lastDoc.push(lastdata);
    await setLastData(lastdata);
    lastDoc=await lastData.find({});
    let last=await company.find({});
    console.log("await company.find({})", last);
}

// console.log("LastData", lastDoc);
return lastDoc;


}
// getLastData();

export {getLastData, setLastData};

