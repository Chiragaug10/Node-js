const dbconnect=require('./monodb');
async function insert()
{
    const db=await dbconnect();
    const result=db.insertOne({name:'Chirag Singh 3',sapId:'1000013070'});
    if((await result).acknowledged)
    {
        console.log("Data Entered Successfully");
    }

}
insert();