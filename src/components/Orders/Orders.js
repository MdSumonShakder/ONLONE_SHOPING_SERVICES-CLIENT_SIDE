import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Orders = () => {
  const [orders,setOrders]=useState([]);
  const {user}=useAuth();
  const history=useHistory();
  useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user.email}`,{
      headers:{
        'authorization':`Bearer dfjkghoriuesyh ${localStorage.getItem('idToken')}`
      }
    })
    .then(res=>{
if(res.status===200){
 return res.json();
}else if(res.status===401){
  history.push('/login');
}
    }) 
    .then(data=>setOrders(data));
  },[]);


  return (
    <div>
      <h1>This is Count: {orders.length} Orders</h1>

       <ul>

{

orders.map(order=> <li 
key={order._id}>

{order.name} <br />
{order.email}<br />
{order.phone}<br />
{order.city}<br />

</li>)

}

       </ul>
    </div>
  );
};

export default Orders;