import Head from "next/head";
import Card from "../components/Card";
import { DashLayout } from "../layouts";
import { doctors } from "../data/doc_data.js";
import { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../components/Doctor/DoctorCard";
import { setCookie } from "nookies";
import { useRouter } from "next/router";


// 84bfa3ccab621c862d452474c9348176

type CityAndLocation = {
  city: string | null;
  location: string | null;
};

// 13abd01b3f1a468691d0fbb844821012
const Doctors = () => {

  const router = useRouter();

  const { speciality: routerSpeciality } = router.query;
  const { city: routerCity } = router.query;
  const [cityAndLocation, setCityAndLocation] = useState<CityAndLocation>({
    city: routerCity as string,
    location: null,
  });

  const [speciality, setSpeciality] = useState<string>(routerSpeciality as string);
  const [filteredDoctors, setFilteredDoctors] = useState<any>([]);

  const [location, setLocation] = useState<string>(" ");

  useEffect(() => {
    const getCityNameAndLocation = async (
      lat: number,
      lng: number,
      apiKey: string
    ) => {
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
        );
        console.log(response);
        const results = response.data.results;

        const city = results[0].components.city;
        console.log(city);
        const location = results[0].formatted;

        setCityAndLocation({ city, location });
        setCookie(null, "city", city, {
          maxAge: 30 * 24 * 60 * 60, // expires in 30 days
          path: "/",
        });

        setCookie(null, "location", location, {
          maxAge: 30 * 24 * 60 * 60, // expires in 30 days
          path: "/",
        });
        console.log(cityAndLocation);
      } catch (error) {
        console.error(error);
      }

    };

    const apiKey = "a8f0737f767c417b93e515ec9ce96649";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        getCityNameAndLocation(lat, lng, apiKey);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);


  const filterDoctors = (specialty: string, city: string) => {
    console.log(specialty, city);
    const filtered = doctors?.filter((doctor : any) => {
      return (
        doctor.Speciality.toLowerCase() === specialty?.toLowerCase() &&
        doctor.City.toLowerCase() === city?.toLowerCase()
      );
    });
    console.log(filtered);
    setFilteredDoctors(filtered);
  };

  useEffect(() => {
    filterDoctors(routerSpeciality as string, routerCity as string);
    console.log(filteredDoctors);
  }, [routerSpeciality, routerCity]);


  // console.log(doctors)

  return (
    <div className="">
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashLayout>
        <div className="m-4  ">
          <h1 className="text-4xl py-10 rounded-sm text-center text-white bg-indigo-600 font-medium">
            Find Doctors near you
          </h1>
          <div className="flex sm:flex-row flex-col sm:space-x-10 justify-center items-center">
            <div className="flex flex-col sm:w-1/2 w-full">
              <label className="text-xl font-medium p-5">Speciality <span className="bg-indigo-600 text-white p-3 rounded-lg">{routerSpeciality}</span></label>
            </div>
            <div className="flex flex-col sm:w-1/2 w-full">
              <label className="text-xl font-medium p-5">City <span className="bg-indigo-600 text-white p-3 rounded-lg">{routerCity}</span></label>
            </div>



          </div>
          <label className="text-xl font-medium p-5">Location</label>
          <input
          type="text"
          className="form-input w-1/2 m-3"
          value={location}
          onChange={(e) => { setLocation(e.target.value);
          }}
        />


          <p className="text-4xl my-3">
            <span className="font-bold">{filteredDoctors?.length}</span> Results
            Found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-x-5 gap-y-5">
            {filteredDoctors?.map((doctor: any, index: any) => {
              if (doctor.Address.toLowerCase().includes(location.toLowerCase())) {
                return (
              <DoctorCard
                key={index}
                name={doctor.Name}
                speciality={doctor.Speciality}
                degree={doctor.Degree}
                yearOfExperience={doctor.Year_of_experience}
                dpScore={doctor.dp_score}
                address={doctor.Address}
                city={doctor.City}
                days={doctor.Days}
                description={doctor.Desc}
                imageLink={doctor.Image_Link}
                profileLink={doctor.Link}
                location={doctor.Location}
                time={doctor.Time}
                consultationFee={doctor.consultation_fee}
                npv={doctor.npv}
              />
                )
            }
          })}
          </div>
        </div>
      </DashLayout>
    </div>
  );
};

export default Doctors;
