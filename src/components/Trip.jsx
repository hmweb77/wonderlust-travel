"use client"
import React from "react";
import TripCard from "./TripCard";
import Image from "next/image";
import image1 from "../app/assets/pexels-harrison-fitts-9503182.jpg"
import image2 from "../app/assets/pexels-james-lee-9326693.jpg"
import image3 from "../app/assets/pexels-philippe-serrand-14213488.jpg"
import image4 from "../app/assets/pexels-siegfried-poepperl-7928094.jpg"

const trips = [
    {
      id: 1,
      title: "Paris Getaway",
      price: "899",
      date: "2024-04-15",
      duration: "4 Days - 3 nights",
      location: "Canada",
      discount :"20%",
      description: "Experience the romance of Paris and visit the Eiffel Tower.",
      imageUrl: image1
    },
    {
      id: 2,
      title: "Exploring Tokyo",
      price: "1199",
      date: "2024-05-22",
      duration: "3 Days - 2 nights",
      location: "Canada",
      discount :"20%",
      description: "Dive into the futuristic cityscape of Tokyo and its rich culture.",
      imageUrl: image1
    },
    {
      id: 3,
      title: "Exploring lisbon",
      price: "3000",
      date: "2024-05-22",
      duration: "6 Days - 5 nights",
      location: "Canada",
      discount :"20%",
      description: "Dive into the futuristic cityscape of Tokyo and its rich culture.",
      imageUrl: image3
    },
    {
      id: 4,
      title: "Exploring Tokyo",
      price: "4000",
      date: "2024-05-22",
      duration: "6 Days - 5 nights",
      location: "USA",
      discount :"20%",
      description: "Dive into the futuristic cityscape of Tokyo and its rich culture.",
      imageUrl: image4
    },
    
  ];

  export default function Trip() {
    return (
      <div className="mt-10 max-w-[1300px] mx-auto p-2">
        <h2 className="text-3xl font-semibold">Recommendations</h2>
        <p className="text-xl font-medium text-gray-400">
          Best travel recommendations from around the world
        </p>
        <div className="cards-wrapper grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    );
  }
  
  