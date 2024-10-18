import FollowUs from "../components/followus/followus";
export default function Service() {
  return (
    <div className="">
      <section className="Buy_Property max-sm:flex-col bg-buy_property py-[120px] max-sm:w-full">
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
              Buy Property
            </h4>
            <h2 className="text-white text-fontSize_Looking font-Old_Standard_TT font-semibold mb-[22px] leading-tight max-w-[500px] max-sm:text-[36px]">
              Looking for a New Home?
            </h2>

            <p className="text-content_buy_property text-xs leading-7 font-Jost max-w-[600px] max-sm:text-[16px]">
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
      <section className="Sell_Property flex items-center gap-[100px] bg-sell_property py-[120px]">
        <div className="flex max-lg:flex-col container justify-center items-center gap-x-[30px] max-sm:px-[12px]">
          <div className="content flex flex-col md:mb-[40px] max-sm:mb-[40px]">
            <h4 className="text-title_buy_property font-semibold font-Old_Standard_TT text-xl mb-[20px] ">
              Sell Property
            </h4>

            <h2 className="text-white text-fontSize_Looking font-Old_Standard_TT font-semibold mb-[22px] leading-tight max-w-[500px] w-full">
              Need to Sell Your Property
            </h2>

            <p className="text-content_buy_property text-xs leading-7 font-Jost max-w-[600px] w-full max-sm:text-[16px]">
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
          <div className="heading_img max-md:mb-[40px] mb-[40px]">
            {" "}
            <img
              src="images/buy_property/img_buy_property.jpg "
              className=""
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="Rent_Property  bg-buy_property py-[120px] max-sm:px-[12px]">
        <div className="max-sm:w-full flex max-lg:flex-col-reverse container justify-center items-center gap-[30px]">
          <div className="heading_img">
            <img
              src="images/buy_property/img_buy_property.jpg"
              className=""
              alt=""
            />
          </div>
          <div className="content flex flex-col max-md:mb-[40px] mb-[40px]">
            <h4 className="text-title_buy_property font-semibold font-Old_Standard_TT text-xl mb-[20px] ">
              Rent Property
            </h4>
            <h2 className="text-white text-fontSize_Looking font-Old_Standard_TT font-semibold mb-[22px] leading-tight max-w-[500px]">
              Need to Rent a Property
            </h2>

            <p className="text-content_buy_property text-xs font-Jost leading-7 max-w-[600px] max-sm:text-[14px]">
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
      <FollowUs />
    </div>
  );
}
