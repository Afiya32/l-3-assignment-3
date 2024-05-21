import { Schema, model , connect } from "mongoose";

// interface
export type Product = {
    id:string;
    name: string;
    description: string;
    price:number;
    category:string;
    tags:string[];
    variants:{
        type:string;
        value:string
    }[];
    inventory:{
        quantity:number;
        inStock:boolean
    }
    }
    
