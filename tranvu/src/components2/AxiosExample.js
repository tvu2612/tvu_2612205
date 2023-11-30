import React, {useState, useEffect} from "react";
import axios from "axios";
// Dùng axios cho các thao tác GET PUT POST DELETE
function AxiosExample(){
    const [data, setData] = useState([]);

    //useEffect(() => {});
    useEffect(() => {
        axios.get('https://65617e88dcd355c08323dea6.mockapi.io/FakeData')
        .then(response => {setData(response.data);})
        .catch(error => {console.error(error);})
    },[]);

    return(
        <ul>
            {data.map(data => (<li key={data.id}>{data.name}</li>))}
        </ul>
    );
}

export default AxiosExample;