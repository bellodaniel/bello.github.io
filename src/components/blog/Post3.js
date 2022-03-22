import React, { useEffect } from "react";
import { useParams } from "react-router";
import magentoImage from '../../data/magento-development-1.svg';

function Post3() {
    let { postSlug } = useParams();

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
                            <h1 className="text-3xl uppercase mb-4">How to Get Started as a Magento Frontend Developer</h1>
                        </div>
                    </div>
                </div>

                <article data-uw-styling-context="true" className="max-w-3xl m-auto">
                    <p data-uw-styling-context="true">Being one of the most popular eCommerce platforms, Magento has been the favorite option for eCommerce developers for approximately one decade. However, it is a very complex framework and has a steep learning curve, especially in the beginning. Being a Magento frontend developer requires advanced skills as it practically forces developers to always follow the best practices. For example, executing JS dependencies via Require JS, keeping the balance between performance and page speed, or building apps with Knockout JS.</p>
                    <p data-uw-styling-context="true">This article will be focused on what does it mean to be a Magento frontend developer and what makes it different from the other frameworks. You will find practical and technical guides on how to start learning and get familiar with Magento.  The article will cover different aspects of the learning process. From learning methods to the best tools.</p>
                    <p data-uw-styling-context="true">Table of contents:<br data-uw-styling-context="true"/><a href="#why-magento" data-uw-styling-context="true">1. Why should you learn Magento</a><br data-uw-styling-context="true"/><a href="#stack" data-uw-styling-context="true">2. Technology stack</a><br data-uw-styling-context="true"/><a href="#technologies" data-uw-styling-context="true">2.1 Technologies you will need</a><br data-uw-styling-context="true"/><a href="#tools" data-uw-styling-context="true">2.2 The best tools to use</a><br data-uw-styling-context="true"/><a href="#techniques" data-uw-styling-context="true">3. Learning techniques</a><br data-uw-styling-context="true"/><a href="#resources" data-uw-styling-context="true">3.1 Online resources</a><br data-uw-styling-context="true"/><a href="#approach" data-uw-styling-context="true">4. My personal approach and how I got here</a><br data-uw-styling-context="true"/><a href="#best-advice" data-uw-styling-context="true">4.1 Best Practises</a></p>
                    <p data-uw-styling-context="true"></p>
                    <p data-uw-styling-context="true"></p>
                    <h2 id="why-magento"  data-uw-styling-context="true">1. Why should you learn Magento?</h2>
                    Magento 2 is one of the most exciting frameworks to learn. Being a Magento 2 frontend developer differs from the traditional meaning of the frontend developer. You are not only focused on styling the page elements or implementing cool and modern CSS animations. Instead, you need to understand the whole Magento frontend architecture, the layout structure, and the template rendering engine.
                    <p data-uw-styling-context="true"></p>
                    <p data-uw-styling-context="true">Furthermore, doing frontend work on Magento means that you work with the latest technologies and developments in the industry. My favorite aspect of being a Magento frontend developer is the variety of work. So many jobs require you to do the same tasks over, and over, and over. On Magento, one day you are building a furniture website, a week after you find yourself estimating a custom module for a jewelry store.</p>
                    <h2 id="stack"  data-uw-styling-context="true">2. Technology stack</h2>
                    <ul data-uw-styling-context="true">
                        Make sure you have a good understanding of the core technology stack used by Magento. To become a Magento frontend developer, you have to be able to apply the skills mentioned above to each of the core technologies that
                        Magento uses. The frontend technologies include HTML5, CSS3 (LESS CSS pre-processor), jQuery, RequireJS, Knockout.js etc. Please, review <a href="https://devdocs.magento.com/guides/v2.3/architecture/tech-stack.html" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">here </a>the
                        full list of the technologies Magento implements. There are a lot of resources on the web. However, I would like to suggest some of my favorites:
                        <ul data-uw-styling-context="true">
                            <li data-uw-styling-context="true"><a href="https://www.w3schools.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">W3Schools</a> is the base starting point for every web developer out there. It has tutorials for every web technology and most importantly it is up-to-date with the latest standards.</li>
                            <li data-uw-styling-context="true"><a href="https://css-tricks.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">CSS-Tricks</a> is my favorite blog to learn about CSS features and keep up to date with the latest innovations.</li>
                            <li data-uw-styling-context="true"> <a href="https://requirejs.org/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">RequireJS</a> and <a href="https://knockoutjs.com/documentation/introduction.html" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">KnockoutJS </a>official documentation. I always tend to follow the official documentation when it comes to
                                frameworks and both RequireJS and KnockoutJS have really detailed documentation and I suggest going through that prior to starting learning Magento.
                            </li>
                        </ul>
                    </ul>
                    <h2 id="technologies"  data-uw-styling-context="true">2.1 Technologies you will need</h2>
                    <ul data-uw-styling-context="true">
                        Third, after you can apply these fundamental concepts with those technologies, put your focus on the <a href="https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/bk-frontend-dev-guide.html" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Magento dev docs</a>, particularly
                        on the frontend area. Having good knowledge of the single technologies, dev docs guidelines will help you to create a clear idea of Magento frontend architecture, and understand how Magento uses those. There are a couple of online
                        courses that I would suggest to get familiar to Magento:
                        <ul data-uw-styling-context="true">
                            <li data-uw-styling-context="true"><a href="https://u.magento.com/core-principles-theming-magento2" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Magento U – Core theme principles</a> – a detailed overview of the theme components and how to customize a website’s look and feel.</li>
                            <li data-uw-styling-context="true"><a href="https://www.mage2.tv/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Mage2TV </a>– by far one of the best resources for Magento 2. It has a detailed overview of the Magento core files and covers different aspects, from cashing systems to UI components.</li>
                        </ul>
                    </ul>
                    <ul data-uw-styling-context="true">
                        <h2 id="tools"  data-uw-styling-context="true">2.2 The best tools to use</h2>
                        <p data-uw-styling-context="true">Working with Magento can easily get complex without using the right tools. The most reliable Magento development tools should help you get started and improve your efficiency. Using the best tools to help you save both time and effort.</p>
                        <li data-uw-styling-context="true"> <a href="https://www.jetbrains.com/phpstorm/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">PHPStorm</a> is one of the most popular code editors on the market. It is perfect for working with both backend and frontend technologies. It has a variety of developer tools, which help debug and perform different tasks.</li>
                        <li data-uw-styling-context="true"> <a href="https://www.docker.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Docker</a> Used for local application setup and development.</li>
                        <li data-uw-styling-context="true"> <a href="https://warden.dev/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Warden</a> CLI tool to help with the local enviroment.</li>
                        <li data-uw-styling-context="true"> <a href="https://github.com/netz98/n98-magerun2" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Magerun</a> Command line for Magento</li>
                        <li data-uw-styling-context="true"> <a href="https://www.sequelpro.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Sequel Pro</a> Database management application</li>
                        <li data-uw-styling-context="true"> <a href="https://github.com/magento/m2-devtools" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Magento 2 dev tools</a> Chrome or Firefox extension to help with Magento debugging.</li>
                    </ul>
                    <h2 id="techniques"  data-uw-styling-context="true">3. Learning techniques and resources</h2>
                    <ul data-uw-styling-context="true">
                        <li data-uw-styling-context="true"> I would strongly suggest using the divide and conquer strategy, break Magento down into small pieces, and focus on them one by one. There are many aspects when it comes to Magento’s frontend development and trying to master them all at once is extremely overwhelming. You need to review the items one by one. <br data-uw-styling-context="true"/> <br data-uw-styling-context="true"/> Let’s say you start looking at the Layout XML first, then if you feel comfortable with that, move on to template overrides, and then on to creating javascript modules, etc. Obviously, you should start with the easiest technologies,
                            HTML5 and CSS3. After you have a good understanding of these two technologies, you can proceed with JavaScript, PHP, and XML. It’s important to follow this order and not bypass things. Small things that you might ignore now, will cause problems later and you will be forced to get back to things.<br data-uw-styling-context="true"/> <br data-uw-styling-context="true"/>
                        </li>
                        <li data-uw-styling-context="true"> Explore blog posts and tutorials by popular, famous, and award-winning “Magento agencies” as well as well-known Magento extension developers. Seek for more specific Magento developers content, including specific Magento Q&amp;A on <a href="https://stackoverflow.com/questions/tagged/magento2" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">StackOverflow</a>, <a href="https://magento.stackexchange.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">StackExchange</a>, and official Magento developer <a href="https://community.magento.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">forums</a>.
                            Also, do a quick research for what you’re looking for, trying to describe the issue/feature as best as you can.
                        </li>
                    </ul>
                    <ul data-uw-styling-context="true">
                        <h2 id="resources"  data-uw-styling-context="true">3.1 Online resources</h2>
                        <li data-uw-styling-context="true"> With its wide recognition as one of the best eCommerce development platforms in the market, Magento has the most amazing community support. You can find various forums and networking events around the Magento platform. I would highly encourage you to get involved and get to know other Magento developers on social media platforms like Twitter or various forums. When you need help with issues that you encounter during development, you can get a lot of assistance from the community members and people you know.</li>
                        <li data-uw-styling-context="true"> Furthermore, Magento community has a slack <a href="https://magentocommeng.slack.com/" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">workspace</a> that you can register and get in touch with Magento developers all around the world. Also, review the Magento github repository and
                            keep up to date with the latest features or bug fixes.
                        </li>
                    </ul>
                    <h2 id="approach"  data-uw-styling-context="true">4. My personal approach and how I got here</h2>
                    <ul data-uw-styling-context="true">
                        <li data-uw-styling-context="true"> Do a Google search to find a specific Magento extension development company (or better yet, a specific Magento developer/person), and find something they did, similar to what you’re trying to achieve. For example, you can search for the most popular modules or themes on the market. After that, get their module’s/theme’s source code either directly from GitHub (if it’s available) or buy it from the Magento 2 Marketplace. Then divide that code line-by-line, read the explanations/comments, look at the documentation for it (if available). This will help you look at the big picture and understand how things are related to each other, how things function as a whole etc. Moreover, you’ll be surprised at how frequently you can reverse-engineer a custom feature or build a completely new feature from the bits and pieces of existing features you find and other open-source code.</li>
                        <li data-uw-styling-context="true"> Being an Open Source platform, Magento is preferred by many developers since they can extend the platform according to their needs. To start with and understand how Magento works, I would strongly advise <a href="https://magento.com/tech-resources/download" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">downloading Magento</a>, installing, and exploring the Magento core. Basically, for every question you might have, the answer is on the Magento core files. For example, let’s
                            explore the <a href="https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/js_mixins.html" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">JavaScript mixins</a>. Instead of Googling about it and searching on different websites, Its enough to get on the Magento
                            core files and see how Magento uses it. For example, the <a href="https://github.com/magento/magento2/blob/2.3/app/code/Magento/CheckoutAgreements/view/frontend/web/js/model/place-order-mixin.js" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">checkout agreements</a> mixin. It
                            offers a clear understanding of what a mixin is and how it is used. <br data-uw-styling-context="true"/> Moreover, there might be cases that what is provided by the original developers of the platform, is not enough. On such occasions, you can use the Magento modularity and extendability and make customizations.
                        </li>
                    </ul>
                    <ul data-uw-styling-context="true">
                        <h2 id="best-advice"  data-uw-styling-context="true">4.1 Practice makes perfect</h2>
                        <li data-uw-styling-context="true"> In my opinion, this is the most important piece of advice. While you’ve already mastered the core concepts and how they apply to Magento’s architecture, you have to put this knowledge into practice.
                            While learning by itself does lead to progress, new theoretical knowledge does not necessarily bring new skills. If you don’t have a Magento project to work on right now, you can try building modules or creating themes with a live
                            demo. Find the best extensions on the market and try to build the same functionality they offer. Then compare your code line-by-line with the original one, read the comments, etc. The same goes for Magento themes.<br data-uw-styling-context="true"/> Besides this, I would suggest starting from small tasks and gradually, make more and more difficult ones. You can start with tasks such as: <br data-uw-styling-context="true"/> – Add a product widget on the homepage.<br data-uw-styling-context="true"/> – Add a static block on the category page sidebar<br data-uw-styling-context="true"/> – Move the CMS block from top to bottom on the category page.<br data-uw-styling-context="true"/> – Create a custom tab on the product page<br data-uw-styling-context="true"/> After this, you can proceed with some more advanced tasks:<br data-uw-styling-context="true"/> – Add a new page on checkout.<br data-uw-styling-context="true"/> – Auto display the mini-cart popup when adding product to cart.<br data-uw-styling-context="true"/> <br data-uw-styling-context="true"/> Last, try to attend online workshops and training. There are many agencies or developers offering workshops. Some are Integer.net, MageMastery or Magenticians. Also, try to be active on social media, especially on Twitter and
                            LinkedIn. Try to find the most popular profiles and the best software engineers and make sure to follow them. They are always giving priceless advice and tutorials. Some of the best profiles to follow are <a href="https://twitter.com/josephmaxs" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Joseph Maxwell</a>, <a href="https://twitter.com/LBajsarowicz" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">Lukasz Bajsarowicz</a> or <a href="https://twitter.com/JohnHughes1984" data-wpel-link="external" rel="nofollow noopener" data-uw-styling-context="true">John Hughes</a>.
                        </li>
                    </ul>
                    <p data-uw-styling-context="true">To sum up, I would like to mention one of the best sayings for programming:</p>
                    <p data-uw-styling-context="true">“A language that doesn’t affect the way you think about programming is not worth knowing.”<br data-uw-styling-context="true"/>― Alan J. Perlis</p>
                    <p data-uw-styling-context="true">Magento goes perfectly in that direction. Being a Magento developer is much more than being a “normal” developer. It is challenging, “forces” you to think bigger and view things not only from the developer’s point of view.&nbsp;</p>
                    <p data-uw-styling-context="true">I hope this article will help you kick off your Magento frontend career and help you with some of the important aspects of that direction.</p>
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://sherocommerce.com/magento-2-frontend-developer/&amp;display=popup&amp;ref=plugin&amp;src=share_button" title="Share on Facebook" target="_blank" rel="nofollow noopener noreferrer" className="shared-counts-button facebook shared-counts-no-count" data-postid="21580" data-social-network="Facebook" data-social-action="Share" data-social-target="https://sherocommerce.com/magento-2-frontend-developer/" data-wpel-link="external" data-uw-styling-context="true">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18.8125" height="32" viewBox="0 0 602 1024" data-uw-styling-context="true">
                                <path d="M548 6.857v150.857h-89.714q-49.143 0-66.286 20.571t-17.143 61.714v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571q0-106.286 59.429-164.857t158.286-58.571q84 0 130.286 6.857z" data-uw-styling-context="true"></path>
                            </svg>
                            <span className="shared-counts-label sr-only" data-uw-styling-context="true">Facebook</span>
                        </a>
                        <a href="https://twitter.com/share?url=https://sherocommerce.com/magento-2-frontend-developer/&amp;text=How%20to%20Get%20Started%20as%20a%20Magento%202%20Frontend%20Developer" title="Share on Twitter" target="_blank" rel="nofollow noopener noreferrer" className="shared-counts-button twitter shared-counts-no-count" data-postid="21580" data-social-network="Twitter" data-social-action="Tweet" data-social-target="https://sherocommerce.com/magento-2-frontend-developer/" data-wpel-link="external" data-uw-styling-context="true">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="29.71875" height="32" viewBox="0 0 951 1024" data-uw-styling-context="true">
                                <path d="M925.714 233.143q-38.286 56-92.571 95.429 0.571 8 0.571 24 0 74.286-21.714 148.286t-66 142-105.429 120.286-147.429 83.429-184.571 31.143q-154.857 0-283.429-82.857 20 2.286 44.571 2.286 128.571 0 229.143-78.857-60-1.143-107.429-36.857t-65.143-91.143q18.857 2.857 34.857 2.857 24.571 0 48.571-6.286-64-13.143-106-63.714t-42-117.429v-2.286q38.857 21.714 83.429 23.429-37.714-25.143-60-65.714t-22.286-88q0-50.286 25.143-93.143 69.143 85.143 168.286 136.286t212.286 56.857q-4.571-21.714-4.571-42.286 0-76.571 54-130.571t130.571-54q80 0 134.857 58.286 62.286-12 117.143-44.571-21.143 65.714-81.143 101.714 53.143-5.714 106.286-28.571z" data-uw-styling-context="true"></path>
                            </svg>
                            <span className="shared-counts-label sr-only" data-uw-styling-context="true">Tweet</span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Post3;
