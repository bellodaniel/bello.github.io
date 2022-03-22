import React, { useEffect } from "react";
import magentoImage from '../../data/Frontend-dev.jpeg';

function Post1() {
    let { postSlug } = "/what-is-a-front-end-developer";

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);

    return (
        <div className="home">
            <div className="container m-auto p-4 max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="inline-block mt-8 mb-8">
                        <img className="object-contain object-top rounded-full m-auto"
                             src={magentoImage}
                             alt="How to Get Started as a Magento Frontend Developer"/>
                    </div>
                    <div className="flex bg-gray-100 p-10">
                        <div className="mb-auto mt-auto max-w-lg">
                            <h1 className="text-3xl uppercase mb-4">What is a front-end developer and how to think like one?</h1>
                        </div>
                    </div>
                </div>

                <article data-uw-styling-context="true" className="max-w-3xl m-auto">
                    <p data-uw-styling-context="true">Imagine yourself, on a normal day, opening the browser and
                        visiting a website. You will be amazed by its clean layout, cool animations, and impressive
                        visuals. But how does this work and who is behind all this? Simply put, a front-end developer
                        who wrote the CSS/HTML to convert the designs into a beautiful functioning website.</p>
                    <p data-uw-styling-context="true">As of January 2020,&nbsp;the web&nbsp;has&nbsp;around&nbsp;1.5
                        billion websites. New websites are coming to life every day.&nbsp;Hence the reason for the web
                        developer’s job security.<br data-uw-styling-context="true"/>“Behind every successful man, there
                            is a strong woman.”<br data-uw-styling-context="true"/>“Behind every fascinating website,
                                there is a strong team of front-end developers.”</p>
                    <p data-uw-styling-context="true">If we visit a job recruiting website, we see that the job title
                        “Front-end developer” is widely required. But&nbsp;what’s&nbsp;that job precisely? What should
                        we know before we starting trying it? You would possibly&nbsp;think those answers are pretty cut
                        and straight, but they’re anything but that. Front-end development&nbsp;goes&nbsp;through
                        something of a&nbsp;psychological state.&nbsp;In this post, we will try to describe what does it
                        mean to be a front-end developer. This will be based on my experience and also through various
                        conversations, I have had with several other front-end developers. The more people you ask, the
                        more you realize that different people or organizations understand this differently. By
                        understanding how the role of a front-end developer varies from company to company, you will get
                        a better idea of what a front-end developer does.</p>
                    <h2 id="[hardBreak]What-is-a-front-end-developer?" data-uw-styling-context="true">
                        <br data-uw-styling-context="true"/>What is a front-end developer?</h2>
                    <p data-uw-styling-context="true">A front-end developer is responsible for the website architecture
                        and the way the website elements render to the user interface. Front-end development, which is
                        also considered to be the client-side development, is&nbsp;the&nbsp;practice&nbsp;of
                        producing&nbsp;HTML, CSS, and JavaScript for&nbsp;an internet site&nbsp;or Web
                        Application.&nbsp;&nbsp;In other words, everything that a user can see and interact with is
                        created by a front-end developer, with the help of a back end developer at times of course. The
                        real challenge for this is that we live in an incredibly dynamic environment. New tools are
                        being introduced every day and you have to bear this in mind every time you are building
                        something.<br data-uw-styling-context="true"/><br data-uw-styling-context="true"/>Almost every
                            organization or agency on the market hires front-end developers. So it’s
                            an&nbsp;employment&nbsp;and&nbsp;a typical&nbsp;job title. But what does it mean? Here are
                            some answers we got:</p>
                    <ul data-uw-styling-context="true">
                        <li data-uw-styling-context="true">Front-end development is everything a user sees and interacts
                            with on a website. Everything that has to do with the user interface is a front-end job.
                        </li>
                        <li data-uw-styling-context="true">the term “front-end developer” is relatively newer than the
                            term CSS or HTML. In the beginning, everyone was a webmaster, or as we commonly say now, a
                            full-stack developer. But if the word would have existed, back in the time, this kind of
                            developer would be considered to be a front-end developer.
                        </li>
                        <li data-uw-styling-context="true">&nbsp;A front-end developer thinks of himself as&nbsp;an
                            internet&nbsp;designer and website architect. He doesn’t feel he has the extensive expertise
                            of a back-end developer. However, he still spends all of his time&nbsp;using and interacting
                            with the&nbsp;browser.
                        </li>
                    </ul>
                    <p data-uw-styling-context="true">So, the job of a front-end developer is closely related to the
                        browser. You&nbsp;should be familiar with&nbsp;the browser, more so than other roles in web
                        development. To note, that, just like the websites, the number of new browsers is also getting
                        bigger and bigger.<br data-uw-styling-context="true"/>Maybe the front-end work is inevitably
                            related to the user interface. A back-end developer doesn’t have to bother with the
                            interface if their job is establishing a database connection. But if you consider yourself a
                            front-end developer, you definitely have to.<br data-uw-styling-context="true"/>There
                                are&nbsp;a ton of&nbsp;different devices and browsers. It’s overwhelming. So we just
                                gave up.<br data-uw-styling-context="true"/>So, a front-end developer:</p>
                    <ul data-uw-styling-context="true">
                        <li data-uw-styling-context="true">It is a profession&nbsp;and a job title.</li>
                        <li data-uw-styling-context="true">You have to work with browsers, devices, and users.</li>
                    </ul>
                    <h3 id="But-what-skills-does-it-involve?" data-uw-styling-context="true">But what skills does a
                        front-end developer needs?</h3>
                    <p data-uw-styling-context="true">It’s given&nbsp;that you simply&nbsp;can use a computer. There’s
                        also the soft skills of communicating with co-workers. Then, there are language-specific core
                        skills. Finally, there are the bonus skills—all&nbsp;the things&nbsp;that create&nbsp;you.</p>
                    <h3 id="Core-skills" data-uw-styling-context="true">Core front-end developer skills</h3>
                    <p data-uw-styling-context="true">The languages&nbsp;a front-end developer has&nbsp;to strongly
                        understand to read, write, and maintain them.</p>
                    <ul data-uw-styling-context="true">
                        <li data-uw-styling-context="true">HTML and CSS. Definitely. <br data-uw-styling-context="true"/>You
                            don’t&nbsp;come upon&nbsp;front-end developers who don’t do those languages.</li>
                        <li data-uw-styling-context="true">But what about JavaScript? <br data-uw-styling-context="true"/>It’s fine if&nbsp;you recognize&nbsp;plenty
                            of&nbsp;JavaScript but it’s also fine if you don’t write everything from scratch. Although
                            you can’t be oblivious&nbsp;to an expert,&nbsp;you wish&nbsp;to understand&nbsp;what it can
                            do. Therefore Javascript is a must on the core skills list.</li>
                        <li data-uw-styling-context="true">As a front-end developer,&nbsp;you wish&nbsp;to
                            own&nbsp;fundamental knowledge of accessibility as well. This is, after all, about
                            user-facing interfaces.
                        </li>
                    </ul>
                    <h3 id="Bonus-skills" data-uw-styling-context="true">Bonus front-end developer skills</h3>
                    <p data-uw-styling-context="true">Obviously, being familiar with web designing tools, like <a
                        href="https://avocode.com/" data-wpel-link="external" rel="nofollow noopener"
                        data-uw-styling-context="true">Avocode</a>, <a
                        href="https://www.adobe.com/products/photoshop.html" data-wpel-link="external"
                        rel="nofollow noopener" data-uw-styling-context="true">Photoshop</a>, or <a
                        href="https://www.adobe.com/products/illustrator.html" data-wpel-link="external"
                        rel="nofollow noopener" data-uw-styling-context="true">Illustrator</a>, is a big bonus. On your
                        daily job, you will constantly try to turn graphics and designs into a functioning website. The
                        designs are created with these tools and you get familiar with it, in order to make your life
                        easier.</p>
                    <p data-uw-styling-context="true">Right now though, it&nbsp;looks like&nbsp;front-end
                        development&nbsp;it’s on a critical position when it comes to its identity. It’s all about
                        JavaScript, which is eating&nbsp;the world.<br data-uw-styling-context="true"/>JavaScript is
                            crazy popular now. It’s inevitable. Yes, it’s the language&nbsp;within the&nbsp;browser, but
                            now it’s the language in&nbsp;numerous&nbsp;other places too.</p>
                    <h2 id="[hardBreak]Front-end-Roles" data-uw-styling-context="true"><br data-uw-styling-context="true"/>Front-end Developer Roles</h2>
                    <p data-uw-styling-context="true">For the sake of the argument, let’s fork the term front-end
                        development. Let’s use&nbsp;UX and JavaScript engineers. Can one person be great at both? Maybe
                        we overwhelm ourselves in two very different directions. JavaScript frameworks are very strange
                        to people with a background in HTML, CSS, and basic interactive JavaScript.<br data-uw-styling-context="true"/>Imagine two people called front-end developers meeting, and
                            having nothing in common&nbsp;to speak&nbsp;about. Some front-end developers don’t want to
                            be configuring build tools. They think of themselves as being at the front of front-end
                            development, whereas&nbsp;others&nbsp;are at&nbsp;the background&nbsp;of front-end
                            development.<br data-uw-styling-context="true"/>This divide is super frustrating to
                                people&nbsp;at once.</p>
                    <h2 id="Hiring" data-uw-styling-context="true">Hiring a front-end developer</h2>
                    <p data-uw-styling-context="true">A new trend is spreading on the web technology these days. A lot
                        of back-end developers are losing their jobs and being replaced by Javascript experts. Plenty
                        of&nbsp;things that&nbsp;before used to&nbsp;be back-end responsibilities are now built and on
                        the front-end area, which also known as the client-side. Component-driven design, site-level
                        architecture, routing, getting data from&nbsp;the back-end, mutating data,&nbsp;integrations
                        with&nbsp;APIs, and managing state—all&nbsp;of these&nbsp;things are now largely a front-end
                        responsibility.<br data-uw-styling-context="true"/><br data-uw-styling-context="true"/>Before, a
                            front-end developer would need a back-end developer’s help to integrate with an API.
                            However, all the latest changes have given the opportunity to the front-end devs to be
                            independent and make them on their own. For example, GraphQL gives them everything they need
                            when it comes to the Data they need.<br data-uw-styling-context="true"/>And all the so-called
                                traditional front-end work, with the user-interface, has not gone away. On the contrary,
                                that has evolved and changed as well.</p>
                    <h2 id="Career" data-uw-styling-context="true">Career as a front-end developer</h2>
                    <p data-uw-styling-context="true">Many organizations are advertising to hire&nbsp;a front-end
                        developer. But before they do that, they need to decide whether they need someone to work with
                        Angular, Webpack and GraphQL or HTML, LESS, and page accessibility. All of them are part of the
                        front-end job. And remember,&nbsp;they might as well take the time and learn new
                        technologies.&nbsp;However, when it&nbsp;comes&nbsp;to hiring new people,&nbsp;it has to be
                        related to the talent and skills the people have and how to get the best out of them.<br
                            data-uw-styling-context="true"/><br data-uw-styling-context="true"/>Furthermore, it’s about
                            how specialized your work usually&nbsp;is. Sometimes&nbsp;you’ll be able to&nbsp;specialize
                            in&nbsp;SVG. Other times&nbsp;you’ll be able to&nbsp;specialize in&nbsp;APIs and data.<br
                                data-uw-styling-context="true"/><br data-uw-styling-context="true"/>It is understandable
                                that a developer cannot resolve everything at once. The hiring part&nbsp;is
                                certainly&nbsp;the worst part. You will want to keep it as simple as possible. You need
                                to be very clear about what you want from this front-end developer and look at their
                                past experience. <br data-uw-styling-context="true"/><br data-uw-styling-context="true"/>There’s&nbsp;a huge difference between the CSS markup
                                    and the technical tasks. However, this has not prevented the developers from doing a
                                    good job, often in both of them.<br data-uw-styling-context="true"/>Despite the
                                        differences between them, page speed, user experience, and accessibility are all
                                        a front-end developer’s job. Maybe the term “front-end developer” needs
                                        rethinking.</p>
                    <h2 id="Use-case" data-uw-styling-context="true">Fron-end development use case</h2>
                    <p data-uw-styling-context="true">Here’s a design of a page. Different front-end developer will see
                        different things here:</p>
                    <figure className="wp-block-image size-large" data-uw-styling-context="true">
                        <img width="600" height="542"
                             src="https://sherocommerce.com/wp-content/uploads/Category.jpg" alt=""
                             className="lazyload wp-image-21611"/>
                    </figure>
                    <ul data-uw-styling-context="true">
                        <li data-uw-styling-context="true">Dev A&nbsp;sees&nbsp;lots&nbsp;of components&nbsp;of
                            various&nbsp;sizes and complexity.
                        </li>
                        <li data-uw-styling-context="true">Dev B’s attention is attracted by all of those images and
                            their impact on page performance.
                        </li>
                        <li data-uw-styling-context="true">Dev C sees HTML structures. It has tables, lists, HTML tags,
                            and starts building the SEO structure.
                        </li>
                        <li data-uw-styling-context="true">Some other dev is looking at the fonts, the shades, and
                            starts calculating the sizes, etc.
                        </li>
                        <li data-uw-styling-context="true">I immediately start&nbsp;considering&nbsp;how&nbsp;the
                            look&nbsp;is meant&nbsp;to show&nbsp;in several&nbsp;screen sizes and device.
                        </li>
                        <li data-uw-styling-context="true">A senior front-end starts thinking of the framework we will
                            need to use for this project. Which one is the best in our case, etc?
                        </li>
                    </ul>
                    <p data-uw-styling-context="true">“If you’re already a front-end developer, well, pretend you’re
                        also wearing a pirate hat.”</p>
                    <p data-uw-styling-context="true">― Ethan Marcotte,&nbsp;<a
                        href="https://www.goodreads.com/work/quotes/16313898" data-wpel-link="external"
                        rel="nofollow noopener" data-uw-styling-context="true">Responsive Web Design</a></p>
                    <p data-uw-styling-context="true">To sum up, we see that the role of a front-end developer in 2020
                        is much more complex than it used to be, and is evolving more and more. The website design
                        revolution has begun some years ago with the Javascript frameworks like AngluarJS, ReactJS and
                        now we’re seeing its effects. If a year ago a front-end developer would be considered the
                        “dummy” developers, that are all about colors and sizes, these days the myth has fallen. Being a
                        front-end web developer today means that you not only create the graphical user interface (GUI)
                        that enables access to the software’s back-end features and capabilities. It means that you are
                        an engineer who is responsible not just for the looks of a website, but for the functionality,
                        speed, and website data connections. Starting a career in front-end development has never been
                        so exciting and rewarding as it is today.</p>
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://sherocommerce.com/what-is-a-front-end-developer/&amp;display=popup&amp;ref=plugin&amp;src=share_button"
                           title="Share on Facebook" target="_blank" rel="nofollow noopener noreferrer"
                           className="shared-counts-button facebook shared-counts-no-count" data-postid="21610"
                           data-social-network="Facebook" data-social-action="Share"
                           data-social-target="https://sherocommerce.com/what-is-a-front-end-developer/"
                           data-wpel-link="external" data-uw-styling-context="true">
                         <span className="shared-counts-icon-label" data-uw-styling-context="true">
                            <span className="shared-counts-icon" data-uw-styling-context="true">
                               <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18.8125" height="32" viewBox="0 0 602 1024"
                                    data-uw-styling-context="true">
                                  <path
                    d="M548 6.857v150.857h-89.714q-49.143 0-66.286 20.571t-17.143 61.714v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571q0-106.286 59.429-164.857t158.286-58.571q84 0 130.286 6.857z"
                    data-uw-styling-context="true"/>
                               </svg>
                            </span>
                            <span className="sr-only" data-uw-styling-context="true">Facebook</span>
                         </span>
                        </a>
                        <a href="https://twitter.com/share?url=https://sherocommerce.com/what-is-a-front-end-developer/&amp;text=What%20is%20a%20front-end%20developer%20and%20how%20to%20think%20like%20one%3F"
                           title="Share on Twitter" target="_blank" rel="nofollow noopener noreferrer"
                           className="shared-counts-button twitter shared-counts-no-count" data-postid="21610"
                           data-social-network="Twitter" data-social-action="Tweet"
                           data-social-target="https://sherocommerce.com/what-is-a-front-end-developer/"
                           data-wpel-link="external" data-uw-styling-context="true">
         <span className="shared-counts-icon-label" data-uw-styling-context="true">
            <span className="shared-counts-icon" data-uw-styling-context="true">
               <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="29.71875" height="32" viewBox="0 0 951 1024"
                    data-uw-styling-context="true">
                  <path
    d="M925.714 233.143q-38.286 56-92.571 95.429 0.571 8 0.571 24 0 74.286-21.714 148.286t-66 142-105.429 120.286-147.429 83.429-184.571 31.143q-154.857 0-283.429-82.857 20 2.286 44.571 2.286 128.571 0 229.143-78.857-60-1.143-107.429-36.857t-65.143-91.143q18.857 2.857 34.857 2.857 24.571 0 48.571-6.286-64-13.143-106-63.714t-42-117.429v-2.286q38.857 21.714 83.429 23.429-37.714-25.143-60-65.714t-22.286-88q0-50.286 25.143-93.143 69.143 85.143 168.286 136.286t212.286 56.857q-4.571-21.714-4.571-42.286 0-76.571 54-130.571t130.571-54q80 0 134.857 58.286 62.286-12 117.143-44.571-21.143 65.714-81.143 101.714 53.143-5.714 106.286-28.571z"
    data-uw-styling-context="true"/>
               </svg>
            </span>
            <span className="sr-only" data-uw-styling-context="true">Tweet</span>
         </span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Post1;
