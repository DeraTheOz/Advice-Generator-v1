export function Error({ error }) {
  return (
    <div className="mt-14">
      <p className="text-red-500 text-sm">{error} : try again</p>
    </div>
  );
}
