import React from "react";
import Wrapper from "./Downloads.styled";
import DownloadBox from "./DownloadBox";
import { downloadList } from "../../utils";

const Downloads = () => {
  return (
    <Wrapper className="text-center">
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      {downloadList.map((item, idx) => (
        <DownloadBox key={item.title + idx} {...item} />
      ))}
    </Wrapper>
  );
};

export default Downloads;
