import { useState } from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h1>
        
        <div className="space-y-6 text-gray-600">
          <p className="leading-relaxed">
            Hi there! I'm a passionate web developer with a love for creating 
            beautiful and functional user experiences. With several years of 
            experience in front-end development, I specialize in React, 
            Tailwind CSS, and modern JavaScript.
          </p>

          <p className="leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge 
            through technical writing and mentoring.
          </p>

          <div className="border-l-4 border-blue-500 pl-4 italic">
            "I believe in writing clean, maintainable code that solves real
            problems and creates value for users."
          </div>

          <p className="leading-relaxed">
            I'm always excited to work on challenging projects and collaborate
            with other developers. Feel free to reach out if you'd like to
            work together or just chat about technology!
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
              ${isLiked 
                ? 'bg-pink-100 text-pink-500' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <Heart 
              className={`${isLiked ? 'fill-current' : ''}`} 
              size={20} 
            />
            {likes} {likes === 1 ? 'Like' : 'Likes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;