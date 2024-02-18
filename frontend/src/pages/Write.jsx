import React from 'react'

const Write = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
  <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-8">
    <h1 className="text-3xl font-bold mb-4">Write Article</h1>
    <form>
      <div className="mb-6">
        <label for="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input type="text" id="title" name="title" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article title..." value=""/>
      </div>
      <div className="mb-6">
        <label for="body" className="block text-gray-700 text-sm font-bold mb-2">Body</label>
        <textarea id="body" name="body" rows="13" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article body..."></textarea>
      </div>
      <div className="flex items-center text-gray-500">
        <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Write