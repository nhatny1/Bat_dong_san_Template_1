'use client';
import FollowUs from "../components/followus/followus";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Page() {
    return (
        <>
  <section className="py-16 mt-20">
    <div className="container mx-auto max-w-[1320px] px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl  text-white font-serif">
          Latest News Updates
        </h2>
        <p className="mt-8 mx-auto max-w-full sm:max-w-[480px] md:max-w-[620px] text-center font-sans text-gray-200">
          Trage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaboration.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {/* Blog Post 1 */}
        <article className="bg-[#2f2f2f] w-full overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              src="images/image/416x414/post-2.jpg"
              alt="Post Thumbnail"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm mb-4">
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/codicon--account.svg"
                  alt="By Admin"
                />
                By Admin
              </span>
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/mdi--comment-outline.svg"
                  alt="Comments"
                />
                Comment (5)
              </span>
            </div>
            <h3 className="text-xl  font-serif underline leading-relaxed hover:text-[#bd8c62] text-white mb-4">
              Architecture Is Not Based On Concrete And Steel
            </h3>
            <p className="text-sm font-sans text-gray-200 leading-normal">
              Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim
              errem princi pes, no suas molesti interpretaris. Lorem ipsum dolor
              sit amet, atomorum posidon.
            </p>
          </div>
        </article>
        {/* Repeat Blog Posts */}
        <article className="bg-[#2f2f2f] w-full overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              src="images/image/416x414/post-2.jpg"
              alt="Post Thumbnail"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm mb-4">
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/codicon--account.svg"
                  alt="By Admin"
                />
                By Admin
              </span>
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/mdi--comment-outline.svg"
                  alt="Comments"
                />
                Comment (5)
              </span>
            </div>
            <h3 className="text-xl  font-serif underline leading-relaxed hover:text-[#bd8c62] text-white mb-4">
              How To Design a Website For Your Real Estate Business
            </h3>
            <p className="text-sm font-sans text-gray-200 leading-normal">
              Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim
              errem princi pes, no suas molesti interpretaris. Lorem ipsum dolor
              sit amet, atomorum posidon.
            </p>
          </div>
        </article>
        <article className="bg-[#2f2f2f] w-full overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              src="images/image/416x414/post-2.jpg"
              alt="Post Thumbnail"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm mb-4">
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/codicon--account.svg"
                  alt="By Admin"
                />
                By Admin
              </span>
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/mdi--comment-outline.svg"
                  alt="Comments"
                />
                Comment (5)
              </span>
            </div>
            <h3 className="text-xl l font-serif underline leading-relaxed hover:text-[#bd8c62] text-white mb-4">
              Building a Real Estate Website Tips and Ideas
            </h3>
            <p className="text-sm font-sans text-gray-200 leading-normal">
              Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim
              errem princi pes, no suas molesti interpretaris. Lorem ipsum dolor
              sit amet, atomorum posidon.
            </p>
          </div>
        </article>
        {/* Thêm các bài viết khác tương tự */}
        <article className="bg-[#2f2f2f] w-full overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              src="images/image/416x414/post-2.jpg"
              alt="Post Thumbnail"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm mb-4">
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/codicon--account.svg"
                  alt="By Admin"
                />
                By Admin
              </span>
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/mdi--comment-outline.svg"
                  alt="Comments"
                />
                Comment (5)
              </span>
            </div>
            <h3 className="text-xl  font-serif underline leading-relaxed hover:text-[#bd8c62] text-white mb-4">
              How To Design a Website For Your Real Estate Business
            </h3>
            <p className="text-sm font-sans text-gray-200 leading-normal">
              Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim
              errem princi pes, no suas molesti interpretaris. Lorem ipsum dolor
              sit amet, atomorum posidon.
            </p>
          </div>
        </article>
        <article className="bg-[#2f2f2f] w-full overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              src="images/image/416x414/post-2.jpg"
              alt="Post Thumbnail"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm mb-4">
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/codicon--account.svg"
                  alt="By Admin"
                />
                By Admin
              </span>
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/mdi--comment-outline.svg"
                  alt="Comments"
                />
                Comment (5)
              </span>
            </div>
            <h3 className="text-xl  font-serif underline leading-relaxed hover:text-[#bd8c62] text-white mb-4">
              Building a Real Estate Website Tips and Ideas
            </h3>
            <p className="text-sm font-sans text-gray-200 leading-normal">
              Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim
              errem princi pes, no suas molesti interpretaris. Lorem ipsum dolor
              sit amet, atomorum posidon.
            </p>
          </div>
        </article>
        <article className="bg-[#2f2f2f] w-full overflow-hidden shadow-lg">
          <div className="overflow-hidden">
            <img
              src="images/image/416x414/post-2.jpg"
              alt="Post Thumbnail"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm mb-4">
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/codicon--account.svg"
                  alt="By Admin"
                />
                By Admin
              </span>
              <span className="mr-4 flex items-center">
                <img
                  className="pr-2"
                  src="images/icon/mdi--comment-outline.svg"
                  alt="Comments"
                />
                Comment (5)
              </span>
            </div>
            <h3 className="text-xl  font-serif underline leading-relaxed hover:text-[#bd8c62] text-white mb-4">
              Building a Real Estate Website Tips and Ideas
            </h3>
            <p className="text-sm font-sans text-gray-200 leading-normal">
              Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id vim
              errem princi pes, no suas molesti interpretaris. Lorem ipsum dolor
              sit amet, atomorum posidon.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
  {/* Follow Us Section */}
  <FollowUs />
  
</>

    );
}
