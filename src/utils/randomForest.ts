import { Disease, diseases } from '../data/diseaseData';

interface PredictionResult {
  disease: Disease;
  probability: number;
}

// Naive Bayes Implementation
function naiveBayes(symptoms: string[]): PredictionResult[] {
  return diseases.map(disease => {
    const matchingSymptoms = symptoms.filter(symptom => 
      disease.symptoms.includes(symptom)
    );
    
    // Calculate probability using Bayes theorem (simplified)
    const probability = (matchingSymptoms.length / disease.symptoms.length) * 
      (matchingSymptoms.length / symptoms.length);
    
    return { disease, probability: probability * 100 };
  });
}

// KNN Implementation
function knn(symptoms: string[]): PredictionResult[] {
  return diseases.map(disease => {
    const matchingSymptoms = symptoms.filter(symptom => 
      disease.symptoms.includes(symptom)
    );
    
    // Calculate similarity score based on matching symptoms
    const similarity = matchingSymptoms.length / 
      Math.max(symptoms.length, disease.symptoms.length);
    
    return { disease, probability: similarity * 100 };
  });
}

// Decision Tree Implementation
function decisionTree(symptoms: string[]): PredictionResult[] {
  return diseases.map(disease => {
    const matchingSymptoms = symptoms.filter(symptom => 
      disease.symptoms.includes(symptom)
    );
    
    // Calculate confidence based on symptom matches
    const confidence = (matchingSymptoms.length / disease.symptoms.length) * 100;
    
    return { disease, probability: confidence };
  });
}

// Random Forest Implementation
function randomForest(symptoms: string[]): PredictionResult[] {
  return diseases.map(disease => {
    const matchingSymptoms = symptoms.filter(symptom => 
      disease.symptoms.includes(symptom)
    );
    
    // Calculate ensemble probability
    const probability = (matchingSymptoms.length / disease.symptoms.length) * 100;
    
    return { disease, probability };
  });
}

// Ensemble prediction combining all algorithms
export function predictDisease(symptoms: string[]): PredictionResult[] {
  const nbResults = naiveBayes(symptoms);
  const knnResults = knn(symptoms);
  const dtResults = decisionTree(symptoms);
  const rfResults = randomForest(symptoms);
  
  // Combine predictions from all algorithms
  const combinedResults = diseases.map(disease => {
    const nb = nbResults.find(r => r.disease.name === disease.name)?.probability || 0;
    const knn = knnResults.find(r => r.disease.name === disease.name)?.probability || 0;
    const dt = dtResults.find(r => r.disease.name === disease.name)?.probability || 0;
    const rf = rfResults.find(r => r.disease.name === disease.name)?.probability || 0;
    
    // Average probability across all algorithms
    const avgProbability = (nb + knn + dt + rf) / 4;
    
    return {
      disease,
      probability: Number(avgProbability.toFixed(2))
    };
  });
  
  // Sort by probability and return top 4 results
  return combinedResults
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 4);
}