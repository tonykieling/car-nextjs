// "use client";

// import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
// import { fetchCars } from './utils';
// import { FilterProps } from '@/types';
// import { fuels, yearsOfProduction } from '@/constants';
// import { useEffect, useState } from 'react';
// import { clearPreviewData } from 'next/dist/server/api-utils';
// import Image from 'next/image';

// export default function Home() {
//     const [allCars, setAllCars] = useState([]);
//     const [loading, setLoading] = useState(false);
    
//     // search states
//     const [manufacturer, setManufacturer] = useState("");
//     const [model, setModel] = useState("");

//     // filter states
//     const [fuel, setFuel] = useState("");
//     const [year, setYear] = useState(2022);

//     // pagination stattes
//     const [limit, setLimit] = useState(10);


//     useEffect(() => {
//         const getAllCars = async() => {
//             setLoading(true);
//             try {
//                 const allCars = await fetchCars({
//                     manufacturer: manufacturer || "",
//                     year: year || 2022,
//                     fuel: fuel || "",
//                     limit: limit || 10,
//                     model: model || ""
//                 });
//                 console.log("allCars::: ", allCars);
//             } catch(error) {
//                 console.log("###ERROR: ", error);
//             } finally {
//                 setLoading(false);
//             }
//             // await fetchCars({manufacturer: "ma", year: 2024, fuel: "ev", limit: 11, model: "mo"});
//             // console.log("running getAllCars!!!!!!!!!!!! - TK: ", process.env.NEXT_PUBLIC_CAR_API_Key, process.env.NEXT_PUBLIC_CAR_API_Host);
//         }

//         getAllCars();
//     }, [manufacturer, fuel, year, model]);

//     const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

//   return (
//     <main className="overflow-hidden">
//         <Hero />

//         <div className="mt-12 padding-x padding-y max-width" id="discover">
//             <div className="home__text-container">
//                 <h1 className="text-4xl font-extrabold"> Car Catalogue </h1>
//                 <p>Explore the cars you like</p>
//             </div>

//             <div className="home__filters">
//                 <SearchBar
//                     setManufacturer={setManufacturer}
//                     setModel={setModel}
//                 />
//                 <div className="home__filter-container">
//                     <CustomFilter title="fuel" options={fuels} setFilter={setFuel/>
//                     <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear/>
//                 </div>
//             </div>
//             { !isDataEmpty
//                 ?
//                     <section>
//                         <div className="home__cars-wrapper">
//                             { allCars?.map(car => <CarCard car={car}/>)}
//                         </div>

//                         {loading &&
//                             <div className="mt-16 w-full flex-center">
//                                 <Image
//                                     src="/loader.svg"
//                                     alt='loader'
//                                     width={50}
//                                     height={50}
//                                     className='object-contain'
//                                 />
//                             </div>
//                         }
                        
//                         <ShowMore
//                             pageNumber={limit / 10}
//                             isNext={limit > allCars.length}
//                             setLimit={setLimit}
//                         />
//                     </section>
//                 :
//                     <div className='home__error-container'>
//                         <h2 className='text-dash-black text-xl font-bold'>No results</h2>
//                         {/* <p>{allCars?.message}</p> */}
//                     </div>
//             }
//         </div>
//     </main>
//   )
// }
