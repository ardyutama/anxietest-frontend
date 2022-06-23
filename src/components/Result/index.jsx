import ResultBar from "../ResultBar";

const Result = ({ data, score }) => {
  return (
    <>
      <ResultBar
        data={data.GAD}
        score={score.GAD}
        title={"General Anxiety Disorder"}
      >
        Generalized Anxiety Disorder
      </ResultBar>
      <ResultBar
        data={data.OCD}
        score={score.OCD}
        title={"Obsessive Compulsive Disorder"}
      >
        Obsessive Compulsive Disorder
      </ResultBar>
      <ResultBar data={data.PAD} score={score.PAD} title={"Panic Disorder"}>
        Panic Disorder
      </ResultBar>
      <ResultBar
        data={data.PTSD}
        score={score.PTSD}
        title={"Post Traumatic Stress Disorder"}
      >
        Post Traumatic Stress Disorder
      </ResultBar>
      <ResultBar
        data={data.SAD}
        score={score.SAD}
        title={"Social Anxiety Disorder"}
      >
        Social Anxiety Disorder
      </ResultBar>
    </>
  );
};

export default Result;
