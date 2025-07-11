
import { Calendar, Clock, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazyImage from "@/components/LazyImage";
import { useState } from "react";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Great Migration Season 2024: What to Expect",
      excerpt: "The annual Great Migration is set to begin in July 2024. Here's everything you need to know about witnessing this spectacular natural phenomenon.",
      content: "The Great Migration represents one of nature's most incredible spectacles...",
      image: "/images/destinations/maasai-mara.jpeg",
      category: "Wildlife",
      author: "Safari Expert Team",
      date: "2024-06-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "New Conservation Initiatives in Amboseli",
      excerpt: "Amboseli National Park launches new elephant conservation programs to protect these magnificent creatures for future generations.",
      content: "Amboseli National Park has announced several new conservation initiatives...",
      image: "/images/destinations/amboseli.jpeg",
      category: "Conservation",
      author: "Conservation Team",
      date: "2024-06-10",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "Best Time to Visit Kenya's National Parks",
      excerpt: "Planning your safari adventure? Our comprehensive guide helps you choose the perfect time to visit Kenya's premier wildlife destinations.",
      content: "Timing is everything when it comes to safari experiences...",
      image: "/images/destinations/samburu.jpeg",
      category: "Travel Tips",
      author: "Travel Specialist",
      date: "2024-06-05",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Tourism in Kenya",
      excerpt: "Learn about our commitment to sustainable tourism practices and how we're working to preserve Kenya's natural heritage.",
      content: "Sustainable tourism is at the heart of our mission...",
      image: "/images/destinations/tsavo.jpeg",
      category: "Sustainability",
      author: "Sustainability Officer",
      date: "2024-05-28",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "Photography Tips for Your Safari",
      excerpt: "Capture stunning wildlife photos with these expert tips from professional safari photographers.",
      content: "Wildlife photography requires patience, skill, and the right techniques...",
      image: "/images/destinations/lake-nakuru.jpeg",
      category: "Photography",
      author: "Photography Expert",
      date: "2024-05-20",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "New Luxury Lodges Opening in 2024",
      excerpt: "Discover the latest luxury accommodations opening across Kenya's premier safari destinations this year.",
      content: "2024 brings exciting new luxury lodge openings...",
      image: "/images/destinations/nairobi.jpeg",
      category: "Accommodation",
      author: "Hospitality Team",
      date: "2024-05-15",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ["All", "Wildlife", "Conservation", "Travel Tips", "Sustainability", "Photography", "Accommodation"];

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 safari-hero-bg">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              News &
              <span className="block text-safari-gold-400">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Stay informed about the latest wildlife conservation efforts, 
              safari tips, and exciting developments in Kenya's tourism industry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-safari-green-800 mb-12 text-center">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <LazyImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-safari-gold-500 text-safari-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-safari-green-800 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-safari-green-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-safari-green-700 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <button className="safari-btn-secondary w-full flex items-center justify-center">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-safari-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-safari-green-600 text-white shadow-lg"
                    : "bg-white text-safari-green-700 hover:bg-safari-green-100 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-16 bg-gradient-to-b from-safari-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-safari-green-800 mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <LazyImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-safari-gold-500 text-safari-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-safari-green-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-safari-green-600 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-safari-green-700 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <button className="safari-btn-secondary w-full flex items-center justify-center text-sm">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-safari-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and never miss the latest safari news, 
              conservation updates, and exclusive travel offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-safari-green-800 border-0 focus:ring-2 focus:ring-safari-gold-400 outline-none"
              />
              <button className="safari-btn-primary bg-safari-gold-500 hover:bg-safari-gold-600 text-safari-green-900 px-8 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
