import { AdviceSlip } from "./AdviceSlip";
import { Spinner } from "./Spinner";
import { Error } from "./Error";

export function AdviceBox({ id, advice, isLoading, error, onGetNewAdvice }) {
  return (
    <div className="relative flex flex-col items-center justify-between max-w-sm px-4 py-8 text-center transition-all min-h-60 rounded-xl bg-darkGrayishBlue">
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <AdviceSlip id={id} advice={advice} />
      )}

      <picture className="mt-6 mb-2">
        <source
          srcSet="./images/pattern-divider-mobile.svg"
          type="image/svg+xml"
          media="(max-width: 767px)"
        />
        <source
          srcSet="./images/pattern-divider-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 768px)"
        />
        <img src="./images/pattern-divider-desktop.svg" alt="divider" />
      </picture>

      <button
        type="button"
        onClick={onGetNewAdvice}
        disabled={isLoading}
        className="hover:shadow-3xl absolute translate-x-[-50%] translate-y-[50%] transition-all bg-none border-0 w-[55px] h-[55px] bg-neonGreen rounded-full flex items-center justify-center bottom-0 left-2/4 "
      >
        <img src="./images/icon-dice.svg" alt="dice icon" />
      </button>
    </div>
  );
}
