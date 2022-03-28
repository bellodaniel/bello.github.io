import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import magentoImage from '../../data/magento-development-1.svg';
import frontendImage from '../../data/Frontend-dev.jpeg';

function Blog() {
  return (
    <div className="home">
      <div className="container m-auto">
        <section className="pt-20 lg:pt-[20px] pb-10 lg:pb-20">
              <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                      <span className="font-semibold text-lg text-primary mb-2 block">
                      Our Blogs
                      </span>
                      <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                          Our Recent News
                      </h2>
                      <p className="text-base text-body-color">
                          There are many variations of passages of Lorem Ipsum available
                          but the majority have suffered alteration in some form.
                      </p>
                    </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 text-center">
                    <NavLink to="/magento-2-frontend-developer" className="max-w-[370px] mx-auto mb-10 inline-block text-left">
                      <div className="rounded overflow-hidden mb-8">
                          <img
                            src={magentoImage}
                            alt="Magento Frontend Developer"
                            className="w-full"
                            />
                      </div>
                      <div>
                          <span className="bg-primary rounded inline-block text-center py-1px-4 text-xs leading-loose font-semibold text-black mb-5">
                          Dec 22, 2023
                          </span>
                          <h3>
                            <span className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                            How to Get Started as a Magento Frontend Developer
                            </span>
                          </h3>
                          <p className="text-base text-body-color">
                            Being one of the most popular eCommerce platforms, Magento has been the favorite option for eCommerce developers for approximately one decade. However, it is a…
                          </p>
                      </div>
                    </NavLink>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 text-center">
                    <NavLink to="/what-is-a-front-end-developer" className="max-w-[370px] mx-auto mb-10 inline-block text-left">
                      <div className="rounded overflow-hidden mb-8">
                          <img
                            src={frontendImage}
                            alt="front-end developer"
                            className="w-full"
                            />
                      </div>
                      <div>
                        <span className="bg-primary rounded inline-block text-center py-1px-4 text-xs leading-loose font-semibold text-black mb-5">
                          Mar 15, 2023
                          </span>
                          <h3>
                            <span className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                                What is a front-end developer and how to think like one?
                            </span>
                          </h3>
                          <p className="text-base text-body-color">
                              A front-end developer is responsible for the website architecture and the way the website elements render to the user interface. Front-end development, which is also considered to be the client...
                          </p>
                      </div>
                    </NavLink>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="max-w-[370px] mx-auto mb-10">
                      <div className="rounded overflow-hidden mb-8">
                          <img
                            src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                            alt="image"
                            className="w-full"
                            />
                      </div>
                      <div>
                      <span className="bg-primary rounded inline-block text-center py-1px-4 text-xs leading-loose font-semibold text-white mb-5">
                          Jan 05, 2023
                          </span>
                          <h3>
                          <NavLink to="javascript:void(0)" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                            The no-fuss guide to upselling and cross selling
                            </NavLink>
                          </h3>
                          <p className="text-base text-body-color">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                      </div>
                    </div>
              </div>
          </div>
        </section>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
