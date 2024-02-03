import React , {useState , useEffect} from 'react'
import EventsList from './components/EventsList';

const Events = () => {
    const [isLoading , setIsLoader] = useState(true);
    const [data , setData] = useState([]);
  
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_GET_API);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await res.json();
        setData(result.data);
        setIsLoader(false)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    
    
  
    useEffect(() => {
      fetchData();
    },[])
  return (
    isLoading ? 
        <div
        className="container d-flex justify-content-center vh-100 w-100 align-items-center"
        >
        <h2>Coming Soon</h2>
        </div> : 
        <div className='mt-lg-5'>
        <div className="space">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
        </div>
        <EventsList
        event_poster={data.event_type_list}
        />
        </div>
  )
}

export default Events