import Image from 'next/image';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';  // Import all icons correctly
import { Button } from './button';

const Cartcard = ({
  src,
  title,
  size,
  price
}: {
  src: string;
  title: string;  // Fixed the typo here
  size: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col sm:flex-row p-5 sm:p-10">
      {/* Image */}
      <Image
        src={src}
        width={80}
        height={80}
        alt={title}
        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-4 sm:mb-0"
      />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
        <div className="sm:mr-5">
          {/* Title */}
          <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackhead">
            {title}
          </h2>
          {/* Size */}
          <p className="mt-2 text-sm text-myBlackpara/80 leading-none line-clamp-1 font-bold">
            size:&nbsp;<span>{size}</span>
          </p>
          {/* Quantity */}
          <div className="mt-2 flex items-center">
            <Button className="group hover:bg-myWhite bg-myBlackhead text-mystrawberry hover:text-mydarkblue w-fit rounded-lg text-xs duration-300">
              <FaMinus className="h-2 w-2 group-hover:text-mydarkblue text-mystrawberry" />
            </Button>
            <div className="mr-2 ml-1 scroll-m-20 text-sm font-semibold tracking-tight">
              1
            </div>
            <Button className="group hover:bg-myWhite bg-myBlackhead text-myWhite hover:text-myBlackhead w-fit rounded-lg text-xs duration-300">
              <FaPlus className="h-2 w-2 group-hover:text-myBlackhead" />
            </Button>
          </div>
        </div>
        {/* Price and delete */}
        <div className="flex flex-col sm:flex-row items-end gap-5 mt-4 sm:mt-0">
          <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackhead">
            <span>Price:&nbsp;</span>&#36;{price}
          </h3>
          <FaTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer mt-2 sm:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
