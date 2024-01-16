import huggexLogo from "./assets/huggex.png";
import "./App.css";
import { FaHome } from "react-icons/fa";
import { IoChevronForwardSharp } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import Light from "./assets/Bulb.svg";
import GharKiImage from "./assets/HomeIcon.svg";
import Speaker from "./assets/Speaker.svg";
import ReplayBtn from "./assets/Replay.svg";
import LeftArrow from "./assets/LeftArrow.svg";
import RightArrow from "./assets/RigthArrow.svg";
import Maximize from "./assets/Maximize.svg";
import CompanyIcon from "./assets/CompanyIcon.svg";
import PlusIcon from "./assets/Plus.svg";
import FaqQuestion from "./Components/FaqQuestion";

function App() {
  return (
    <>
      <div className="Nav_Bar_Container  w-full h-full">
        <nav className="flex  justify-between align-middle h-[100px]">
          <div className="nav_logo flex align-middle justify-center h-full">
            <img
              className="w-[191px] h-[39px] top-[32px] relative"
              src={huggexLogo}
              alt="Logo"
            />
          </div>
          <div className="nav_options flex w-[525px] h-[48px] items-center justify-around relative top-[27px]">
            <ul className='flex gap-[40px]  font-["Inter"]  font-normal justify-center align-baseline items-center text-[17px]'>
              <li>Home</li>
              <li>FlashCard</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
            <button className=" text-blue-50 font-bold px-[40px] py-[13px] border rounded-3xl bg-gradient-custom">
              Login
            </button>
          </div>
        </nav>
      </div>
      <div className="Bread_Crumb gap-2 text-[18px] font-['Inter'] text-center text-[#696671]  font-semibold items-center flex w-full  left-[14%] h-[100px] ">
        <img src={GharKiImage} alt="" />{" "}
        <IoChevronForwardSharp className="text-black" /> FlashCard{" "}
        <IoChevronForwardSharp className="text-black" /> Mathematics{" "}
        <IoChevronForwardSharp className="text-black" />
        <span className="text-[#06286E]">Relation and Function</span>
      </div>
      <div className="heading w-[676px] h-[39px] flex font-sans font-[700] bg-gradient-custom leading-[1.2] bg-clip-text text-[32px] text-transparent text-center ">
        Relations and Functions ( Mathematics )
      </div>
      <div className="Lesson_Menu flex">
        <ul className=" font-[20px] font-[700]  font-['Inter']  relative gap-[40px] top-[56] inline-flex w-full h-[130px] items-center justify-center ">
          <li className=" text-[#06286E] border-b border-[#06286E] w-[74px] text-center ">
            Study
          </li>
          <li className="text-[#696671]">Quiz</li>
          <li className="text-[#696671]">Test</li>
          <li className="text-[#696671]">Game</li>
          <li className="text-[#696671]">Others</li>
        </ul>
      </div>
      <div className="Card-Container flex flex-col gap-[32px]   items-center justify-center w-full h-[500px]">
        <div className="Card bg-gradient-custom border-none rounded-[3rem] w-[712px] flex flex-col  h-[393px] border border-solid border-emerald-950 p-7">
          <div className="icon_container flex justify-between w-full  text-red-800">
            <div>
              <img src={Light} alt="Bulb" />
            </div>
            <div>
              <img src={Speaker} alt="Speaker" />
            </div>
          </div>
          <div className="card_Text flex justify-center items-center h-full text-[#fff]">
            <span className="font-bold text-[38px] ">9 + 6 + 7x - 2x - 3</span>
          </div>
        </div>

        <div className="cardOPtions w-[712px] flex items-center flex-row gap-7 justify-around">
          <div className="ReplayButtonContainer ">
            <img src={ReplayBtn} alt="Replay" />
          </div>

          <div className="centerControls flex gap-[43px] items-center">
            <div className="LeftArrowContainer">
              <img src={LeftArrow} alt="Left" />
            </div>

            <div className="TotalVideosContainer">
              <span className="font-bold font-sans text-[24px]">01/10</span>
            </div>

            <div className="RightArrowContainer">
              <img src={RightArrow} alt="Right" />
            </div>
          </div>

          <div className="MaximizeContainer">
            <img src={Maximize} alt="MAximize" />
          </div>
        </div>
      </div>
      <div className="promotionAndCreateCard relative top-4 flex items-center w-full justify-between">
        <div className="CompanyLogo">
          <img src={CompanyIcon} alt="CI" />
        </div>
        <div className="CreateCardContainer flex items-center gap-2">
          <img src={PlusIcon} alt="Plus" />
          <span className="font-sans font-[700] bg-gradient-custom leading-[1.2] bg-clip-text text-[32px] text-transparent text-center ">
            Create FlashCard
          </span>
        </div>
      </div>
      <div className="FAQContainer flex flex-col gap-[32px] relative top-[174px] ">
        <div className="headin relative bottom-7">
          <span className="heading w-[676px] h-[58px] flex font-sans font-[700] bg-gradient-custom leading-[1.2] bg-clip-text text-[48px] text-transparent text-center ">
            FAQ
          </span>
        </div>

        <div className="FAQQuestons">
          <div className="QuestionContainer px-17  border">
            <FaqQuestion />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
