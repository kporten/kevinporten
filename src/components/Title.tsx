type TitleProps = {
  primary: string;
  secondary: string;
};

const Title: React.FC<TitleProps> = ({ primary, secondary }) => (
  <h1 className="flex flex-col items-center text-center text-4xl leading-tight lg:flex-row lg:divide-x-2 lg:divide-trueGray-500">
    <span className="lg:pr-4 font-bold">{primary}</span>
    <span className="lg:pl-4 text-2xl text-trueGray-500 lg:text-4xl">
      {secondary}
    </span>
  </h1>
);

export default Title;
