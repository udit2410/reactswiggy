import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Customhooks/useRestaurantMenu';
const RestaurantMenu = () => {

  // const [resInfo,setresInfo]=useState(null);

    const {resId}=useParams();

    const resInfo= useRestaurantMenu(resId);
   

  // useEffect(()=>{

  //     fetchData();


  // },[])

  // const fetchData= async()=>{
  //   const response= await fetch(Menu_URL + resId );
  //   const json= await response.json();
       
  //    setresInfo(json);
     
  
      
    
  // }
  
  console.log(resInfo);

    if(resInfo===null){
      return <Shimmer></Shimmer>
    }

    return (
          <>
                   <h1>{resInfo.info.name}</h1>
                   <h1>Cuisines:{resInfo.info.cuisines.join(",")}</h1>
                   <ul>
                          {
                            resInfo.foodOptions.map((item)=>{
                                  return <li key={ item.card.info.id}>{
                                    item.card.info.name
                                  }:Cost for Two-{ item.card.info.price/100||item.card.info.defaultPrice/100} Rupees</li>
                            })
                          }
                   </ul>
          
          </>
          
        )
  }


//   const fetchData= async()=>{

//     const response= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=340382")
//     const json = await response.json();
//     console.log("json")
//     console.log(json)
//     const data = json?.data;
       
//     setMenuRestaurant(data.cards);
//     console.log(menuRestaurant[0].card.card.info.name);
    
      

//   }

//   return (
//     <>
//       <div>{menuRestaurant[0].card.card.info.name}</div>
//     <div>{menuRestaurant[0].card.card.info.costForTwoMessage}</div>
//     </>
    
//   )
// }

export default RestaurantMenu