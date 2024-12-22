import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  fundingGoal: number;
  currentFunding: number;
  backers: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  fundingGoal,
  currentFunding,
  backers
}) => {
  const progress = (currentFunding / fundingGoal) * 100;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-violet-200 transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="px-2 py-1 bg-violet-100 text-violet-600 text-xs rounded-full">
            {category}
          </span>
          <button className="text-gray-400 hover:text-red-500">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full">
            <div 
              className="h-full bg-violet-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Raised</div>
            <div className="font-semibold">${currentFunding.toLocaleString()}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Backers</div>
            <div className="font-semibold">{backers}</div>
          </div>
        </div>

        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
          View Project
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;