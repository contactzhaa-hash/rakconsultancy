export type Job = { title: string; location: string; category: string; salary: string; openings: string; featured?: boolean };

export const jobs: Job[] = [
  { title: "Heavy Driver", location: "Riyadh, Saudi Arabia", category: "Transport", salary: "SAR 2,400–2,900", openings: "18 openings", featured: true },
  { title: "HVAC Technician", location: "Dubai, UAE", category: "Technical", salary: "AED 2,800–3,400", openings: "12 openings", featured: true },
  { title: "Mason / Tile Fixer", location: "Doha, Qatar", category: "Construction", salary: "QAR 1,800–2,200", openings: "25 openings", featured: true },
  { title: "Restaurant Supervisor", location: "Jeddah, Saudi Arabia", category: "Hospitality", salary: "SAR 3,200–3,800", openings: "6 openings" },
];

export const testimonials = [
  { name: "Arun Kumar", role: "Heavy Vehicle Driver", place: "Riyadh, Saudi Arabia", quote: "RAK explained every step before I paid for anything. My interview, medical and visa all moved exactly as promised.", result: "SAR 2,700 / month" },
  { name: "Mohammed Faizal", role: "HVAC Technician", place: "Dubai, UAE", quote: "The team helped me prepare for the employer video call and kept my family updated. I landed with a clear contract in hand.", result: "AED 3,200 / month" },
  { name: "Sanjay Prasad", role: "Mason", place: "Doha, Qatar", quote: "I was worried about fake agents. Their documentation checks and receipts gave me confidence from day one.", result: "QAR 2,100 / month" },
];

export const processSteps = [
  { number: "01", title: "Register & screen", text: "We verify your documents, experience and role fit before recommending a vacancy." },
  { number: "02", title: "Meet the employer", text: "Shortlisted candidates attend a direct video interview with the GCC employer." },
  { number: "03", title: "Complete your medical", text: "Our team guides you through the official GAMCA / Wafid medical process." },
  { number: "04", title: "Stamp & dispatch", text: "After visa approval, we coordinate stamping, orientation and your flight dispatch." },
];