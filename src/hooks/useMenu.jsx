import { useEffect, useState } from "react";

const useMenu = () =>{

    const [menu, setMenu] = useState([]);
    const [loading, setLaoding] = useState(true); 

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            //const popularItems = data.filter(item=>item.category==='popular');
            setMenu(data)
            setLaoding(false)
        })
    },[])

    return [menu,loading];

}

export default useMenu;