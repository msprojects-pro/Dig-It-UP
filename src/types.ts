export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  category: "all" | "excavation" | "foundations" | "driveways" | "drainage";
  title: string;
  location: string;
  imgUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}
