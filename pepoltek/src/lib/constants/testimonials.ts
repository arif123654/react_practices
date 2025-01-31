interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samuel Karl",
    title: "CEO",
    quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imageUrl: "https://i.scdn.co/image/ab67616100005174da376690c96f9a5c60c5f112"
  },
  {
    id: 2,
    name: "Daria Limney",
    title: "CEO",
    quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/BURNETT_Charles-24x30-2008b.jpg"
  },
  {
    id: 3,
    name: "Larry F. Burnett",
    title: "CEO",
    quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERgaq4H_T5Man24qBpPitFB-IE7GoSCsFog&s"
  }
];
