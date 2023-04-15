import React from 'react'
import {Link} from 'react-router-dom'

function Card({ name, gifUrl , id }) {
    return (
      <Link to= {`/exercise/${id}`} className="outline outline-1 w-[250px] transition-all duration-150 rounded-xl shadow-lg hover:translate-y-[-5px] ">
        <h3 className='py-2 text-center text-lg capitalize '>{name}</h3>
        <img src={gifUrl} alt={`${name} GIF`} />
      </Link>
    );
  }
  
export default Card