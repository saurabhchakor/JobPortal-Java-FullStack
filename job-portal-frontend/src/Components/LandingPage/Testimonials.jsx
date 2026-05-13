// import { Avatar, Rating } from "@mantine/core";
// import { testimonials } from "../../Data/Data";

// const Testimonials = () => {
//     return <div className="mt-20 pb-5 p-5 overflow-hidden">
//         <div data-aos="zoom-out" className="text-4xl  md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-mine-shaft-100">What <span className="text-bright-sun-400">User</span> says about us?</div>
//         <div className="flex justify-evenly gap-5 md-mx:flex-wrap mt-10">
//         {
//             testimonials.map((data, index)=><div data-aos="zoom-in" key={index} className="flex flex-col gap-3 w-[23%] md-mx:w-[48%] xs-mx:w-full border-bright-sun-400 p-3 border rounded-xl">
//             <div className="flex gap-2 items-center">
//                 <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
//                 <div>
//                     <div className="text-lg sm-mx:text-base xs-mx:text-sm text-mine-shaft-100 font-semibold">{data.name}</div>
//                     <Rating value={data.rating} fractions={2} readOnly />
//                 </div>
//             </div>
//             <div className="text-xs text-mine-shaft-300">{data.testimonial}</div>
//         </div>)
//         }
//         </div>
        
//     </div>
// }
// export default Testimonials;



import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data";

const Testimonials = () => {
    return (
        <div
            className="relative mt-20 py-12 px-5 overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* 🔥 Content */}
            <div className="relative z-10">
                <div
                    data-aos="zoom-out"
                    className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-white"
                >
                    What <span className="text-yellow-400">User</span> says about us?
                </div>

                <div className="flex justify-evenly gap-5 md-mx:flex-wrap mt-10">
                    {testimonials.map((data, index) => (
                        <div
                            data-aos="zoom-in"
                            key={index}
                            className="flex flex-col gap-3 w-[23%] md-mx:w-[48%] xs-mx:w-full border border-yellow-400 p-4 rounded-xl bg-black/40 backdrop-blur-md hover:scale-105 transition duration-300"
                        >
                            <div className="flex gap-2 items-center">
                                <Avatar
                                    className="!h-14 !w-14"
                                    src="avatar.png"
                                    alt="user"
                                />
                                <div>
                                    <div className="text-lg sm-mx:text-base xs-mx:text-sm text-white font-semibold">
                                        {data.name}
                                    </div>
                                    <Rating value={data.rating} fractions={2} readOnly />
                                </div>
                            </div>

                            <div className="text-xs text-gray-300 leading-relaxed">
                                {data.testimonial}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;