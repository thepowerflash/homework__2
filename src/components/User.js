import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { fetchUserOneInfo } from '../redux/actions';

function User({ userInfo }) {
// 
  const oneUsers = useSelector((state) => state.oneUsersReducer.Users);
  const [getMore, setgetMore] = useState(false);



  return (
    <ul>
      <li>Name: {userInfo.name}</li>
      <li>Email: {userInfo.email}</li>
     
      {getMore && (
      <div>
      <li>Phone: {userInfo.phone}</li>
      <li>Address: {userInfo.address.street}, {userInfo.address.suite}, {userInfo.address.city}, {userInfo.address.zipcode}</li>
      <li>Geo: Lat: {userInfo.address.geo.lat}, Lng: {userInfo.address.geo.lng}</li>
      <li>Username: {userInfo.username}</li>
      <li>Website: {userInfo.website}</li>
      <li>Company: {userInfo.company.name}</li>
      <li>Catchphrase: {userInfo.company.catchPhrase}</li>
      <li>Business: {userInfo.company.bs}</li>
      
      
    </div>
      )}

      <button onClick={() => setgetMore(!getMore)}>
        {'get more'}
      </button>

      {oneUsers && oneUsers.length > 0 && (
        oneUsers.map((user) => <User key={user.id} userInfo={user} />)
      )}
    </ul>
  );
}

export default User;