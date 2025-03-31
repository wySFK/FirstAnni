
import React, { useState } from 'react';
import { Heart, Calendar, Star, Gift, Cake, Music, Coffee, Camera, Map, MessageSquare, Phone } from "lucide-react";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface SweetMoment {
  id: number;
  date: string;
  title: string;
  description?: string;
  icon: 'heart' | 'star' | 'gift' | 'calendar' | 'cake' | 'music' | 'coffee' | 'camera' | 'map' | 'message' | 'phone';
}

const sweetMoments: SweetMoment[] = [
  {
    id: 1,
    date: "2024-02-14",
    title: "Valentines day. Our first date and holding hands<3.",
    description: "The day our journey began together, holding hands for the first time.",
    icon: 'heart'
  },
  {
    id: 2,
    date: "2024-02-20",
    title: "Second date nato nag unli wings ta og nag Abreeza.",
    description: "Enjoying unlimited wings at Abreeza mall together.",
    icon: 'star'
  },
  {
    id: 3,
    date: "2024-02-21",
    title: "Our Third date sa Abreeza nag manginasal og milktea.",
    description: "Mang Inasal and milk tea at Abreeza - perfect combination.",
    icon: 'coffee'
  },
  {
    id: 4,
    date: "2024-02-22",
    title: "Our fourth date sa Abreeza nag Greenwich us og milktea.",
    description: "Greenwich pizza and milk tea at Abreeza mall.",
    icon: 'cake'
  },
  {
    id: 5,
    date: "2024-03-06",
    title: "Our fifth date sa Abreeza nag cinema us.",
    description: "Watching a movie together at the cinema in Abreeza.",
    icon: 'camera'
  },
  {
    id: 6,
    date: "2024-03-11",
    title: "Our sixth date sa nag Abreeza og milktea.",
    description: "Another wonderful day with milk tea at Abreeza mall.",
    icon: 'coffee'
  },
  {
    id: 7,
    date: "2024-03-15",
    title: "Our seventh date sa near Victoria Chowking tas park.",
    description: "Chowking near Victoria and then spending time at the park.",
    icon: 'map'
  },
  {
    id: 8,
    date: "2024-03-19",
    title: "Our eighth date sa may Doña Vicenta Park.",
    description: "A lovely day at Doña Vicenta Park.",
    icon: 'map'
  },
  {
    id: 9,
    date: "2024-03-21",
    title: "Our ninth date sa Chowking tas Doña Vicenta Park",
    description: "Chowking and then spending time at Doña Vicenta Park.",
    icon: 'star'
  },
  {
    id: 10,
    date: "2024-04-01",
    title: "Our tenth date, the day of our first kiss, og atong moment we became a couple",
    description: "A special day when we had our first kiss and officially became a couple.",
    icon: 'heart'
  },
  {
    id: 11,
    date: "2024-04-03",
    title: "Our eleventh date, Doña Vicenta Park nag order og McDo",
    description: "McDonalds at Doña Vicenta Park.",
    icon: 'gift'
  },
  {
    id: 12,
    date: "2024-04-04",
    title: "Our twelfth date, Doña Vicenta Park nangaon ta og BBQ near sa park",
    description: "BBQ near Doña Vicenta Park.",
    icon: 'gift'
  },
  {
    id: 13,
    date: "2024-04-09",
    title: "Our thirteenth date, nag watch tag cine sa Abreeza tapos nangaon sa may Doña Vicenta Park",
    description: "Movie at Abreeza and dinner at Doña Vicenta Park.",
    icon: 'camera'
  },
  {
    id: 14,
    date: "2024-04-11",
    title: "Our fourteenth date, ni adto tag Victoria nag milktea then nangaon sa Chowking og nag park",
    description: "Milk tea at Victoria, dinner at Chowking, and time at the park.",
    icon: 'coffee'
  },
  {
    id: 15,
    date: "2024-04-12",
    title: "Our fifteenth date, ni adto tag Victoria nag eat ta dapit food hall then ni adto sa park",
    description: "Eating at the food hall in Victoria and visiting the park.",
    icon: 'cake'
  },
  {
    id: 16,
    date: "2024-04-16",
    title: "Our sixteenth date, ni kaon ta sa Jabee near Victoria then park",
    description: "Jollibee near Victoria and time at the park.",
    icon: 'gift'
  },
  {
    id: 17,
    date: "2024-05-01",
    title: "Our first monthsary my loveeee",
    description: "Celebrating our first month together!",
    icon: 'heart'
  },
  {
    id: 18,
    date: "2024-05-02",
    title: "Our eighteenth date my loveee celebrating our first monthsary sainyohaaa",
    description: "Celebrating our first monthsary at your place.",
    icon: 'cake'
  },
  {
    id: 19,
    date: "2024-05-08",
    title: "Our twentieth date my loveee sainyoha dapit nakig overnight akooo",
    description: "Overnight stay at your place.",
    icon: 'star'
  },
  {
    id: 20,
    date: "2024-05-09",
    title: "Our twenty-first date my loveee sainyoha gihapon ni uwi ako mga gabie nasaaad",
    description: "Another lovely night at your place.",
    icon: 'star'
  },
  {
    id: 21,
    date: "2024-05-10",
    title: "Our twenty-second loveee sainyoha gihapooon",
    description: "Spending more time at your place.",
    icon: 'heart'
  },
  {
    id: 22,
    date: "2024-05-11",
    title: "Our twenty-third loveee sainyoha gihapooon akooooo",
    description: "Another wonderful day together at your place.",
    icon: 'heart'
  },
  {
    id: 23,
    date: "2024-05-16",
    title: "Our twenty-fourth date loveee sa Abreeza nag Jabee us",
    description: "Enjoying Jollibee at Abreeza together.",
    icon: 'gift'
  },
  {
    id: 24,
    date: "2024-05-25",
    title: "Our twenty-fifth date loveee sa Abreeza unya na meet mo mama ko",
    description: "Special day at Abreeza when you met my mom.",
    icon: 'heart'
  },
  {
    id: 25,
    date: "2024-05-29",
    title: "Our twenty-sixth date loveee sa Dmorvie tayooo heheh",
    description: "Our movie date at Dmorvie.",
    icon: 'camera'
  },
  {
    id: 26,
    date: "2024-05-31",
    title: "Our twenty-seventh date loveee celebrating inyong pinning",
    description: "Celebrating your special pinning ceremony.",
    icon: 'star'
  },
  {
    id: 27,
    date: "2024-06-09",
    title: "Our twenty-eighth date loveee sa Dmorvie us unya nangaon dapit Claveriaa",
    description: "Movie at Dmorvie and food at Claveria.",
    icon: 'camera'
  },
  {
    id: 28,
    date: "2024-06-09",
    title: "Our twenty-ninth date loveee sa may The Orchard dapit Bonifacio then nag Dmorvie us after",
    description: "Visiting The Orchard at Bonifacio, followed by a movie at Dmorvie.",
    icon: 'map'
  },
  {
    id: 29,
    date: "2024-06-12",
    title: "Our thirtieth date loveee sa may Christianitea dapit Iñigo St tapos nag inn tayo sa may Claveria love",
    description: "Christianitea at Iñigo St and staying at an inn in Claveria.",
    icon: 'coffee'
  },
  {
    id: 30,
    date: "2024-07-01",
    title: "Our fortieth date loveee celebrating atong 3rd monthsary sa Dmorvie us og nag eat sa Chicken ni Bai",
    description: "Celebrating our 3rd monthsary at Dmorvie and eating at Chicken ni Bai.",
    icon: 'cake'
  },
  // Adding more dates from here
  {
    id: 31,
    date: "2024-07-06",
    title: "Our fiftieth date loveee sa Dmorvie us then nag Jabee sa Bonifacio",
    description: "Movie at Dmorvie and Jollibee at Bonifacio.",
    icon: 'camera'
  },
  {
    id: 32,
    date: "2024-07-07",
    title: "Our sixtieth date loveee sa Crocodile Park spending time nila Ate, Bogyeong og Bogeun",
    description: "Visiting Crocodile Park with Ate, Bogyeong, and Bogeun.",
    icon: 'map'
  },
  {
    id: 33,
    date: "2024-07-13",
    title: "Our seventieth date loveee sa inyong balay spending time nila Ate, Bogyeong og Bogeun og meeting kay Kuya",
    description: "Spending time at your house with Ate, Bogyeong, Bogeun, and meeting Kuya.",
    icon: 'heart'
  },
  {
    id: 34,
    date: "2024-07-21",
    title: "Our eightieth date loveee Dmorvie tas nangukay og Jollibee",
    description: "Movie at Dmorvie and eating at Jollibee.",
    icon: 'camera'
  },
  {
    id: 35,
    date: "2024-07-26",
    title: "Our ninetieth date loveee Dmorvie tas nangukay og Jollibee",
    description: "Another movie at Dmorvie and Jollibee meal.",
    icon: 'camera'
  },
  {
    id: 36,
    date: "2024-07-29",
    title: "Our twentieth date loveee sa Abreeza tas nag spend time together sainyoha love unya nakig sleep ako",
    description: "Abreeza mall and spending time together at your place where I stayed over.",
    icon: 'heart'
  },
  {
    id: 37,
    date: "2024-07-30",
    title: "Our twenty-first date loveee sa Abreeza tas nag spend time together sainyoha love unya nakig sleep ako",
    description: "Another day at Abreeza mall and staying at your place.",
    icon: 'heart'
  },
  {
    id: 38,
    date: "2024-08-01",
    title: "Our twenty-second date loveee celebrating atong 4th monthsary of our love and nag eat tas sa Ssamjang, nag simba after unya sa park",
    description: "Celebrating our 4th monthsary at Ssamjang, then church, and the park.",
    icon: 'cake'
  },
  {
    id: 39,
    date: "2024-08-06",
    title: "Our twenty-third date loveee celebrating akong birthday sa vikings SM lanang then ni adto tag Palm Drivers Inn tapos spend alot of time didtoa",
    description: "Celebrating my birthday at Vikings SM Lanang and spending time at Palm Drivers Inn.",
    icon: 'cake'
  },
  {
    id: 40,
    date: "2024-08-09",
    title: "Our twenty-fourth date sa SNR ta my loveee nangaon ta dapit Abreeza then walk tas nag tabi",
    description: "Shopping at SNR, eating at Abreeza, and taking a nice walk while talking.",
    icon: 'gift'
  },
  // Adding more dates would continue here...
  // I'll add more to get to around 80 total
  {
    id: 41,
    date: "2024-08-12",
    title: "Our twenty-fifth date samay CityGate mall nag watch ta og cine It ends with us then nag adto og ncc mall nag arcade then nag mang inasal",
    description: "Watching 'It Ends With Us' at CityGate mall, arcade at NCC mall, and eating at Mang Inasal.",
    icon: 'camera'
  },
  {
    id: 42,
    date: "2024-08-14",
    title: "Our twenty-sixth date nag Victoria nag suroy2 ta lovee tapos ngaon sa jabee near victoria",
    description: "Exploring Victoria and eating at Jollibee nearby.",
    icon: 'map'
  },
  {
    id: 43,
    date: "2024-08-15",
    title: "Our twenty-eighth date nag Victoria tapos nag jabee again",
    description: "Another day at Victoria and Jollibee.",
    icon: 'gift'
  },
  {
    id: 44,
    date: "2024-08-19",
    title: "Our twenty-nine date nag Palm drive ta lovee tapos nag order og food then uwi",
    description: "Palm Drive visit, ordering food to-go, and heading home.",
    icon: 'coffee'
  },
  {
    id: 45,
    date: "2024-08-24",
    title: "Our thirtieth date nag mang inasal ta lovee near victoria",
    description: "Eating at Mang Inasal near Victoria.",
    icon: 'gift'
  },
  {
    id: 46,
    date: "2024-08-27",
    title: "Our thirty-first date sainyong balay my lovee",
    description: "Spending time at your house.",
    icon: 'heart'
  },
  {
    id: 47,
    date: "2024-08-30",
    title: "Our thirty-second date loveee celebrating imong birthday palm drive tapos nag vikings us",
    description: "Celebrating your birthday at Palm Drive and Vikings.",
    icon: 'cake'
  },
  {
    id: 48,
    date: "2024-09-02",
    title: "Our thirty-third date loveee sa palm drive ra us ani tas order ra food",
    description: "Simple date at Palm Drive, just ordering food.",
    icon: 'coffee'
  },
  {
    id: 49,
    date: "2024-09-04",
    title: "Our thirty-fourth date loveee ni adto ko sainyoha tas ni uwi ko pagka ugma sep 5",
    description: "Visit to your place and stayed until the next day (Sep 5).",
    icon: 'heart'
  },
  {
    id: 50,
    date: "2024-09-10",
    title: "Our thirty-fifth date lolovee ni adto ko sainyong balay naki tulog again tas ni uwi pagka ugma sep 11",
    description: "Another visit to your place, staying overnight until Sep 11.",
    icon: 'heart'
  },
  {
    id: 51,
    date: "2024-09-12",
    title: "Our thirty-sixth date lolovee nag meet tas sa victoria ni kaon sa foodhall then nag ukay og naay gi palit kay bogyeong tas bogeun",
    description: "Meeting at Victoria, eating at the food hall, and shopping for Bogyeong and Bogeun.",
    icon: 'gift'
  },
  {
    id: 52,
    date: "2024-09-16",
    title: "Our thirty-seventh date lovee sa may Palm drive",
    description: "Another date at Palm Drive.",
    icon: 'coffee'
  },
  {
    id: 53,
    date: "2024-09-30",
    title: "Our thirty-eight date lovee sa may Palm drive celebrating atong 6th monthsary",
    description: "Celebrating our 6th monthsary at Palm Drive.",
    icon: 'cake'
  },
  {
    id: 54,
    date: "2024-10-03",
    title: "Our thirty-ninth date lolove sa may Palm drive",
    description: "Another lovely date at Palm Drive.",
    icon: 'coffee'
  },
  {
    id: 55,
    date: "2024-10-08",
    title: "Our thirty-tenth date sa may abreeza nag jabee us and nag food hall",
    description: "Jollibee and food hall at Abreeza mall.",
    icon: 'gift'
  },
  // Adding more entries would continue here...
  // Let's add a few more to reach a good amount
  {
    id: 56,
    date: "2024-10-09",
    title: "Our fourty-first date my lolove sa victoria plaza food hall",
    description: "Enjoying the food hall at Victoria Plaza.",
    icon: 'coffee'
  },
  {
    id: 57,
    date: "2024-10-10",
    title: "Our fourty-second date my lolove sa may Palm drive",
    description: "Another special date at Palm Drive.",
    icon: 'heart'
  },
  {
    id: 58,
    date: "2024-10-14",
    title: "Our fourty-third date my loveey sa may Palm drive",
    description: "Palm Drive date with my love.",
    icon: 'heart'
  },
  {
    id: 59,
    date: "2024-10-16",
    title: "Our fourty-fourth date my lolove jabee near victoria gikan ta ncgc ani with nadine",
    description: "Jollibee near Victoria after NCGC with Nadine.",
    icon: 'gift'
  },
  {
    id: 60,
    date: "2024-10-18",
    title: "Our fourty-fifth date my loveey sa may palm drive tayoo",
    description: "Another wonderful time at Palm Drive.",
    icon: 'coffee'
  },
  {
    id: 61,
    date: "2025-01-01",
    title: "Our sixty fifth date nakig sleep sa balay sakong my lolove tas celebrate new year together",
    description: "Staying at my place and celebrating New Year together.",
    icon: 'star'
  },
  {
    id: 62,
    date: "2025-01-07",
    title: "Our sixty sixth date nakig sleep sa balay sakong my lolove",
    description: "Another overnight stay at my place.",
    icon: 'heart'
  },
  {
    id: 63,
    date: "2025-01-08",
    title: "Our sixty seventh date nakig sleep sa balay sakong my wifeee",
    description: "Spending the night at my place with my wife.",
    icon: 'heart'
  },
  {
    id: 64,
    date: "2025-01-09",
    title: "Our sixty eighth date nakig sleep sa balay sakong my loving wifeee",
    description: "Another wonderful night spent together at my place.",
    icon: 'heart'
  },
  {
    id: 65,
    date: "2025-01-10",
    title: "Our sixty ninth date nakig sleep sa balay sakong my loving beautiful wifeee",
    description: "Staying together at my place, loving every moment.",
    icon: 'heart'
  }
];

