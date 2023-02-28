import React from 'react';

type SVGProp = {
  svgColor?: string;
};

export default function Income({ svgColor }: SVGProp) {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.286 5H8.14318C7.30965 5 6.51027 5.33112 5.92087 5.92051C5.33148 6.5099 5.00037 7.30929 5.00037 8.14281V26.9997C5.00037 27.8332 5.33148 28.6326 5.92087 29.222C6.51027 29.8114 7.30965 30.1425 8.14318 30.1425H23.8572C24.6908 30.1425 25.4901 29.8114 26.0795 29.222C26.6689 28.6326 27 27.8332 27 26.9997V8.14281C27 7.30929 26.6689 6.5099 26.0795 5.92051C25.4901 5.33112 24.6908 5 23.8572 5H20.7144"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5716 1.85547H14.4288C12.6931 1.85547 11.286 3.26255 11.286 4.99828C11.286 6.73401 12.6931 8.14109 14.4288 8.14109H17.5716C19.3074 8.14109 20.7144 6.73401 20.7144 4.99828C20.7144 3.26255 19.3074 1.85547 17.5716 1.85547Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1432 14.4258H15.2147C14.5895 14.4258 13.99 14.6741 13.5479 15.1162C13.1059 15.5582 12.8575 16.1577 12.8575 16.7829C12.8575 17.408 13.1059 18.0076 13.5479 18.4496C13.99 18.8917 14.5895 19.14 15.2147 19.14H16.7861C17.4112 19.14 18.0107 19.3883 18.4528 19.8304C18.8948 20.2724 19.1432 20.872 19.1432 21.4971C19.1432 22.1222 18.8948 22.7218 18.4528 23.1638C18.0107 23.6059 17.4112 23.8542 16.7861 23.8542H12.8575"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12.8555V14.4269M16 23.8553V25.4267V23.8553Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
