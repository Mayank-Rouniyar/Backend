const asyncHandler=(requestHandler)=>{
     (res,req,next)=>{
       Promise.resolve(requestHandler(req,res,next)).reject((err)=>next(err))
     }
}
export {asyncHandler}
//const asyncHander=(fn)=> async(req,res,next)=>{
  //try{
   //  await fn(req,res,next)
 // }
  //catch(error)
  //{
   // res.status(error.code||500).json({
    //    success: false,
    //    message: error.message
   // })
 // }
//}