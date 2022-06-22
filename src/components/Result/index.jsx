import ResultBar from "../ResultBar";

const Result = ({ data }) => {
  return (
    <>
      <ResultBar score={data.GAD} value="Sangat Berat">
        Generalized Anxiety Disorder
      </ResultBar>
      <ResultBar score={data.OCD} value="Sangat Berat">
        Obsessive Compulsive Disorder
      </ResultBar>
      <ResultBar score={data.PAD} value="Sangat Berat">
        Panic Disorder
      </ResultBar>
      <ResultBar score={data.PTSD} value="Sangat Berat">
        Post Traumatic Stress Disorder
      </ResultBar>
      <ResultBar score={data.SAD} value="Sangat Berat">
        Social Anxiety Disorder
      </ResultBar>
    </>
  );
};

export default Result;
