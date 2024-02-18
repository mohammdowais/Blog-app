import React from 'react'

const Read = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
  <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden p-8">
    <h1 className="text-3xl font-bold mb-4">Article Title Goes Here</h1>
    <p className="text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nisi quis urna fermentum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et nulla eu neque lacinia euismod. Integer euismod orci ac magna varius, eget fermentum purus scelerisque. Sed eu ligula nec justo fermentum venenatis. Mauris quis scelerisque enim. Proin fringilla eros eget vestibulum aliquam. Duis mattis bibendum leo, nec sollicitudin orci. Ut euismod mi vitae quam faucibus, a sollicitudin sem hendrerit. Nullam suscipit orci ut convallis placerat. Proin euismod metus felis, vel ultricies dolor lobortis in. Donec et lacinia odio.</p>
    <div className="flex items-center text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
      </svg>
      <span className="font-semibold">By Author Name</span>
    </div>
  </div>
</div>

  )
}

export default Read