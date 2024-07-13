import Image from "next/image";

const BlogSection = () => {
  return (
    <div>
      <div className="max-w-[1160px] mx-auto py-20 px-2">
        <h3 className="text-5xl font-bold mb-10">Recent Blogs</h3>
        <div className="md:flex gap-10 items-center">
          <div className="md:w-1/2">
            <Image
              src="/assets/blog1.png"
              alt="blog"
              height={500}
              width={500}
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-10 items-center">
              <span className="bg-yellow-300 px-3 py-1 rounded-full text-sm">
                BUSINESS
              </span>
              <p className="font-semibold">-5 min read</p>
            </div>
            <h4 className="text-3xl font-bold mt-5">
              The worst advice we&apos;ve ever heard about web design
            </h4>
            <p className=" mt-5">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking overpass is important
            </p>

            <div className="flex items-center gap-2 mt-5">
              <Image
                src="/assets/top-arrow.png"
                alt="arrow"
                height={25}
                width={25}
              />{" "}
              <p>READ MORE</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="flex items-center gap-5 bg-black text-white p-5 rounded-md">
            <Image
              src="/assets/blog2.png"
              alt="blog"
              height={100}
              width={100}
            />
            <div>
              <p>-5 min read</p>
              <p>The worst advice we&apos;ve ever heard about web design</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5 rounded-md shadow-md">
            <Image
              src="/assets/blog2.png"
              alt="blog"
              height={100}
              width={100}
            />
            <div>
              <p>-5 min read</p>
              <p>The worst advice we&apos;ve ever heard about web design</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5 rounded-md shadow-md">
            <Image
              src="/assets/blog3.png"
              alt="blog"
              height={100}
              width={100}
            />
            <div>
              <p>-5 min read</p>
              <p>The worst advice we&apos;ve ever heard about web design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
