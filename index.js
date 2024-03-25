import express, { query } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";
dotenv.config();
import cors from "cors";

const corsOptions ={
    origin:'https://mangafyy.vercel.app/', 
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
const app=express();
const port=process.env.port || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hey");
});

async function useLink(url,params,apiKey,host){
    try{
        const response=await axios.get(url,{
            params: params,
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': host
            }
        });
        return response.data;
    }
    catch(err){
        throw err;
    }
}

app.get("/api/front",async(req,res)=>{
    // axios.get(`${process.env.API_URL}/latest`,{
    //     params: {
    //         page: req.query.page,
    //         nsfw: 'false',
    //         type: 'all'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.API_KEY,
    //         'X-RapidAPI-Host': process.env.API_HOST
    //     }
    // }).then((response)=>{
    //     res.status(200).send(response.data);
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send(err);
    // })
    const url=`${process.env.API_URL}/latest`;
    const params={
        page: req.query.page,
        nsfw: 'false',
        type: 'all'
    };
    try{
        const data=await useLink(url,params,process.env.API_KEY,process.env.API_HOST);
        res.status(200).send(data);
    }catch(err){
        try{
            const data=await useLink(url,params,process.env.API_KEY_I,process.env.API_HOST);
            res.status(200).send(data);
        }catch(error){
            res.status(500).send(error);
        }
    }
});

app.get("/api/manga",async(req,res)=>{ 
    // axios.get(`${process.env.API_URL}/chapter`,{
    //     params: {
    //         id : req.query.manga_id
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.API_KEY,
    //         'X-RapidAPI-Host': process.env.API_HOST
    //     }
    // }).then((response)=>{
    //     res.status(200).send(response.data);
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send(err);
    // })
    const url=`${process.env.API_URL}/chapter`;
    const params={
        id : req.query.manga_id
    };
    try{
        const data=await useLink(url,params,process.env.API_KEY,process.env.API_HOST);
        res.status(200).send(data);
    }catch(err){
        try{
            const data=await useLink(url,params,process.env.API_KEY_I,process.env.API_HOST);
            res.status(200).send(data);
        }catch(error){
            res.status(500).send(error);
        }
    }
});

app.get("/api/chapter",async(req,res)=>{
    
    // axios.get(`${process.env.API_URL}/image`,{
    //     params: {
    //         id : req.query.chapter_id
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.API_KEY,
    //         'X-RapidAPI-Host': process.env.API_HOST
    //     }
    // }).then((response)=>{
    //     console.log(response.data.data);
    //     res.status(200).send(response.data);
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send(err);
    // })
    const url=`${process.env.API_URL}/image`;
    const params={
        id : req.query.chapter_id
    };
    try{
        const data=await useLink(url,params,process.env.API_KEY,process.env.API_HOST);
        res.status(200).send(data);
    }catch(err){
        try{
            const data=await useLink(url,params,process.env.API_KEY_I,process.env.API_HOST);
            res.status(200).send(data);
        }catch(error){
            res.status(500).send(error);
        }
    }
});

app.get("/api/mangaSearch",async(req,res)=>{ 
    const url=`${process.env.API_URL}/search`;
    console.log(req.query);
    const params={
        text : req.query.manga_name,
        nsfw:true,
        type:"all"
    };
    try{
        const data=await useLink(url,params,process.env.API_KEY,process.env.API_HOST);
        console.log(data);
        res.status(200).send(data);
    }catch(err){
        try{
            const data=await useLink(url,params,process.env.API_KEY_I,process.env.API_HOST);
            console.log(data);
            res.status(200).send(data);
        }catch(error){
            res.status(500).send(error);
        }
    }
});

app.get("/api/news",async(req,res)=>{   
    const url=`${process.env.NEWS_API_URL}`;  
    try{
        const data=await useLink(url,{},process.env.NEWS_API_KEY,process.env.NEWS_API_HOST);
        res.status(200).send(data);
    }catch(err){
        try{
            const data=await useLink(url,{},process.env.NEWS_API_KEY_I,process.env.NEWS_API_HOST);
            res.status(200).send(data);
        }catch(error){
            res.status(500).send(error);
        }
    }
});

app.get("/api/newsPage",async(req,res)=>{   
    const url=`${process.env.NEWS_API_URL}/details/${req.query.news_date}/${req.query.news_title}/${req.query.news_id}`;
    console.log(req.query);
    
    try{
        const data=await useLink(url,{},process.env.NEWS_API_KEY,process.env.NEWS_API_HOST);
        res.status(200).send(data);
    }catch(err){
        console.log(err)
        try{
            const data=await useLink(url,{},process.env.NEWS_API_KEY_I,process.env.NEWS_API_HOST);
            res.status(200).send(data);
        }catch(error){
            res.status(500).send(error);
        }
    }
});


app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})
