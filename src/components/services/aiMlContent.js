// Copy for /services/ai-ml, transcribed verbatim from the AI & ML reference.

import {
  IconAccelerateGrowth,
  IconBoostEfficiency,
  IconCollaboration,
  IconComputerVision,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconNetworking,
  IconNlp,
  IconPredictiveAnalytics,
  IconRecommendationEngines,
  IconReduceCosts,
} from '@/components/icons/Icons';

export const AI_ML_HERO = {
  screenLabel: 'AI/ML hero',
  label: 'AI & Machine Learning',
  headline: [{ text: 'Machine learning that reaches' }, { text: 'production.', accent: true }],
  lead: 'We build natural language processing, computer vision, predictive analytics and recommendation systems that automate real workflows and put predictive insight in front of the people making decisions. Models are trained, evaluated, deployed and monitored — not handed over as a notebook.',
  stack: ['Python', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Google AI'],
};

export const AI_ML_CAPABILITIES = {
  eyebrow: 'What we build',
  title: 'Four kinds of system, one delivery standard.',
  lead: 'Each one starts from a decision your business already makes by hand, and ends with a measurable baseline it has to beat.',
  items: [
    {
      key: 'nlp',
      icon: <IconNlp />,
      title: 'Natural Language Processing',
      blurb:
        'Document classification, extraction, search and support automation over the language your business already runs on — contracts, tickets, clinical notes, claims.',
    },
    {
      key: 'vision',
      icon: <IconComputerVision />,
      title: 'Computer Vision',
      blurb:
        'Detection, classification and quality inspection on images and video, running at the edge or in batch depending on where your data actually sits.',
    },
    {
      key: 'predictive',
      icon: <IconPredictiveAnalytics />,
      title: 'Predictive Analytics',
      blurb:
        'Demand, churn, risk and fraud models wired into the dashboards and alerts your teams already watch, with the confidence interval shown alongside the number.',
    },
    {
      key: 'recommendation',
      icon: <IconRecommendationEngines />,
      title: 'Recommendation Engines',
      blurb:
        'Personalisation for catalogues, content and next-best-action, evaluated against real conversion rather than offline accuracy alone.',
    },
  ],
};

export const AI_ML_APPROACH = {
  eyebrow: 'Key Benefits',
  title: 'We start with the decision, not the model.',
  paragraphs: [
    'Every engagement opens on the data you already hold and the decision you want changed. We audit the pipeline first — where the data lives, how clean it is, how often it moves — because that determines what a model can honestly do.',
    'From there our engineers own the full lifecycle: feature pipelines, training, evaluation against a documented baseline, deployment for real-time inference or large-scale batch, and monitoring for drift once it is live. Every model ships explainable, versioned, and retrainable as your data grows.',
  ],
  benefits: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerate Growth',
      blurb:
        'Personalisation and forecasting that lift conversion and retention on the traffic you already have.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boost Efficiency',
      blurb:
        'Manual review, triage and data entry automated where the model is confident, escalated where it is not.',
    },
    {
      key: 'costs',
      icon: <IconReduceCosts />,
      title: 'Reduce Costs',
      blurb:
        'Right-sized inference and training budgets, so compute spend tracks the value the model returns.',
    },
    {
      key: 'security',
      icon: <IconEnhanceSecurity />,
      title: 'Enhance Security',
      blurb:
        'Training data governed, access controlled, and inference deployed inside your own cloud boundary.',
    },
    {
      key: 'collaboration',
      icon: <IconCollaboration />,
      title: 'Collaboration',
      blurb: 'Your analysts and our engineers work in the same repo, notebooks and review cycle.',
    },
    {
      key: 'networking',
      icon: <IconNetworking />,
      title: 'Networking',
      blurb:
        'Models integrated with the systems and APIs already carrying data between your teams.',
    },
    {
      key: 'translations',
      icon: <IconGlobalTranslations />,
      title: 'Global Translations',
      blurb: 'Language models tuned for the markets you sell in, not just English-first datasets.',
    },
    {
      key: 'in-house',
      icon: <IconInHouseTechs />,
      title: 'In-house Techs',
      blurb:
        'A permanent ML team, not subcontractors — the same engineers stay on through handover.',
    },
  ],
};
