// Destinations data with countries and their partner universities

export interface University {
    name: string;
}

export interface Country {
    id: string;
    name: string;
    flag: string;
    image: string;
    universities: University[];
    description: string;
    hasUniversityData: boolean;
}

export const destinationsData: Country[] = [
    {
        id: 'usa',
        name: 'United States',
        flag: '/images/flags/usa.png',
        image: '/images/destinations/usa.jpg',
        hasUniversityData: true,
        description: 'Home to world-renowned universities and cutting-edge research facilities.',
        universities: [
            { name: 'California State University, Long Beach' },
            { name: 'Clarkson University' },
            { name: 'Dallas Baptist University' },
            { name: 'DePaul University' },
            { name: 'Northeastern University' },
            { name: 'University of New Haven' },
            { name: 'University of Cincinnati' },
            { name: 'University of Texas, Arlington' },
        ],
    },
    {
        id: 'canada',
        name: 'Canada',
        flag: '/images/flags/canada.png',
        image: '/images/destinations/canada.jpg',
        hasUniversityData: true,
        description: 'Quality education with multicultural environment and post-study work opportunities.',
        universities: [
            { name: 'University of Waterloo' },
            { name: 'University of Canada West' },
            { name: 'Simon Fraser University' },
            { name: 'Ryerson University International College' },
            { name: 'University of Saskatchewan' },
            { name: 'University of Regina' },
        ],
    },
    {
        id: 'india',
        name: 'India',
        flag: '/images/flags/india.png',
        image: '/images/destinations/india.jpg',
        hasUniversityData: true,
        description: 'Affordable quality education with diverse programs and growing tech industry.',
        universities: [
            { name: 'Vellore Institute of Technology (VIT)' },
            { name: 'SRM Institute of Science and Technology, Chennai, Tamil Nadu' },
            { name: 'Chandigarh University' },
            { name: 'Amity University' },
            { name: 'Lovely Professional University (LPU)' },
            { name: 'Thapar Institute of Engineering & Technology' },
            { name: 'Jain (Deemed-to-be University) Bengaluru, Karnataka' },
            { name: 'Koneru Lakshmaiah Education Foundation (KL University)' },
            { name: 'Manipal Academy of Higher Education (MAHE)' },
            { name: 'Cambridge Institute of Technology Bengaluru, Karnataka' },
            { name: 'Sharda University' },
            { name: 'Parul University' },
            { name: 'Galgotias University' },
            { name: 'SVCET Chittoor' },
            { name: 'Amrita Vishwa Vidyapeetham Coimbatore, TN' },
            { name: 'R.V. College of Engineering (RVCE) Bengaluru' },
            { name: 'Acharya Institute of Technology Bengaluru' },
            { name: 'BMS College of Engineering' },
        ],
    },
    {
        id: 'australia',
        name: 'Australia',
        flag: '/images/flags/australia.png',
        image: '/images/destinations/australia.jpg',
        hasUniversityData: true,
        description: 'World-class education with excellent research opportunities and quality of life.',
        universities: [
            { name: 'University of Sydney (USYD)' },
            { name: 'University of Wollongong (UOW)' },
            { name: 'Macquarie University' },
            { name: 'University of Newcastle (UON)' },
            { name: 'University of Tasmania (UTAS)' },
            { name: 'Griffith University' },
        ],
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        flag: '/images/flags/uk.png',
        image: '/images/destinations/uk.jpg',
        hasUniversityData: true,
        description: 'Historic universities with global recognition and rich academic tradition.',
        universities: [
            { name: 'University of Oxford' },
            { name: 'University of Cambridge' },
            { name: 'University College London (UCL)' },
            { name: 'University of Manchester' },
            { name: 'University of Edinburgh' },
            { name: 'University of Southampton' },
            { name: 'University of Bristol' },
        ],
    },
    {
        id: 'europe',
        name: 'Europe',
        flag: '/images/flags/europe.png',
        image: '/images/destinations/europe.jpg',
        hasUniversityData: true,
        description: 'Diverse educational opportunities across multiple countries with rich culture.',
        universities: [
            { name: 'LMU Munich – Germany' },
            { name: 'Sapienza University of Rome – Italy' },
            { name: 'Aarhus University – Denmark' },
            { name: 'Leiden University – Netherlands' },
            { name: 'University of Helsinki – Finland' },
        ],
    },
    {
        id: 'bangladesh',
        name: 'Bangladesh',
        flag: '/images/flags/bangladesh.png',
        image: '/images/destinations/bangladesh.jpg',
        hasUniversityData: false,
        description: 'Emerging education hub with affordable programs and growing opportunities.',
        universities: [],
    },
    {
        id: 'china',
        name: 'China',
        flag: '/images/flags/china.png',
        image: '/images/destinations/china.jpg',
        hasUniversityData: false,
        description: 'Ancient culture meets modern education with scholarship opportunities.',
        universities: [],
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        flag: '/images/flags/malaysia.png',
        image: '/images/destinations/malaysia.jpg',
        hasUniversityData: false,
        description: 'Multicultural environment with quality education at affordable costs.',
        universities: [],
    },
    {
        id: 'turkey',
        name: 'Turkey',
        flag: '/images/flags/turkey.png',
        image: '/images/destinations/turkey.jpg',
        hasUniversityData: false,
        description: 'Bridge between East and West with unique cultural and educational experience.',
        universities: [],
    },
    {
        id: 'cyprus',
        name: 'Cyprus',
        flag: '/images/flags/cyprus.png',
        image: '/images/destinations/cyprus.jpg',
        hasUniversityData: false,
        description: 'Mediterranean island offering English-taught programs and pleasant climate.',
        universities: [],
    },
    {
        id: 'russia',
        name: 'Russia',
        flag: '/images/flags/russia.png',
        image: '/images/destinations/russia.jpg',
        hasUniversityData: false,
        description: 'Strong emphasis on science and engineering with affordable tuition fees.',
        universities: [],
    },
    {
        id: 'kazakhstan',
        name: 'Kazakhstan',
        flag: '/images/flags/kazakhstan.png',
        image: '/images/destinations/kazakhstan.jpg',
        hasUniversityData: false,
        description: 'Growing education sector with modern facilities and international programs.',
        universities: [],
    },
    {
        id: 'georgia',
        name: 'Georgia',
        flag: '/images/flags/georgia.png',
        image: '/images/destinations/georgia.jpg',
        hasUniversityData: false,
        description: 'Affordable medical and engineering programs with European standards.',
        universities: [],
    },
    {
        id: 'newzealand',
        name: 'New Zealand',
        flag: '/images/flags/newzealand.png',
        image: '/images/destinations/newzealand.jpg',
        hasUniversityData: false,
        description: 'High-quality education in stunning natural environment with work opportunities.',
        universities: [],
    },
];

export interface Course {
    category: string;
    specializations: string[];
    icon: string;
}

export const topCourses: Course[] = [
    {
        category: 'Computer Science',
        specializations: ['AI', 'ML', 'Cybersecurity', 'Data Science'],
        icon: '💻',
    },
    {
        category: 'Engineering',
        specializations: ['Robotics', 'Renewable Energy', 'Smart Tech'],
        icon: '⚙️',
    },
    {
        category: 'Healthcare',
        specializations: ['Public Health', 'Nursing', 'Biotech', 'Hospital Management'],
        icon: '🏥',
    },
    {
        category: 'MBBS',
        specializations: ['Medicine', 'Surgery', 'Clinical Practice'],
        icon: '🩺',
    },
    {
        category: 'BTech',
        specializations: ['Various Engineering Disciplines'],
        icon: '🔧',
    },
    {
        category: 'BBA',
        specializations: ['Business Administration', 'Management'],
        icon: '💼',
    },
    {
        category: 'IT & Others',
        specializations: ['IT', 'Pharmacy', 'Humanities'],
        icon: '📚',
    },
    {
        category: 'MBA',
        specializations: ['Leadership', 'Fintech', 'Global Business Strategy'],
        icon: '📊',
    },
];
