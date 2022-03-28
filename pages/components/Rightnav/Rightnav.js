import React from 'react'

export default function Rightnav() {
  return (
    <div className='flex m-3 p-3 w-12'>
      <ul className=" flex-col items-start justify-end w-5 h-5 rounded-full space-y-4">
        <li> <img src="images/person1.webp" alt="person1" className="rounded-full" /> </li>
        <li> <img src="images/person2.jpg" alt="person2" className="rounded-full"/>  </li>
        <li> <img src="images/person3.jpg" alt="person3" className="rounded-full" />  </li>
        <li> <img src="images/person4.webp" alt="person4"className="rounded-full" />  </li>
        <li> <img src="images/Person5.jpg" alt="person5"className="rounded-full" />   </li>
        <li> <img src="images/person6.jpg" alt="person6" className="rounded-full" />  </li>
      </ul>
    </div>
  )
}

