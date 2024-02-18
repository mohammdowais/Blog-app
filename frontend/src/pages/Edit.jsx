import React from 'react'

const Edit = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
  <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-8">
    <h1 className="text-3xl font-bold mb-4">Edit Article</h1>
    <form>
      <div className="mb-6">
        <label for="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input type="text" id="title" name="title" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article title..." value="Article Title Goes Here"/>
      </div>
      <div className="mb-6">
        <label for="body" className="block text-gray-700 text-sm font-bold mb-2">Body</label>
        <textarea id="body" name="body" rows="6" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter article body...">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nisi quis urna fermentum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et nulla eu neque lacinia euismod. Integer euismod orci ac magna varius, eget fermentum purus scelerisque. Sed eu ligula nec justo fermentum venenatis. Mauris quis scelerisque enim. Proin fringilla eros eget vestibulum aliquam. Duis mattis bibendum leo, nec sollicitudin orci. Ut euismod mi vitae quam faucibus, a sollicitudin sem hendrerit. Nullam suscipit orci ut convallis placerat. Proin euismod metus felis, vel ultricies dolor lobortis in. Donec et lacinia odio.</textarea>
      </div>
      <div className="flex items-center text-gray-500">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Edit