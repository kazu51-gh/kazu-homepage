import { TitleAndDescription } from "@/types/pageHeadingType";
import { FC } from "react";

const PageHeading: FC<TitleAndDescription> = ({ title, description }) => {
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default PageHeading;
