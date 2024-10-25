import Button from "@/components/Button";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button bg_color="orange" f_color="green" text="Home Button"/>
      <Image
      src="https://m.media-amazon.com/images/S/pv-target-images/81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851._SX1080_FMjpg_.jpg"
      alt="profile-picture"
      width={300}
      height={300}
      />

    </>
  );
}
