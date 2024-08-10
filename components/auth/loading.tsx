import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
