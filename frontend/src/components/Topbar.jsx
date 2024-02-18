import React from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {
    const links = [
        {title:"Home",path:"/"},
        {title:"My articles",path:"/my-articles"}, 
        {title:"Logout",path:"/logout"},
    ]
  return (
    <div className='flex flex-row justify-between p-5 shadow-md'>
        <div className='text-2xl font-bold'>
            Blog App
        </div>
        <div className='font-semibold'>
        {
            links.map(({title,path})=><MenuItem key={title} title={title} path={path}/>)
        }
        </div>
    </div>
  )
}

const MenuItem =({title,path}) =>{
    return (
        <Link to={path} className='mx-5'>
            {title}
        </Link>
    )
}

export default Topbar