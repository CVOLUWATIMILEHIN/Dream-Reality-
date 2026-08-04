export interface ProgramDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  whyItMatters: string;
  objectives: string[];
  activities: {
    title: string;
    description: string;
  }[];
  whoCanParticipate: string;
  gallery: {
    title: string;
    location: string;
    subject: string;
    uniform: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaSub: string;
}

export const programsData: ProgramDetail[] = [
  {
    id: "leadership-development",
    title: "Leadership Development",
    subtitle: "Nurturing ethical guidance, public advocacy, and moral responsibility in Nigerian teenagers.",
    category: "Strategic Pillar I",
    overview: "The Leadership Development Program is designed to raise a new generation of visionary and accountable leaders. We equip young Nigerians—particularly secondary school teenagers—with decision-making frameworks, public speaking confidence, and community team-building skills. By hosting annual conferences and school-based leadership clubs, we move teenagers beyond passive spectatorship, empowering them to become active stakeholders in local and national development.",
    whyItMatters: "Nigeria's future depends heavily on the caliber of its leaders. By targeting youth during their critical formative years, we interrupt negative societal cycles and instill deep values of integrity, transparency, and service. This ensures they are prepared to tackle future challenges as patriotic, ethical citizens who put collective good above individual interest.",
    objectives: [
      "Instill ethical advocacy and systemic decision-making principles in 2,500+ teenagers annually.",
      "Build confidence in public articulation, debate, and logical thinking.",
      "Cultivate high standards of personal accountability and transparent leadership.",
      "Empower adolescents to design and execute peer-led community projects."
    ],
    activities: [
      {
        title: "Annual Youth Leadership Conferences",
        description: "Immersive multi-day gatherings that bring outstanding students from across regions together to debate civic duties and complete leadership challenges."
      },
      {
        title: "School-Based Leadership Clubs",
        description: "Weekly co-curricular clubs structured within secondary schools, using DRYCI guides to build teamwork and project planning skills."
      },
      {
        title: "Public Advocacy & Debates",
        description: "Competitive regional tournaments focused on critical social issues, enhancing research capabilities and spoken communication."
      }
    ],
    whoCanParticipate: "Nigerian teenagers aged 13 to 19 enrolled in secondary schools, or local grassroot youth groups with an interest in public service and personal accountability.",
    gallery: [
      {
        title: "Leadership Cohort Training",
        location: "Lagos Campus",
        subject: "Youth delegates discussing ethical governance during the leadership summit.",
        uniform: "Smart casual and high school representative uniforms."
      },
      {
        title: "Advocacy Debate Panel",
        location: "Ibadan Center",
        subject: "Secondary scholars participating in a public debate on youth civic duties.",
        uniform: "Traditional green and white school representative blazers."
      },
      {
        title: "Team Coordination Challenge",
        location: "Enugu Regional Hub",
        subject: "Student leaders collaborating on solving community layout puzzles.",
        uniform: "DRYCI volunteer shirts and local school uniforms."
      }
    ],
    testimonials: [
      {
        quote: "Before this program, I was afraid to speak in public. Today, I am the president of our school's debate club and feel fully prepared to lead.",
        author: "Chioma Ndukwe",
        role: "Student President, Lagos Secondary School"
      },
      {
        quote: "Leadership is not about commanding; it's about serving. DRYCI has taught me how to put my classmates first and lead with absolute transparency.",
        author: "Tunde Olatunji",
        role: "Youth Advocate, Ibadan"
      }
    ],
    faqs: [
      {
        question: "How can my school join the Leadership Club?",
        answer: "Schools can write to us via our contact portal. We provide a trained facilitator, textbooks, and character registers to start a co-curricular DRYCI club."
      },
      {
        question: "Is there a registration fee for the conferences?",
        answer: "No. All DRYCI leadership activities, including our annual summit, are 100% sponsored by our generous partners and are completely free for selected students."
      }
    ],
    ctaText: "Become a Youth Ambassador",
    ctaSub: "Sponsor a leadership camp or request to register your secondary school today."
  },
  {
    id: "education-support",
    title: "Education Support",
    subtitle: "Enhancing classroom access with quality books, solar reading hubs, and academic sponsorships.",
    category: "Strategic Pillar II",
    overview: "Our Education Support & Academic Excellence initiative removes critical financial and structural barriers to qualitative learning. By providing textbooks, stationary kits, uniforms, and tuition sponsorships, we ensure that vulnerable scholars stay in school. Furthermore, we construct solar-powered reading rooms and solar reading hubs in rural areas to guarantee that lack of household electricity does not stop a child from studying.",
    whyItMatters: "Education is the single most powerful tool for breaking multi-generational poverty. However, thousands of brilliant Nigerian children drop out of school due to lack of standard writing tools or small unpaid fees. Supporting their academic journey protects their potential and preserves the nation's human capital.",
    objectives: [
      "Distribute over 10,000 standard stationery kits and text materials to underserved academies.",
      "Install solar-powered reading rooms to bypass local power outages.",
      "Provide complete tuition and uniform sponsorships to high-potential orphans and vulnerable scholars.",
      "Improve literacy standards through community reading festivals and reading drives."
    ],
    activities: [
      {
        title: "Stationery & Uniform Distributions",
        description: "Periodic campaigns delivering school bags, mathematical sets, notebooks, and durable uniforms directly to children in low-income schools."
      },
      {
        title: "Solar Reading Hubs Setup",
        description: "Equipping schools with solar panel arrays and reading lanterns, enabling students to read comfortably during evening hours."
      },
      {
        title: "Academic Tuition Scholarships",
        description: "Providing direct funding cover for school fees, examination enrollments, and textbook bundles for vulnerable scholars."
      }
    ],
    whoCanParticipate: "Vulnerable primary and secondary school children, orphanage schools, and underserved public institutions in rural or low-income districts.",
    gallery: [
      {
        title: "Reading Group Session",
        location: "Calabar District",
        subject: "Primary scholars smiling as they open their new storybooks and dictionaries.",
        uniform: "Local checked gingham primary school uniforms."
      },
      {
        title: "Solar Hub Study Room",
        location: "Port Harcourt Rural",
        subject: "Students reading comfortably under stable, bright solar reading lanterns.",
        uniform: "Durable blue high school uniforms."
      },
      {
        title: "Scholarship Award Day",
        location: "Enugu Center",
        subject: "Orphaned students proudly receiving complete academic sponsorship bundles.",
        uniform: "Immaculate school representative outfits."
      }
    ],
    testimonials: [
      {
        quote: "I was almost sent home because my parents couldn't afford the textbook bundle. DRYCI provided all my books, and now I am the top student in my class.",
        author: "Yusuf Muhammadu",
        role: "Scholarship Recipient, Ibadan"
      },
      {
        quote: "Our school did not have electricity, so studying after 6 PM was impossible. The new solar reading hub has given us the light we need to pass our exams.",
        author: "Blessing Ikpe",
        role: "Secondary Student, Calabar Rural Academy"
      }
    ],
    faqs: [
      {
        question: "How do you identify scholars for tuition sponsorship?",
        answer: "We work directly with school principals, local community leaders, and social welfare departments to run household assessments and select the most vulnerable."
      },
      {
        question: "Can I donate books or school supplies?",
        answer: "Yes! We accept bulk book donations, writing materials, and school bags. Get in touch via our contact page to coordinate delivery."
      }
    ],
    ctaText: "Sponsor a Scholar Today",
    ctaSub: "Help us keep a child in school by providing books or full annual tuition coverage."
  },
  {
    id: "mentorship-coaching",
    title: "Mentorship & Coaching",
    subtitle: "Connecting grassroot adolescents with mature professional mentors for moral and career guidance.",
    category: "Strategic Pillar III",
    overview: "Our Mentorship & Coaching initiative bridges the gap between adolescent aspirations and real-world success. We run structured 12-month mentorship matches that partner high school students and out-of-school teenagers with trusted, background-checked professional role models. Through character building, tertiary university guidance, and emotional support, we guide our youth safely past traumatic life experiences and help them shape clear ambitions.",
    whyItMatters: "Brilliance without navigation often leads to unfulfilled potential. Many young people in low-income neighborhoods lack access to professional networks or stable guidance. Structured mentorship provides the moral compass, career clarity, and accountability necessary to successfully navigate the journey to adulthood.",
    objectives: [
      "Establish 12-month mentor matches for 500+ adolescents each year.",
      "Nurture emotional intelligence, personal boundary setting, and self-esteem.",
      "Equip youth with tertiary education application advice and career readiness plans.",
      "Build a strong psychological safety net to reduce juvenile delinquency."
    ],
    activities: [
      {
        title: "Structured Mentorship Circles",
        description: "Small group sessions where teenagers discuss life choices, career paths, and character issues with assigned professional mentors."
      },
      {
        title: "Career Shadowing Days",
        description: "Providing mentees with rare opportunities to visit workplaces, corporate offices, and creative studios to expand their exposure."
      },
      {
        title: "Tertiary Education Tracking",
        description: "Step-by-step coaching for senior secondary students on JAMB/UTME exams, university selection, and essay preparation."
      }
    ],
    whoCanParticipate: "Adolescent students and community youth who are seeking moral guidance, emotional support, and professional career direction.",
    gallery: [
      {
        title: "Mentorship Circle Dialogue",
        location: "Abuja FCT",
        subject: "A professional mentor guiding a group of girls in goal-setting exercises.",
        uniform: "Smart secondary uniforms and casual professional attire."
      },
      {
        title: "Workplace Exposure Visit",
        location: "Lagos Mainland",
        subject: "Mentees learning about computer software systems inside a modern tech firm.",
        uniform: "Cohesive school shirts and protective identification badges."
      },
      {
        title: "Group Goal-Setting Workshop",
        location: "Benin Hub",
        subject: "Teenagers writing down their 5-year life dreams on project chart boards.",
        uniform: "DRYCI youth campaign shirts."
      }
    ],
    testimonials: [
      {
        quote: "My mentor taught me how to write a CV and study effectively for university entrance exams. Today, I am studying Computer Science at university.",
        author: "Kelechi Peters",
        role: "DRYCI Mentee Alumnus"
      },
      {
        quote: "Having an older, professional guide who listens without judgment kept me grounded when my family was going through traumatic times.",
        author: "Amina Kazeem",
        role: "Secondary Delegate, Abuja FCT"
      }
    ],
    faqs: [
      {
        question: "Who are the mentors?",
        answer: "Our mentors are verified professionals, educators, and leaders who volunteer their time. They must complete rigorous background checks and dry-run training cycles before placement."
      },
      {
        question: "How long does the mentorship program run?",
        answer: "A standard cohort match runs for 12 months, after which many pairs choose to maintain lifelong informal relationships."
      }
    ],
    ctaText: "Apply as a Mentor",
    ctaSub: "Guide a young Nigerian's path and help translate their potential into a structured career."
  },
  {
    id: "entrepreneurship-skills",
    title: "Entrepreneurship & Skills Development",
    subtitle: "Unlocking future self-reliance through hands-on craft bootcamps and digital literacy.",
    category: "Strategic Pillar IV",
    overview: "The Entrepreneurship & Skills Development Program empowers out-of-school youth, teenagers, and students with practical, high-demand vocational and digital skills. By running intensive bootcamps in tailoring, graphic design, basic coding, and business administration, we bridge the gap between unemployment and financial independence. Beyond technical training, we coach our delegates on ethical accounting, brand creation, and seed funding applications.",
    whyItMatters: "Youth unemployment is a major economic challenge across Nigeria. Traditional education does not always guarantee job placement. By teaching hands-on manual and digital skills alongside business fundamentals, we enable young people to become self-reliant micro-entrepreneurs who create opportunities in their communities.",
    objectives: [
      "Equip 500+ out-of-school youth annually with high-income digital or hand-craft skills.",
      "Instruct youth on record keeping, business ethics, and basic micro-finances.",
      "Assist outstanding student innovators in formalizing their social enterprise ideas.",
      "Provide startup starter kits (sewing machines, computer tools) to top graduates."
    ],
    activities: [
      {
        title: "Vocational Craft Bootcamps",
        description: "Intensive 4-week sessions focused on tailoring, leather crafts, and fashion design using practical, modern workshops."
      },
      {
        title: "Digital Literacy & Tech Labs",
        description: "Hands-on instruction on computers, graphic design suites, and digital productivity platforms to thrive in a digital economy."
      },
      {
        title: "Micro-Business Pitch Days",
        description: "Seniors pitch their business layout plans to local sponsors to win micro-grants or essential startup toolkits."
      }
    ],
    whoCanParticipate: "Out-of-school youth, unemployed school graduates, and secondary seniors with a passion for creative crafts or digital innovation.",
    gallery: [
      {
        title: "Vocational Tailoring Lab",
        location: "Lagos Mainland",
        subject: "A student learning to measure and sew on a modern mechanical sewing machine.",
        uniform: "Protective workspace aprons and smart casual wear."
      },
      {
        title: "Computer Coding Training",
        location: "Yaba Tech Hub",
        subject: "Young students practicing design logic on laptop computers in a bright lab.",
        uniform: "DRYCI digital cohort t-shirts."
      },
      {
        title: "Business Design Seminar",
        location: "Port Harcourt Center",
        subject: "Graduates listening to an accountant explain basic cash ledger structures.",
        uniform: "Business casual and representative program kits."
      }
    ],
    testimonials: [
      {
        quote: "I joined the tailoring bootcamp without knowing how to hold a needle. Today, I run my own micro-workshop and stitch custom dresses for my neighborhood.",
        author: "Funmi Adebayo",
        role: "Startup Owner & Bootcamp Graduate"
      },
      {
        quote: "The digital literacy lab opened my eyes to graphic design. I now work remotely as a freelance branding artist and support my siblings' schooling.",
        author: "Tochukwu Eloka",
        role: "Freelance Designer, Port Harcourt"
      }
    ],
    faqs: [
      {
        question: "Are materials and tools provided for free?",
        answer: "Yes, all materials, software access, and machinery are fully provided in our training labs for all registered delegates during the bootcamp."
      },
      {
        question: "Do you offer financial grants after training?",
        answer: "We award startup starter kits (such as sewing machines, baking kits, or laptops) and micro-finance seeds to outstanding students who present viable business plans."
      }
    ],
    ctaText: "Support Skills Bootcamps",
    ctaSub: "Sponsor a vocational student or donate equipment to expand our digital labs."
  },
  {
    id: "community-development",
    title: "Community Development",
    subtitle: "Advocating for children rights, safe borehole water, and sanitary hygiene in local areas.",
    category: "Strategic Pillar V",
    overview: "Our Community Development & Child Protection Program focuses on building healthy, protective, and sanitary environments where children can thrive. We implement essential infrastructural support such as installing potable water boreholes in public schools, distributing sanitary hygiene kits to girls, running health camps, and leading advocacy dialogues against child labor and youth exploitation.",
    whyItMatters: "No child can focus on academics while suffering from waterborne illnesses or missing classes due to lack of basic sanitary hygiene. By safeguarding their community surroundings and educating parent-teacher networks, we secure the foundation for healthy education and child safety.",
    objectives: [
      "Construct and repair potable water boreholes in low-resource public school grounds.",
      "Distribute sanitary hygiene packets to 3,000+ girls in rural academies.",
      "Host pediatric dental, eye, and general wellness camps in grassroot communities.",
      "Advocate for child rights and primary protection against labor and early marriage."
    ],
    activities: [
      {
        title: "Safe Water Borehole Installations",
        description: "Drilling and commissioning durable solar-powered boreholes to provide clean, potable water to schools and local community nodes."
      },
      {
        title: "Sanitary Hygiene Campaigns",
        description: "Distributing menstrual health kits and providing age-appropriate hygiene education to adolescent girls in rural centers."
      },
      {
        title: "Grassroot Health Screenings",
        description: "Deploying professional volunteer doctors to conduct pediatric checkups, visual tests, and basic treatments in rural schools."
      }
    ],
    whoCanParticipate: "Underserved communities, rural schools, public healthcare departments, and local parent-teacher associations.",
    gallery: [
      {
        title: "Clean Water Commissioning",
        location: "Kwara Rural Village",
        subject: "Students celebrating the installation of a new school drinking borehole.",
        uniform: "Checked local rural primary uniforms."
      },
      {
        title: "Hygiene Kit Distribution",
        location: "Akure Community Hub",
        subject: "Girls receiving sanitary health materials and reading hygiene booklets.",
        uniform: "Local school outfits and DRYCI campaign shirts."
      },
      {
        title: "Pediatric Wellness Camp",
        location: "Cross River Rural",
        subject: "Volunteer pediatric doctor examining a student during the free health drive.",
        uniform: "White doctor coat and student checkered uniforms."
      }
    ],
    testimonials: [
      {
        quote: "Our students used to miss classes to fetch water from a stream two miles away. The clean water borehole inside our yard has changed our lives.",
        author: "Mr. Ezekiel Alao",
        role: "School Principal, Kwara Rural Academy"
      },
      {
        quote: "The optical screening found that my daughter had a severe sight block. DRYCI provided free reading glasses, and now she can read the classroom board perfectly.",
        author: "Mrs. Ngozi Adebayo",
        role: "Parent, Akure Community"
      }
    ],
    faqs: [
      {
        question: "How do you choose villages for borehole drilling?",
        answer: "We perform a thorough needs assessment focused on public schools that lack close safe drinking water, coordinating with community elders to plan sustainable maintenance."
      },
      {
        question: "Can medical professionals volunteer for health drives?",
        answer: "Yes, we highly welcome volunteer doctors, nurses, dentists, and optometrists. Please register through our volunteer portal."
      }
    ],
    ctaText: "Sponsor a Community Project",
    ctaSub: "Partner with us to drill school boreholes or fund a pediatric wellness camp."
  },
  {
    id: "faith-character",
    title: "Faith & Character Development",
    subtitle: "Cultivating deep moral foundations, self-governance, and strong personal integrity.",
    category: "Strategic Pillar VI",
    overview: "Our Faith & Character Development Program focuses on building the moral foundations of youth. Through interactive workshops, character retreats, and early childhood values-driven theater, we promote ethical self-governance, anti-corruption mindsets, and a spirit of community stewardship. We focus on shaping individuals who match academic or vocational excellence with exemplary character.",
    whyItMatters: "Competence without character leads to exploitation. True community transformation requires leaders who possess strong ethical anchors and spiritual values that resist societal pressures. Instructing children in integrity early ensures a future public sector built on transparent standards.",
    objectives: [
      "Embed values of honesty, hard work, and anti-corruption across school curricula.",
      "Equip youth with self-respect, personal boundary guidelines, and moral courage.",
      "Nurture a deep spiritual foundation and commitment to faith-driven stewardship.",
      "Train early children via creative storytelling, arts, and values theater."
    ],
    activities: [
      {
        title: "Honesty & Ethics Classrooms",
        description: "Interactive seminars using practical scenarios to teach accountability, anti-corruption, and truthfulness in daily life."
      },
      {
        title: "Values Theater & Storytelling",
        description: "Creative performance workshops where younger children write and perform plays based on friendship, respect, and duty."
      },
      {
        title: "Youth Character Camps",
        description: "Inspirational weekend retreats focusing on personal boundaries, mental resilience, and spiritual growth."
      }
    ],
    whoCanParticipate: "Children and young people aged 5 to 19 who want to establish deep moral standards, and youth leaders seeking ethical training.",
    gallery: [
      {
        title: "Ethics Scenario Workshop",
        location: "Jos Regional Center",
        subject: "Children sitting in discussion groups reviewing ethics worksheets.",
        uniform: "Simple school representative gingham shirts."
      },
      {
        title: "Early Childhood Theater",
        location: "Calabar District",
        subject: "Primary students performing a short drama about honesty on a classroom stage.",
        uniform: "Colorful local performance costumes."
      },
      {
        title: "Youth Retreat Circle",
        location: "Abuja Regional Hub",
        subject: "Youth delegates holding a candlelit session during a character building camp.",
        uniform: "Cohesive white retreat shirts."
      }
    ],
    testimonials: [
      {
        quote: "The character workshops taught me that integrity is doing the right thing, even when nobody is watching. It has guided how I approach my school exams.",
        author: "Samuel Ibrahim",
        role: "Youth Delegate, Jos"
      },
      {
        quote: "As parents, we are grateful. The values theater has made our children more respectful and helpful at home, expressing true love for their siblings.",
        author: "Mrs. Patricia Okon",
        role: "Parent, Calabar"
      }
    ],
    faqs: [
      {
        question: "Is this program open to children of all faiths?",
        answer: "Yes, our programs focus on universal ethical values, moral self-governance, and principles of integrity that are foundational to all communities."
      },
      {
        question: "How often do these workshops take place?",
        answer: "We run weekly values-driven clubs in partner schools and host large regional youth character retreats quarterly."
      }
    ],
    ctaText: "Support Character Education",
    ctaSub: "Sponsor retreat materials or advocate for ethics-based curriculum in your local district."
  },
  {
    id: "epiphany",
    title: "EPIPHANY Flagship Program",
    subtitle: "Raising the Next Generation of Visionary, Moral Female Leaders in Nigeria.",
    category: "Featured Flagship Initiative",
    overview: "EPIPHANY is DRYCI's Flagship Annual Girls' Leadership Conference designed specifically for high-potential adolescent girls in Nigerian secondary schools. Over a rigorous multi-day immersive boot camp, delegates are guided through interactive masterclasses in ethical agency, academic excellence, career readiness, digital skills, reproductive rights, and entrepreneurship. Following the summit, each delegate is matched with a professional female mentor for a full year, creating a supportive network for university transition and community leadership.",
    whyItMatters: "Empowering a girl alters the economic and social trajectory of families and communities. High school girls are critical nodes of societal growth, yet they face severe barriers to secondary completion and professional entry. EPIPHANY acts as a launchpad, unlocking their agency and equipping them with the values and skills to lead.",
    objectives: [
      "Empower 200+ high-potential secondary school girls per cohort into leadership paths.",
      "Pair 100% of delegates with verified, professional female mentors for 12 months.",
      "Facilitate social enterprise project pitches, awarding seed grants to top teams.",
      "Build a lifetime alumni network of ethical female leaders who shape families and nations."
    ],
    activities: [
      {
        title: "Immersive Leadership Summit",
        description: "Multi-day intensive residential bootcamp featuring guest panel sessions, self-discovery masterclasses, and leadership labs."
      },
      {
        title: "Social Venture Pitch Competition",
        description: "Delegates form teams to design social change projects (e.g., water filters, reading drives), presenting their pitches to win startup funding."
      },
      {
        title: "Post-Conference Mentorship Tracking",
        description: "A structured 12-month mentorship matching delegates with prominent female role models in corporate, public, and scientific fields."
      }
    ],
    whoCanParticipate: "Nominated high-potential female students from partner secondary schools who undergo a competitive merit screening process.",
    gallery: [
      {
        title: "EPIPHANY Delegate Summit",
        location: "Lagos Executive Hall",
        subject: "Female delegates raising hands during a leadership keynote speech.",
        uniform: "Inaugural EPIPHANY dark-blue blazers with gold custom badges."
      },
      {
        title: "Social Venture Presentation",
        location: "Calabar Summit Center",
        subject: "A team of student delegates pitch their community clean water proposal.",
        uniform: "EPIPHANY campaign t-shirts and presentation materials."
      },
      {
        title: "Mentoring Circle Session",
        location: "Enugu Conference Hall",
        subject: "Delegates seated in circles, listening intently to advice from professional female mentors.",
        uniform: "Official conference delegate tags and matching uniforms."
      }
    ],
    testimonials: [
      {
        quote: "EPIPHANY showed me that my voice is a tool for change. I learned that being young and a girl is a strength, and I am ready to study Medicine and lead my community.",
        author: "Chinasa Eze",
        role: "Enugu Delegate & Pitch Winner"
      },
      {
        quote: "Witnessing these high school girls build business pitches and speak with such confidence was inspiring. DRYCI is raising true transformational leaders.",
        author: "Dr. Mrs. Sarah David",
        role: "Corporate Mentor & Keynote Speaker"
      }
    ],
    faqs: [
      {
        question: "How can a secondary school girl apply for EPIPHANY?",
        answer: "Applications open annually. We partner with school principals to nominate students based on academic dedication, leadership behavior, and community service potential."
      },
      {
        question: "How is the 12-month mentorship managed after the summit?",
        answer: "We hold monthly progress reviews, academic tracking calls, and regular group catchups to ensure matches remain active, safe, and productive."
      }
    ],
    ctaText: "Support the EPIPHANY Mission",
    ctaSub: "Sponsor a delegate's summit attendance or join our network of professional female mentors."
  }
];
