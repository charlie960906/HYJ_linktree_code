import React, { useState } from 'react';
import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  ExternalLink,
  MessageCircle,
  Globe,
  Camera,
  Music,
  Code,
  Heart,
  X,
  Facebook,
  Gamepad2Icon,
  Building2
} from 'lucide-react';

function App() {
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(false);

  const links = [
    {
      title: "Company website",
      description: "View our Works and Goals",
      url: "https://hyjdevelop.com",
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Music Playlist",
      description: "Listen my favorite music on spotify",
      action: () => setShowSpotifyEmbed(true),
      icon: <Music className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Blog",
      description: "Read my article",
      url: "https://ceoblog.hyjdevelop.com",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Contact My email",
      description: "Contect me by email",
      url: "mailto:charlie960906@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/charlie960906",
      icon: <Github className="w-6 h-6" />,
      color: "hover:text-gray-800"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/hyjcharlie960906/",
      icon: <Facebook className="w-6 h-6" />,
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hyjcharlie960906/?hl=zh-tw",
      icon: <Instagram className="w-6 h-6" />,
      color: "hover:text-pink-500"
    },
        {
      name: "Discord",
      url: "http://discordapp.com/users/961983502943911986",
      icon: <Gamepad2Icon className="w-6 h-6" />,
      color: "hover:text-purple-500"
    },
  ];


  const handleLinkClick = (link: any) => {
    if (link.action) {
      link.action();
    } else if (link.url) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Spotify Embed Modal */}
      {showSpotifyEmbed && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowSpotifyEmbed(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <h3 className="text-white text-xl font-semibold mb-4">My Music Playlist</h3>
            
            <div className="rounded-xl overflow-hidden">
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/playlist/6YWNbabDk7DFa4FTegLZSz?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl animate-bounce-slow">
              <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src="/myself.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            黃宥鈞(老黃)
          </h1>
          
          <p className="text-xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
            Developer & HYJdevelop CEO
          </p>
          <p className="text-xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
            CYSH_IRC & 115學測生📖
          </p>
          
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            I'm not the best,but I'm working hard!✨
          </p>

          <div className="flex items-center justify-center mt-4 space-x-2">
            <Building2 className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm text-gray-400">Chiayi, Taiwan</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="max-w-md mx-auto space-y-4 mb-12">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link)}
              className="group block w-full p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors duration-200">
                      {link.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-80">
                      {link.description}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-white text-lg font-semibold mb-6">Social Links</h3>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/20 hover:border-white/40`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-sm">
            <p>©2025 HYJdevelop</p>
          </div>
        </div>
      </div>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}</style>
    </div>
  );
}

export default App;