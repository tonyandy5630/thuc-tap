import React from 'react';

type SVGProp = {
  svgColor?: string;
};

const Calender: React.FC<SVGProp> = ({ svgColor }: SVGProp) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 28 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24.332C14.2637 24.332 14.5215 24.2538 14.7407 24.1073C14.96 23.9608 15.1309 23.7526 15.2318 23.5089C15.3327 23.2653 15.3591 22.9972 15.3077 22.7386C15.2562 22.4799 15.1292 22.2424 14.9428 22.0559C14.7563 21.8694 14.5187 21.7424 14.2601 21.691C14.0014 21.6395 13.7333 21.6659 13.4897 21.7669C13.2461 21.8678 13.0378 22.0387 12.8913 22.2579C12.7448 22.4772 12.6666 22.735 12.6666 22.9987C12.6666 23.3523 12.8071 23.6915 13.0572 23.9415C13.3072 24.1916 13.6463 24.332 14 24.332ZM20.6666 24.332C20.9303 24.332 21.1881 24.2538 21.4074 24.1073C21.6267 23.9608 21.7976 23.7526 21.8985 23.5089C21.9994 23.2653 22.0258 22.9972 21.9743 22.7386C21.9229 22.4799 21.7959 22.2424 21.6094 22.0559C21.423 21.8694 21.1854 21.7424 20.9267 21.691C20.6681 21.6395 20.4 21.6659 20.1564 21.7669C19.9127 21.8678 19.7045 22.0387 19.558 22.2579C19.4115 22.4772 19.3333 22.735 19.3333 22.9987C19.3333 23.3523 19.4738 23.6915 19.7238 23.9415C19.9739 24.1916 20.313 24.332 20.6666 24.332ZM20.6666 18.9987C20.9303 18.9987 21.1881 18.9205 21.4074 18.774C21.6267 18.6275 21.7976 18.4192 21.8985 18.1756C21.9994 17.932 22.0258 17.6639 21.9743 17.4052C21.9229 17.1466 21.7959 16.909 21.6094 16.7226C21.423 16.5361 21.1854 16.4091 20.9267 16.3576C20.6681 16.3062 20.4 16.3326 20.1564 16.4335C19.9127 16.5344 19.7045 16.7053 19.558 16.9246C19.4115 17.1439 19.3333 17.4017 19.3333 17.6654C19.3333 18.019 19.4738 18.3581 19.7238 18.6082C19.9739 18.8582 20.313 18.9987 20.6666 18.9987ZM14 18.9987C14.2637 18.9987 14.5215 18.9205 14.7407 18.774C14.96 18.6275 15.1309 18.4192 15.2318 18.1756C15.3327 17.932 15.3591 17.6639 15.3077 17.4052C15.2562 17.1466 15.1292 16.909 14.9428 16.7226C14.7563 16.5361 14.5187 16.4091 14.2601 16.3576C14.0014 16.3062 13.7333 16.3326 13.4897 16.4335C13.2461 16.5344 13.0378 16.7053 12.8913 16.9246C12.7448 17.1439 12.6666 17.4017 12.6666 17.6654C12.6666 18.019 12.8071 18.3581 13.0572 18.6082C13.3072 18.8582 13.6463 18.9987 14 18.9987ZM23.3333 2.9987H22V1.66536C22 1.31174 21.8595 0.972604 21.6094 0.722555C21.3594 0.472507 21.0202 0.332031 20.6666 0.332031C20.313 0.332031 19.9739 0.472507 19.7238 0.722555C19.4738 0.972604 19.3333 1.31174 19.3333 1.66536V2.9987H8.66663V1.66536C8.66663 1.31174 8.52615 0.972604 8.2761 0.722555C8.02605 0.472507 7.68691 0.332031 7.33329 0.332031C6.97967 0.332031 6.64053 0.472507 6.39048 0.722555C6.14044 0.972604 5.99996 1.31174 5.99996 1.66536V2.9987H4.66663C3.60576 2.9987 2.58834 3.42013 1.8382 4.17027C1.08805 4.92042 0.666626 5.93783 0.666626 6.9987V25.6654C0.666626 26.7262 1.08805 27.7436 1.8382 28.4938C2.58834 29.2439 3.60576 29.6654 4.66663 29.6654H23.3333C24.3942 29.6654 25.4116 29.2439 26.1617 28.4938C26.9119 27.7436 27.3333 26.7262 27.3333 25.6654V6.9987C27.3333 5.93783 26.9119 4.92042 26.1617 4.17027C25.4116 3.42013 24.3942 2.9987 23.3333 2.9987ZM24.6666 25.6654C24.6666 26.019 24.5262 26.3581 24.2761 26.6082C24.0261 26.8582 23.6869 26.9987 23.3333 26.9987H4.66663C4.313 26.9987 3.97387 26.8582 3.72382 26.6082C3.47377 26.3581 3.33329 26.019 3.33329 25.6654V13.6654H24.6666V25.6654ZM24.6666 10.9987H3.33329V6.9987C3.33329 6.64508 3.47377 6.30594 3.72382 6.05589C3.97387 5.80584 4.313 5.66536 4.66663 5.66536H5.99996V6.9987C5.99996 7.35232 6.14044 7.69146 6.39048 7.94151C6.64053 8.19155 6.97967 8.33203 7.33329 8.33203C7.68691 8.33203 8.02605 8.19155 8.2761 7.94151C8.52615 7.69146 8.66663 7.35232 8.66663 6.9987V5.66536H19.3333V6.9987C19.3333 7.35232 19.4738 7.69146 19.7238 7.94151C19.9739 8.19155 20.313 8.33203 20.6666 8.33203C21.0202 8.33203 21.3594 8.19155 21.6094 7.94151C21.8595 7.69146 22 7.35232 22 6.9987V5.66536H23.3333C23.6869 5.66536 24.0261 5.80584 24.2761 6.05589C24.5262 6.30594 24.6666 6.64508 24.6666 6.9987V10.9987ZM7.33329 18.9987C7.597 18.9987 7.85479 18.9205 8.07405 18.774C8.29332 18.6275 8.46422 18.4192 8.56513 18.1756C8.66605 17.932 8.69245 17.6639 8.64101 17.4052C8.58956 17.1466 8.46257 16.909 8.2761 16.7226C8.08963 16.5361 7.85205 16.4091 7.59341 16.3576C7.33477 16.3062 7.06668 16.3326 6.82305 16.4335C6.57941 16.5344 6.37118 16.7053 6.22467 16.9246C6.07816 17.1439 5.99996 17.4017 5.99996 17.6654C5.99996 18.019 6.14044 18.3581 6.39048 18.6082C6.64053 18.8582 6.97967 18.9987 7.33329 18.9987ZM7.33329 24.332C7.597 24.332 7.85479 24.2538 8.07405 24.1073C8.29332 23.9608 8.46422 23.7526 8.56513 23.5089C8.66605 23.2653 8.69245 22.9972 8.64101 22.7386C8.58956 22.4799 8.46257 22.2424 8.2761 22.0559C8.08963 21.8694 7.85205 21.7424 7.59341 21.691C7.33477 21.6395 7.06668 21.6659 6.82305 21.7669C6.57941 21.8678 6.37118 22.0387 6.22467 22.2579C6.07816 22.4772 5.99996 22.735 5.99996 22.9987C5.99996 23.3523 6.14044 23.6915 6.39048 23.9415C6.64053 24.1916 6.97967 24.332 7.33329 24.332Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Calender;
