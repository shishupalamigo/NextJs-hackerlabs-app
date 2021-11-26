import Image from 'next/image';

function Hero () {
  return (
    <section className='flex mt-10'>
      <div className="w-1/2 flex justify-center items-center flex-col">
      <h1 className="text-7xl text-blue-500 leading-relaxed">We Build <br /> 🌎 & 📱 <br /> Products</h1>
      <span>Ideation to Realization</span>
      <h2 className="text-gray-300 text-5xl mt-5">#Remote</h2>
      <p className="text-gray-300 mt-3">#web #mobile #design #iot #blockchain #cms #digitalmarketing</p>
      </div>
      <div className="w-1/2">
      <Image src={'/banner.svg'} alt='Banner' width={700} height={700}/>
      </div>
    </section>
  )
}
export default Hero;
