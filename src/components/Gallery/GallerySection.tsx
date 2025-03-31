
import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, GalleryHorizontal, ZoomIn } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface Photo {
  id: number;
  src: string;
  alt: string;
  description: string;
  date?: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/image/4.jpg",
    alt: "Our moments together, my wifeey. Mwaaa",
    description: "",
    
  },
  {
    id: 2,
    src: "/image/iloveher.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 3,
    src: "/image/iloveyoualways.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 4,
    src: "/image/3.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 5, 
    src: "/image/5.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 6,
    src: "/image/11.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 7,
    src: "/image/6.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 8,
    src: "/image/7.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 9,
    src: "/image/8.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 10,
    src: "/image/12.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 11,
    src: "/image/ilyalways.jpg",
    alt: "",
    description: "",
    date: ""
  },
  {
    id: 12,
    src: "/image/10.jpg",
    alt: "",
    description: "",
    date: ""
  }
];

const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-dancing font-bold mb-4 text-gradient">
            Our Beautiful Memories
          </h1>
          <p className="text-mono-700 max-w-xl mx-auto">
            A collection satong moments together during satong first year, my lovey dovey. Mwaaa
          </p>
        </div>

        {/* Featured carousel */}
        <div className="mb-16">
          <h2 className="text-2xl font-playfair mb-6 text-center">Our moments together</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {photos.filter((_, i) => i < 6).map((photo) => (
                <CarouselItem key={`carousel-${photo.id}`}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-0 relative group">
                        <AspectRatio ratio={16/9} className="bg-muted">
                          <img 
                            src={photo.src} 
                            alt={photo.alt}
                            className="object-cover w-full h-full rounded-t-lg"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 rounded-lg">
                          <h3 className="text-white text-xl font-medium">{photo.alt}</h3>
                          <p className="text-white/80 text-sm">{photo.description}</p>
                          {photo.date && <p className="text-white/60 text-xs mt-1">{photo.date}</p>}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer ${
                index % 4 === 0 ? "animate-fade-in-down" :
                index % 4 === 1 ? "animate-fade-in-left" : 
                index % 4 === 2 ? "animate-fade-in-right" : "animate-fade-in-up"
              }`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative">
                <AspectRatio ratio={4/3} className="bg-muted">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <p className="text-white font-medium">{photo.alt}</p>
                  <div className="flex gap-2">
                    <Heart className="text-white/80" size={20} />
                    <ZoomIn className="text-white/80" size={20} />
                  </div>
                </div>
                {photo.date && (
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs py-1 px-2 rounded">
                    {photo.date}
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-mono-700">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Photo view modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex justify-between">
                <h3 className="text-xl font-medium">{selectedPhoto.alt}</h3>
                <button 
                  onClick={() => setSelectedPhoto(null)}
                  className="text-mono-500 hover:text-mono-700"
                >
                  ✕
                </button>
              </div>
              <div className="relative">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.alt} 
                  className="w-full object-contain max-h-[60vh]"
                />
              </div>
              <div className="p-4">
                <p className="text-mono-700 mb-2">{selectedPhoto.description}</p>
                {selectedPhoto.date && (
                  <p className="text-mono-500 text-sm">{selectedPhoto.date}</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Suggestions for more memories */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-playfair mb-4">I love you always for everything that you are, my beautiful wifeey. 🤍</h3>
          <p className="text-mono-600 mb-6">
            Capturing atong moments together is a beautiful way to celebrate atong love.
          </p>
          <div className="flex justify-center">
            <GalleryHorizontal className="mr-2" size={20} />
            <span>More memories to come as atong story continues, my loveey.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
