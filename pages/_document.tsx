import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <div className="flex justify-center items-center container flex-col mx-auto  ">
          <Link href="/" className="flex w-[200px] h-[200px] relative overflow-hidden">
            <Image draggable={false} sizes="(max-width: 512)  100vw, (max-width: 512) 50vw, 33vw" src="/logo.png" fill priority style={{ objectFit: "contain" }} alt="JSON Markdown Tool Logo" className="h-auto max-w-full object-contain" />
          </Link>
        </div>
        <Main />
        <NextScript />
        <div className=" flex mt-[3rem] w-full space-y-[1rem] justify-center items-center">
          <div className="flex justify-center items-center space-x-[0.5rem]">
            <div>Developed by</div>
            <Link href="https://zaher.design">
              <img
                className="h-[2rem] flex"
                src="https://img.shields.io/badge/zaher.desgin-fbfcfc?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2MiA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDEiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMzMuMjcxNCA0OC41MTYxSDQuNjM1NzRDMTAuMjkzOSA1Ny44MTQxIDIwLjM3NDEgNjQgMzEuODY2OSA2NEMzMi41MDYzIDY0IDMzLjE0MDMgNjMuOTgwOCAzMy43NjkgNjMuOTQyNUM0My40OTA4IDYzLjM2MjIgNDMuMDA5MiA0OC41MTYxIDMzLjI3MTQgNDguNTE2MVoiIGZpbGw9IiNGQkZDRkMiLz4KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNMzAuMzYzNSAxNS40ODM5SDU3LjM2NDRDNTIuMDI5OCA2LjE4ODYyIDQyLjUyNTkgMCAzMS42OTAyIDBDMzEuMDg3NCAwIDMwLjQ4OTYgMC4wMTkxNTk4IDI5Ljg5NjggMC4wNTc0Nzk1QzIwLjczMDkgMC42Mzc3NDggMjEuMTgyNCAxNS40ODM5IDMwLjM2MzUgMTUuNDgzOVoiIGZpbGw9IiNGQkZDRkMiLz4KPHBhdGggaWQ9IlZlY3Rvcl8zIiBkPSJNMC44MzM4MDcgMjMuODc5OUMwLjg0NDE1NSAyMy44MzM5IDAuODU3MDkgMjMuNzg3OSAwLjg2NzQzNyAyMy43NDE5SDQ5LjczNDVDNTcuMzM0OSAyMy43NDE5IDYyLjk1MzggMzAuNzYyMSA2MS4xNjYyIDM4LjA1NTZDNjEuMTU1OCAzOC4xMDE2IDYxLjE0MjkgMzguMTQ3NiA2MS4xMzI2IDM4LjE5MzZIMTIuMjY1NUM0LjY2NTA1IDM4LjE5MzYgLTAuOTUzNzYxIDMxLjE3NiAwLjgzMzgwNyAyMy44Nzk5WiIgZmlsbD0iI0ZCRkNGQyIvPgo8L2c+Cjwvc3ZnPgo=&style=for-the-badge&labelColor=%2308090E&color=%23fbfcfc&label=website"
              />
            </Link>
          </div>
        </div>
      </body>
    </Html>
  );
}
