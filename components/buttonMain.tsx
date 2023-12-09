import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";

interface ButtonProps {
  LINK: string;
  FROM: string;
  TO: string;
}

const buttonMain = ({ FROM, LINK, TO }: ButtonProps) => {
  return (
    <Link className="justify-center items-center flex w-full" href={LINK}>
      <div className="heroButton h-[2.75rem] max-w-md w-full relative overflow-hidden text-xl">
        <button className="ButtomText">
          <div className="flex justify-center items-center px-[2rem]">
            <div className="justify-between items-center flex gap-[2rem] w-full">
              <div className="flex  w-1/3 text-center">{FROM}</div>
              <div className="flex w-1/3 text-center items-center justify-center text-3xl">
                <MdOutlineChevronRight />
              </div>
              <div className="flex  w-1/3 text-center">{TO}</div>
            </div>
          </div>
        </button>
      </div>
    </Link>
  );
};

export default buttonMain;
