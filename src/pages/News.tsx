
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Users, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Types pour nos articles
interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'press' | 'blog';
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const News = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'all' | 'press' | 'blog'>('all');
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simuler le chargement des actualités
  useEffect(() => {
    // Simuler un délai de chargement de l'API
    setIsLoading(true);
    
    setTimeout(() => {
      // Données simulées
      const mockedArticles: NewsArticle[] = [
        {
          id: 1,
          title: "Rhinovate lance sa plateforme de visualisation 3D révolutionnaire",
          excerpt: "Notre nouvelle plateforme IA permet aux patients de voir leurs résultats de rhinoplastie en 3D avant l'intervention.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultrices nunc, nec ultricies nisl nunc nec nisl.",
          category: 'press',
          author: "Équipe Rhinovate",
          date: "15 juin 2023",
          readTime: "5 min",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        },
        {
          id: 2,
          title: "Rhinovate s'associe avec 15 cliniques de chirurgie plastique à Los Angeles",
          excerpt: "Ce partenariat stratégique permet d'étendre notre technologie à plus de patients potentiels.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultrices nunc, nec ultricies nisl nunc nec nisl.",
          category: 'press',
          author: "Marie Dubois",
          date: "3 juillet 2023",
          readTime: "3 min",
          image: "https://images.unsplash.com/photo-1551076805-e1869033e561"
        },
        {
          id: 3,
          title: "Comment notre IA prédit le processus de guérison après une rhinoplastie",
          excerpt: "Découvrez la technologie derrière notre capacité à montrer les différentes étapes de récupération.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultrices nunc, nec ultricies nisl nunc nec nisl.",
          category: 'blog',
          author: "Dr. Thomas Martin",
          date: "22 août 2023",
          readTime: "7 min",
          image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73"
        },
        {
          id: 4,
          title: "Rhinovate lève 4 millions d'euros pour accélérer son développement",
          excerpt: "Ce tour de financement va permettre d'améliorer notre technologie et d'étendre notre présence à l'international.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultrices nunc, nec ultricies nisl nunc nec nisl.",
          category: 'press',
          author: "Équipe Rhinovate",
          date: "10 septembre 2023",
          readTime: "4 min",
          image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d"
        },
        {
          id: 5,
          title: "Les avantages de la visualisation 3D pour les patients",
          excerpt: "Comment notre technologie aide les patients à prendre des décisions plus éclairées sur leur rhinoplastie.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nunc nisl ultrices nunc, nec ultricies nisl nunc nec nisl.",
          category: 'blog',
          author: "Dr. Sophie Leblanc",
          date: "5 octobre 2023",
          readTime: "6 min",
          image: "https://images.unsplash.com/photo-1525498128493-380d1990a112"
        },
      ];
      
      setNewsArticles(mockedArticles);
      setIsLoading(false);
      
      // Notification de mise à jour
      toast({
        title: "Actualités mises à jour",
        description: "Les dernières actualités ont été chargées",
        duration: 3000,
      });
    }, 1500);
  }, [toast]);

  // Filtrer les articles selon l'onglet actif
  const filteredArticles = newsArticles.filter(article => {
    if (activeTab === 'all') return true;
    return article.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-28 pb-16">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-rhinovate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-6">
                Actualités et Articles de Presse
              </h1>
              <p className="text-lg text-gray-600">
                Découvrez les dernières innovations et annonces de Rhinovate, ainsi que notre couverture médiatique.
              </p>
            </div>
          </div>
        </section>
        
        {/* Tabs */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'all' 
                  ? 'text-rhinovate-600 border-b-2 border-rhinovate-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Tous les Articles
            </button>
            <button 
              onClick={() => setActiveTab('press')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'press' 
                  ? 'text-rhinovate-600 border-b-2 border-rhinovate-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Articles de Presse
            </button>
            <button 
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'blog' 
                  ? 'text-rhinovate-600 border-b-2 border-rhinovate-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Blog
            </button>
          </div>
          
          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Squelettes de chargement
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2 w-full"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2 w-5/6"></div>
                    <div className="h-3 bg-gray-300 rounded mb-4 w-4/6"></div>
                    <div className="h-8 bg-gray-300 rounded w-1/3 mt-6"></div>
                  </div>
                </div>
              ))
            ) : filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-full uppercase text-rhinovate-600">
                      {article.category === 'press' ? 'Presse' : 'Blog'}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-3 text-gray-900 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{article.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="text-sm text-gray-500">{article.author}</span>
                      </div>
                      <button className="text-rhinovate-600 font-medium text-sm inline-flex items-center hover:text-rhinovate-700 transition-colors">
                        Lire plus <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Aucun article trouvé dans cette catégorie</p>
              </div>
            )}
          </div>
          
          {/* Newsletter */}
          <div className="mt-16 bg-rhinovate-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                Restez informé de nos dernières actualités
              </h3>
              <p className="text-gray-600 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et mises à jour directement dans votre boîte de réception.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-400 focus:border-rhinovate-400 outline-none transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="rhinovate-btn-primary whitespace-nowrap"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
