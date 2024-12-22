import React from 'react';
import FeatureButton from './FeatureButton';
import { features } from '../../lib/config/features';
import { useFeatures } from '../../lib/hooks/useFeatures';

const FeatureTabs: React.FC = () => {
  const { handleFeatureClick } = useFeatures();

  return (
    <div className="max-w-xl mx-auto mt-8 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {features.map((feature) => (
          <FeatureButton
            key={feature.id}
            {...feature}
            onClick={() => handleFeatureClick(feature.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureTabs;