"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations('footerSection');
  return (
    <>
      <footer className="w-full relative z-10 pt-16 md:pt-20 lg:pt-24">
      <div className="w-full mx-auto flex items-center justify-between pt-8.pb-0 space-x-4">
    <div className="flex-shrink-0">
      <svg
        width="79"
        height="94"
        viewBox="0 0 79 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          x="-41"
          y="26.9426"
          width="66.6675"
          height="66.6675"
          transform="rotate(-22.9007 -41 26.9426)"
          fill="url(#paint0_linear_94:889)"
        />
        <rect
          x="-41"
          y="26.9426"
          width="66.6675"
          height="66.6675"
          transform="rotate(-22.9007 -41 26.9426)"
          stroke="url(#paint1_linear_94:889)"
          strokeWidth="0.7"
        />
        <path
          opacity="0.3"
          d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
          fill="url(#paint2_linear_94:889)"
        />
        <path
          d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
          stroke="url(#paint3_linear_94:889)"
          strokeWidth="0.7"
        />
        <path
          opacity="0.3"
          d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
          fill="url(#paint4_linear_94:889)"
        />
        <path
          d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
          stroke="url(#paint5_linear_94:889)"
          strokeWidth="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_94:889"
            x1="-41"
            y1="21.8445"
            x2="36.9671"
            y2="59.8878"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_94:889"
            x1="25.6675"
            y1="95.9631"
            x2="-42.9608"
            y2="20.668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_94:889"
            x1="20.325"
            y1="-3.98039"
            x2="90.6248"
            y2="25.1062"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_94:889"
            x1="18.3642"
            y1="-1.59742"
            x2="113.9"
            y2="80.6826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_94:889"
            x1="61.1098"
            y1="62.3249"
            x2="-8.82468"
            y2="58.2156"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_94:889"
            x1="65.4236"
            y1="65.0701"
            x2="24.0178"
            y2="41.6598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <p className="text-center text-base text-body-color dark:text-white">
    
            {t('title')}
    
    </p>

    <div className="flex-shrink-0">
      <svg
        width="79"
        height="94"
        viewBox="0 0 79 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          x="54"
          y="26.9426"
          width="66.6675"
          height="66.6675"
          transform="rotate(22.9007 54 26.9426)"
          fill="url(#paint0_linear_94:889)"
        />
        <rect
          x="54"
          y="26.9426"
          width="66.6675"
          height="66.6675"
          transform="rotate(22.9007 54 26.9426)"
          stroke="url(#paint1_linear_94:889)"
          strokeWidth="0.7"
        />
        <path
          opacity="0.3"
          d="M28.4785 7.42229L58.675 1.14771L32.7923 62.3249L1.8115 68.2073L28.4785 7.42229Z"
          fill="url(#paint2_linear_94:889)"
        />
        <path
          d="M28.4785 7.42229L58.675 1.14771L32.7923 62.3249L1.8115 68.2073L28.4785 7.42229Z"
          stroke="url(#paint3_linear_94:889)"
          strokeWidth="0.7"
        />
        <path
          opacity="0.3"
          d="M61.0279 93.3057L94.9695 88.2076L32.7923 62.325L1.8115 68.2074L61.0279 93.3057Z"
          fill="url(#paint4_linear_94:889)"
        />
        <path
          d="M61.0279 93.3057L94.1852 88.2076L32.7923 62.325L1.8115 68.2074L61.0279 93.3057Z"
          stroke="url(#paint5_linear_94:889)"
          strokeWidth="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_94:889"
            x1="54"
            y1="21.8445"
            x2="-23.9671"
            y2="59.8878"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_94:889"
            x1="-12.6675"
            y1="95.9631"
            x2="55.9608"
            y2="20.668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_94:889"
            x1="58.675"
            y1="-3.98039"
            x2="-11.6248"
            y2="25.1062"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_94:889"
            x1="60.6358"
            y1="-1.59742"
            x2="-34.9"
            y2="80.6826"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_94:889"
            x1="28.8902"
            y1="62.3249"
            x2="98.8247"
            y2="58.2156"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_94:889"
            x1="24.5764"
            y1="65.0701"
            x2="65.9822"
            y2="41.6598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" stopOpacity="0" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
