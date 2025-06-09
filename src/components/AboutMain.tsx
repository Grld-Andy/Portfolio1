import Icons from "./Icons";
import WorkExperience from "./WorkExperience";
import Services from "./Services"


export default function AboutMain() {
  return (
    <>
      <div className="ml-[150px]">
        <div className="text-[60px] leading-none font-semibold">
          <h1>
            Edwin Adu Boateng <br />
            Design Engineer
          </h1>
        </div>
        <div className="mt-24 leading-9">
          <p>Reach out [at]</p>
          <p>
            <u>edwinaduboateng2@gmail.com</u>
          </p>
        </div>
        <div>
          <Icons />
        </div>
      </div>
    <div className="mt-20 w-full h-[15rem] bg-[#1A1717] flex justify-evenly items-center text-white">
  <div className="text-center">
    <h5 className="text-lg font-semibold">Experience</h5>
    <p>2 years</p>
  </div>
  <div className="text-center">
    <h5 className="text-lg font-semibold">Location</h5>
    <p>Kumasi, Ghana</p>
  </div>
  <div className="text-center">
    <h5 className="text-lg font-semibold">Freelance</h5>
    <p>Available</p>
  </div>
</div>
<div className="mx-[150px]">
  <WorkExperience/>
</div>
<div className="mx-[150px]">
  <Services/>
</div>
    </>
  );
}
