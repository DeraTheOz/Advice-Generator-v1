import { useEffect, useState } from "react";

export function FetchAdvice() {
  const [adviceSlip, setAdviceSlip] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    async function fetchAdvice() {
      try {
        setIsloading(true);
        setError("");

        const response = await fetch("https://api.adviceslip.com/advice", {
          cache: "no-cache",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Unable to fetch advice");

        const data = await response.json();

        if (mounted) {
          setAdviceSlip(data.slip);
          setError("");
        }
      } catch (err) {
        if (mounted) {
          const errorMessage =
            err.name === "AbortError"
              ? "Request timed out, try again"
              : "Unable to fetch advice";
          setError(errorMessage);
        }
      } finally {
        if (mounted) {
          setIsloading(false);
        }
      }
    }

    fetchAdvice();

    return () => {
      mounted = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [trigger]);

  const getNewAdvice = () => setTrigger((count) => count + 1);

  return { adviceSlip, isLoading, error, getNewAdvice };
}
