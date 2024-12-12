import express  from "express";
const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send("Hello World");
});

app.post("/sum",(req,res)=>{
    const data=req.body.data;
    let sum=0
    console.log(data)
    data.forEach((element) => {
        sum+=element
    });
    res.status(200).json({
        data:sum,
        success:true
    });

})

app.post("/sort", (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return res.status(400).json({
            message: "Invalid input, expected an array of numbers",
            success: false
        });
    }
    const sortedNumbers = numbers.sort((a, b) => a - b);
    res.status(200).json({
        sortedNumbers: sortedNumbers,
        success: true
    });
});
app.listen("4000",()=>{
    console.log("Server started on port 4000");
});
