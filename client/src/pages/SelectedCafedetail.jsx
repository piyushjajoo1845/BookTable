import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cafeCommonData, cafesDD, facilityIcons } from "../assets/assets";
import StarRating from "../components/StarRating";
import { assets } from "../assets/assets";

const SelectedCafedetail = () => {
  const { id } = useParams();
  const [cafe, setCafe] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const cafe = cafesDD.find((cafe) => cafe._id === id);
    cafe && setCafe(cafe);
    cafe && setMainImage(cafe.images[0]);
  }, []);

  return (
    cafe && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* cafe details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 ">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {cafe.Cafe.name}{" "}
            <span className="font-inter text-sm ">({cafe.cafeTheme})</span>
          </h1>
        </div>

        {/* cafe rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">300 + reviews</p>
        </div>

        {/* cafe address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{cafe.Cafe.address}</span>
        </div>

        {/* cafe images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="cafe-image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {cafe?.images.length > 1 &&
              cafe.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="cafe-image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image &&
                    "outline-3 shadow-md-black outline-blue-400"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* cafe highlights */}
        <div className="flex flex-col md:flex-row mt-10 md:justify-between ">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Coffee. Vibes. An experience like no other.
            </h1>

            <div className="flex fleex-wrap items-center mt-3 mb-6 gap-4">
              {cafe.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#D9EAFD] "
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* cost per person */}
          <p className="text-2xl font-medium">${cafe.costPerPerson}/ person</p>
        </div>

        {/* checkIn checkout form */}
        <form
          className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white
      shadow-md p-6 rounded-xl mx-auto mt-16 max-w-6xl"
        >
          {/* booking date and guests div */}
          <div className="flex flex-row items-center gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="bookingDate" className="font-medium">
                Booking Date
              </label>
              <input
                type="date"
                id="bookingDate"
                placeholder="Date"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                min="1"
                max="10"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                placeholder="0"
                type="number"
                required
              />
            </div>
          </div>
          {/* button */}
          <button
            type="submit"
            className="bg-primary
                hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
          >
            Check Availability
          </button>
        </form>

        <div className="flex flex-col md:flex-row md:gap-40">
          {/* common specifications */}
          <div className="mt-25 space-y-4">
            {cafeCommonData.map((spec, index) => (
              <div key={index} className="flex items-start gap-2">
                <img
                  src={spec.icon}
                  alt={`${spec.title}-icon`}
                  className="w-6.5"
                />
                <div>
                  <p className="text-base">{spec.title}</p>
                  <p className="text-gray-500">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* contact now  */}
          <div>
            {/* name of cafe and its reviews in star */}
            <div className="flex flex-row mt-25">
              <img
                className="w-14 h-14 md:h-18 md:w-18 rounded-full "
                // src={mainImage}
                src={cafe.Cafe.owner.image}
                alt="img-icon"
              />
              <div className="flex flex-col px-5 space-y-2 ">
                <div className="font-bold font-playfair">{cafe.Cafe.name}</div>
                <div className="flex flex-row">
                  <StarRating />
                  <span className=" hidden lg:block md:text-sm px-5  ">300+ reviews</span>
                </div>
              </div>
            </div>
            <button className="bg-primary text-white rounded-md px-6 py-4 cursor-pointer mt-4">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SelectedCafedetail;
