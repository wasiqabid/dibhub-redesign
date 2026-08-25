// Copy for /services/devops, transcribed verbatim from the DevOps reference.

import {
  IconAccelerateGrowth,
  IconBoostEfficiency,
  IconCicdPipeline,
  IconCloudArchitecture,
  IconCollaboration,
  IconContainers,
  IconEnhanceSecurity,
  IconGlobalTranslations,
  IconInHouseTechs,
  IconMonitoring,
  IconNetworking,
  IconReduceCosts,
} from '@/components/icons/Icons';

export const DEVOPS_HERO = {
  screenLabel: 'DevOps hero',
  label: 'DevOps & Cloud Engineering',
  headline: [{ text: 'Cloud infrastructure built for' }, { text: 'what’s next', accent: true }],
  lead: 'We deliver reliable, automated, secure DevOps pipelines with cloud-native architecture to accelerate deployments and optimize infrastructure for startups and enterprises alike.',
  stack: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS', 'Microservices', 'Infrastructure as code'],
};

export const DEVOPS_CAPABILITIES = {
  eyebrow: 'What we build',
  title: 'Four layers of platform, one operating standard.',
  lead: 'Every layer is version-controlled, reproducible and observable — so a rebuild is a command, not an archaeology project.',
  items: [
    {
      key: 'cicd',
      icon: <IconCicdPipeline />,
      title: 'CI/CD Pipelines',
      blurb:
        'Jenkins and GitHub Actions pipelines that build, test and deploy every merge, with rollback available in one step.',
    },
    {
      key: 'cloud',
      icon: <IconCloudArchitecture />,
      title: 'Cloud Architecture & Migration',
      blurb:
        'AWS environments designed around your workload, and staged migrations off legacy hosting without a maintenance weekend.',
    },
    {
      key: 'containers',
      icon: <IconContainers />,
      title: 'Containers & Microservices',
      blurb:
        'Docker and orchestrated services sized to real traffic, so a busy component scales without the whole system moving.',
    },
    {
      key: 'monitoring',
      icon: <IconMonitoring />,
      title: 'Monitoring & Logging',
      blurb:
        'Proactive monitoring, alerting and centralized logging, so you hear about an incident from a dashboard rather than a customer.',
    },
  ],
};

export const DEVOPS_APPROACH = {
  eyebrow: 'Key Benefits',
  title: 'Infrastructure as a product, not a side task.',
  paragraphs: [
    'We treat infrastructure as a carefully engineered product, bridging development and operations so teams ship confidently and systems hold up under real-world demand — with proactive monitoring, alerting, and centralized logging built in.',
    'In practice that means every environment defined as code and reviewable in a pull request, secrets and access managed rather than shared, and capacity decisions made from measured load instead of guesswork.',
  ],
  benefits: [
    {
      key: 'growth',
      icon: <IconAccelerateGrowth />,
      title: 'Accelerate Growth',
      blurb: 'Shorter lead time from commit to production, so product work reaches users sooner.',
    },
    {
      key: 'efficiency',
      icon: <IconBoostEfficiency />,
      title: 'Boost Efficiency',
      blurb:
        'Automated builds, tests and deployments that remove the manual release checklist entirely.',
    },
    {
      key: 'costs',
      icon: <IconReduceCosts />,
      title: 'Reduce Costs',
      blurb: 'Right-sized instances, autoscaling and cleanup of idle resources to cut cloud spend.',
    },
    {
      key: 'security',
      icon: <IconEnhanceSecurity />,
      title: 'Enhance Security',
      blurb:
        'Least-privilege access, managed secrets and patching cadence built into the pipeline.',
    },
    {
      key: 'collaboration',
      icon: <IconCollaboration />,
      title: 'Collaboration',
      blurb: 'Developers and operations work from the same pipelines, runbooks and dashboards.',
    },
    {
      key: 'networking',
      icon: <IconNetworking />,
      title: 'Networking',
      blurb:
        'Service meshes, private networking and load balancing configured for real traffic patterns.',
    },
    {
      key: 'translations',
      icon: <IconGlobalTranslations />,
      title: 'Global Translations',
      blurb: 'Multi-region deployments and CDN edges so latency stays low wherever your users are.',
    },
    {
      key: 'in-house',
      icon: <IconInHouseTechs />,
      title: 'In-house Techs',
      blurb:
        'A permanent platform team, not subcontractors — the same engineers stay on call after launch.',
    },
  ],
};
