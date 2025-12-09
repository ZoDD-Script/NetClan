import purpleSquares from "../../assets/images/purpleSquares.png";
import vector from "../../assets/images/vector5.png";
import CommunityButton from "../buttons/CommunityButton";

const CommunityCard = () => {
  return (
    <div className="pt-15 md:pt-45 md:pb-25 px-4">
      <div className="relative bg-[#2A2376] hover:bg-[#DFBBFF] transition-colors duration-500 rounded-3xl shadow-lg p-12 md:p-16 max-w-[1269px] w-full mx-auto text-center overflow-hidden group">
        <img src={vector} alt="" className="absolute left-0 bottom-0" />

        <img
          src={purpleSquares}
          alt=""
          className="absolute right-57 top-6 rounded-md opacity-10 w-28 pointer-events-none bg-[#5880D1]"
        />
        <img
          src={purpleSquares}
          alt=""
          className="absolute right-15 bottom-47 rounded-md opacity-10 w-[71px] pointer-events-none bg-[#5880D1]"
        />
        <img
          src={purpleSquares}
          alt=""
          className="absolute right-56 bottom-13 rounded-md opacity-10 w-[52px] pointer-events-none bg-[#5880D1]"
        />

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light pb-9 text-white transition-colors duration-500 group-hover:text-[#2A2376]">
            From Africa To the World
          </h2>

          <p className="text-[#E6DADA] text-lg transition-colors duration-500 group-hover:text-[#39364F]">
            We are on a mission to make network engineering cool again
          </p>
        </div>

        <CommunityButton text="text-white">Join Our Community</CommunityButton>
      </div>
    </div>
  );
};

export default CommunityCard;
