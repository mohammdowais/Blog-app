import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md my-5 overflow-hidden md:max-w-2xl">
        <div className="md:flex">
            <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Article</div>
            <Link to={`read`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{article.title}</Link>
            <p className="mt-2 text-gray-500">{article.body}</p>
            <div className="mt-4">
                <span className="text-sm font-medium text-gray-500">By: {article.author}</span>
            </div>
            </div>
        </div>
    </div>

  )
}

export default ArticleCard