export const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.927 15.0401L18.4001 18.4001M17.2801 9.4401C17.2801 13.77 13.77 17.2801 9.4401 17.2801C5.11019 17.2801 1.6001 13.77 1.6001 9.4401C1.6001 5.11019 5.11019 1.6001 9.4401 1.6001C13.77 1.6001 17.2801 5.11019 17.2801 9.4401Z"
            stroke="#9DA3B5"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.8002 8.3999L9.64068 15.5999L7.2002 13.1456"
            stroke="#2C3038"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const ChevronDown = ({ width, height }) => (
    <svg width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.7998 9.5999L11.9998 14.3999L7.19981 9.5999"
            stroke="#616879"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.81006 13.6155C3.07261 13.8803 3.42871 14.029 3.80001 14.029H12.2C12.5713 14.029 12.9274 13.8803 13.19 13.6155M8.00079 1.97119V9.97119M8.00079 9.97119L11.2008 6.91442M8.00079 9.97119L4.80079 6.91442"
            stroke="#2080F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const OnTimeIcon = (props) => {
    if (props.type === 'small')
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#2080F6" />
                <path
                    d="M9.79995 4.8999L5.62357 9.0999L4.19995 7.66824"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    else
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#2080F6" />
                <path
                    d="M16.8 8.3999L9.64043 15.5999L7.19995 13.1456"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
};

export const NotOnTimeIcon = (props) => {
    if (props.type === 'small')
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM6.5 3.625C6.5 3.55625 6.55625 3.5 6.625 3.5H7.375C7.44375 3.5 7.5 3.55625 7.5 3.625V7.875C7.5 7.94375 7.44375 8 7.375 8H6.625C6.55625 8 6.5 7.94375 6.5 7.875V3.625ZM7 10.5C6.80374 10.496 6.61687 10.4152 6.47948 10.275C6.3421 10.1348 6.26515 9.9463 6.26515 9.75C6.26515 9.5537 6.3421 9.36522 6.47948 9.225C6.61687 9.08478 6.80374 9.00401 7 9C7.19626 9.00401 7.38313 9.08478 7.52052 9.225C7.6579 9.36522 7.73485 9.5537 7.73485 9.75C7.73485 9.9463 7.6579 10.1348 7.52052 10.275C7.38313 10.4152 7.19626 10.496 7 10.5Z"
                    fill="#FF4D4F"
                />
            </svg>
        );
    else
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM11.1429 6.21429C11.1429 6.09643 11.2393 6 11.3571 6H12.6429C12.7607 6 12.8571 6.09643 12.8571 6.21429V13.5C12.8571 13.6179 12.7607 13.7143 12.6429 13.7143H11.3571C11.2393 13.7143 11.1429 13.6179 11.1429 13.5V6.21429ZM12 18C11.6636 17.9931 11.3432 17.8547 11.1077 17.6143C10.8722 17.3739 10.7403 17.0508 10.7403 16.7143C10.7403 16.3778 10.8722 16.0547 11.1077 15.8143C11.3432 15.5739 11.6636 15.4354 12 15.4286C12.3364 15.4354 12.6568 15.5739 12.8923 15.8143C13.1278 16.0547 13.2597 16.3778 13.2597 16.7143C13.2597 17.0508 13.1278 17.3739 12.8923 17.6143C12.6568 17.8547 12.3364 17.9931 12 18Z"
                    fill="#FF4D4F"
                />
            </svg>
        );
};

export const CloseX = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 5L5 19M19 19L5 5" stroke="#505665" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const EyeClose = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.4 19.5L5.4 4.5M10.2 10.4416C9.82658 10.8533 9.6 11.394 9.6 11.9863C9.6 13.2761 10.6745 14.3217 12 14.3217C12.6111 14.3217 13.1689 14.0994 13.5927 13.7334M20.4388 14.3217C21.265 13.0848 21.6 12.0761 21.6 12.0761C21.6 12.0761 19.4154 5.1 12 5.1C11.5837 5.1 11.1839 5.12199 10.8 5.16349M17.4 17.3494C16.0226 18.2281 14.2493 18.8495 12 18.8127C4.67692 18.693 2.4 12.0761 2.4 12.0761C2.4 12.0761 3.45786 8.69808 6.6 6.64332"
            stroke="#777E90"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

export const EyeShow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 18C16.1255 18 19.0592 15.4076 20.7773 13.2486C21.3732 12.4998 21.3732 11.5002 20.7773 10.7514C19.0592 8.59239 16.1255 6 12 6C7.8745 6 4.94079 8.59238 3.22274 10.7514C2.62684 11.5002 2.62684 12.4998 3.22274 13.2486C4.94079 15.4076 7.8745 18 12 18ZM22.3422 14.494C23.5182 13.0163 23.5182 10.9837 22.3422 9.506C20.4739 7.15826 17.0265 4 12 4C6.97347 4 3.52606 7.15826 1.65778 9.506C0.481826 10.9837 0.481825 13.0163 1.65778 14.494C3.52606 16.8417 6.97346 20 12 20C17.0265 20 20.4739 16.8417 22.3422 14.494Z"
            fill="#777E91"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 11.9716 10.0006 11.9434 10.0018 11.9153C10.1577 11.9701 10.3253 12 10.5 12C11.3284 12 12 11.3284 12 10.5C12 10.3253 11.9701 10.1577 11.9153 10.0018C11.9434 10.0006 11.9716 10 12 10C13.1046 10 14 10.8954 14 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            fill="#777E91"
        />
    </svg>
);
