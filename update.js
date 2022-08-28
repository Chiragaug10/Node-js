const dbconnect=require('./monodb');
async function updatefile()
{
    const db=await dbconnect();
    const updatefile2=await db.update({name:'Chirag Singh 3'},{$set:{sapid:'100001307023'}});
    if(updatefile2.acknowledged)
    {
        console.log("Successfully updated");
    }
}
updatefile();