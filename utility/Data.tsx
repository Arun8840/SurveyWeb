// todo nav items
type childrenTypes = {
  title: string
  path: string
  icon?: any
  content?: string
  children?: childrenTypes[]
}
interface NavTypes {
  title: string
  path: string
  icon?: string | any
  children?: childrenTypes[]
}
interface useageTypes {
  title: string
  content: string
}
interface surveyFeaturesTypes {
  title: string
  points: string[]
}
export const UsegetData = () => {
  const NavItems: NavTypes[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/",
      children: [
        {
          title: "Forms",
          path: "/",
          icon: "",
          content:
            "Power your data collection with versatile online forms that don't require any coding to set up.",
        },
      ],
    },
    {
      title: "Solution",
      path: "/",
      children: [
        {
          title: "Customer Experience",
          path: "/",
          content: "understand customer and improve loyalty",
        },
        {
          title: "Employee Experience",
          path: "/",
          content: "improve employee experience to motivate and retain staff",
        },
        {
          title: "Patient Experience",
          path: "/",
          content: "understand patients and improve thier experience",
        },
        {
          title: "Market Research",
          path: "/",
          content: "gain linsignt to make the right business moves",
        },
      ],
    },
    {
      title: "Features",
      path: "/",
    },
    {
      title: "Pricing",
      path: "/",
    },
    {
      title: "Company",
      path: "/",
    },
  ]

  const UseageOfSurveyData: useageTypes[] = [
    {
      title: "Surveys & Feedback Forms",
      content:
        "Capture feedback and collect data with customized Surveys & Feedback Forms.",
    },
    {
      title: "Offline Surveys",
      content:
        "Run surveys on iOS and Android Devices. Get feedback without WiFi, on the go.",
    },
    {
      title: "Net Promoter Score",
      content:
        "Measure and Improve Customer Loyalty with NPS Surveys. Get NPS insights & drive growth.",
    },
    {
      title: "Customer Satisfaction Surveys",
      content:
        "Track Customer Experience and Satisfaction with CSAT Surveys. Improve Customer Experiences.",
    },
    {
      title: "Customer Service Feedback",
      content:
        "Get Customer Service and Agent Feedback with Customer Effort Score (CES) Surveys.",
    },
    {
      title: "Website Feedback",
      content:
        "Capture Website Experience Feedback using Popups, Feedback Button, Embed, Links.",
    },
    {
      title: "Product Feedback",
      content:
        "Run Product Experience Surveys to know user feedback and satisfaction with your product.",
    },
    {
      title: "Employee Experience",
      content:
        "Improve Employee Engagement with regular Employee Experience Surveys, eNPS.",
    },
  ]

  const SurveyPerformanceData: useageTypes[] = [
    {
      title: "Easy and Intuitive Surveys",
      content:
        "Create surveys effortlessly with our user-friendly interface.Engage respondents with interactive and visually appealing questions. ",
    },
    {
      title: "Diverse Question Types",
      content:
        "Tailor your surveys with a variety of question formats, from multiple-choice to open-ended responses.Gain deeper insights with advanced question logic and branching. ",
    },
    {
      title: "Powerful Analytics",
      content:
        "Uncover trends and patterns with our robust analytics tools.Visualize data in real-time and make informed decisions. ",
    },
    {
      title: "Seamless Collaboration",
      content:
        "Collaborate with team members in real-time.Share and export results effortlessly. ",
    },
    {
      title: "Fast",
      content:
        "Fastest speed to value means you can begin realizing value in days — not months.",
    },
    {
      title: "Flexible",
      content:
        "Market-leading flexibility means Alchemer adapts to your business needs – not the other way around.",
    },
    {
      title: "Secure",
      content:
        "Industry-leading, enterprise-grade security protocols keep your data protected.",
    },
    {
      title: "Easy",
      content:
        "A user-friendly platform allows anyone in any department to create, manage, and report on projects.",
    },
  ]

  const FeaturesData = [
    {
      title: "Multiple Choice Questions",
      content:
        "Standard Multiple Choice: Collect straightforward answers with single or multiple selections.Image Choices: Enhance engagement by incorporating images in your multiple-choice questions. ",
      icon: "format-list-bulleted",
    },
    {
      title: "Rating Scales",
      icon: "star-outline",
      content:
        "Star Ratings: Gather nuanced feedback with visually appealing star ratings.Numeric Scales: Customize numeric scales for precise data collection. ",
    },
    {
      title: "Open-Ended Questions",
      icon: "book-open-blank-variant-outline",
      content:
        "Text Responses: Allow respondents to express themselves freely with open text fields.File Upload: Collect images, documents, or any file type for a comprehensive view",
    },
    {
      title: "Matrix Questions",
      content:
        "Single Matrix: Streamline responses with a single matrix for related questions.Multiple Matrix: Create complex surveys with multiple matrices on one page. ",
      icon: "grid",
    },
    {
      title: "Ranking Questions",
      icon: "swap-vertical",
      content:
        "Drag-and-Drop Ranking: Let respondents prioritize items by dragging them into order. ",
    },
    {
      title: "Advanced Question Logic",
      icon: "bookmark-check-outline",
      content:
        "Branching and Skip Logic: Customize the survey flow based on previous responses.Piping: Personalize questions dynamically by referencing previous answers. ",
    },
    {
      title: "Unleash the Power of Varied Questions: ",
      icon: "lightning-bolt-outline",
      content:
        "Whether you're conducting employee surveys, market research, or academic studies, our diverse range of question types empowers you to tailor your surveys to achieve your unique objectives. Sign up today and explore the endless possibilities of survey creation with ZettaSurvey.",
    },
    {
      title: "Advanced Logic and Branching ",
      icon: "reload",
      content:
        "Zettasurvey includes logic and branching options, including Question Piping, Branching, Looping, Skip Logic, Soft-require Questions, Scores, and Custom Formula, all to help you increase response rates and the quality of those responses.",
    },
    {
      title: "Flexible Reporting ",
      icon: "book-open-variant-outline",
      content:
        "Unlock the true potential of your survey data with the robust and flexible reporting tools offered by ZettaSurvey. Our platform goes beyond collecting responses; it equips you with the tools to turn raw data into actionable insights. ",
    },
    {
      title: "Market-leading Flexibility to Meet All Business Needs",
      icon: "gauge-full",
      content:
        "Whether you need surveys for customer experience, marketing, market research, product management, employee experience, or operations you’ll find the features you need in Alchemer Survey. Standardize across your company and reduce headaches and cost.",
    },
    {
      title: "Power and Ease",
      icon: "chevron-up-box-outline",
      content:
        "Powerful Insights, Effortless Execution: Discover the Power and Ease of ZettaSurvey At ZettaSurvey, we believe in the perfect harmony of power and ease. Our platform is meticulously crafted to provide robust features while ensuring a seamless and intuitive user experience.",
    },
    {
      title: "Highly Secure",
      icon: "lock-outline",
      content:
        "We deliver a highly secure platform,  powerful enough for any size organization, with ISO 27001 and SOC2 Type 2 Certifications, as well as EU GDPR compliance.",
    },
  ]
  const MainPointOfSurvey: string[] = [
    "Unlimited access to our free online survey",
    "35 + Question Types",
    "Custom theme templates ",
    "Crafting Reports and Dashboards",
    "Offline Survey",
    "Craft Your Own Workflow",
    "Advanced Logic",
    "Tailored Table Management",
    "Secured Vault Management",
    "Web site front page content",
    "Mobile Survey Geolocation",
    "Language Diversity",
  ]

  const surveyFeatures: surveyFeaturesTypes[] = [
    {
      title: " Survey Creation Features",
      points: [
        "Questions per Survey",
        "Translation Survey",
        "Number of Responses",
        "Custom Survey Branding",
        "Email Support",
        "Phone Support",
        "Data Report Downloads",
        "Advanced Survey Logic",
        "Raw Data Exports",
        "File Upload Question Type",
        "Offline Mode",
        "Survey Layouts",
        "Share Report via URL",
      ],
    },
    {
      title: "Survey Logic Features",
      points: [
        "Trigger Email",
        "Standard Skip Logic",
        "Create Max Word Size",
        "Variable Option Piping",
        "Role Based Logic",
        "Scoring, Weight",
        "Calculate Score",
        "Answer Key",
        "Question Piping",
        "Advanced Branch Logic Condition",
        "Advanced Workflow Condition",
        "Option Branch Logic",
        "Option Loop Logic",
        "Require Questions",
      ],
    },
    {
      title: "Customization & Branding Features",
      points: [
        "White Label Survey",
        "Custom Logo Options",
        "Custom Theme Template",
        "Custom Variable Template",
        "Custom Tag",
        "Resizing Text Fields",
        "Branded Login URL",
        "Theme Library",
        "Remove Question Numbering",
        "Matrix Questions Customization",
        "Media Limitation",
        "Show Title on the First page",
        "Answer Status",
        "Optional Back Button",
        "Optional Next, Previous Button",
        "Customize Submit Button",
        "Instructions/Text",
        "Color, Font, and Style Customization",
        "Edit Next, Submit and Back Button Text",
        "Allow upload images from gallery (mobile)",
        "Edit Error Message",
      ],
    },
    {
      title: "Distributions Features",
      points: [
        "Offline Mode For mobile",
        "Email Publish",
        "Manual Publish",
        "URL Publish",
        "Mobile Publish",
        "Scheduled Later",
        "Occurring Survey",
        "Override Theme",
        "Override Workflow",
        "Password Protection",
        "Custom Email Template",
        "Paper Publish",
        "Anonymous Survey",
        "Allow File Pattern",
        "FTP Settings",
        "Custom Thank You Messages",
        "Disqualify Messages",
      ],
    },
    {
      title: "Reporting Features",
      points: [
        "PDF Exports",
        "Export Data",
        "Allow Download report before completing survey",
      ],
    },
    {
      title: "Security and Admin Features",
      points: [
        "Advanced admin and security** including:",
        "Data isolation",
        "Sensitive data policy and exceptions",
        "Multi-factor authentication",
        "Session management",
        "Single Sign-On (SSO)",
        "Admin reports",
        "Usage tracking",
      ],
    },
    {
      title: "Support Features",
      points: ["24/7 email and phone support"],
    },
  ]
  return {
    NavItems,
    UseageOfSurveyData,
    SurveyPerformanceData,
    FeaturesData,
    MainPointOfSurvey,
    surveyFeatures,
  }
}
