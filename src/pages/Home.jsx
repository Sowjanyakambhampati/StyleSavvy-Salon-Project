// import React from 'react';

// /*function Home() {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Home;*/
// const Home = () => {
//     return (
//       <div className=" overflow-hidden text-left text-mini text-black font-fira-sans">
//         <img
//           className=" object-cover"
//           alt=""
//           src="/parallaxbackgroundwithhairsaloninterior-10779113827-1@2x.png"
//         />
//         <div className=" text-[64px] tracking-[0.02em] capitalize font-alex-brush text-transparent !bg-clip-text [background:linear-gradient(#ad5133,_#ad5133),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[796px] h-[58px]">
//           What Customers Say About Us
//         </div>
//         <div className="">
//           <div className=" bg-gainsboro " />
//           <img
//             className="rounded-[50%]  object-cover"
//             alt=""
//             src="/ellipse-9@2x.png"
//           />
//           <div className=" tracking-[0.02em] inline-block ">
//             My stylist, Sarah, was an absolute gem! She took the time to listen to
//             my hair concerns and understand the look I wanted to achieve. She
//             asked insightful questions about my hair texture, styling routine, and
//             lifestyle to ensure that the haircut would suit me perfectly.
//           </div>
//           <div className="tracking-[0.02em] inline-block ">
//             Rating: ⭐⭐⭐⭐⭐
//           </div>
//         </div>
//         <div className="">
//           <div className=" bg-gainsboro " />
//           <img
//             className="rounded-[50%]  object-cover"
//             alt=""
//             src="/ellipse-9@2x.png"
//           />
//           <div className="flex top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
//             I highly recommend StyleSavvy for men's haircuts. The professionalism,
//             skill, and attention to detail displayed by Jack and the entire team
//             make it the go-to destination for anyone seeking a top-notch haircut
//             experience. I'll definitely be returning for future haircuts!
//           </div>
//           <div className="flex top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
//             Rating: ⭐⭐⭐⭐⭐
//           </div>
//         </div>
//         <div className="flex top-[1128px] left-[209px] w-[295px] h-[409px]">
//           <div className="flex top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
//           <img
//             className="flex top-[0px] left-[57px] rounded-[50%] w-[188px] h-[186px] object-cover"
//             alt=""
//             src="/ellipse-9@2x.png"
//           />
//           <div className="flex top-[194px] left-[50px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
//             The final result was beyond my expectations! Lily's hair looked
//             absolutely adorable, and she couldn't stop smiling when she saw
//             herself in the mirror. Sarah even gave her some cute hair accessories
//             as a special treat, which made Lily feel like a princess.
//           </div>
//           <div className="flex top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
//             Rating: ⭐⭐⭐⭐⭐
//           </div>
//         </div>
//         <div className="flex top-[1131px] left-[636px] w-[295px] h-[409px]">
//           <div className="flex top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
//           <img
//             className="flex top-[0px] left-[57px] rounded-[50%] w-[188px] h-[186px] object-cover"
//             alt=""
//             src="/ellipse-9@2x.png"
//           />
//           <div className="flex top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
//             My nail artist, Sarah was a true artist! She took the time to listen
//             to my nail art ideas and preferences, offering valuable suggestions
//             and creative insights along the way. Her passion for her craft was
//             evident as she meticulously crafted each nail design with precision
//             and care.
//           </div>
//           <div className="flex top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
//             Rating: ⭐⭐⭐⭐⭐
//           </div>
//         </div>
//         <div className="flex top-[680px] left-[747px] w-[295px] h-[409px]">
//           <div className="flex top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
//           <img
//             className="flex top-[0px] left-[57px] rounded-[50%] w-[173px] h-[174px] object-cover"
//             alt=""
//             src="/ellipse-9@2x.png"
//           />
//           <div className="flex top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
//             Walking into StyleSavvy Salon, we were greeted warmly by the hair
//             stylist David, and the salon had a welcoming and kid-friendly
//             atmosphere. My son Ethan immediately felt at ease with the playful
//             decor and the friendly demeanor of the staff, which set a positive
//             tone for the haircut.
//           </div>
//           <div className="flex top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
//             Rating: ⭐⭐⭐⭐⭐
//           </div>
//         </div>
//         <img
//           className="flex top-[277px] left-[275px] w-[470px] h-[136px] object-cover"
//           alt=""
//           src="/stylesavvy-writingphotoroom-1@2x.png"
//         />
//       </div>
//     );
//   };
  
