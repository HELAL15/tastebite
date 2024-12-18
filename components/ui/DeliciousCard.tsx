import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';
import { GoComment } from 'react-icons/go';
import Link from 'next/link';

/**
 * ==> Component
 */
const DeliciousCard = ({}) => {
  return (
    <>
      <Link href={'/recipes/1'} className="card border rounded-lg">
        <div className="img max-h-[300px] rounded-t-lg overflow-hidden group">
          <Image
            src="/header1.jpg"
            alt="food"
            width={0}
            height={0}
            sizes="100"
            className=" group-hover:scale-110 duration-300 w-full h-full object-cover"
          />
        </div>
        <div className="content px-3 py-6 space-y-3">
          <div className="rates flex items-center gap-1 text-xl text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h4 className="text-xl font-bold">
            delicious fancy glazed bluebery donuts
          </h4>
          <div className="author flex items-center gap-3">
            <Image
              src="/header1.jpg"
              alt="author"
              width={0}
              height={0}
              className="rounded-full w-10 h-10 object-cover"
            />
            <h5 className="text-lg font-semibold">jane doe</h5>
          </div>
          <div className="card-footer flex items-center justify-end gap-4 pt-5 text-secondary-100">
            <div className="flex items-center gap-1">
              <i>
                <CiCalendar />
              </i>
              <span>yesterday</span>
            </div>
            <div className="flex items-center gap-1">
              <i>
                <GoComment />
              </i>
              <span>345</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DeliciousCard;
