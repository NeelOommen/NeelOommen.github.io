export default function TechLogo({ imagePath, redirectURL }){
    return(
        <a href={redirectURL}>
          <div className='w-40 h-40 md:w-44 md:h-44 lg:h-48 lg:w-48 p-2 mx-8 transform hover:scale-110 transition duration-300 my-10 flex flex-row items-center'>
            <img 
            src={imagePath} 
            className='my-0'
            />
          </div>
        </a>
    );
}