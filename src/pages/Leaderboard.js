import React, { useContext, useEffect, useState } from 'react';
import DishesContext from '../store/dish-store';
import styles from './Leaderboard.module.css';

const Leaderboard = () => {

    const UserDishRankedStore = JSON.parse(window.localStorage.getItem('UserDishRankedStore'));
    const currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    const [topRatedDish, setTopRatedDish] = useState([]);
    const { dishes } = useContext(DishesContext);

    useEffect(() => {
        const mp = new Map();
        for (const obj in UserDishRankedStore) {
            for (let i = 0; i < 3; i++) {
                if (mp.has(UserDishRankedStore[obj][i])) {
                    const temp = mp.get(UserDishRankedStore[obj][i]);
                    mp.set(UserDishRankedStore[obj][i], temp + (30-i*10));
                } else {
                    mp.set(UserDishRankedStore[obj][i], (30-i*10));
                }
            } 
        }
        setTopRatedDish(()=>[...mp.entries()].sort((a, b) => b[1] - a[1]));
       
    }, []);
   
    return (
        <div>
            { topRatedDish.length ? 
            <ul className={styles.leaderboard}>
                {
                    topRatedDish.length && topRatedDish.map((dish, idx) => {
                        const foundFood = dishes.find((food) => food.id === dish[0]);
                        return <li className={UserDishRankedStore[currentUser.id].includes(dish[0]) ? styles['selected-dish'] : ''} key={idx}>
                            <span>{idx + 1}</span> {foundFood && foundFood.dishName}
                            {UserDishRankedStore[currentUser.id].includes(dish[0]) ? <span style={{ fontWeight: 'normal' }}> - Your Selection</span> : ''}
                        </li>
                    })
                }
            </ul>
            : <p>No Dishes Selected Yet!!!</p>}
      </div>
    )
}

export default Leaderboard;