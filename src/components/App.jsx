import { AdviceBox } from "./AdviceBox";
import { FetchAdvice } from "./FetchAdvice";

function App() {
  const { adviceSlip, isLoading, error, getNewAdvice } = FetchAdvice();
  const { id, advice } = adviceSlip;

  return (
    <section className="flex items-center justify-center">
      <AdviceBox
        id={id}
        advice={advice}
        isLoading={isLoading}
        error={error}
        onGetNewAdvice={getNewAdvice}
      />
    </section>
  );
}

export default App;
