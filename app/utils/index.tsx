// import { headers } from "next/dist/client/components/headers";

export async function fetchCars() {
    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
      params: {model: 'corolla'},
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