const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'heart': return <Heart className="text-mono-800" />;
    case 'star': return <Star className="text-mono-800" />;
    case 'gift': return <Gift className="text-mono-800" />;
    case 'calendar': return <Calendar className="text-mono-800" />;
    case 'cake': return <Cake className="text-mono-800" />;
    case 'music': return <Music className="text-mono-800" />;
    case 'coffee': return <Coffee className="text-mono-800" />;
    case 'camera': return <Camera className="text-mono-800" />;
    case 'map': return <Map className="text-mono-800" />;
    case 'message': return <MessageSquare className="text-mono-800" />;
    case 'phone': return <Phone className="text-mono-800" />;
    default: return <Heart className="text-mono-800" />;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const TimelineSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const momentsPerPage = 12;
  
  // Calculate the moments to display on the current page
  const indexOfLastMoment = currentPage * momentsPerPage;
  const indexOfFirstMoment = indexOfLastMoment - momentsPerPage;
  const currentMoments = sweetMoments.slice(indexOfFirstMoment, indexOfLastMoment);
  
  // Calculate total pages
  const totalPages = Math.ceil(sweetMoments.length / momentsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-dancing font-bold mb-4 text-gradient">
            Our Moments Together
          </h1>
          <p className="text-mono-700 max-w-xl mx-auto">
            Every date with you is a precious memory I'll treasure forever
          </p>
          <p className="text-mono-600 mt-2">
            Showing page {currentPage} of {totalPages} ({sweetMoments.length} memories)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentMoments.map((moment) => (
            <Card 
              key={moment.id}
              className="bg-white border border-mono-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-mono-100 flex items-center justify-center">
                    {getIcon(moment.icon)}
                  </div>
                  <span className="text-sm text-mono-500 font-medium">{formatDate(moment.date)}</span>
                </div>
                <CardTitle className="text-xl font-playfair font-bold text-mono-800">{moment.title}</CardTitle>
              </CardHeader>
              
              {moment.description && (
                <CardContent>
                  <p className="text-mono-600">{moment.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(currentPage - 1)} 
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}
            
            {pageNumbers.map(number => (
              <PaginationItem key={number}>
                <PaginationLink 
                  isActive={number === currentPage} 
                  onClick={() => setCurrentPage(number)}
                  className="cursor-pointer"
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(currentPage + 1)} 
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>

        <div className="text-center mt-12">
          <p className="text-mono-600 italic">
            These are atong momnets totgether my loveey. 
            With many more memories to create satong future and I love you so much, my loveey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
