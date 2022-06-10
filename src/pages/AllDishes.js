import React,{useEffect,useState} from 'react';
import DishList from '../components/DishList/DishList';


const AllDishes = () => {

    const [dishes, setDishes] = useState([]);
    const [rankedDishes, setRankedDishes] = useState({});
    const [rankedDishList, setrankedDishList] = useState();

    useEffect(() => {
        async function getAllDishes() {
            const res = await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
            const data = await res.json();
            setDishes(data);
        }
        getAllDishes();
    }, []);

    useEffect(() => {
        setrankedDishList(() => []);
        const temp = [];
        for (const dish in rankedDishes) {
            temp.push({ [dish]: rankedDishes[dish]});
        }
        setrankedDishList(() => temp);
    }, [rankedDishes]);

    const setDishAsRank1 = (dishid) => {
        for (const dish in rankedDishes) {
            if (rankedDishes[dish] === dishid) {
                alert('Same Dish Cannot have two ranks!');
                return;
            }
        }
        console.log(`Food with dishid ${dishid} set to rank 1 for current User`);
        setRankedDishes({ ...rankedDishes, rank1: dishid });
    }
    const setDishAsRank2 = (dishid) => {
        for (const dish in rankedDishes) {
            if (rankedDishes[dish] === dishid) {
                alert('Same Dish Cannot have two ranks!');
                return;
            }
        }
        console.log(`Food with dishid ${dishid} set to rank 2 for current User`);
        setRankedDishes({ ...rankedDishes, rank2: dishid });
    }
    const setDishAsRank3 = (dishid) => {
        for (const dish in rankedDishes) {
            if (rankedDishes[dish] === dishid) {
                alert('Same Dish Cannot have two ranks!');
                return;
            }
        }
        console.log(`Food with dishid ${dishid} set to rank 3 for current User`);
        setRankedDishes({ ...rankedDishes, rank3: dishid });
    }

    console.log(rankedDishes);

    return (
        <div>
            <h1>All Dishes</h1>
            <DishList
                dishes={dishes}
                setDishAsRank1={setDishAsRank1}
                setDishAsRank2={setDishAsRank2}
                setDishAsRank3={setDishAsRank3}
            />
            <ul>
                {
                    rankedDishList.map(() => {
                        
                    })
                }
            </ul>
            
      </div>
    )
}

export default AllDishes;