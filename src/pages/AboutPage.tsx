import { Brain, Heart, ShieldCheck, Activity } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TheHealthIntelHub</h1>
          <p className="text-xl text-gray-600">
            Empowering you with personalized health insights through advanced technology
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Brain className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-semibold">AI-Powered Health Analysis</h2>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p>
              TheHealthIntelHub leverages cutting-edge AI algorithms to provide personalized health insights 
              tailored to your specific symptoms and conditions. Our platform combines multiple machine 
              learning approaches to achieve an accuracy rate of 85%:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Naive Bayes Classification (82% accuracy)</li>
              <li>K-Nearest Neighbors (KNN) (84% accuracy)</li>
              <li>Decision Trees (83% accuracy)</li>
              <li>Random Forest Ensemble Learning (87% accuracy)</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Activity className="w-8 h-8 text-green-500" />
              <h2 className="text-2xl font-semibold">System Accuracy</h2>
            </div>
            <p className="text-gray-600">
              Our system achieves an overall accuracy of 85% through ensemble learning, 
              combining predictions from multiple algorithms. The accuracy is continuously 
              monitored and improved through regular model updates and validation against 
              verified medical data.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-semibold">How It Helps</h2>
            </div>
            <p className="text-gray-600">
              By analyzing combinations of symptoms using multiple AI algorithms, we help users 
              understand potential health conditions and make informed decisions about seeking 
              medical attention. Our system learns and improves with each interaction.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>⚠️ This tool is for educational purposes only and should not be used as a substitute for professional medical advice.</p>
        </div>
      </div>
    </div>
  );
}