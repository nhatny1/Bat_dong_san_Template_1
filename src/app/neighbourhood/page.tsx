import FollowUs from "../components/followus/followus";

// Import Swiper React components
import SlideShow from "./components/slideshow";
export default function Neighbourhood() {
  return (
    <>
      <section className="The_Heart flex items-center gap-[30px] bg-buy_property py-[120px]">
        <div className="flex max-lg:flex-col-reverse container justify-center items-center gap-x-[30px] max-sm:px-[12px]">
          <div className="heading_img">
            <img
              src="images/buy_property/img_buy_property.jpg"
              className=""
              alt=""
            />
          </div>
          <div className="content flex flex-col max-md:mb-[40px] mb-[40px]">
            <h4 className="text-title_buy_property md:text-[20px] font-semibold font-Old_Standard_TT text-xl mb-[20px] ">
              The Heart of The City
            </h4>
            <h2 className="text-white text-fontSize_Looking font-Old_Standard_TT font-semibold mb-[22px] leading-tight max-w-[500px] max-sm:text-[36px]">
              Life on the San Francisco
            </h2>

            <p className="text-content_buy_property text-xs leading-5 max-w-[600px]">
              We are a team of experienced professionals dedicated to providing
              you with the best possible real estate services. Our passion for
              real estate, combined with our expertise and knowledge of the
              market, enables us to deliver exceptional results for our clients.
              We pride ourselves on our customer service, and we strive to
              exceed your expectations every step of the way. We are available
              to answer any questions you may have and provide you with the
              information you need to make informed decisions
            </p>
          </div>
        </div>
      </section>
      <section className="sponsor bg-sell_property py-[90px]">
        <SlideShow></SlideShow>
      </section>
      <section className="OurNeight_Borhoods bg-buy_property py-[120px] max-sm:px-[12px]">
        <h2 className="text-white font-Old_Standard_TT max-md:text-[32px] sm:text-[44px] xl:text-fontSize_Looking text-center mb-5 font-extrabold">
          Our Neighborhoods
        </h2>
        <p className="max-w-[620px] mx-auto text-center font-Jost text-title_follow_us max-sm:text-[16px] text-[18px] font-normal w-full">
          Trage agile frameworks to provide a robust synopsis for high level
          overviews.Iterative approaches to corporate strategy foster collabo
        </p>
        <div className="container grid max-sm:grid-cols-2 md:grid-cols-3 gap-[20px] my-[50px] mx-auto justify-center">
          <div className="relative flex flex-col items-center">
            <img
              src="images/our_neighbourhood/416X414.jpg"
              alt=""
              className="mb-2"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
              University
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <img
              src="images/our_neighbourhood/416X415.jpg"
              alt=""
              className="mb-2"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Hospital
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <img
              src="images/our_neighbourhood/416X411.jpg"
              alt=""
              className="mb-2"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
              Amusement Park
            </div>
          </div>
        </div>
      </section>

      <FollowUs />
    </>
  );
}
