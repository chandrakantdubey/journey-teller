const GuestContainer = () => {
  return (
    <div className="absolute top-[645px] left-[101px] w-[1240px] h-[310px] text-center text-xl text-white font-raleway">
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-gray-500 [backdrop-filter:blur(20px)] w-[1240px] h-[310px]" />
      <b className="absolute top-[49px] left-[674px] text-21xl inline-block w-[312px] h-[63px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        About the Guest
      </b>
      <div className="absolute top-[110px] left-[618px] text-right inline-block w-[368px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <p className="m-0">{`Ea enim aliqua dolor pariatur proident cillum in consequat do laboris incididunt proident ullamco ut. `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">You can view guest’s website at example.com</p>
      </div>
      <div className="absolute top-[57px] left-[53px] w-[430px] h-[187px] text-left text-black">
        <img
          className="absolute top-[0px] left-[-4px] rounded-11xl w-[438px] h-[57px]"
          alt=""
          src="/rectangle-21.svg"
        />
        <img
          className="absolute top-[69px] left-[-4px] rounded-11xl w-[438px] h-[57px]"
          alt=""
          src="/rectangle-21.svg"
        />
        <img
          className="absolute top-[138px] left-[-4px] rounded-11xl w-[438px] h-[57px]"
          alt=""
          src="/rectangle-21.svg"
        />
        <div className="absolute top-[12px] left-[30px] font-semibold inline-block w-[344px] h-[25px]">
          Watch now on YouTube
        </div>
        <div className="absolute top-[81px] left-[30px] font-semibold inline-block w-[344px] h-[25px]">
          Listen now on Spotify
        </div>
        <div className="absolute top-[150px] left-[30px] font-semibold inline-block w-[344px] h-[25px]">
          Read the episode transcript
        </div>
        <img
          className="absolute h-[8.02%] w-[1.95%] top-[9.36%] right-[4.21%] bottom-[82.62%] left-[93.84%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow.svg"
        />
        <img
          className="absolute h-[8.02%] w-[1.95%] top-[46.26%] right-[4.21%] bottom-[45.72%] left-[93.84%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow.svg"
        />
        <img
          className="absolute h-[8.02%] w-[1.95%] top-[83.16%] right-[4.21%] bottom-[8.82%] left-[93.84%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow.svg"
        />
      </div>
      <div className="absolute top-[29px] left-[1025px] rounded-11xl bg-gray-600 w-[177px] h-[243px]" />
    </div>
  );
};

export default GuestContainer;
