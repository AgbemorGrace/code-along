import {useState, useEffect} from "react";

function useLocalStorage(key, initialValue){
    const [data, setData] = useState(() =>{
    const result = localStorage.getItem(key);
    if(!result) return initialValue;
    return JSON.parse(result);
 });
//  const setValue = (value) => {
//    // console.log(value);
//     const newData = value;
//     setData(newData);
const setValue = (value) => setData(value);

//  }
 useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
 },[data, key])
 return {data, setValue}
}
export default useLocalStorage;