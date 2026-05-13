// // import Marquee from "react-fast-marquee";
// //  import { companies } from "../../Data/Data";


// // const Companies = () => {
// //     return <div  className="mt-20 pb-5 ">
// //         <div data-aos="zoom-out" className="text-4xl  md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-10 text-mine-shaft-100">Trusted By <span className="text-bright-sun-400">1000+</span> Companies</div>
// //         <Marquee pauseOnHover={true}>
// //             {
// //                 companies.map((company, index) => <div  key={index} className="mx-8 sm-mx:mx-6 xs-mx:mx-4 xsm-mx:mx-2 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
// //                     <img data-aos="zoom-out" className="h-14" src={`/Companies/${company}.png`} alt={company} />
// //                 </div>)
// //             }
// //         </Marquee>
// //     </div>
// // }
// // export default Companies;



// import MarqueeModule from "react-fast-marquee";
// import { companies } from "../../Data/Data";

// const Marquee = MarqueeModule.default || MarqueeModule;

// const Companies = () => {
//     return (
//         <div className="mt-20 pb-5">
//             <div className="text-4xl text-center font-semibold mb-10">
//                 Trusted By <span className="text-bright-sun-400">1000+</span> Companies
//             </div>

//             <Marquee pauseOnHover={true} speed={50}>
//                 {companies.map((company, index) => (
//                     <div
//                         key={index}
//                         className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer"
//                     >
//                         <img
//                             className="h-14"
//                             src={`/Companies/${company}.png`}
//                             alt={company}
//                         />
//                     </div>
//                 ))}
//             </Marquee>
//         </div>
//     );
// };

// export default Companies;


import MarqueeModule from "react-fast-marquee";
import { companies } from "../../Data/Data";

const Marquee = MarqueeModule.default || MarqueeModule;

const Companies = () => {
    return (
        <div
            className="relative mt-20 py-16"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* 🔥 Content */}
            <div className="relative z-10">
                <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-12 text-white">
                    Trusted By{" "}
                    <span className="text-yellow-400">1000+</span> Companies
                </div>

                <Marquee pauseOnHover={true} speed={60}>
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="mx-8 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition duration-300 cursor-pointer"
                        >
                            <img
                                className="h-12 object-contain"
                                src={`/Companies/${company}.png`}
                                alt={company}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Companies;