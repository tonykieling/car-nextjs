// this is the original page - Server Side Render
// due to it (CSR), each time it is rendered, it goes to server and gets a new page,
// meaning it will be displayed at the page's top
// to fix that, it is needed to convert this page to CSR (Client Side Render), 
// which needes to set/change props passed through components 

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import { fetchCars } from './utils';
import { FilterProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';

export default async function Home({ searchParams }: { searchParams: FilterProps}) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || ""
    });
    
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold"> Car Catalogue </h1>
                <p>Explore the cars you like</p>
            </div>

            <div className="home__filters">
                <SearchBar />
                <div className="home__filter-container">
                    <CustomFilter title="fuel" options={fuels}/>
                    <CustomFilter title="year" options={yearsOfProduction}/>
                </div>
            </div>
            { !isDataEmpty
                ?
                    <section>
                        <div className="home__cars-wrapper">
                            { allCars?.map(car => <CarCard car={car}/>)}
                        </div>
                        
                        <ShowMore
                            pageNumber={(searchParams.limit || 10) / 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
                        />
                    </section>
                :
                    <div className='home__error-container'>
                        <h2 className='text-dash-black text-xl font-bold'>No results</h2>
                        {/* <p>{allCars?.message}</p> */}
                    </div>
            }
        </div>
    </main>
  )
}
