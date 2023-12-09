import ButtonMain from "../components/buttonMain";

export default function Home() {
  return (
    <div className=" w-full space-y-[1rem]">
      <ButtonMain LINK={"/jsonmd"} FROM={"JSON"} TO={"Markdown"} />
      <ButtonMain LINK={"/mdjson"} FROM={"Markdown"} TO={"JSON"} />
    </div>
  );
}
