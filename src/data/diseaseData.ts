// Comprehensive disease-symptom mapping with categories
export interface Disease {
  name: string;
  symptoms: string[];
  severity: 'mild' | 'moderate' | 'severe';
  description: string;
  hereditary?: boolean;
}

// Symptom categories for UI organization
export const symptomCategories = {
  physical: 'Observable Physical Symptoms',
  subjective: 'Subjective Feelings & Sensations',
  episodic: 'Episodic or Recurring Symptoms',
  hereditary: 'Common in Hereditary Conditions'
} as const;

export const commonSymptoms = {
  // Observable Physical Symptoms (things others can see)
  physical: [
    // Skin and Body
    'Rash',
    'Pale skin',
    'Swollen face',
    'Swollen joints',
    'Skin discoloration',
    'Yellow skin or eyes',
    'Hair loss',
    'Skin lesions',
    'Visible tremors',
    'Drooping eyelid',
    'Swollen lymph nodes',
    'Excessive sweating',
    'Muscle wasting',
    'Curved spine',
    'Unsteady gait',
    'Facial twitching',
    'Hives',
    'Blisters',
    'Dry, flaky skin',
    'Bruising easily',
    'Enlarged veins',
    'Thickening of skin',
    'Blue-tinged extremities',
    'Loss of hair color',
    'Red or inflamed eyes',
    'Unexplained weight gain',
    // Breathing and Circulation
    'Rapid breathing',
    'Coughing up blood',
    'Bleeding gums',
    'Wheezing',
    'Slow breathing',
    'Cold extremities',
    'Cyanosis',
    'Eye redness'
  ],

  // Subjective Feelings & Sensations (what the patient feels)
  subjective: [
    // Physical Discomfort
    'Nausea',
    'Dizziness',
    'Fatigue',
    'Headache',
    'Body aches',
    'Joint pain',
    'Chest pain',
    'Abdominal pain',
    'Burning sensation',
    'Numbness',
    'Tingling',
    'Weakness',
    'Loss of taste',
    'Loss of smell',
    'Blurred vision',
    'Ringing in ears',
    'Difficulty swallowing',
    'Muscle weakness',
    'Chest tightness',
    'Touch sensitivity',
    'Abdominal fullness',
    'Itchy skin',
    'Burning limbs',
    'Pain when breathing',
    'Unusual body odor',
    'Sharp pains',
    'Throat fullness',
    // Emotional and Cognitive
    'Anxiety',
    'Depression',
    'Brain fog',
    'Excessive thirst',
    'Light sensitivity',
    'Sound sensitivity',
    'Irritability',
    'Temperature sensitivity',
    'Trouble focusing',
    'Mood fluctuations',
    'Reality detachment',
    'Unexplained fears',
    'Poor judgment'
  ],

  // Episodic or Recurring Symptoms (events that come and go)
  episodic: [
    // Neurological and Mental
    'Seizures',
    'Fainting',
    'Panic attacks',
    'Migraines',
    'Night sweats',
    'Sleep paralysis',
    'Muscle spasms',
    'Vertigo episodes',
    'Mood swings',
    'Memory lapses',
    'Loss of coordination',
    'Speech difficulty',
    'Light-headedness',
    'Unexplained shaking',
    'Energy fluctuations',
    'Pins and needles',
    'Abnormal dreams',
    // Respiratory and Cardiovascular
    'Heart palpitations',
    'Asthma attacks',
    'Allergic reactions',
    'Coughing fits',
    'Irregular heartbeat',
    'Hot flashes',
    'Sudden weakness',
    'Vision blackouts',
    'Labored breathing',
    'Mucus coughing',
    'Body flushing',
    'Choking episodes'
  ],

  // Common in Hereditary Conditions
  hereditary: [
    // Genetic and Developmental Indicators
    'Early graying',
    'Family history of cancer',
    'Family history of heart disease',
    'Family history of diabetes',
    'Family history of mental illness',
    'Early vision loss',
    'Blood clotting issues',
    'Frequent fractures',
    'Joint hypermobility',
    'Unusual facial features',
    'Skeletal abnormalities',
    'Growth abnormalities',
    'Developmental delays',
    'Color blindness',
    'Blood disorders',
    'Early hearing loss',
    'Frequent nosebleeds',
    'Low bone density',
    'Abnormal pigmentation',
    'Frequent infections',
    'Medication sensitivity',
    'Delayed development',
    'Abnormal proportions',
    'Involuntary movements',
    'Unusual sleep patterns'
  ]
} as const;

export const diseases: Disease[] = [
  {
    name: 'COVID-19',
    symptoms: ['Loss of taste', 'Loss of smell', 'Fatigue', 'Coughing fits', 'Rapid breathing', 'Fever', 'Body aches'],
    severity: 'severe',
    description: 'A viral respiratory illness caused by the SARS-CoV-2 virus.'
  },
  {
    name: 'Acne',
    symptoms: ['Skin lesions', 'Rash', 'Itchy skin', 'Skin discoloration'],
    severity: 'mild',
    description: 'A skin condition causing pimples and inflammation.'
  },
  {
    name: 'Asthma',
    symptoms: ['Wheezing', 'Shortness of breath', 'Coughing fits', 'Chest tightness', 'Labored breathing'],
    severity: 'moderate',
    description: 'A chronic respiratory condition causing breathing difficulties.'
  },
  {
    name: 'Diabetes Mellitus',
    symptoms: ['Excessive thirst', 'Fatigue', 'Frequent urination', 'Blurred vision', 'Unexplained weight loss'],
    severity: 'severe',
    description: 'A metabolic disorder affecting blood sugar levels.',
    hereditary: true
  },
  {
    name: 'Epilepsy',
    symptoms: ['Seizures', 'Memory lapses', 'Sudden weakness', 'Fainting', 'Speech difficulty'],
    severity: 'severe',
    description: 'A neurological disorder causing recurring seizures.',
    hereditary: true
  },
  {
    name: 'Migraine',
    symptoms: ['Headache', 'Light sensitivity', 'Sound sensitivity', 'Nausea', 'Vision blackouts'],
    severity: 'moderate',
    description: 'A neurological condition causing severe headaches.'
  },
  {
    name: 'Multiple Sclerosis',
    symptoms: ['Vision blackouts', 'Numbness', 'Fatigue', 'Muscle weakness', 'Balance problems'],
    severity: 'severe',
    description: 'A disease affecting the central nervous system.'
  },
  {
    name: 'Tuberculosis',
    symptoms: ['Coughing up blood', 'Night sweats', 'Fatigue', 'Chest pain', 'Unexplained weight loss'],
    severity: 'severe',
    description: 'A bacterial infection primarily affecting the lungs.'
  },
  {
    name: 'Depression',
    symptoms: ['Depression', 'Fatigue', 'Sleep problems', 'Loss of appetite', 'Trouble focusing'],
    severity: 'moderate',
    description: 'A mental health condition affecting mood and daily functioning.'
  },
  {
    name: 'Heart Disease',
    symptoms: ['Chest pain', 'Shortness of breath', 'Heart palpitations', 'Fatigue', 'Dizziness'],
    severity: 'severe',
    description: 'A condition affecting the heart and blood vessels.',
    hereditary: true
  },
  // Add more diseases as needed...
];