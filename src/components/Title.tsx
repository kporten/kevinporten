type TitleProps = {
  primary: string;
  secondary: string;
};

const Title: React.FC<TitleProps> = ({ primary, secondary }) => (
  <h1 className="flex flex-col items-center text-4xl leading-tight text-center lg:flex-row lg:divide-x-2 lg:divide-trueGray-500">
    <span className="font-bold lg:pr-4">{primary}</span>
    <span className="text-2xl lg:pl-4 text-trueGray-500 lg:text-4xl">
      {secondary}
    </span>
  </h1>
);

export default Title;
