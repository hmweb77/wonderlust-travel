import Image from 'next/image';

export default function TripCard({ trip }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <Image src={trip.imageUrl} alt={trip.title}  style={{ objectFit: 'cover' }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{trip.title}</h2>
        <p>Tour package {trip.duration} with a tour guide.</p>
        <p> {trip.date}</p>
        <p>{trip.location}</p>
        {/* <div className="badge badge-error">{trip.discount}</div> */}
        <div className="flex justify-between items-center my-4">
          <span className="text-3xl font-bold">${trip.price}</span>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Details</button>
          <button className="btn btn-accent">Book Now</button>
        </div>
      </div>
    </div>
  );
}















