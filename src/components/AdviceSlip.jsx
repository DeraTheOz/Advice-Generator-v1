export function AdviceSlip({ id, advice }) {
  return (
    <>
      <h3 className="mb-4 text-xs font-bold uppercase text-neonGreen">
        Advice #{id}
      </h3>
      <p>"{advice}"</p>
    </>
  );
}
