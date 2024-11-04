import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const fullPath = `/${locale}/contact`;


  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-3xl md:leading-tight" style={{ color: '#4a6cf7' }}>
                  {t('title')}
                </h1>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {t('subtitle')}
                </h2>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  {t('description')}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href={fullPath}
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    {t('contactUs')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M277 288 
             C 502 288, 452 -162, 277 -162
             C 102 -162, 52 288, 277 288"
          fill="url(#paint0_linear)" />
    
    <circle cx="45" cy="150" r="28" fill="url(#paint1_radial)" />
    <circle cx="120" cy="220" r="15" fill="url(#paint1_radial)" />
    <circle cx="90" cy="320" r="40" fill="url(#paint2_radial)" />
    <circle cx="380" cy="180" r="22" fill="url(#paint2_radial)" />
    <circle cx="420" cy="280" r="18" fill="url(#paint1_radial)" />
    
    <path d="M325 483
             C 505 483, 505 123, 325 123
             C 145 123, 145 483, 325 483"
          transform="rotate(-37.6852 325.486 302.87)"
          fill="url(#paint3_linear)" />
    
    <path d="M184 448
             C 317 448, 317 183, 184 183
             C 51 183, 51 448, 184 448"
          transform="rotate(114.874 184.521 315.521)"
          stroke="url(#paint4_linear)"
          strokeWidth="2"
          fill="none" />
    
    <path d="M356 470
             C 535 470, 535 110, 356 110
             C 177 110, 177 470, 356 470"
          transform="rotate(-30 356 290)"
          stroke="url(#paint5_linear)"
          strokeWidth="2"
          fill="none" />
    
    <circle cx="200" cy="150" r="8" fill="url(#paint1_radial)" />
    <circle cx="350" cy="400" r="12" fill="url(#paint2_radial)" />
    <path d="M192 436
             C 325 436, 325 169, 192 169
             C 59 169, 59 436, 192 436"
          transform="rotate(133.319 191.659 302.659)"
          fill="url(#paint6_linear)" />
    
    <circle cx="150" cy="100" r="4" fill="url(#paint1_radial)" />
    <circle cx="400" cy="350" r="6" fill="url(#paint2_radial)" />
    <circle cx="300" cy="200" r="5" fill="url(#paint1_radial)" />
    
    <defs>
        <linearGradient id="paint0_linear" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
            <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
        </radialGradient>
        
        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
            <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.12" />
        </radialGradient>
        
        <linearGradient id="paint3_linear" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="paint4_linear" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="paint5_linear" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="paint6_linear" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
    </defs>
</svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.88928 72.3303 
             C 33.6599 56.4798, 101.397 44.9086, 150.178 95.427 
             C 211.155 146.076, 229.59 162.093, 264.333 156.607 
             C 299.076 151.12, 337.718 163.657, 362.889 192.24" 
          stroke="url(#paint0_linear)" />
    
    <path d="M-22.1107 82.3303 
             C 5.65989 66.4798, 73.3965 54.9086, 122.178 105.427 
             C 183.155 156.076, 201.59 172.093, 236.333 166.607 
             C 271.076 161.12, 309.718 173.657, 334.889 202.24" 
          stroke="url(#paint1_linear)" />
    
    <path d="M-53.1107 92.3303 
             C -25.3401 76.4798, 42.3965 64.9086, 91.1783 115.427 
             C 152.155 166.076, 170.59 182.093, 205.333 176.607 
             C 240.076 171.12, 278.718 183.657, 303.889 212.24" 
          stroke="url(#paint2_linear)" />
    
    <path d="M-98.1618 102.3303 
             C -68.1416 86.4798, -4.73364 74.9086, 56.0734 125.427 
             C 120.248 176.076, 139.905 192.093, 177.137 186.607 
             C 214.37 181.12, 255.575 193.657, 281.856 222.24" 
          stroke="url(#paint3_linear)" />
    
    <circle cx="214.505" cy="60.5054" r="49.7205" 
            transform="rotate(-13.421 214.505 60.5054)" 
            stroke="url(#paint4_linear)" 
            opacity="0.8" />
    
    <circle cx="220" cy="63" r="43" 
            fill="url(#paint5_radial)" />
    
    <defs>
        <linearGradient id="paint0_linear" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        
        <linearGradient id="paint1_linear" x1="156.389" y1="69.2405" x2="156.389" y2="212.24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        
        <linearGradient id="paint2_linear" x1="125.389" y1="69.2405" x2="125.389" y2="212.24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        
        <linearGradient id="paint3_linear" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" />
        </linearGradient>
        
        <linearGradient id="paint4_linear" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        
        <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)">
            <stop offset="0.145833" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.08" />
        </radialGradient>
    </defs>
</svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