//   export default Home;
import React from 'react';

const Home = () => {
    return (
        <div className="w-full relative bg-white  overflow-hidden text-left text-mini text-black font-fira-sans">
            {/* making the image */}

            <div className='relative border-solid border-amber-700 border-8'>
                <img
                    className="w-full"
                    alt=""
                    src="/salonbg.png"
                />

                <img
                    className="rounded-[50%] w-[188px] h-[186px] object-cover"
                    alt=""
                    width={300}
                    height={300}

                    src="/styleSavvywriting.png"
                />
            </div>



            <div className="capitalize font-alex-brush text-transparent !bg-clip-text [background:linear-gradient(#AD5133,_#AD5133),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[796px] h-[58px]">
                What Customers Say About Us
            </div>

            <div className="space-x-10">
                <div className="tracking-[0.02em] inline-block w-[218px] h-[186px] gap-10">
                    <img
                        className="rounded-[50%] w-[188px] h-[186px] object-cover"
                        alt=""
                        src="/testimonial1.webp"
                    />
                    <p>
                        My stylist, Sarah, was an absolute gem! She took the time to listen to
                        my hair concerns and understand the look I wanted to achieve. She
                        asked insightful questions about my hair texture, styling routine, and
                        lifestyle to ensure that the haircut would suit me perfectly.
                    </p>
                    <p className="tracking-[0.02em] inline-block w-[193px] h-[29px]">
                        Rating: ⭐⭐⭐⭐
                    </p>
                </div>


                <div className="tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    <img
                        className="rounded-[50%] w-[188px] h-[186px] object-cover"
                        alt=""
                        src="/testimonial2.jpg"
                    />
                    <p>
                        Walking into StyleSavvy Salon, we were greeted warmly by the hair
                        stylist David, and the salon had a welcoming and kid-friendly
                        atmosphere. My son Ethan immediately felt at ease with the playful
                        decor and the friendly demeanor of the staff, which set a positive
                        tone for the haircut.
                    </p>
                    <p className="tracking-[0.02em] inline-block w-[193px] h-[29px]">
                        Rating: ⭐⭐⭐⭐⭐
                    </p>
                </div>

                <div className="tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    <img
                        className="rounded-[50%] w-[188px] h-[186px] object-cover"
                        alt=""
                        src="/testimonial3.jpg"
                    />
                    <p>
                        I highly recommend StyleSavvy for men's haircuts. The professionalism,
                        skill, and attention to detail displayed by Jack and the entire team
                        make it the go-to destination for anyone seeking a top-notch haircut
                        experience. I'll definitely be returning for future haircuts
                    </p>
                    <p className="tracking-[0.02em] inline-block w-[193px] h-[29px]">
                        Rating: ⭐⭐⭐⭐⭐
                    </p>
                </div>

                <div className="tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    <img
                        className="rounded-[50%] w-[188px] h-[186px] object-cover"
                        alt=""
                        src="/testimonial4.webp"
                    />
                    <p>
                        My nail artist, Sarah was a true artist! She took the time to listen
                        to my nail art ideas and preferences, offering valuable suggestions
                        and creative insights along the way. Her passion for her craft was
                        evident.
                    </p>
                    <p className="tracking-[0.02em] inline-block w-[193px] h-[29px]">
                        Rating: ⭐⭐⭐⭐⭐
                    </p>
                </div>

                <div className="tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    <img
                        className="rounded-[50%] w-[188px] h-[186px] object-cover"
                        alt=""
                        src="/testimonial5.jpg"
                    />
                    <p>
                        The final result was beyond my expectations! Lily's hair looked
                        absolutely adorable, and she couldn't stop smiling when she saw
                        herself in the mirror. Sarah even gave her some cute hair accessories
                        as a special treat, which made Lily feel like a princess.
                    </p>
                    <p className="tracking-[0.02em] inline-block w-[193px] h-[29px]">
                        Rating: ⭐⭐⭐⭐⭐
                    </p>
                </div>
            </div>

        </div>
    );
};
export default Home;