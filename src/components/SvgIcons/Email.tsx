type fillProps = {
  fill: string;
};

const Email = (props: fillProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.999 18"
      id="email"
      width="23.999"
      height="18"
      fill={props.fill}
    >
      <g data-name="Layer 2">
        <path d="M0 2.116v-0.616A1.499 1.499 0 0 1 1.499 0h20.998a1.499 1.499 0 0 1 1.5 1.499v0.616l-11.999 7.5zm12.397 9.021a0.756 0.756 0 0 1 -0.796 0L0 3.884v12.614A1.499 1.499 0 0 0 1.499 18h20.998a1.499 1.499 0 0 0 1.499 -1.499V3.884z" />
      </g>
    </svg>
  );
};

export default Email;
