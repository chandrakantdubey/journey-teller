import JourneyTellersContainer from "../components/journey-tellers-container";
import ContainerFooter from "../components/container-footer";
import FormContainer from "../components/form-container";
import GuestContainer from "../components/guest-container";

const IndividualEpisode = () => {
  return (
    <div className="relative bg-white w-full h-[1178px] overflow-hidden">
      <div className="absolute top-[-101px] left-[-299px] w-[2038px] h-[2812px]">
        <img
          className="absolute top-[101px] left-[299px] w-[1467px] h-[1735px] object-cover"
          alt=""
          src="/backdrop-compressed-1@2x.png"
        />
        <div className="absolute top-[44px] left-[62px] [background:linear-gradient(0deg,_#1d1a1a_36.51%,_rgba(29,_26,_26,_0)_52.6%)] [backdrop-filter:blur(4px)] w-[2038px] h-[3949px]" />
      </div>
      <div className="absolute top-[0px] left-[0px] rounded-11xl [background:linear-gradient(180deg,_rgba(29,_26,_26,_0.35))] [backdrop-filter:blur(25px)] w-[1442px] h-[1431px]" />
      <JourneyTellersContainer />
      <ContainerFooter
        dimensionCode="/twitter154svgrepocom-2.svg"
        propTop="1034px"
        propLeft="551px"
      />
      <FormContainer />
      <GuestContainer />
    </div>
  );
};

export default IndividualEpisode;
