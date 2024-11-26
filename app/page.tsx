export default function Home() {
  return (
    <div >
      {/* Responsive Layout */}
      <div className="md:flex md:flex-wrap lg:flex lg:flex-row ">
        {/* First Div */}
        <div className="bg-red-500 w-full h-20 md:w-full lg:w-1/3">
          <h2 className="text-white p-4 text-lg md:text-xl lg:text-2xl font-semibold bg-red-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            I&apos;m a first div &#39;(Lal Dabba &#128522;)&#39;
          </h2>
        </div>

        {/* Second Div */}
        <div className="bg-green-500 w-full h-20 md:w-1/2 lg:w-1/3">
          <h2 className="text-white p-4 text-lg md:text-xl lg:text-2xl font-semibold bg-green-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            I&apos;m a second div &#39;(Hara Dabba &#128522;)&#39;
          </h2>
        </div>

        {/* Third Div */}
        <div className="bg-blue-500 w-full h-20 md:w-1/2 lg:w-1/3">
          <h2 className="text-white p-4 text-lg md:text-xl lg:text-2xl font-semibold bg-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            I&apos;m a Third div &#39;(Neela Dabba &#128522;)&#39;
          </h2>
        </div>
      </div>
    </div>
  );
}
