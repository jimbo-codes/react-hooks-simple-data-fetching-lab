// create your App component here
import {useState, useEffect} from 'react';
function App() {
const [loaded, setLoaded] = useState(false);
const [image, setImage] = useState('');

    useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp=>resp.json())
    .then(data=>{
        setLoaded(true);
        setImage(data.message)
        console.log(data)})
},[])
return(
    <div>
        <p>{loaded?null:"Loading"}</p>
        <img src={loaded?image:null} alt="A Random Dog"></img>
    </div>
)
}

export default App;