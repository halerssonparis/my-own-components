const NewsLetter = () => {
  
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Something I should to write here </h1>
          <p> Sign up to see something as well. </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ml-4"> Get Started </button>
          </div>
          <p> 
            We care about your privacy...
            <span className="text-[#00df9a]">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
