import Image from "next/image";
interface chatData {
  userName: string;
  createdAt: string;
  
}


function NicknameInput() {
  return (
    <div className="flex flex-row">
      <label>nickname</label>
      <input type="text"></input>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Novel Chat</h1>
      <NicknameInput />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );
}
