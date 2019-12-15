import * as React from 'react'

interface LogoProps {
    width: Number,
    height: Number
};

export const Logo = (props: LogoProps) => {
    return (
        <svg
        width={`${props.width.toString()}px`}
        height={`${props.height.toString()}px`}
        viewBox={`0 0 480 480`}
        xmlns="http://www.w3.org/2000/svg"
        >
            <title>Get Soaped</title>
            <g>
                <path d="M288.11,243.518c-0.624-4.374-4.676-7.414-9.05-6.79c-0.127,0.018-0.254,0.039-0.38,0.064l-19.152,3.2
                    c-12.938,2.144-26.142,2.144-39.08,0l-19.136-3.2c-4.378-0.593-8.409,2.475-9.002,6.853c-0.568,4.193,2.227,8.103,6.378,8.923
                    l19.128,3.2c14.683,2.443,29.669,2.443,44.352,0l19.152-3.2C285.694,251.944,288.734,247.892,288.11,243.518z"/>

                <path d="M472,308h-32.496c0.264-3.016,0.496-6.04,0.496-9.104c-0.005-56.819-46.069-102.876-102.888-102.872
                    c-5.663,0-11.317,0.469-16.904,1.4l-65.92,10.992c-9.46,1.576-19.116,1.576-28.576,0l-65.92-10.992
                    c-56.046-9.34-109.052,28.522-118.392,84.568c-0.931,5.586-1.399,11.24-1.4,16.904c0,3.064,0.232,6.088,0.496,9.104H8
                    c-4.418,0-8,3.582-8,8v48c0.044,39.746,32.254,71.956,72,72h336c39.746-0.044,71.956-32.254,72-72v-48
                    C480,311.582,476.418,308,472,308z M86.72,232.592l0,0.024c19.478-16.53,45.252-23.633,70.448-19.416l65.92,10.992
                    c11.196,1.88,22.628,1.88,33.824,0l65.92-10.992c47.331-7.881,92.089,24.099,99.97,71.43s-24.099,92.089-71.43,99.97
                    c-9.449,1.573-19.092,1.573-28.541,0l-65.92-11c-11.197-1.867-22.627-1.867-33.824,0l-65.92,10.992
                    c-47.327,7.903-92.1-24.057-100.003-71.385C52.122,283.005,63.351,252.378,86.72,232.592z M464,364
                    c-0.04,30.911-25.089,55.96-56,56H72c-30.911-0.04-55.96-25.089-56-56v-40h27.2c12.97,51.983,63.738,85.247,116.576,76.384
                    l65.92-10.992c9.46-1.576,19.116-1.576,28.576,0l65.92,10.992C373.041,409.266,423.829,375.997,436.8,324H464V364z"/>

                <path d="M308,140c-11.046,0-20,8.954-20,20s8.954,20,20,20c11.046,0,20-8.954,20-20S319.046,140,308,140z M308,164
                    c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4c2.209,0,4,1.791,4,4C312,162.209,310.209,164,308,164z"/>

                <path d="M368,76c-17.673,0-32,14.327-32,32s14.327,32,32,32c17.673,0,32-14.327,32-32S385.673,76,368,76z M368,124
                    c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S376.837,124,368,124z"/>

                <path d="M288,44c-17.673,0-32,14.327-32,32s14.327,32,32,32c17.673,0,32-14.327,32-32S305.673,44,288,44z M288,92
                    c-8.837,0-16-7.163-16-16s7.163-16,16-16s16,7.163,16,16S296.837,92,288,92z"/>
            </g>
        </svg>
    );
}