import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [conversionStatus, setConversionStatus] = useState("Not started");

  useEffect(() => {
    const convertYamlToJson = async () => {
      const response = await fetch("/api/jsonmd");
      if (response.ok) {
        setConversionStatus("Conversion complete!");
      } else {
        setConversionStatus("Conversion failed!");
      }
    };

    convertYamlToJson();
  }, []);

  return (
    <>
      <div style={{ color: "var(--800)", background: conversionStatus === "Conversion failed!" ? "var(--C001)" : conversionStatus === "Conversion complete!" ? "var(--C009)" : conversionStatus === "Not started" ? "var(--C001)" : "transparent" }} className="w-full max-w-md  flex items-center justify-center rounded-[1rem] h-[3rem] mx-auto flex-row transition ease-in-out delay-150  duration-400">
        <div className="flex">{conversionStatus}</div>
      </div>
      <Link className="justify-center items-center flex w-full mt-[1rem]" href={"/"}>
        <div className="heroButton h-[2.75rem] max-w-md w-full relative overflow-hidden text-xl">
          <button className="ButtomText">
            <div className="flex justify-center items-center px-[2rem]">
              <div className="justify-center items-center flex gap-[2rem] w-full">
                <div className="flex text-center">Go Back</div>
              </div>
            </div>
          </button>
        </div>
      </Link>
    </>
  );
}
