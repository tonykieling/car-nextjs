// import { headers } from "next/dist/client/components/headers";

import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, model, year, limit, fuel } = filters;

    const options = {
      method: 'GET',
      url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      headers: {
        'X-RapidAPI-Key': '84581c3d2amshdd59862577c893cp14200fjsn99f514301e73',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(options.url, {headers: options.headers });
        const result = await response.json();
        // console.log("result:::::::: ", result.length);
        return result;
    } catch (error) {
        console.error(error);
    }
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getImage");
    const {make, year, model} = car;
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullScreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);

    // console.log("URLLLLLLLLLLLLLL:::::::: ", url);
    // console.log("car:::::::: ", car);
    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathName;
}

