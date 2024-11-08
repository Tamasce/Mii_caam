import Prenotazione from "@/components/Prenotazione";






export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center flex-col bg-neutral-50 overflow-clip"> 
      <div className=" h-full w-full">
        
        <Prenotazione />
        
      </div>
    </main>
  );
}
