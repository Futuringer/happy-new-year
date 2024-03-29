type Props = {
  className?: string;
};

export function TwoImage({ className }: Props): JSX.Element {
  return (
    <svg
      className={className}
      width="340"
      height="450"
      viewBox="0 0 340 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_302_6)">
        <path
          d="M164.452 2.9986C143.128 2.9986 122.012 6.70568 102.311 13.9082C82.6092 21.1107 64.7082 31.6675 49.6295 44.976C34.5507 58.2845 22.5896 74.0839 14.4291 91.4723C6.26853 108.861 2.06836 127.497 2.06836 146.318L164.452 146.318L164.452 2.9986Z"
          fill="#EFD84F"
        />
        <path
          d="M2 297.385C2 278.564 6.20018 259.927 14.3607 242.539C22.5213 225.151 34.4824 209.351 49.5611 196.043C64.6398 182.734 82.5409 172.177 102.242 164.975C121.943 157.772 143.059 154.065 164.384 154.065L164.384 297.385L2 297.385Z"
          fill="#F5E5C0"
        />
        <path
          d="M334.734 449.68C334.734 411.669 317.626 375.215 287.173 348.338C256.72 321.46 215.417 306.36 172.351 306.36L172.351 449.68L334.734 449.68Z"
          fill="#CF5629"
        />
        <path
          d="M166.081 449.042L53.0583 449.584C25.7982 449.715 3.56359 427.722 3.39582 400.462L2.81754 306.5L115.84 305.958C143.1 305.827 165.335 327.82 165.503 355.08L166.081 449.042Z"
          fill="#7384B3"
        />
        <path
          d="M173.231 2.00003C217.461 2.00003 259.879 17.5078 291.154 45.1119C322.43 72.716 340 110.155 340 149.193C340 188.231 322.43 225.671 291.154 253.275C259.879 280.879 217.461 296.387 173.231 296.387L173.231 149.193L173.231 2.00003Z"
          fill="#7DB890"
        />
      </g>
      <defs>
        <clipPath id="clip0_302_6">
          <rect width="340" height="450" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
