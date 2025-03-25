import { DetailsSection } from "./details-section";
import { SectionWrapper } from "./section-wrapper";

import barAndRestaurant from "@/assets/images/bar-and-restaurant.jpg";
import conferenceRoom from "@/assets/images/conference-room.jpg";
import cover from "@/assets/images/hotel.jpg";
import rooms from "@/assets/images/rooms.jpg";
import wine from "@/assets/images/wine.jpg";

export const Sections = () => {
  return (
    <>
      <SectionWrapper
        image={cover}
        to="/about-us"
        title="სასტუმრო"
        description="Shota Rustaveli Boutique Hotel ორიგინალური სტილითა და კონცეფციით
            გამორჩეული სასტუმროა. თანამედროვე, სადა და დახვეწილი დიზაინი
            თავიდანვე მიიქცევს თქვენს ყურადღებას."
      />

      <SectionWrapper
        image={rooms}
        to="/rooms"
        title="ოთახები"
        description="პასტელურ ფერებში გადაწყვეტილი ინტერიერი და ხის მასალის სიჭარბე თბილ და სასიამოვნო გარემოს ქმნის და სახლის სიმყუდროვეს სძენს აქაურობას."
      />

      <SectionWrapper
        image={barAndRestaurant}
        to="/bar-and-restaurant"
        title="ბარი & რესტორანი"
        description="რესტორანი აქცენტს კლასიკურ ქართულ და იტალიურ სამზარეულოზე აკეთებს. ახალი, ადგილობრივი პროდუქტებისგან მომზადებული უგემრიელესი კერძები ყველაზე პრეტენზიულ გურმანებსაც არ დატოვებს გუგრილს."
      />

      <div className="flex items-center justify-center w-screen h-screen">
        <DetailsSection
          image={conferenceRoom}
          title="შეხვედრების ოთახი"
          to="/"
        />
        <DetailsSection image={wine} title="ღსვინის მაღაზია" to="/" />
      </div>
    </>
  );
};
