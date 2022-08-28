const dbconnect=require('./monodb');

async function deletedata()
{
    const db=await dbconnect();
    const deleted=await db.deleteOne({name:'Chirag Singh 3'});
    if(deleted.acknowledge)
    {
        console.log("Successfully deleted");
    }
}
deletedata();
