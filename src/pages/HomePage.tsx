import { ArrowRight, Brain, Heart, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Personal Health Intelligence Assistant
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get instant insights about your health symptoms using advanced AI algorithms. 
                Make informed decisions about your wellbeing with our comprehensive symptom analysis.
              </p>
              <Link
                to="/symptoms"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Analyze Symptoms
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
                alt="Medical Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TheHealthIntelHub?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze your symptoms with 85% accuracy
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg">
              <Stethoscope className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Knowledge</h3>
              <p className="text-gray-600">
                Comprehensive database of 100+ medical conditions and symptoms
              </p>
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg">
              <Heart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p className="text-gray-600">
                Simple and intuitive interface for easy symptom analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About TheHealthIntelHub</h2>
            
            <div className="space-y-6 text-gray-600">
              <h3 className="text-xl font-semibold">1. Introduction to TheHealthIntelHub</h3>
              <p>
                TheHealthIntelHub is a cutting-edge platform designed to provide personalized health insights based on your unique symptoms and medical conditions. We combine the power of advanced AI and machine learning to offer accurate and reliable recommendations.
              </p>
              <p>
                Our mission is to empower individuals to take control of their health by offering tailored, data-driven insights that help you make informed decisions about your wellbeing.
              </p>

              <h3 className="text-xl font-semibold">2. How It Works</h3>
              <p>
                Personalized Health Insights: The platform uses artificial intelligence (AI) to analyze your symptoms and conditions. It then generates health insights that are specifically tailored to you, rather than using a generic approach.
              </p>
              <p>
                AI-Driven Algorithms: TheHealthIntelHub uses advanced machine learning techniques to understand patterns in your health data. These algorithms have been trained on a vast amount of data to ensure high accuracy.
              </p>
              <p>
                Real-Time Analysis: The platform works in real-time, providing quick, up-to-date information based on the latest data about your health.
              </p>

              <h3 className="text-xl font-semibold">3. Why Choose Us?</h3>
              <ul className="list-disc pl-6">
                <li>Accuracy & Reliability: Our platform uses state-of-the-art machine learning models that have been carefully trained to ensure the most accurate and reliable results.</li>
                <li>Personalized Recommendations: Unlike generic health advice, our platform provides insights specifically tailored to your individual health needs.</li>
                <li>Privacy & Security: Your health data is handled with the utmost care and security. We use encryption and industry-standard security practices to protect your information.</li>
                <li>User-Friendly Interface: TheHealthIntelHub is designed to be easy to use, allowing you to input your symptoms and get helpful insights without complicated steps.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8 text-sm text-gray-500">
        <p>⚠️ This tool is for educational purposes only and should not be used as a substitute for professional medical advice.</p>
      </div>
    </div>
  );
}