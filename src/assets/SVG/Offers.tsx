import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Offers = props => {
  return (
    <Svg
      width={props?.params?.width ? props?.params?.width : 23}
      height={props?.params?.height ? props?.params?.height : 22}
      strokeWidth={2}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.52269 14.5775L7.433 19.4878C8.40424 20.4562 9.71982 21 11.0913 21C12.4629 21 13.7785 20.4562 14.7497 19.4878L19.5083 14.7293C20.4766 13.758 21.0204 12.4424 21.0204 11.0709C21.0204 9.69938 20.4766 8.3838 19.5083 7.41256L14.5871 2.51309C14.0783 2.00288 13.4681 1.60514 12.7959 1.3456C12.1237 1.08606 11.4045 0.970501 10.6849 1.00639L5.2651 1.26654C3.09719 1.3641 1.3737 3.08758 1.2653 5.24465L1.00516 10.6644C0.940118 12.1278 1.49293 13.5477 2.52269 14.5775Z"
        stroke="#435363"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.30016 11.0003C9.01886 11.0003 9.70813 10.7148 10.2163 10.2066C10.7245 9.69843 11.01 9.00916 11.01 8.29045C11.01 7.57175 10.7245 6.88248 10.2163 6.37427C9.70813 5.86607 9.01886 5.58057 8.30016 5.58057C7.58145 5.58057 6.89218 5.86607 6.38398 6.37427C5.87578 6.88248 5.59027 7.57175 5.59027 8.29045C5.59027 9.00916 5.87578 9.69843 6.38398 10.2066C6.89218 10.7148 7.58145 11.0003 8.30016 11.0003Z"
        stroke="#F6B221"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default Offers;