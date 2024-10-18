"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FollowUs from "../components/followus/followus";
export default function Page() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-6 gap-8 max-w-[1320px] mt-16 text-slate-50">
        {/* Main Content */}
        <div className="col-span-4 max-w-[880px]">
          {/* Main Image */}
          <div className="mb-8 mx-auto">
            <img
              src="images/image/416x414/blog-details.jpg"
              alt="Main Image"
              className="w-full object-cover"
            />
          </div>
          {/* Article Content */}
          <div className="leading-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl  mb-4 font-serif pt-8">
              Citizenship Concept on How to Become
            </h2>
            {/* Post Meta */}
            <div className="flex items-center text-sm mb-6 pt-8 pb-5">
              <span className="mr-4 flex">
                <img
                  className="pr-3"
                  src="images/icon/codicon--account.svg"
                  alt=""
                />
                By Admin
              </span>
              <span className="mr-4 flex">
                <img
                  className="pr-3"
                  src="images/icon/lucide--calendar-days.svg"
                  alt=""
                />
                June 15
              </span>
              <span className="mr-4 flex">
                <img
                  className="pr-3"
                  src="images/icon/mdi--comment-outline.svg"
                  alt=""
                />
                Comments (5)
              </span>
            </div>
            {/* Article Text */}
            <p className="mb-4 pb-4 text-slate-50">
              Lorem ipsum is simply free text used by copytyping refreshing.
              Neque porro est qui dolorem ipsum quia quaed inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
              port lacus quis enim var sed efficitur turpis gilla sed sit amet
              finibus eros. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the ndustry standard
              dummy text ever since the 1500s, when an unknown printer took a
              galleyndustry standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </p>
            {/* Article Image with List */}
            <div className="flex flex-col md:flex-row items-start mb-6">
              {/* Image */}
              <img
                src="images/image/416x414/blog-details-2.jpg"
                alt="330x340 Image"
                className="max-w-full h-auto md:w-1/2 mb-4 md:mb-0"
              />
              {/* List */}
              <ul className="space-y-3 leading-10 md:ml-5 my-auto">
                <li className="flex items-center text-lg">
                  <img
                    className="pr-5"
                    src="images/icon/lucide--circle-check-big.svg"
                    alt=""
                  />
                  Find information and begin your application
                </li>
                <li className="flex items-center text-lg">
                  <img
                    className="pr-5"
                    src="images/icon/lucide--circle-check-big.svg"
                    alt=""
                  />
                  We provide obtaining entry permits
                </li>
                <li className="flex items-center text-lg">
                  <img
                    className="pr-5"
                    src="images/icon/lucide--circle-check-big.svg"
                    alt=""
                  />
                  Ut enim veniam, quis nostrud minim exarc
                </li>
                <li className="flex items-center text-lg">
                  <img
                    className="pr-5"
                    src="images/icon/lucide--circle-check-big.svg"
                    alt=""
                  />
                  Apply to travel, study, work or immigrate
                </li>
                <li className="flex items-center text-lg">
                  <img
                    className="pr-5"
                    src="images/icon/lucide--circle-check-big.svg"
                    alt=""
                  />
                  Dolor in reprehenderit voluptate velit esse
                </li>
              </ul>
            </div>
            {/* Conclusion Text */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl  mb-4 font-serif py-9">
                We Exist to Inspire the World to Play
              </h3>
              <p className="mb-4 leading-relaxed">
                England dotted with a lush, green landscape, rustic villages and
                throbbing with humanity. South Asian country that has plenty to
                offer to visitors with its diverse wildlife .We have helped
                students, business persons, tourists, clients with medical
                needs. There are many variations of passages of Lorem Ipsum
                available.
              </p>
            </div>
            {/* Quote */}
            <blockquote className="w-full p-6 bg-[#2f2f2f] mt-10">
              <img
                className="pb-5"
                src="images/image/416x414/blog-quote.png"
                alt=""
              />
              <p>
                Tosser argy-bargy mush loo at public school Elizabeth up the
                duff buggered chinwag on your bike mate don’t get shirty with me
                super, Jeffrey bobby Richard cheesed off spend a penny a load of
                old tosh blag horseTosser argy-bargy mush loo at public school
                Elizabeth up the duff buggered chinwag on your bike mate don’t
                get
              </p>
              <div className="flex pt-4">
                <p className="border-b-4 border-[#bd8c62] text-left w-[40px] p-3 mb-4 mr-5" />
                <p className="text-2xl mt-2 text-left text-[#bd8c62]">
                  Silvester Scott
                </p>
              </div>
            </blockquote>
            <section className="">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl  mb-4 mt-10 font-serif">
                Requirements for Citizenship
              </h1>
              <p className="font-sans text-gray-200">
                England clothed with a lush, green landscape, rustic villages
                and throbbing with humanity. South Asian country that has plenty
                to offer to visitors with its diverse wildlife. We have helped
                students, business persons, tourists, clients with medical
                needs. There are many variations of passages of Lorem ipsum
                available.
              </p>
            </section>
            {/* Comments Section */}
            <section className="mb-10">
              <div>
                <h2 className="  mt-10 font-serif text-xl sm:text-2xl lg:text-3xl">
                  Comments (2)
                </h2>
                <p className="border-b-4 border-[#bd8c62] text-left w-[100px] p-3 mb-7 mr-5" />
              </div>
              {/* Comment 1 */}
              <div className="flex items-start mb-2">
                <div className="w-[120px] h-[120px] mr-5">
                  <img src="images/image/416x414/comment-img-1.jpg" alt="" />
                </div>
                <div className="flex-1">
                  <div className="mb-3 -mt-2">
                    <h3 className=" mb-3">Isaac Harman</h3>
                    <p className="text-gray-300 text-sm">
                      June 14, 2023 / 12:00 AM
                    </p>
                  </div>
                  <p className="text-gray-300 mb-2">
                    Imperdiet in nulla sed viverraut loremut dapib estetur Lorem
                    ipsum dolor sit amet eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut eniy minim sed exe ullamco laboris
                    nisi ut aliquip cepteur
                  </p>
                  <button className="text-[#bd8c62] border border-[#bd8c62] py-1 px-3">
                    Reply
                  </button>
                </div>
              </div>
              {/* Divider */}
              <div className="border-b border-gray-600 mb-8" />
              {/* Comment 2 */}
              <div className="flex items-start mb-6">
                <div className="w-[120px] h-[120px] mr-5">
                  <img src="images/image/416x414/comment-img-1.jpg" alt="" />
                </div>
                <div className="flex-1">
                  <div className="mb-3 -mt-2">
                    <h3 className=" mb-3">John Doe</h3>
                    <p className="text-gray-300 text-sm">
                      June 14, 2023 / 12:00 AM
                    </p>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Imperdiet in nulla sed viverra lorem dapibus esther. Lorem
                    ipsum dolor sit amet aliquam tempor hendrerit ut lobortis ac
                    odio magna aliqua. Ut enim minim sed ex aliqua occaecat nisi
                    ut aliquip excepteur.
                  </p>
                  <button className="text-[#bd8c62] border border-[#bd8c62] py-1 px-3">
                    Reply
                  </button>
                </div>
              </div>
            </section>
            {/* Comment Form */}
            <section className="mb-10">
              <div>
                <h2 className=" mt-10 font-serif text-xl sm:text-2xl lg:text-3xl">
                  Comments (2)
                </h2>
                <p className="border-b-4 border-[#bd8c62] text-left w-[100px] p-3 mb-8 mr-5" />
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full p-3 border border-gray-600 bg-transparent font-sans text-gray-200 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="E-mail*"
                    className="w-full p-3 border border-gray-600 bg-transparent font-sans text-gray-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Website*"
                  className="w-full p-3 border border-gray-600 bg-transparent font-sans text-gray-200 focus:outline-none focus:border-orange-500"
                />
                <textarea
                  placeholder="Comment"
                  className="w-full p-3 border border-gray-600 bg-transparent font-sans text-gray-200 focus:outline-none focus:border-orange-500"
                  rows={5}
                  defaultValue={""}
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#bd8c62] text-white hover:bg-orange-600">
                  Post Comment
                </button>
              </form>
            </section>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="col-span-2 md:w-[400px] rounded-lg space-y-5">
          {/* Search Bar */}
          <div className="bg-[#2f2f2f] h-[80px] pt-4 px-10 w-full pb-4">
            <div className="border border-[#bd8c62]  ">
              <div className="flex mx-auto ">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 bg-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-[#bd8c62]"
                />
                <img
                  className="bg-[#bd8c62] p-2 w-[45px] h-[45px]"
                  src="images/icon/ic--outline-search.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Popular Posts */}
          <div className="bg-[#2f2f2f] p-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif ">
              Popular Posts
            </h3>
            <p className="border-b-4 border-[#bd8c62] text-left w-[80px] p-3 mb-8" />
            <ul className="space-y-9">
              <li className="flex items-center">
                <img
                  src="images/image/416x414/110x110.png"
                  alt="Popular Post"
                  className="max-w-[110px] max-h-[110px] mr-2"
                />
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm  gap-2 mb-4">
                    <span className=" flex items-center">
                      <img
                        className=""
                        src="images/icon/codicon--account.svg"
                        alt="By Admin"
                      />
                      By Admin
                    </span>
                    <span className=" flex items-center">
                      <img
                        className=""
                        src="images/icon/mdi--comment-outline.svg"
                        alt="Comments"
                      />
                      Comment (5)
                    </span>
                  </div>
                  <a href="#" className="text-white hover:text-[#bd8c62] ">
                    This Place Really Place For Awesome Moment
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="images/image/416x414/110x110.png"
                  alt="Popular Post"
                  className="max-w-[110px] max-h-[110px] mr-2"
                />
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm  gap-2 mb-4">
                    <span className=" flex items-center">
                      <img
                        className=""
                        src="images/icon/codicon--account.svg"
                        alt="By Admin"
                      />
                      By Admin
                    </span>
                    <span className=" flex items-center">
                      <img
                        className=""
                        src="images/icon/mdi--comment-outline.svg"
                        alt="Comments"
                      />
                      Comment (5)
                    </span>
                  </div>
                  <a href="#" className="text-white hover:text-[#bd8c62] ">
                    How to ensure a direct hassle-free bussiness
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  src="images/image/416x414/110x110.png"
                  alt="Popular Post"
                  className="max-w-[110px] max-h-[110px] mr-2"
                />
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm  gap-2 mb-4">
                    <span className=" flex items-center">
                      <img
                        className=""
                        src="images/icon/codicon--account.svg"
                        alt="By Admin"
                      />
                      By Admin
                    </span>
                    <span className=" flex items-center">
                      <img
                        className=""
                        src="images/icon/mdi--comment-outline.svg"
                        alt="Comments"
                      />
                      Comment (5)
                    </span>
                  </div>
                  <a href="#" className="text-white hover:text-[#bd8c62] ">
                    Citizenship Concept on How to Become a UK
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div className="bg-[#2f2f2f] p-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl  font-serif">
              All Categories
            </h3>
            <p className="border-b-4 border-[#bd8c62] w-[80px] p-3 mb-6" />
            <ul className="space-y-4">
              {/* Category Item */}
              <li className="flex justify-between items-center">
                <a href="#" className="hover:text-[#bd8c62]">
                  Announcement
                </a>
                <span className="text-sm text-[#bd8c62]">(15)</span>
              </li>
              <li className="border-b-2 border-gray-400" />
              <li className="flex justify-between items-center">
                <a href="#" className="hover:text-[#bd8c62]">
                  Interior
                </a>
                <span className="text-sm text-[#bd8c62]">(14)</span>
              </li>
              <li className="border-b-2 border-gray-400" />
              <li className="flex justify-between items-center">
                <a href="#" className="hover:text-[#bd8c62]">
                  Property
                </a>
                <span className="text-sm text-[#bd8c62]">(12)</span>
              </li>
              <li className="border-b-2 border-gray-400" />
              <li className="flex justify-between items-center">
                <a href="#" className="hover:text-[#bd8c62]">
                  Real Estate
                </a>
                <span className="text-sm text-[#bd8c62]">(30)</span>
              </li>
              <li className="border-b-2 border-gray-400" />
              <li className="flex justify-between items-center">
                <a href="#" className="hover:text-[#bd8c62]">
                  News &amp; Tips
                </a>
                <span className="text-sm text-[#bd8c62]">(16)</span>
              </li>
              <li className="border-b-2 border-gray-400" />
              <li className="flex justify-between items-center">
                <a href="#" className="hover:text-[#bd8c62]">
                  Work Permits
                </a>
                <span className="text-sm text-[#bd8c62]">(10)</span>
              </li>
            </ul>
          </div>
          {/* Popular Tags */}
          <div className="bg-[#2f2f2f] p-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl  font-serif">
              Popular Tags
            </h3>
            <p className="border-b-4 border-[#bd8c62] w-[80px] p-3 mb-6" />
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Business
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Marketing
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Startup
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Design
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Consulting
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Strategy
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Development
              </a>
              <a
                href="#"
                className="px-2 py-1 border border-white hover:bg-[#bd8c62]">
                Tips
              </a>
            </div>
          </div>
        </aside>
      </div>{" "}
      <FollowUs />
    </>
  );
}
