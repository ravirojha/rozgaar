const errorHandlerMiddleware = (error,req,res,nest) => {
    console.log(error);
    res.status(500).json({msg: 'There was an error'})
}

export default errorHandlerMiddleware