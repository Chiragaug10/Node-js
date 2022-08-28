const dbconnect=require('./monodb');
async function mydata()
{
    let result= await dbconnect();
    let result2=await result.find().toArray();
    console.log(result2);
}
mydata();
