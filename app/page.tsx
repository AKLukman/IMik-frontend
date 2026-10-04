import CategorySection from "@/src/components/Home/CategoriesSection/CategoriesSection";
import DealsSection from "@/src/components/Home/DealSection/DealSection";
import FeaturesSection from "@/src/components/Home/Features/Features";
import Hero from "@/src/components/Home/Hero/Hero";
import NewsletterSection from "@/src/components/Home/NewsLetterSection/NewsLetterSection";
import PopularProducts from "@/src/components/Home/Products/PopularProducts";
import ReviewsSection from "@/src/components/Home/ReviewSection/ReviewSection";
import Footer from "@/src/components/shared/footer/Footer";
import Navbar from "@/src/components/shared/navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <main>
        <Hero></Hero>
        <CategorySection></CategorySection>
        <PopularProducts></PopularProducts>
        <DealsSection></DealsSection>
        <FeaturesSection></FeaturesSection>
        <ReviewsSection></ReviewsSection>
        <NewsletterSection></NewsletterSection>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}
