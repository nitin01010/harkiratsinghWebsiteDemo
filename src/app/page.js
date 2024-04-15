import Card from "@/components/common/card";
import LayoutBox from "@/components/common/layout";
import Footer from "@/components/footer/footer";
import Swipper from "@/components/swipper/swipper";

export default function Home() {
  return (
    <main>
      <div className=" bg-white    flex  gap-2  ">
        <div className="  md:p-6 ">
          <Swipper />
          <br />
          <h2 className=" font-semibold  text-3xl text-center">Featured</h2>
          <br />

          <div className=" flex gap-4 flex-wrap lg:flex-nowrap   p-2">
            {
              [...Array(3)].map((item, index) => {
                return (
                  <div key={ index }>
                    <Card />
                  </div>
                )
              })
            }
          </div>

          <br />

          <div class=" w-[100%] min-h-56">
            <img src="Wht.jpeg" class="object-cover " />
          </div>

          <br />
          <h2 className="  font-semibold  text-3xl text-center">About 100xDevs</h2>
          <br />

          <div className="  bg-[#F7E4BE] rounded-md p-4 text-start text-base ">
            Welcome to 100xdevs.
            <br />
            <br />
            This is an initiative by Harkirat Singh to personally mentor folks in the field of Programming.
            <br />
            <br />
            Harkirat strongly feels that today you are either a 1x engineer or a 100x engineer and nothing in the middle, and his hope is to take everyone in this community to be a 100x Engineer.
            <br />
            <br />
            Join him in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically.
          </div>

          <Footer />

        </div>
      </div>

    </main>
  );
}
