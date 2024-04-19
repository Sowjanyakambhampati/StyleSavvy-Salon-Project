import React from 'react';
/*function Home() {
    return (
        <div>
        </div>
    )
}
export default Home;*/
const Home = () => {
    return (
        <div className="w-full relative bg-white  overflow-hidden text-left text-mini text-black font-fira-sans">
            {/* making the image */}

            <div className='relative border-solid border-amber-700 border-8'>
                <img
                    className="w-full"
                    alt=""
                    src="/backgroundImage.png"
                />

                <img
                    className="absolute top-[30%] left-[30%]"
                    alt=""
                    width={300}
                    height={300}

                    src="/styleSavvywriting.png"
                />
            </div>



            {/* <div className="absolute top-[585px] left-[142px] text-[64px] tracking-[0.02em] capitalize font-alex-brush text-transparent !bg-clip-text [background:linear-gradient(#AD5133,_#AD5133),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[796px] h-[58px]">
                What Customers Say About Us
            </div>
            <div className="absolute top-[680px] left-[399px] w-[295px] h-[409px]">
                <div className="absolute top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
                <img
                    className="absolute top-[0px] left-[57px] rounded-[50%] w-[188px] h-[186px] object-cover"
                    alt=""
                    src="/ellipse-9@2x.png"
                />
                <div className="absolute top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    <img
                        src="testimonial1.webp"
                        className='rounded-full'
                        width={400}
                        height={400}
                    />
                    My stylist, Sarah, was an absolute gem! She took the time to listen to
                    my hair concerns and understand the look I wanted to achieve. She
                    asked insightful questions about my hair texture, styling routine, and
                    lifestyle to ensure that the haircut would suit me perfectly.
                </div>
                <div className="absolute top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
                    Rating: :star::star::star::star::star:
                </div>
            </div>
            <div className="absolute top-[680px] left-[43px] w-[295px] h-[409px]">
                <div className="absolute top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
                <img
                    className="absolute top-[0px] left-[57px] rounded-[50%] w-[188px] h-[186px] object-cover"
                    alt=""
                    src="/ellipse-9@2x.png"
                />
                <div className="absolute top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    I highly recommend StyleSavvy for men's haircuts. The professionalism,
                    skill, and attention to detail displayed by Jack and the entire team
                    make it the go-to destination for anyone seeking a top-notch haircut
                    experience. I'll definitely be returning for future haircuts!
                </div>
                <div className="absolute top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
                    Rating: :star::star::star::star::star:
                </div>
            </div>
            <div className="absolute top-[1128px] left-[209px] w-[295px] h-[409px]">
                <div className="absolute top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
                <img
                    className="absolute top-[0px] left-[57px] rounded-[50%] w-[188px] h-[186px] object-cover"
                    alt=""
                    src="/ellipse-9@2x.png"
                />
                <div className="absolute top-[194px] left-[50px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    The final result was beyond my expectations! Lily's hair looked
                    absolutely adorable, and she couldn't stop smiling when she saw
                    herself in the mirror. Sarah even gave her some cute hair accessories
                    as a special treat, which made Lily feel like a princess.
                </div>
                <div className="absolute top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
                    Rating: :star::star::star::star::star:
                </div>
            </div>
            <div className="absolute top-[1131px] left-[636px] w-[295px] h-[409px]">
                <div className="absolute top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
                <img
                    className="absolute top-[0px] left-[57px] rounded-[50%] w-[188px] h-[186px] object-cover"
                    alt=""
                    src="/ellipse-9@2x.png"
                />
                <div className="absolute top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    My nail artist, Sarah was a true artist! She took the time to listen
                    to my nail art ideas and preferences, offering valuable suggestions
                    and creative insights along the way. Her passion for her craft was
                    evident as she meticulously crafted each nail design with precision
                    and care.
                </div>
                <div className="absolute top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
                    Rating: :star::star::star::star::star:
                </div>
            </div>
            <div className="absolute top-[680px] left-[747px] w-[295px] h-[409px]">
                <div className="absolute top-[95px] left-[0px] bg-gainsboro w-[295px] h-[314px]" />
                <img
                    className="absolute top-[0px] left-[57px] rounded-[50%] w-[173px] h-[174px] object-cover"
                    alt=""
                    src="/ellipse-9@2x.png"
                />
                <div className="absolute top-[194px] left-[49px] tracking-[0.02em] inline-block w-[218px] h-[186px]">
                    Walking into StyleSavvy Salon, we were greeted warmly by the hair
                    stylist David, and the salon had a welcoming and kid-friendly
                    atmosphere. My son Ethan immediately felt at ease with the playful
                    decor and the friendly demeanor of the staff, which set a positive
                    tone for the haircut.
                </div>
                <div className="absolute top-[380px] left-[49px] tracking-[0.02em] inline-block w-[193px] h-[29px]">
                    Rating: :star::star::star::star::star:
                </div>
            </div>
            <img
                className="absolute top-[277px] left-[275px] w-[470px] h-[136px] object-cover"
                alt=""
                src="/stylesavvy-writingphotoroom-1@2x.png"
            /> */}
        </div>
    );
};
export default Home;













