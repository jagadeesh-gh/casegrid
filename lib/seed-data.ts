import { Act, Notification } from './types';

export const SEED_ACTS: Act[] = [
  // Central Acts
  {
    id: '1',
    slug: 'right-to-education-act-2009',
    title: 'Right to Education Act, 2009',
    state: 'Central',
    year: 2009,
    category: 'Act',
    status: 'Active',
    pdfUrl: 'https://example.com/pdfs/right-to-education-act-2009.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide free and compulsory education to all children of the age of six to fourteen years.',
    source: 'Ministry of Education, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '2',
    slug: 'contract-labour-act-1970',
    title: 'Contract Labour (Regulation and Abolition) Act, 1970',
    state: 'Central',
    year: 1970,
    category: 'Act',
    status: 'Active',
    pdfUrl: 'https://example.com/pdfs/contract-labour-act-1970.pdf',
    sizeBytes: 312320,
    summary: 'An Act to regulate the employment of contract labour in certain establishments.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '3',
    slug: 'minimum-wages-act-1948',
    title: 'Minimum Wages Act, 1948',
    state: 'Central',
    year: 1948,
    category: 'Act',
    status: 'Active',
    pdfUrl: 'https://example.com/pdfs/minimum-wages-act-1948.pdf',
    sizeBytes: 156672,
    summary: 'An Act to provide for fixing minimum rates of wages in certain employments.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '4',
    slug: 'factories-act-1948',
    title: 'Factories Act, 1948',
    state: 'Central',
    year: 1948,
    category: 'Act',
    status: 'Active',
    pdfUrl: 'https://example.com/pdfs/factories-act-1948.pdf',
    sizeBytes: 278528,
    summary: 'An Act to consolidate and amend the law regulating labour in factories.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '5',
    slug: 'employees-provident-fund-act-1952',
    title: 'Employees Provident Fund Act, 1952',
    state: 'Central',
    year: 1952,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/employees-provident-fund-act-1952.pdf',
    sizeBytes: 198656,
    summary: 'An Act to provide for the institution of provident funds for employees.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '6',
    slug: 'industrial-disputes-act-1947',
    title: 'Industrial Disputes Act, 1947',
    state: 'Central',
    year: 1947,
    category: 'Act',
    status: 'Repealed',
    pdfUrl: 'https://example.com/pdfs/industrial-disputes-act-1947.pdf',
    sizeBytes: 289792,
    summary: 'An Act to make provision for the investigation and settlement of industrial disputes.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '7',
    slug: 'maternity-benefit-act-1961',
    title: 'Maternity Benefit Act, 1961',
    state: 'Central',
    year: 1961,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/maternity-benefit-act-1961.pdf',
    sizeBytes: 145408,
    summary: 'An Act to regulate the employment of women in certain establishments for certain periods.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '8',
    slug: 'equal-remuneration-act-1976',
    title: 'Equal Remuneration Act, 1976',
    state: 'Central',
    year: 1976,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/equal-remuneration-act-1976.pdf',
    sizeBytes: 123904,
    summary: 'An Act to provide for the payment of equal remuneration to men and women workers.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Central Rules
  {
    id: '9',
    slug: 'central-civil-services-rules-1964',
    title: 'Central Civil Services (Conduct) Rules, 1964',
    state: 'Central',
    year: 1964,
    category: 'Rule',
    status: 'Active',
    pdfUrl: 'https://example.com/pdfs/central-civil-services-rules-1964.pdf',
    sizeBytes: 189440,
    summary: 'Rules regulating the conduct of government servants in the Central Civil Services.',
    source: 'Department of Personnel and Training, Government of India',
    forms: [
      {
        id: 'f1',
        title: 'FORM D',
        description: 'Annual declaration form for government servants to declare their assets and liabilities',
        fileUrl: 'https://example.com/forms/central-civil-services/FORM-D.xlsx',
        sizeBytes: 45120
      },
      {
        id: 'f2',
        title: 'FORM F',
        description: 'Application form for seeking permission to engage in private employment',
        fileUrl: 'https://example.com/forms/central-civil-services/FORM-F.xlsx',
        sizeBytes: 32768
      },
      {
        id: 'f3',
        title: 'FORM V',
        description: 'Form for obtaining vigilance clearance for promotions and transfers',
        fileUrl: 'https://example.com/forms/central-civil-services/FORM-V.xlsx',
        sizeBytes: 38912
      }
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '10',
    slug: 'central-civil-services-pension-rules-1972',
    title: 'Central Civil Services (Pension) Rules, 1972',
    state: 'Central',
    year: 1972,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/central-civil-services-pension-rules-1972.pdf',
    sizeBytes: 234496,
    summary: 'Rules governing the pension and retirement benefits for central government employees.',
    source: 'Department of Pension and Pensioners Welfare, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '11',
    slug: 'central-civil-services-leave-rules-1972',
    title: 'Central Civil Services (Leave) Rules, 1972',
    state: 'Central',
    year: 1972,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/central-civil-services-leave-rules-1972.pdf',
    sizeBytes: 167936,
    summary: 'Rules regulating leave entitlements and conditions for central government employees.',
    source: 'Department of Personnel and Training, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Maharashtra Acts
  {
    id: '12',
    slug: 'labour-welfare-fund-act-1965',
    title: 'Labour Welfare Fund Act, 1965',
    state: 'Maharashtra',
    year: 1965,
    category: 'Act',
    status: 'Spent',
    pdfUrl: 'https://example.com/pdfs/labour-welfare-fund-act-1965.pdf',
    sizeBytes: 189440,
    summary: 'An Act to provide for the constitution of a fund for financing activities to promote welfare of labour.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '13',
    slug: 'maharashtra-shops-establishments-act-2017',
    title: 'Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017',
    state: 'Maharashtra',
    year: 2017,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/maharashtra-shops-establishments-act-2017.pdf',
    sizeBytes: 298752,
    summary: 'An Act to regulate the employment and conditions of service of workers in shops and establishments.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '14',
    slug: 'maharashtra-domestic-workers-act-2008',
    title: 'Maharashtra Domestic Workers Welfare Board Act, 2008',
    state: 'Maharashtra',
    year: 2008,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/maharashtra-domestic-workers-act-2008.pdf',
    sizeBytes: 178176,
    summary: 'An Act to provide for the constitution of a welfare board for domestic workers in Maharashtra.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Maharashtra Rules
  {
    id: '15',
    slug: 'maharashtra-labour-welfare-fund-rules-1967',
    title: 'Maharashtra Labour Welfare Fund Rules, 1967',
    state: 'Maharashtra',
    year: 1967,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/maharashtra-labour-welfare-fund-rules-1967.pdf',
    sizeBytes: 145408,
    summary: 'Rules for the administration and management of the Maharashtra Labour Welfare Fund.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // West Bengal Acts
  {
    id: '16',
    slug: 'payment-of-wages-act-1936',
    title: 'Payment of Wages Act, 1936',
    state: 'West Bengal',
    year: 1936,
    category: 'Act',
    status: 'Repealed',
    pdfUrl: 'https://example.com/pdfs/payment-of-wages-act-1936.pdf',
    sizeBytes: 134144,
    summary: 'An Act to regulate the payment of wages to certain classes of employed persons.',
    source: 'Labour Department, Government of West Bengal',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '17',
    slug: 'west-bengal-shops-establishments-act-1963',
    title: 'West Bengal Shops and Establishments Act, 1963',
    state: 'West Bengal',
    year: 1963,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/west-bengal-shops-establishments-act-1963.pdf',
    sizeBytes: 223232,
    summary: 'An Act to provide for the regulation of conditions of work and employment in shops and establishments.',
    source: 'Labour Department, Government of West Bengal',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // West Bengal Rules
  {
    id: '18',
    slug: 'west-bengal-shops-establishments-rules-1964',
    title: 'West Bengal Shops and Establishments Rules, 1964',
    state: 'West Bengal',
    year: 1964,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/west-bengal-shops-establishments-rules-1964.pdf',
    sizeBytes: 156672,
    summary: 'Rules for the implementation of the West Bengal Shops and Establishments Act, 1963.',
    source: 'Labour Department, Government of West Bengal',
    forms: [
      {
        id: 'f7',
        title: 'FORM I',
        description: 'Form for registering shops and commercial establishments in West Bengal',
        fileUrl: 'https://example.com/forms/west-bengal-shops/FORM-I.xlsx',
        sizeBytes: 42496
      },
      {
        id: 'f8',
        title: 'FORM II',
        description: 'Application for modifying standard working hours for establishments',
        fileUrl: 'https://example.com/forms/west-bengal-shops/FORM-II.xlsx',
        sizeBytes: 30720
      }
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Rajasthan Acts
  {
    id: '19',
    slug: 'workmens-compensation-act-1923',
    title: 'Workmen\'s Compensation Act, 1923',
    state: 'Rajasthan',
    year: 1923,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/workmens-compensation-act-1923.pdf',
    sizeBytes: 167936,
    summary: 'An Act to provide for the payment by certain classes of employers to their workmen.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '20',
    slug: 'rajasthan-labour-welfare-fund-act-1965',
    title: 'Rajasthan Labour Welfare Fund Act, 1965',
    state: 'Rajasthan',
    year: 1965,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/rajasthan-labour-welfare-fund-act-1965.pdf',
    sizeBytes: 189440,
    summary: 'An Act to provide for the constitution of a fund for financing activities to promote welfare of labour.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Rajasthan Rules
  {
    id: '21',
    slug: 'rajasthan-labour-welfare-fund-rules-1967',
    title: 'Rajasthan Labour Welfare Fund Rules, 1967',
    state: 'Rajasthan',
    year: 1967,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/rajasthan-labour-welfare-fund-rules-1967.pdf',
    sizeBytes: 134144,
    summary: 'Rules for the administration and management of the Rajasthan Labour Welfare Fund.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Madhya Pradesh Acts
  {
    id: '22',
    slug: 'payment-of-bonus-act-1965',
    title: 'Payment of Bonus Act, 1965',
    state: 'Madhya Pradesh',
    year: 1965,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/payment-of-bonus-act-1965.pdf',
    sizeBytes: 178176,
    summary: 'An Act to provide for the payment of bonus to persons employed in certain establishments.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '23',
    slug: 'madhya-pradesh-shops-establishments-act-1958',
    title: 'Madhya Pradesh Shops and Establishments Act, 1958',
    state: 'Madhya Pradesh',
    year: 1958,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/madhya-pradesh-shops-establishments-act-1958.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide for the regulation of conditions of work and employment in shops and establishments.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Madhya Pradesh Rules
  {
    id: '24',
    slug: 'madhya-pradesh-shops-establishments-rules-1959',
    title: 'Madhya Pradesh Shops and Establishments Rules, 1959',
    state: 'Madhya Pradesh',
    year: 1959,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/madhya-pradesh-shops-establishments-rules-1959.pdf',
    sizeBytes: 167936,
    summary: 'Rules for the implementation of the Madhya Pradesh Shops and Establishments Act, 1958.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Karnataka Acts
  {
    id: '25',
    slug: 'karnataka-shops-establishments-act-1961',
    title: 'Karnataka Shops and Commercial Establishments Act, 1961',
    state: 'Karnataka',
    year: 1961,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/karnataka-shops-establishments-act-1961.pdf',
    sizeBytes: 234496,
    summary: 'An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.',
    source: 'Labour Department, Government of Karnataka',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Karnataka Rules
  {
    id: '26',
    slug: 'karnataka-shops-establishments-rules-1963',
    title: 'Karnataka Shops and Commercial Establishments Rules, 1963',
    state: 'Karnataka',
    year: 1963,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/karnataka-shops-establishments-rules-1963.pdf',
    sizeBytes: 178176,
    summary: 'Rules for the implementation of the Karnataka Shops and Commercial Establishments Act, 1961.',
    source: 'Labour Department, Government of Karnataka',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Tamil Nadu Acts
  {
    id: '27',
    slug: 'tamil-nadu-shops-establishments-act-1947',
    title: 'Tamil Nadu Shops and Establishments Act, 1947',
    state: 'Tamil Nadu',
    year: 1947,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/tamil-nadu-shops-establishments-act-1947.pdf',
    sizeBytes: 256000,
    summary: 'An Act to provide for the regulation of conditions of work and employment in shops and establishments.',
    source: 'Labour Department, Government of Tamil Nadu',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Tamil Nadu Rules
  {
    id: '28',
    slug: 'tamil-nadu-shops-establishments-rules-1948',
    title: 'Tamil Nadu Shops and Establishments Rules, 1948',
    state: 'Tamil Nadu',
    year: 1948,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/tamil-nadu-shops-establishments-rules-1948.pdf',
    sizeBytes: 189440,
    summary: 'Rules for the implementation of the Tamil Nadu Shops and Establishments Act, 1947.',
    source: 'Labour Department, Government of Tamil Nadu',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Central Acts
  {
    id: '29',
    slug: 'child-labour-act-1986',
    title: 'Child Labour (Prohibition and Regulation) Act, 1986',
    state: 'Central',
    year: 1986,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/child-labour-act-1986.pdf',
    sizeBytes: 198656,
    summary: 'An Act to prohibit the engagement of children in certain employments and to regulate the conditions of work of children.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '30',
    slug: 'payment-of-gratuity-act-1972',
    title: 'Payment of Gratuity Act, 1972',
    state: 'Central',
    year: 1972,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/payment-of-gratuity-act-1972.pdf',
    sizeBytes: 167936,
    summary: 'An Act to provide for a scheme for the payment of gratuity to employees engaged in factories, mines, oilfields, plantations, ports, railway companies, shops or other establishments.',
    source: 'Ministry of Labour and Employment, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Central Rules
  {
    id: '31',
    slug: 'central-civil-services-recruitment-rules-1965',
    title: 'Central Civil Services (Recruitment) Rules, 1965',
    state: 'Central',
    year: 1965,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/central-civil-services-recruitment-rules-1965.pdf',
    sizeBytes: 223232,
    summary: 'Rules governing the recruitment and appointment to various posts in the Central Civil Services.',
    source: 'Department of Personnel and Training, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '32',
    slug: 'central-civil-services-classification-rules-1957',
    title: 'Central Civil Services (Classification, Control and Appeal) Rules, 1957',
    state: 'Central',
    year: 1957,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/central-civil-services-classification-rules-1957.pdf',
    sizeBytes: 256000,
    summary: 'Rules for classification, control and appeal procedures in the Central Civil Services.',
    source: 'Department of Personnel and Training, Government of India',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Maharashtra Acts
  {
    id: '33',
    slug: 'maharashtra-recognition-trade-unions-act-1971',
    title: 'Maharashtra Recognition of Trade Unions and Prevention of Unfair Labour Practices Act, 1971',
    state: 'Maharashtra',
    year: 1971,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/maharashtra-recognition-trade-unions-act-1971.pdf',
    sizeBytes: 312320,
    summary: 'An Act to provide for the recognition of trade unions and prevention of unfair labour practices in Maharashtra.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '34',
    slug: 'maharashtra-industrial-relations-act-1946',
    title: 'Maharashtra Industrial Relations Act, 1946',
    state: 'Maharashtra',
    year: 1946,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/maharashtra-industrial-relations-act-1946.pdf',
    sizeBytes: 298752,
    summary: 'An Act to regulate industrial relations and to provide for the prevention and settlement of industrial disputes in Maharashtra.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Maharashtra Rules
  {
    id: '35',
    slug: 'maharashtra-industrial-relations-rules-1947',
    title: 'Maharashtra Industrial Relations Rules, 1947',
    state: 'Maharashtra',
    year: 1947,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/maharashtra-industrial-relations-rules-1947.pdf',
    sizeBytes: 234496,
    summary: 'Rules for the implementation of the Maharashtra Industrial Relations Act, 1946.',
    source: 'Labour Department, Government of Maharashtra',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '36',
    slug: 'maharashtra-shops-establishments-rules-2018',
    title: 'Maharashtra Shops and Establishments Rules, 2018',
    state: 'Maharashtra',
    year: 2018,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/maharashtra-shops-establishments-rules-2018.pdf',
    sizeBytes: 256000,
    summary: 'Rules for the implementation of the Maharashtra Shops and Establishments Act, 2017.',
    source: 'Labour Department, Government of Maharashtra',
    forms: [
      {
        id: 'f4',
        title: 'FORM A',
        description: 'Application form for registering a new shop or commercial establishment',
        fileUrl: 'https://example.com/forms/maharashtra-shops/FORM-A.xlsx',
        sizeBytes: 28672
      },
      {
        id: 'f5',
        title: 'FORM B',
        description: 'Form for renewing existing shop and establishment license',
        fileUrl: 'https://example.com/forms/maharashtra-shops/FORM-B.xlsx',
        sizeBytes: 25600
      },
      {
        id: 'f6',
        title: 'FORM C',
        description: 'Form for declaring employee details and working conditions',
        fileUrl: 'https://example.com/forms/maharashtra-shops/FORM-C.xlsx',
        sizeBytes: 35840
      }
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional West Bengal Acts
  {
    id: '37',
    slug: 'west-bengal-industrial-disputes-act-1947',
    title: 'West Bengal Industrial Disputes Act, 1947',
    state: 'West Bengal',
    year: 1947,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/west-bengal-industrial-disputes-act-1947.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide for the investigation and settlement of industrial disputes in West Bengal.',
    source: 'Labour Department, Government of West Bengal',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '38',
    slug: 'west-bengal-labour-welfare-fund-act-1974',
    title: 'West Bengal Labour Welfare Fund Act, 1974',
    state: 'West Bengal',
    year: 1974,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/west-bengal-labour-welfare-fund-act-1974.pdf',
    sizeBytes: 198656,
    summary: 'An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in West Bengal.',
    source: 'Labour Department, Government of West Bengal',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional West Bengal Rules
  {
    id: '39',
    slug: 'west-bengal-labour-welfare-fund-rules-1975',
    title: 'West Bengal Labour Welfare Fund Rules, 1975',
    state: 'West Bengal',
    year: 1975,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/west-bengal-labour-welfare-fund-rules-1975.pdf',
    sizeBytes: 167936,
    summary: 'Rules for the administration and management of the West Bengal Labour Welfare Fund.',
    source: 'Labour Department, Government of West Bengal',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '40',
    slug: 'west-bengal-industrial-disputes-rules-1948',
    title: 'West Bengal Industrial Disputes Rules, 1948',
    state: 'West Bengal',
    year: 1948,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/west-bengal-industrial-disputes-rules-1948.pdf',
    sizeBytes: 212992,
    summary: 'Rules for the implementation of the West Bengal Industrial Disputes Act, 1947.',
    source: 'Labour Department, Government of West Bengal',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Rajasthan Acts
  {
    id: '41',
    slug: 'rajasthan-industrial-disputes-act-1947',
    title: 'Rajasthan Industrial Disputes Act, 1947',
    state: 'Rajasthan',
    year: 1947,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/rajasthan-industrial-disputes-act-1947.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide for the investigation and settlement of industrial disputes in Rajasthan.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '42',
    slug: 'rajasthan-shops-establishments-act-1958',
    title: 'Rajasthan Shops and Commercial Establishments Act, 1958',
    state: 'Rajasthan',
    year: 1958,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/rajasthan-shops-establishments-act-1958.pdf',
    sizeBytes: 234496,
    summary: 'An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments in Rajasthan.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Rajasthan Rules
  {
    id: '43',
    slug: 'rajasthan-industrial-disputes-rules-1948',
    title: 'Rajasthan Industrial Disputes Rules, 1948',
    state: 'Rajasthan',
    year: 1948,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/rajasthan-industrial-disputes-rules-1948.pdf',
    sizeBytes: 212992,
    summary: 'Rules for the implementation of the Rajasthan Industrial Disputes Act, 1947.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '44',
    slug: 'rajasthan-shops-establishments-rules-1959',
    title: 'Rajasthan Shops and Commercial Establishments Rules, 1959',
    state: 'Rajasthan',
    year: 1959,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/rajasthan-shops-establishments-rules-1959.pdf',
    sizeBytes: 189440,
    summary: 'Rules for the implementation of the Rajasthan Shops and Commercial Establishments Act, 1958.',
    source: 'Labour Department, Government of Rajasthan',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Madhya Pradesh Acts
  {
    id: '45',
    slug: 'madhya-pradesh-industrial-disputes-act-1947',
    title: 'Madhya Pradesh Industrial Disputes Act, 1947',
    state: 'Madhya Pradesh',
    year: 1947,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/madhya-pradesh-industrial-disputes-act-1947.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide for the investigation and settlement of industrial disputes in Madhya Pradesh.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '46',
    slug: 'madhya-pradesh-labour-welfare-fund-act-1982',
    title: 'Madhya Pradesh Labour Welfare Fund Act, 1982',
    state: 'Madhya Pradesh',
    year: 1982,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/madhya-pradesh-labour-welfare-fund-act-1982.pdf',
    sizeBytes: 198656,
    summary: 'An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in Madhya Pradesh.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Madhya Pradesh Rules
  {
    id: '47',
    slug: 'madhya-pradesh-industrial-disputes-rules-1948',
    title: 'Madhya Pradesh Industrial Disputes Rules, 1948',
    state: 'Madhya Pradesh',
    year: 1948,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/madhya-pradesh-industrial-disputes-rules-1948.pdf',
    sizeBytes: 212992,
    summary: 'Rules for the implementation of the Madhya Pradesh Industrial Disputes Act, 1947.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '48',
    slug: 'madhya-pradesh-labour-welfare-fund-rules-1983',
    title: 'Madhya Pradesh Labour Welfare Fund Rules, 1983',
    state: 'Madhya Pradesh',
    year: 1983,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/madhya-pradesh-labour-welfare-fund-rules-1983.pdf',
    sizeBytes: 167936,
    summary: 'Rules for the administration and management of the Madhya Pradesh Labour Welfare Fund.',
    source: 'Labour Department, Government of Madhya Pradesh',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Karnataka Acts
  {
    id: '49',
    slug: 'karnataka-industrial-disputes-act-1947',
    title: 'Karnataka Industrial Disputes Act, 1947',
    state: 'Karnataka',
    year: 1947,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/karnataka-industrial-disputes-act-1947.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide for the investigation and settlement of industrial disputes in Karnataka.',
    source: 'Labour Department, Government of Karnataka',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '50',
    slug: 'karnataka-labour-welfare-fund-act-1965',
    title: 'Karnataka Labour Welfare Fund Act, 1965',
    state: 'Karnataka',
    year: 1965,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/karnataka-labour-welfare-fund-act-1965.pdf',
    sizeBytes: 198656,
    summary: 'An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in Karnataka.',
    source: 'Labour Department, Government of Karnataka',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Karnataka Rules
  {
    id: '51',
    slug: 'karnataka-industrial-disputes-rules-1948',
    title: 'Karnataka Industrial Disputes Rules, 1948',
    state: 'Karnataka',
    year: 1948,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/karnataka-industrial-disputes-rules-1948.pdf',
    sizeBytes: 212992,
    summary: 'Rules for the implementation of the Karnataka Industrial Disputes Act, 1947.',
    source: 'Labour Department, Government of Karnataka',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '52',
    slug: 'karnataka-labour-welfare-fund-rules-1967',
    title: 'Karnataka Labour Welfare Fund Rules, 1967',
    state: 'Karnataka',
    year: 1967,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/karnataka-labour-welfare-fund-rules-1967.pdf',
    sizeBytes: 167936,
    summary: 'Rules for the administration and management of the Karnataka Labour Welfare Fund.',
    source: 'Labour Department, Government of Karnataka',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Tamil Nadu Acts
  {
    id: '53',
    slug: 'tamil-nadu-industrial-disputes-act-1947',
    title: 'Tamil Nadu Industrial Disputes Act, 1947',
    state: 'Tamil Nadu',
    year: 1947,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/tamil-nadu-industrial-disputes-act-1947.pdf',
    sizeBytes: 245760,
    summary: 'An Act to provide for the investigation and settlement of industrial disputes in Tamil Nadu.',
    source: 'Labour Department, Government of Tamil Nadu',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '54',
    slug: 'tamil-nadu-labour-welfare-fund-act-1972',
    title: 'Tamil Nadu Labour Welfare Fund Act, 1972',
    state: 'Tamil Nadu',
    year: 1972,
    category: 'Act',
    pdfUrl: 'https://example.com/pdfs/tamil-nadu-labour-welfare-fund-act-1972.pdf',
    sizeBytes: 198656,
    summary: 'An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in Tamil Nadu.',
    source: 'Labour Department, Government of Tamil Nadu',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  // Additional Tamil Nadu Rules
  {
    id: '55',
    slug: 'tamil-nadu-industrial-disputes-rules-1948',
    title: 'Tamil Nadu Industrial Disputes Rules, 1948',
    state: 'Tamil Nadu',
    year: 1948,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/tamil-nadu-industrial-disputes-rules-1948.pdf',
    sizeBytes: 212992,
    summary: 'Rules for the implementation of the Tamil Nadu Industrial Disputes Act, 1947.',
    source: 'Labour Department, Government of Tamil Nadu',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: '56',
    slug: 'tamil-nadu-labour-welfare-fund-rules-1973',
    title: 'Tamil Nadu Labour Welfare Fund Rules, 1973',
    state: 'Tamil Nadu',
    year: 1973,
    category: 'Rule',
    pdfUrl: 'https://example.com/pdfs/tamil-nadu-labour-welfare-fund-rules-1973.pdf',
    sizeBytes: 167936,
    summary: 'Rules for the administration and management of the Tamil Nadu Labour Welfare Fund.',
    source: 'Labour Department, Government of Tamil Nadu',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  }
];

export const SEED_NOTIFICATIONS: Notification[] = [
  // Notifications for Right to Education Act, 2009
  {
    id: 'n1',
    actId: '1',
    title: 'Amendment to RTE Act - Free Uniform Provision',
    type: 'amendment',
    date: '2024-12-15',
    source: 'Ministry of Education, Government of India',
    pdfUrl: 'https://example.com/pdfs/notifications/rte-uniform-amendment-2024.pdf'
  },
  {
    id: 'n2',
    actId: '1',
    title: 'Implementation Update - Digital Learning Resources',
    type: 'implementation',
    date: '2024-11-20',
    source: 'Ministry of Education, Government of India',
    pdfUrl: 'https://example.com/pdfs/notifications/rte-digital-learning-2024.pdf'
  },
  {
    id: 'n3',
    actId: '1',
    title: 'Clarification on Age Verification Process',
    type: 'clarification',
    date: '2024-10-05',
    source: 'Central Board of Secondary Education'
  },

  // Notifications for Contract Labour Act, 1970
  {
    id: 'n4',
    actId: '2',
    title: 'Enhanced Penalties for Non-Compliance',
    type: 'enforcement',
    date: '2024-12-01',
    source: 'Ministry of Labour and Employment, Government of India',
    pdfUrl: 'https://example.com/pdfs/notifications/contract-labour-penalties-2024.pdf'
  },
  {
    id: 'n5',
    actId: '2',
    title: 'Digital Registration System Launch',
    type: 'update',
    date: '2024-11-10',
    source: 'Ministry of Labour and Employment, Government of India'
  },

  // Notifications for Minimum Wages Act, 1948
  {
    id: 'n6',
    actId: '3',
    title: 'Revised Minimum Wage Rates 2024',
    type: 'update',
    date: '2024-01-01',
    source: 'Ministry of Labour and Employment, Government of India',
    pdfUrl: 'https://example.com/pdfs/notifications/minimum-wage-rates-2024.pdf'
  },
  {
    id: 'n7',
    actId: '3',
    title: 'Quarterly Review Process Implementation',
    type: 'implementation',
    date: '2024-09-15',
    source: 'Central Advisory Board on Minimum Wages'
  },

  // Notifications for Factories Act, 1948
  {
    id: 'n8',
    actId: '4',
    title: 'Safety Protocol Updates - Chemical Industries',
    type: 'amendment',
    date: '2024-11-25',
    source: 'Directorate General of Factory Advice Service',
    pdfUrl: 'https://example.com/pdfs/notifications/factory-safety-protocols-2024.pdf'
  },
  {
    id: 'n9',
    actId: '4',
    title: 'Digital Inspection System Rollout',
    type: 'implementation',
    date: '2024-10-20',
    source: 'Ministry of Labour and Employment, Government of India'
  },

  // Notifications for Maharashtra Shops and Establishments Act, 2017
  {
    id: 'n10',
    actId: '13',
    title: 'Extended Working Hours During Festival Season',
    type: 'clarification',
    date: '2024-12-10',
    source: 'Labour Department, Government of Maharashtra'
  },
  {
    id: 'n11',
    actId: '13',
    title: 'Online Registration Portal Enhancement',
    type: 'update',
    date: '2024-11-05',
    source: 'Labour Department, Government of Maharashtra'
  },

  // Notifications for West Bengal Shops and Establishments Act, 1963
  {
    id: 'n12',
    actId: '17',
    title: 'Compliance Audit Guidelines',
    type: 'enforcement',
    date: '2024-12-08',
    source: 'Labour Department, Government of West Bengal'
  },

  // Notifications for Central Civil Services Rules, 1964
  {
    id: 'n13',
    actId: '9',
    title: 'Updated Code of Conduct for Social Media',
    type: 'amendment',
    date: '2024-11-30',
    source: 'Department of Personnel and Training, Government of India'
  },
  {
    id: 'n14',
    actId: '9',
    title: 'Anti-Corruption Training Mandatory',
    type: 'implementation',
    date: '2024-10-15',
    source: 'Central Vigilance Commission'
  }
];
