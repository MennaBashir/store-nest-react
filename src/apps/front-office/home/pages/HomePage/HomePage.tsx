import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Card, CardContent } from "apps/front-office/design-system/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/front-office/design-system/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react";



export default function HomePage() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />

      <section className="featured-categories px-3 py-[25px]">

        <div className="featured-categories-title relative mb-11 ">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#253D4E]">Featured Categories</h3>
          {/* <div className="flex relative max-w-[200px] justify-end top-[unset] z-[2] w-full">
                <span className="relative w-10 h-10 leading-[44px] text-2xl cursor-pointer block z-[100] transition-all duration-[0.2s] ease-[ease-out] text-center text-[#7E7E7E] rounded-[50%] inset-x-[unset] bg-[#f2f3f4] mr-2.5 " >L </span>
                <span className="relative w-10 h-10 leading-[44px] text-2xl cursor-pointer block z-[100] transition-all duration-[0.2s] ease-[ease-out] text-center text-[#7E7E7E] rounded-[50%] inset-x-[unset] bg-[#f2f3f4]" >R</span>

              </div> */}
        </div>
        <div className="featured-categories-body flex justify-center bg-primary-dark">
          <Carousel
            plugins={[plugin.current]}
            className="w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="w-full overflow-visible">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 sm:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-[1_/_1.5] items-center justify-center p-6">
                        <figure >
                          <a>
                            <img
                              src="public/images/featured-categories/kiwi.png" alt="img-product" />
                          </a>
                        </figure>
                        <h6><a className="font-bold">Oganic Kiwi</a></h6>
                        <span className="text-slate-400 text-base font-normal my-1">28 items</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-top-1/3 left-[168%] text-[#7E7E7E] bg-[#f2f3f4] hover:bg-primary-dark hover:text-[#f2f3f4] font-custom" />
            <CarouselNext className="-top-1/3 left-[176%] text-[#7E7E7E] bg-[#f2f3f4] hover:bg-primary-dark hover:text-[#f2f3f4] font-custom" />
          </Carousel>
        </div>
        <div className="featured-categories-cards flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full sm:w-1/3">
            <img src="public/images/featured-categories/banner-1.png" alt="img-product" className="w-full h-40 object-cover rounded-t-lg" />

            <h3 className="text-xl font-semibold mt-4">Everyday Fresh & Clean with Our Products</h3>
            <p className="text-gray-600 mt-2">Shop Now</p>
            <button className="bg-green-500 text-white rounded-full px-4 py-2 mt-4">Shop Now</button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full sm:w-1/3">
            <img src="public/images/featured-categories/banner-2.png" alt="img-product" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Everyday Fresh & Clean with Our Products</h3>
            <p className="text-gray-600 mt-2">Shop Now</p>
            <Button className="bg-primary-default hover:bg-primary-dark font-custom">
              shop now
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full sm:w-1/3">
            <img src="public/images/featured-categories/banner-3.png" alt="img-product" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">Everyday Fresh & Clean with Our Products</h3>
            <p className="text-gray-600 mt-2">Shop Now</p>
            <Button className="bg-primary-default hover:bg-primary-dark font-custom">
              shop now
            </Button>
          </div>
        </div>
      </section >


    </>
  );
}
