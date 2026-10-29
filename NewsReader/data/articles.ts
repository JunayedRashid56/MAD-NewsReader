// data/articles.ts

export interface Article {
  id: string;
  title: string;
  author: string;
  summary: string;
  body: string;
  category: string;
  date: string;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title:
      "The Future of AI: How Artificial Intelligence is Transforming Industries",
    author: "John Doe",
    summary:
      "Artificial Intelligence (AI) is rapidly changing the way we live and work. From healthcare to finance, AI is being used to improve efficiency, reduce costs, and enhance decision-making.",
    body: "Artificial Intelligence (AI) is rapidly changing the way we live and work. From healthcare to finance, AI is being used to improve efficiency, reduce costs, and enhance decision-making. In this article, we explore the various applications of AI across different industries and discuss the potential benefits and challenges associated with its adoption.\n\nIn healthcare, AI is being used to analyze medical images, predict patient outcomes, and assist in diagnosis. In finance, AI algorithms are being used for fraud detection, risk assessment, and algorithmic trading.\n\nHowever, the adoption of AI also raises ethical concerns, such as job displacement and privacy issues. As AI continues to evolve, it is crucial for policymakers, businesses, and society to address these challenges and ensure that AI is used responsibly and ethically.",
    category: "Tech",
    date: "2023-10-15",
  },
  {
    id: "2",
    title:
      "Global Climate Summit Reaches Historic Agreement on Renewable Targets",
    author: "Jane Smith",
    summary:
      "World leaders at the annual climate summit have finalized a binding framework to triple renewable energy capacity globally by 2030, marking a major milestone for environmental policy.",
    body: "World leaders at the annual climate summit have finalized a binding framework to triple renewable energy capacity globally by 2030, marking a major milestone for environmental policy.\n\nDelegates from over 190 nations worked through the night to iron out details regarding financial assistance for developing nations transitioning away from fossil fuels.\n\nWhile environmental groups have praised the ambition of the targets, questions remain regarding enforcement mechanisms and accountability for nations that fall short of their benchmarks.",
    category: "Policy",
    date: "2023-10-14",
  },
  {
    id: "3",
    title:
      "Breakthrough in Quantum Computing Achieves Room-Temperature Stability",
    author: "Dr. Alan Turing",
    summary:
      "Researchers announce a novel qubit architecture that operates without cryogenic cooling, paving the way for practical commercial quantum processors.",
    body: "Researchers announce a novel qubit architecture that operates without cryogenic cooling, paving the way for practical commercial quantum processors.\n\nThe team utilized topological insulators to isolate quantum states from environmental thermal noise, a problem that has plagued the industry for decades.\n\nIndustry analysts predict this could accelerate the timeline for quantum encryption and molecular modeling breakthroughs by at least ten years.",
    category: "Research",
    date: "2023-10-12",
  },
  {
    id: "4",
    title:
      "Supply Chain Resilience: How Manufacturers are Adapting to Shifting Trade Routes",
    author: "Robert Chen",
    summary:
      "Global manufacturing firms are decentralizing production hubs to mitigate vulnerabilities exposed by recent geopolitical and logistical disruptions.",
    body: "Global manufacturing firms are decentralizing production hubs to mitigate vulnerabilities exposed by recent geopolitical and logistical disruptions.\n\nBy leveraging near-shoring and automated inventory tracking, companies are cutting lead times and insulating themselves against sudden border closures.\n\nExperts note that while redundancy increases upfront operational costs, it dramatically improves long-term survival rates during systemic crises.",
    category: "Industry",
    date: "2023-10-10",
  },
  {
    id: "5",
    title: "Neural Interfaces Move Beyond Medical Trials into Consumer Space",
    author: "Elena Rostova",
    summary:
      "New non-invasive neural headbands promise hands-free control of digital devices, sparking debate over workplace productivity tracking and cognitive privacy.",
    body: "New non-invasive neural headbands promise hands-free control of digital devices, sparking debate over workplace productivity tracking and cognitive privacy.\n\nUsing high-density EEG sensors, these consumer-grade devices translate subtle neural signals into mouse clicks and shortcut commands within milliseconds.\n\nPrivacy advocates are calling for immediate regulatory frameworks to prevent employers and advertisers from harvesting raw brainwave metrics without explicit consent.",
    category: "AI",
    date: "2023-10-08",
  },
  {
    id: "6",
    title:
      "The Rise of Decentralized Autonomous Organizations in Modern Corporate Governance",
    author: "Marcus Vance",
    summary:
      "Corporate law firms are seeing an influx of startups structured as DAOs, blending smart contract automation with traditional shareholder liability protections.",
    body: "Corporate law firms are seeing an influx of startups structured as DAOs, blending smart contract automation with traditional shareholder liability protections.\n\nThese decentralized structures allow global contributors to vote on capital allocation and project proposals transparently on-chain.\n\nRegulators, however, are scrambling to determine how tax liabilities and fiduciary duties apply when corporate decisions are dictated by algorithmic consensus.",
    category: "Business",
    date: "2023-10-05",
  },
  {
    id: "7",
    title: "Meta Open-Sources Llama 4 Multimodal Model",
    category: "AI",
    author: "Marcus Johnson",
    date: "May 8, 2025",
    summary:
      "Meta has released Llama 4, a multimodal foundation model capable of processing text, images, and audio, under an open research licence.",
    body: "Meta AI has released Llama 4, a multimodal large language model capable of understanding text, images, and audio. The model is available in 8B, 70B, and 405B parameter sizes under the Llama Community Licence.\n\nFor mobile developers, the 8B model can run on-device on flagship smartphones, opening possibilities for privacy-preserving AI features that do not require a server roundtrip.",
  },
  {
    id: "8",
    title: "Dhaka Startup Ecosystem Raises Record $240M in 2025 H1",
    category: "Business",
    author: "Nadia Islam",
    date: "May 1, 2025",
    summary:
      "Venture capital investment in Bangladesh-based startups reached a record high in the first half of 2025, led by fintech, health tech, and agritech companies.",
    body: "Bangladesh-based startups raised $240 million in the first half of 2025 across 47 deals, a 180% increase over the same period in 2024. The largest rounds were raised by bKash ($60M), iFarmer ($22M), and Maya ($18M).\n\nThe growth is increasing demand for mobile developers, with companies like Pathao, Shohoz, and Chaldal actively hiring React Native engineers.",
  },
];
