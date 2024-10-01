export const PhotoHomeCard = ({ title, image, onClick }) => {
    return (
      <div className="flex justify-center">
        <div
          className="transition-transform transform hover:-translate-y-2 active:translate-y-1  rounded-xl shadow-lg p- bg-white  hover:shadow-2xl text-green-900 cursor-pointer ease-in-out duration-300 relative z-10 w-full max-w-xs "
          onClick={onClick}
        >
          <div className="w-full h-48 mb-4 overflow-hidden rounded-t-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
          </div>
        </div>
      </div>
    );
  };
  