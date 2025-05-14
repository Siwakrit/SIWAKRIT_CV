
const Footer = () => {
  return (
    <div className='flex justify-between items-center p-2 w-[100%] 
    border-t-[#59595a] border-t md:mt-[5rem]
    px-4 md:px-20
    '>
      <ul>
        <li>
          <img src="Img/TIGER.png" width={80} height={50} alt="Tiger"
            className='hover:scale-110' />
        </li>
      </ul>

      <ul>
        <li className='text-sm'>© 2024 Siwakrit Pattaveesin</li>
      </ul>
    </div>
  )
}

export default Footer   