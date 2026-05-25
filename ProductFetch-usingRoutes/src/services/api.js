const URL = 'https://dummyjson.com/products'
export default async function getAllProducts() {
    try{
        const res = await fetch(URL)
        const data = await res.json()
        return data;
    }
    catch(error){
         console.log("Error is Coming", error);
    }
}