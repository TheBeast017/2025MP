import { useState } from 'react';
import { AlertTriangle, Heart, Stethoscope } from 'lucide-react';
import { commonSymptoms, symptomCategories } from '../data/diseaseData';
import { predictDisease } from '../utils/randomForest';

export default function SymptomDetector() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [predictions, setPredictions] = useState<ReturnType<typeof predictDisease>>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptom)) {
        return prev.filter(s => s !== symptom);
      }
      return [...prev, symptom];
    });
  };

  const handlePredict = () => {
    if (selectedSymptoms.length >= 2) {
      const results = predictDisease(selectedSymptoms);
      setPredictions(results);
      setShowResults(true);
    }
  };

  const allSymptomCategories = Object.entries(commonSymptoms);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl font-bold text-gray-800">Symptom Analysis</h1>
        </div>
        <p className="text-gray-600">Select at least 2 symptoms you're experiencing for a preliminary analysis</p>
        <p className="text-sm text-gray-500 mt-2">
          Selected: {selectedSymptoms.length} {selectedSymptoms.length < 2 && 
            <span className="text-red-500">(need at least {2 - selectedSymptoms.length} more)</span>
          }
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-blue-500" />
            Select Symptoms (minimum 2)
          </h2>
          
          <div className="space-y-6">
            {allSymptomCategories.map(([category, symptoms]) => (
              <div key={category} className="border-b pb-6 last:border-0">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  {symptomCategories[category as keyof typeof symptomCategories]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {symptoms.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => handleSymptomToggle(symptom)}
                      className={`p-3 rounded-lg text-left transition-colors ${
                        selectedSymptoms.includes(symptom)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePredict}
            disabled={selectedSymptoms.length < 2}
            className={`mt-6 w-full py-3 rounded-lg font-semibold transition-colors ${
              selectedSymptoms.length >= 2
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Analyze {selectedSymptoms.length} Symptoms
          </button>
        </div>

        {showResults && (
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-semibold">Top 4 Possible Conditions</h2>
            </div>
            
            <div className="text-sm text-gray-500 mb-4">
              <p>This is a preliminary analysis based on {selectedSymptoms.length} symptoms using multiple prediction algorithms. Please consult a healthcare professional for proper diagnosis.</p>
            </div>

            <div className="space-y-4">
              {predictions.map((prediction) => (
                <div key={prediction.disease.name} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{prediction.disease.name}</h3>
                    <div className="flex items-center gap-2">
                      {prediction.disease.hereditary && (
                        <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                          Hereditary
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        prediction.disease.severity === 'severe' ? 'bg-red-100 text-red-700' :
                        prediction.disease.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {prediction.disease.severity}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                        {prediction.probability}% match
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">{prediction.disease.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>⚠️ This tool is for educational purposes only and should not be used as a substitute for professional medical advice.</p>
      </div>
    </div>
  );
}